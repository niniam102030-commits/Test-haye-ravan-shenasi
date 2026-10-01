import React, { useState } from 'react';
import { ClientProfile, TestDefinition } from '../types';
import { getClients, saveClient, setActiveClientId } from '../utils/clientStorage';
import {
  User,
  UserPlus,
  Check,
  X,
  Sparkles,
  Calendar,
  Layers,
  ArrowLeft,
} from 'lucide-react';

interface ProfileSelectModalProps {
  test: TestDefinition;
  onSelectProfile: (profile: ClientProfile) => void;
  onClose: () => void;
}

export const ProfileSelectModal: React.FC<ProfileSelectModalProps> = ({
  test,
  onSelectProfile,
  onClose,
}) => {
  const [profiles, setProfiles] = useState<ClientProfile[]>(getClients());
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    profiles.length > 0 ? profiles[0].id : ''
  );
  const [isCreatingNew, setIsCreatingNew] = useState(profiles.length === 0);

  // New Profile Form State
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newGender, setNewGender] = useState<'male' | 'female' | 'other'>('male');
  const [newNotes, setNewNotes] = useState('');

  const handleCreateAndSelect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newProfile: ClientProfile = {
      id: `profile_${Date.now()}`,
      fileCode: `P-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newName.trim(),
      age: newAge ? parseInt(newAge, 10) : undefined,
      gender: newGender,
      clinicalNotes: newNotes.trim() || undefined,
      createdAt: new Date().toLocaleDateString('fa-IR'),
    };

    saveClient(newProfile);
    setActiveClientId(newProfile.id);
    onSelectProfile(newProfile);
  };

  const handleConfirmExisting = () => {
    const chosen = profiles.find((p) => p.id === selectedProfileId);
    if (chosen) {
      setActiveClientId(chosen.id);
      onSelectProfile(chosen);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl p-6 border border-slate-200 dark:border-slate-800 text-right relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs mb-1">
            <User size={15} />
            <span>مشخصات آزمون‌دهنده</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            چه کسی در حال آزمون دادن است؟
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            نتایج آزمون <span className="font-semibold text-slate-700 dark:text-slate-300">«{test.persianTitle}»</span> به نام این فرد ثبت و بایگانی خواهد شد.
          </p>
        </div>

        {/* Tabs: Existing vs New */}
        {profiles.length > 0 && (
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 text-xs font-semibold">
            <button
              onClick={() => setIsCreatingNew(false)}
              className={`flex-1 py-2 rounded-xl transition-all ${
                !isCreatingNew
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              انتخاب از پروفایل‌های موجود ({profiles.length})
            </button>
            <button
              onClick={() => setIsCreatingNew(true)}
              className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1 transition-all ${
                isCreatingNew
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <UserPlus size={13} />
              <span>+ فرد جدید</span>
            </button>
          </div>
        )}

        {/* Existing Profiles List */}
        {!isCreatingNew && profiles.length > 0 && (
          <div className="flex-1 overflow-y-auto space-y-2 mb-5 pr-1 max-h-60">
            {profiles.map((p) => {
              const isSelected = selectedProfileId === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProfileId(p.id)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/30'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                        {p.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {p.gender === 'female' ? 'خانم' : p.gender === 'male' ? 'آقا' : ''}{' '}
                        {p.age ? `• ${p.age} ساله` : ''} {p.clinicalNotes ? `• ${p.clinicalNotes}` : ''}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Create New Profile Inline Form */}
        {isCreatingNew && (
          <form onSubmit={handleCreateAndSelect} className="space-y-3.5 mb-5 flex-1 overflow-y-auto pr-1">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                نام و نام خانوادگی <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="مثلاً: علی رضایی، مریم اکبری..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  سن (اختیاری)
                </label>
                <input
                  type="number"
                  min="5"
                  max="120"
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  placeholder="مثلاً: ۲۸"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  جنسیت
                </label>
                <select
                  value={newGender}
                  onChange={(e) => setNewGender(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="male">آقا</option>
                  <option value="female">خانم</option>
                  <option value="other">نامشخص</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                نسبت یا توضیحات (اختیاری)
              </label>
              <input
                type="text"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                placeholder="مثلاً: خودم، همکار، عضو خانواده، مراجع جلسه اول..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <UserPlus size={15} />
              <span>ذخیره پروفایل و شروع آزمون</span>
            </button>
          </form>
        )}

        {/* Existing Profile Action Button */}
        {!isCreatingNew && profiles.length > 0 && (
          <button
            onClick={handleConfirmExisting}
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>
              ادامه آزمون با پروفایل «
              {profiles.find((p) => p.id === selectedProfileId)?.name || 'انتخاب‌شده'}»
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
