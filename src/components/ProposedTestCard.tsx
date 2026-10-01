import React from 'react';
import { ProposedTest } from '../types';
import { Sparkles, Clock, ListChecks } from 'lucide-react';

interface ProposedTestCardProps {
  test: ProposedTest;
  onApprove: (id: string) => void;
}

export const ProposedTestCard: React.FC<ProposedTestCardProps> = ({ test, onApprove }) => {
  return (
    <div className="glass-card rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col h-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          <Sparkles size={12} />
          {test.badge}
        </span>
        <div className="text-[10px] font-semibold tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
          در دست توسعه
        </div>
      </div>

      <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1 relative z-10">{test.persianTitle}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 relative z-10">{test.title}</p>
      
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1 relative z-10">
        {test.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-5 relative z-10">
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-md">
          <ListChecks size={14} />
          <span>{test.questionCount} سوال</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-md">
          <Clock size={14} />
          <span>{test.durationMinutes} دقیقه</span>
        </div>
      </div>

      <button 
        onClick={() => onApprove(test.id)}
        className="w-full relative z-10 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold py-3 rounded-xl text-sm transition-colors flex justify-center items-center gap-2"
      >
        <span>تایید و اضافه کردن به نرم‌افزار</span>
      </button>
    </div>
  );
};
