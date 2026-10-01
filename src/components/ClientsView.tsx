import React, { useState, useEffect } from 'react';
import { ClientProfile, TestResult } from '../types';
import {
  getClients,
  saveClient,
  deleteClient,
  getActiveClientId,
  setActiveClientId,
  getResultsForClient,
} from '../utils/clientStorage';
import {
  UserPlus,
  Users,
  Trash2,
  CheckCircle2,
  Calendar,
  FileText,
  TrendingDown,
  TrendingUp,
  Activity,
  Plus,
  X,
} from 'lucide-react';

interface ClientsViewProps {
  onViewResult: (result: TestResult) => void;
}

export const ClientsView: React.FC<ClientsViewProps> = ({ onViewResult }) => {
  const [clients, setClients] = useState<ClientProfile[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(null);
  const [clientResults, setClientResults] = useState<TestResult[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [fileCode, setFileCode] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [education, setEducation] = useState('');
  const [notes, setNotes] = useState('');

  const refresh = () => {
    const list = getClients();
    setClients(list);
    const currActive = getActiveClientId();
    setActiveId(currActive);

    if (currActive) {
      const found = list.find((c) => c.id === currActive);
      setSelectedClient(found || list[0] || null);
    } else if (list.length > 0) {
      setSelectedClient(list[0]);
    } else {
      setSelectedClient(null);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (selectedClient) {
      setClientResults(getResultsForClient(selectedClient.id));
    } else {
      setClientResults([]);
    }
  }, [selectedClient]);

  const handleSetActive = (id: string) => {
    setActiveClientId(id);
    setActiveId(id);
    const found = clients.find((c) => c.id === id);
    if (found) setSelectedClient(found);
  };

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newClient: ClientProfile = {
      id: `client_${Date.now()}`,
      fileCode: fileCode.trim() || `CL-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      age: age ? Number(age) : undefined,
      gender,
      education: education.trim() || undefined,
      clinicalNotes: notes.trim() || undefined,
      createdAt: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    saveClient(newClient);
    setActiveClientId(newClient.id);
    setShowAddModal(false);
    // Reset form
    setName('');
    setFileCode('');
    setAge('');
    setEducation('');
    setNotes('');
    refresh();
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`آیا از حذف پرونده «${name}» اطمینان دارید؟`)) {
      deleteClient(id);
      refresh();
    }
  };

  // Group repeated tests by testId for longitudinal tracking
  const testsGrouped: Record<string, TestResult[]> = {};
  clientResults.forEach((r) => {
    if (!testsGrouped[r.testId]) testsGrouped[r.testId] = [];
    testsGrouped[r.testId].push(r);
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Users size={22} className="text-indigo-600 dark:text-indigo-400" />
            <span>پرونده‌های الکترونیک مراجعین</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            مدیریت پروفایل مراجعین، سوابق ارزیابی و نمودار پیشرفت درمان در طول زمان
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all self-start"
        >
          <UserPlus size={16} />
          <span>تشکیل پرونده جدید</span>
        </button>
      </div>

      {/* Main Grid: Client List on Left/Top, Client Details on Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Clients List Sidebar */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            لیست مراجعین ({clients.length})
          </h3>

          {clients.length === 0 ? (
            <div className="glass-card rounded-2xl p-6 text-center border border-dashed border-slate-300 dark:border-slate-800">
              <Users size={32} className="mx-auto text-slate-300 dark:text-slate-600 mb-2" />
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">هنوز پرونده‌ای ثبت نشده است.</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                اولین پرونده را ثبت کنید
              </button>
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {clients.map((c) => {
                const isSelected = selectedClient?.id === c.id;
                const isActive = activeId === c.id;

                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedClient(c)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 shadow-sm'
                        : 'glass-card border-slate-200/70 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 dark:text-slate-100">
                          <span>{c.name}</span>
                          {isActive && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                              فعال
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">کد: {c.fileCode}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {!isActive && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSetActive(c.id);
                            }}
                            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-emerald-600 text-xs"
                            title="تنظیم به عنوان مراجع فعال برای آزمون‌های بعدی"
                          >
                            <CheckCircle2 size={16} />
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(c.id, c.name);
                          }}
                          className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600"
                          title="حذف پرونده"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Client Detailed Profile & Test Archive */}
        <div className="md:col-span-2 space-y-6">
          {selectedClient ? (
            <>
              {/* Profile Overview Card */}
              <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      پرونده: {selectedClient.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                      <span>کد پرونده: {selectedClient.fileCode}</span>
                      <span>•</span>
                      <span>تاریخ ثبت: {selectedClient.createdAt}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSetActive(selectedClient.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeId === selectedClient.id
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {activeId === selectedClient.id ? '✓ مراجع فعال آزمون' : 'انتخاب به عنوان مراجع فعال'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="text-slate-400 block mb-0.5">سن:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {selectedClient.age ? `${selectedClient.age} سال` : 'ثبت نشده'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="text-slate-400 block mb-0.5">جنسیت:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {selectedClient.gender === 'male' ? 'مرد' : selectedClient.gender === 'female' ? 'زن' : 'سایر'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="text-slate-400 block mb-0.5">تحصیلات:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {selectedClient.education || 'ثبت نشده'}
                    </span>
                  </div>
                </div>

                {selectedClient.clinicalNotes && (
                  <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-xs">
                    <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">
                      یادداشت تشخیصی مشاور:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedClient.clinicalNotes}
                    </p>
                  </div>
                )}
              </div>

              {/* Longitudinal Progress Tracking Section (Before-After comparisons) */}
              <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-1.5">
                      <Activity size={17} className="text-indigo-600 dark:text-indigo-400" />
                      <span>پایش پیشرفت درمان در طول زمان (Longitudinal Tracking)</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      مقایسه نتایج تکرار آزمون‌ها برای سنجش میزان اثربخشی مداخله روان‌شناختی
                    </p>
                  </div>
                </div>

                {Object.keys(testsGrouped).length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-6">
                    هنوز آزمونی برای این مراجع ثبت نشده است. با انجام تست‌ها، سوابق و نمودار روند تغییرات در اینجا نمایش می‌یابد.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(testsGrouped).map(([testId, results]) => {
                      const hasMultiple = results.length > 1;
                      const latest = results[0];
                      const previous = results[results.length - 1];

                      return (
                        <div
                          key={testId}
                          className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                              {latest.testTitle} ({results.length} بار اجرا)
                            </span>
                            <span className="text-[11px] text-slate-400">آخرین: {latest.date}</span>
                          </div>

                          {hasMultiple ? (
                            <div className="space-y-2 mt-3 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                                مقایسه ارزیابی اولیه ({previous.date}) با آخرین جلسه ({latest.date}):
                              </span>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                {latest.factors.slice(0, 4).map((latestFactor) => {
                                  const prevFactor = previous.factors.find((f) => f.key === latestFactor.key);
                                  const delta = prevFactor ? latestFactor.percentage - prevFactor.percentage : 0;
                                  const isImproved = latest.category === 'clinical' ? delta < 0 : delta > 0;

                                  return (
                                    <div
                                      key={latestFactor.key}
                                      className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                                    >
                                      <div className="flex justify-between text-[11px] font-medium mb-1">
                                        <span>{latestFactor.name}</span>
                                        <span className="font-bold">{latestFactor.percentage}%</span>
                                      </div>
                                      <div className="flex items-center justify-between text-[10px]">
                                        <span className="text-slate-400">تغییر نسبت به قبل:</span>
                                        <span
                                          className={`font-bold flex items-center gap-0.5 ${
                                            delta === 0
                                              ? 'text-slate-400'
                                              : isImproved
                                              ? 'text-emerald-500'
                                              : 'text-amber-500'
                                          }`}
                                        >
                                          {delta > 0 ? `+${delta}%` : `${delta}%`}
                                          {delta > 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between text-xs mt-2">
                              <span className="text-slate-500">نتیجه: {latest.primaryResult.title}</span>
                              <button
                                onClick={() => onViewResult(latest)}
                                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                              >
                                مشاهده گزارش
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* All Saved Test Results Archive */}
              <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-3">
                  آرشیو آزمون‌های انجام‌شده ({clientResults.length})
                </h4>

                <div className="space-y-2.5">
                  {clientResults.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => onViewResult(res)}
                      className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                          <FileText size={18} />
                        </div>
                        <div>
                          <h5 className="font-bold text-xs md:text-sm text-slate-800 dark:text-slate-200">
                            {res.testTitle}
                          </h5>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Calendar size={12} /> {res.date} • {res.primaryResult.title}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                        مشاهده ⟵
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="glass-card rounded-3xl p-12 text-center border border-slate-200/80 dark:border-slate-800 text-slate-400 text-sm">
              لطفاً برای مشاهده پرونده و سوابق، یکی از مراجعین را انتخاب کنید یا پرونده جدید ایجاد نمایید.
            </div>
          )}
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="font-bold text-base text-slate-800 dark:text-white flex items-center gap-2">
                <UserPlus size={18} className="text-indigo-600" />
                <span>تشکیل پرونده بالینی مراجع</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateClient} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                  نام و نام خانوادگی / نام مستعار *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: علی رضایی یا مراجع شماره ۱۲"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                    کد پرونده
                  </label>
                  <input
                    type="text"
                    value={fileCode}
                    onChange={(e) => setFileCode(e.target.value)}
                    placeholder="اختیاری (مثال: CL-104)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                    سن
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                    placeholder="مثال: ۲۸"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                    جنسیت
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500 text-slate-800 dark:text-slate-200"
                  >
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                    تحصیلات
                  </label>
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="مثال: کارشناسی روان‌شناسی"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">
                  یادداشت‌های محرمانه مشاور / علت مراجعه
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="نکات اولیه، اهداف درمانی یا شکایت عمده مراجع..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-indigo-500 resize-none text-slate-800 dark:text-slate-200"
                ></textarea>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20"
                >
                  ذخیره پرونده
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
