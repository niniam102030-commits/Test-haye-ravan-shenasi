import React, { useState } from 'react';
import { TestResult } from '../types';
import { getAllResults, deleteTestResult } from '../utils/clientStorage';
import { History, Trash2, ArrowLeft, Copy, Check, FileText } from 'lucide-react';
import { generateFullCounselorTextReport } from '../utils/reportExporter';

interface Props {
  onViewResult: (result: TestResult) => void;
}

export const MyHistoryView: React.FC<Props> = ({ onViewResult }) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<'summary' | 'full' | null>(null);

  React.useEffect(() => {
    const all = getAllResults();
    setResults(all.filter(r => !r.clientId || r.clientId === 'self'));
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('آیا از حذف این نتیجه مطمئن هستید؟')) {
      deleteTestResult(id);
      setResults(results.filter(r => r.id !== id));
    }
  };

  const handleCopySummary = (r: TestResult, e: React.MouseEvent) => {
    e.stopPropagation();
    let summaryText = 'نتیجه تست ' + r.testTitle + '\n';
    summaryText += 'نام: ' + (r.clientName || 'نامشخص') + '\n';
    summaryText += 'تاریخ: ' + r.date + '\n';
    summaryText += 'نتیجه اصلی: ' + r.primaryResult.title + ' (' + (r.primaryResult.code || '') + ')\n\n';
    summaryText += 'شاخص‌ها:\n';
    r.factors.forEach((f) => {
      summaryText += ' - ' + f.name + ': ' + f.percentage + '% (' + f.levelText + ')\n';
    });

    navigator.clipboard.writeText(summaryText);
    setCopiedId(r.id);
    setCopiedType('summary');
    setTimeout(() => { setCopiedId(null); setCopiedType(null); }, 2000);
  };

  const handleCopyFull = (r: TestResult, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = generateFullCounselorTextReport(r);
    navigator.clipboard.writeText(text);
    setCopiedId(r.id);
    setCopiedType('full');
    setTimeout(() => { setCopiedId(null); setCopiedType(null); }, 2000);
  };

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-slate-500 dark:text-slate-400">
        <History size={48} className="mb-4 opacity-50" />
        <p className="font-medium text-sm">هیچ تستی در تاریخچه شما ثبت نشده است.</p>
        <p className="text-xs opacity-70 mt-2">نتایج تست‌هایی که کامل می‌کنید اینجا نمایش داده می‌شوند.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-6">
        <History size={20} className="text-indigo-600 dark:text-indigo-400" />
        <span>تاریخچه نتایج من</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((r) => (
          <div
            key={r.id}
            onClick={() => onViewResult(r)}
            className="glass-card p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-sm cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">{r.testTitle}</h3>
                  <p className="text-[10px] text-slate-500 mt-1 font-mono">{r.date}</p>
                </div>
                <button 
                  onClick={(e) => handleDelete(r.id, e)}
                  className="text-slate-400 hover:text-rose-500 transition-colors p-1 bg-white/50 dark:bg-black/20 rounded-lg"
                  title="حذف نتیجه"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-3 mb-4">
                <span className="text-[10px] text-indigo-500 dark:text-indigo-400 font-bold uppercase block mb-1">نتیجه اصلی</span>
                <span className="font-bold text-indigo-700 dark:text-indigo-300 text-sm">{r.primaryResult.title}</span>
                {r.primaryResult.code && (
                  <span className="inline-block mr-2 px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded text-[10px] font-mono">
                    {r.primaryResult.code}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex gap-2">
                <button
                  onClick={(e) => handleCopySummary(r, e)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold transition-colors"
                >
                  {copiedId === r.id && copiedType === 'summary' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>کپی خلاصه</span>
                </button>
                <button
                  onClick={(e) => handleCopyFull(r, e)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold transition-colors"
                >
                  {copiedId === r.id && copiedType === 'full' ? <Check size={14} className="text-emerald-500" /> : <FileText size={14} />}
                  <span>کپی کامل</span>
                </button>
              </div>
              <div className="flex items-center justify-center text-[11px] text-indigo-600 dark:text-indigo-400 font-bold py-2 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                <span>مشاهده داشبورد</span>
                <ArrowLeft size={14} className="mr-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
