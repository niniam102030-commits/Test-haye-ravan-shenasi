import React from 'react';
import { TestDefinition, SavedDraft } from '../types';
import { Clock, ListChecks, Play, BookmarkCheck } from 'lucide-react';

interface TestCardProps {
  test: TestDefinition;
  draft?: SavedDraft | null;
  onStart: (id: string) => void;
}

export const TestCard: React.FC<TestCardProps> = ({ test, draft, onStart }) => {
  return (
    <div
      onClick={() => onStart(test.id)}
      className="glass-card rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col relative overflow-hidden group cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-all active:scale-[0.98]"
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${test.gradient} opacity-10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`}
      ></div>

      {draft && (
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 mb-3 self-start animate-pulse">
          <BookmarkCheck size={14} />
          <span>پیش‌نویس ذخیره‌شده ({draft.progressPercent}٪ پاسخ داده شده)</span>
        </div>
      )}

      <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1 relative z-10">
        {test.persianTitle}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 relative z-10">
        {test.title}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1 relative z-10">
        {test.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-5 relative z-10">
        <div className="flex items-center gap-1.5">
          <ListChecks size={14} className="text-slate-400" />
          <span>{test.questionCount} سوال</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-slate-400" />
          <span>{test.estimatedMinutes} دقیقه</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto relative z-10">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
          {test.category === 'clinical' ? 'غربالگری بالینی' : 'توسعه فردی و شغلی'}
        </span>
        <button
          className={`px-3 py-2 rounded-2xl bg-gradient-to-r ${test.gradient} text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform`}
        >
          <span>{draft ? 'ادامه آزمون' : 'شروع آزمون'}</span>
          <Play size={14} className="ml-0.5" fill="currentColor" />
        </button>
      </div>
    </div>
  );
};
