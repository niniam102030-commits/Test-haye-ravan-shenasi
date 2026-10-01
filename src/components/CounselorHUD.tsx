import React from 'react';
import { ShieldAlert, Info, TrendingUp, TrendingDown } from 'lucide-react';
import { Question } from '../types';

interface CounselorHUDProps {
  question: Question;
  isVisible: boolean;
}

export const CounselorHUD: React.FC<CounselorHUDProps> = ({ question, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-900/20 border border-amber-200/60 dark:border-amber-800/50 shadow-sm animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-2 mb-3 border-b border-amber-200/50 dark:border-amber-800/50 pb-2">
        <ShieldAlert size={18} className="text-amber-600 dark:text-amber-500" />
        <span className="font-bold text-sm text-amber-800 dark:text-amber-300">نگاه بالینی مشاور</span>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <div className="min-w-[80px] text-amber-700/80 dark:text-amber-400/80 font-medium text-xs mt-0.5">عامل هدف:</div>
          <div className="font-semibold text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-black/20 px-2 py-0.5 rounded text-xs">{question.factorTitle}</div>
        </div>

        <div className="flex items-start gap-2">
          <div className="min-w-[80px] text-amber-700/80 dark:text-amber-400/80 font-medium text-xs mt-0.5">جهت‌گیری:</div>
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 text-xs">
            {question.isReversed ? (
              <><TrendingDown size={14} className="text-red-500"/> معکوس (امتیازدهی منفی)</>
            ) : (
              <><TrendingUp size={14} className="text-emerald-500"/> مستقیم (امتیازدهی مثبت)</>
            )}
          </div>
        </div>

        <div className="flex items-start gap-2 bg-white/40 dark:bg-black/20 p-2 rounded-lg mt-2">
          <Info size={16} className="text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {question.counselorInsight.clinicalSignificance}
          </p>
        </div>
      </div>
    </div>
  );
};
