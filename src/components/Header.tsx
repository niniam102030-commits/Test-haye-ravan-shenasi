import React from 'react';
import { UserCircle, Shield, Moon, Sun, User } from 'lucide-react';
import { ClientProfile } from '../types';

interface HeaderProps {
  counselorMode: boolean;
  setCounselorMode: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeClient?: ClientProfile | null;
  onOpenClients?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  counselorMode,
  setCounselorMode,
  darkMode,
  setDarkMode,
  activeClient,
  onOpenClients,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between pt-safe">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-2xl text-white shadow-md shadow-indigo-600/30">
            <Shield size={20} />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-lg text-slate-800 dark:text-white tracking-tight leading-tight">
              PsychoTests Pro
            </h1>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              سامانه تخصصی ارزیابی روان‌سنجی و استعدادیابی
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Client Badge */}
          {activeClient && onOpenClients && (
            <button
              onClick={onOpenClients}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all max-w-[140px] sm:max-w-none truncate"
              title="مشاهده و تغییر مراجع فعال"
            >
              <User size={14} className="text-indigo-600 shrink-0" />
              <span className="truncate">{activeClient.name}</span>
            </button>
          )}

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title="تغییر تم تاریک / روشن"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Counselor Mode Toggle */}
          <button
            onClick={() => setCounselorMode(!counselorMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              counselorMode
                ? 'bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-700 shadow-xs'
                : 'bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
            }`}
          >
            <UserCircle size={15} />
            <span className="hidden sm:inline">{counselorMode ? 'حالت مشاور: فعال' : 'حالت مراجع'}</span>
            <span className="sm:hidden">{counselorMode ? 'مشاور' : 'مراجع'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
