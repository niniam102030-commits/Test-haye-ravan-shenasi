import React, { useState } from 'react';
import { TestResult, JobMatch } from '../types';
import { TestVisualizations } from './TestVisualizations';
import {
  Share2,
  Copy,
  Download,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  User,
  Calendar,
  Sparkles,
  ArrowRight,
  Briefcase,
  Flag,
  Zap,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { generateFullCounselorTextReport, downloadTextFile } from '../utils/reportExporter';
import { getLevelColor } from '../utils/scoring';
import { matchHollandJobs, matchMBTIJobs } from '../data/jobDatabase';

interface ResultDashboardProps {
  result: TestResult;
  onBackToHome: () => void;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = ({ result, onBackToHome }) => {
  const [showQuestionsList, setShowQuestionsList] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const radarData = result.factors.map((f) => ({
    label: f.name.length > 12 ? f.name.slice(0, 10) + '...' : f.name,
    value: f.score,
    max: f.maxScore,
  }));

  // Calculate Job Matches if applicable
  let jobMatches: JobMatch[] = [];
  if (result.testId === 'holland') {
    const sorted = [...result.factors].sort((a, b) => b.score - a.score);
    jobMatches = matchHollandJobs(sorted.map((f) => f.key));
  } else if (result.testId === 'mbti') {
    jobMatches = matchMBTIJobs(result.primaryResult.code);
  }

  const flaggedQuestions = result.detailedAnswers?.filter((a) => a.isFlagged) || [];

  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShareDirectly = async () => {
    let summaryText = `📊 نتیجه تست ${result.testTitle}\n`;
    summaryText += `👤 نام: ${result.clientName || 'نامشخص'}\n`;
    summaryText += `📅 تاریخ: ${result.date}\n`;
    summaryText += `🎯 نتیجه اصلی: ${result.primaryResult.title} (${result.primaryResult.code})\n\n`;
    summaryText += `شاخص‌ها:\n`;
    result.factors.forEach((f) => {
      summaryText += `▪️ ${f.name}: ${f.percentage}% (${f.levelText})\n`;
    });
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `نتیجه تست ${result.testTitle}`,
          text: summaryText,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
        return;
      } catch (e) {
        // Fallback
      }
    }
    navigator.clipboard.writeText(summaryText);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  const handleCopyFullReport = () => {
    const text = generateFullCounselorTextReport(result);
    navigator.clipboard.writeText(text);
    setCopiedType('full');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopySummaryOnly = () => {
    let summaryText = `📊 نتیجه آزمون ${result.testTitle}\n`;
    summaryText += `👤 مراجع: ${result.clientName || 'ثبت نشده'}\n`;
    summaryText += `📅 تاریخ: ${result.date}\n`;
    summaryText += `🎯 نتیجه شاخص: ${result.primaryResult.title} (${result.primaryResult.code})\n\n`;
    summaryText += `فاکتورها:\n`;
    result.factors.forEach((f) => {
      summaryText += `• ${f.name}: ${f.percentage}% (${f.levelText})\n`;
    });
    navigator.clipboard.writeText(summaryText);
    setCopiedType('summary');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownloadFile = () => {
    const text = generateFullCounselorTextReport(result);
    const safeTitle = result.testId.toUpperCase();
    const safeDate = result.date.replace(/[\/\s:]/g, '-');
    downloadTextFile(`پاسخنامه_${safeTitle}_${safeDate}.txt`, text);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24">
      {/* Header Back Button */}
      <button
        onClick={onBackToHome}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-semibold mb-6 transition-colors"
      >
        <ArrowRight size={16} />
        <span>بازگشت به منوی آزمون‌ها</span>
      </button>

      {/* Main Result Hero Card */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden mb-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Calendar size={14} />
            <span>{result.date}</span>
            {result.clientName && (
              <>
                <span>•</span>
                <User size={14} />
                <span>مراجع: {result.clientName}</span>
              </>
            )}
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            {result.category === 'clinical' ? 'ارزیابی بالینی' : 'توسعه فردی'}
          </span>
        </div>

        <div className="text-center py-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 font-black text-xl mb-3">
            <Sparkles size={20} />
            <span>{result.primaryResult.code}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">
            {result.primaryResult.title}
          </h1>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
            {result.primaryResult.subtitle}
          </p>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto text-justify">
            {result.primaryResult.summary}
          </p>
        </div>
      </div>

      {/* Sharing & Full Q&A Export Hub */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden text-right">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Share2 size={16} />
              <span>ارسال و اشتراک‌گذاری کامل سوالات و پاسخ‌ها</span>
            </div>
            <h2 className="text-lg font-bold text-white">ارسال پاسخ‌نامه به مشاور، دیگران یا پیام‌رسان‌ها</h2>
          </div>
        </div>

        <p className="text-xs text-indigo-200 leading-relaxed mb-6">
          می‌توانید تمامی سوالات این آزمون را به همراه پاسخ مشخصی که به هر سوال داده‌اید و تحلیل نتیجه، مستقیماً به پیام‌رسان‌ها (واتساپ، تلگرام، ایتا، بله) ارسال کنید، در قالب فایل متنی ذخیره نمایید یا در حافظه کپی کنید.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <button
            onClick={handleShareDirectly}
            className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs transition-all shadow-md shadow-emerald-700/20"
          >
            <Share2 size={15} />
            <span>{shareSuccess ? 'ارسال شد!' : 'ارسال به پیام‌رسان‌ها'}</span>
          </button>

          <button
            onClick={handleCopyFullReport}
            className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-xs transition-all shadow-md"
          >
            {copiedType === 'full' ? <Check size={15} className="text-emerald-300" /> : <Copy size={15} />}
            <span>{copiedType === 'full' ? 'تمام سوالات کپی شد!' : 'کپی متن تمام سوالات و پاسخ‌ها'}</span>
          </button>

          <button
            onClick={handleDownloadFile}
            className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs transition-all border border-white/20"
          >
            <Download size={15} />
            <span>دانلود فایل متنی (.txt)</span>
          </button>

          <button
            onClick={handleCopySummaryOnly}
            className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-indigo-200 font-bold text-xs transition-all border border-white/10"
          >
            {copiedType === 'summary' ? <Check size={15} className="text-emerald-300" /> : <Copy size={15} />}
            <span>{copiedType === 'summary' ? 'خلاصه کپی شد!' : 'کپی خلاصه آماری'}</span>
          </button>
        </div>
      </div>

      {/* Latency & Response Monitoring Card */}
      <div className="glass-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-6">
        <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">
          پایش سرعت پاسخ‌دهی و نشانه‌گذاری‌های مراجع (Clinical Monitoring)
        </h3>

        <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center justify-center gap-1 text-amber-700 dark:text-amber-300 font-bold mb-1">
              <Flag size={14} />
              <span>{result.flaggedQuestionsCount || 0}</span>
            </div>
            <span className="text-[11px] text-amber-600 dark:text-amber-400">نشانه‌دار برای جلسه</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-center gap-1 text-slate-700 dark:text-slate-300 font-bold mb-1">
              <Zap size={14} />
              <span>{result.rapidResponsesCount || 0}</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">شتاب‌زده (&lt; ۲ ثانیه)</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-center gap-1 text-slate-700 dark:text-slate-300 font-bold mb-1">
              <Clock size={14} />
              <span>{result.prolongedResponsesCount || 0}</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">مکث طولانی (&gt; ۲۵ ثانیه)</span>
          </div>
        </div>

        {flaggedQuestions.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 block mb-1">
              سوالات نیازمند بررسی در مصاحبه حضوری:
            </span>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {flaggedQuestions.map((fq) => (
                <div key={fq.questionId} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    سوال {fq.questionNumber}: «{fq.questionText.slice(0, 50)}...» ── پاسخ:{' '}
                    <strong>«{fq.selectedOptionLabel}»</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Intelligent Job Matching Section (Holland / MBTI) */}
      {jobMatches.length > 0 && (
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={20} className="text-indigo-600 dark:text-indigo-400" />
            <h2 className="font-bold text-base text-slate-800 dark:text-slate-100">
              موتور پیشنهاد شغل هوشمند (Job Matching)
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            مشاغل با بیشترین هم‌خوانی روان‌شناختی بر اساس کدهای استخراج‌شده از آزمون
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {jobMatches.map((job, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-bold mb-1">
                    <span className="text-slate-800 dark:text-slate-200 text-sm">{job.title}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded font-black text-[11px]">
                      {job.matchScore}٪
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block mb-2">{job.field}</span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {job.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-wrap gap-1">
                  {job.requiredSkills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md text-slate-500 border border-slate-200 dark:border-slate-700"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <TestVisualizations result={result} />

      {/* Question-by-Question Accordion */}
      <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm overflow-hidden mb-8">
        <button
          onClick={() => setShowQuestionsList(!showQuestionsList)}
          className="w-full p-5 flex items-center justify-between text-right hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-100">
                مشاهده تک‌تک سوالات و پاسخ‌های مراجع ({result.detailedAnswers?.length || 0} سوال)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                همراه با زمان پاسخ‌دهی و نشانه‌گذاری‌های جلسه مشاوره
              </p>
            </div>
          </div>
          {showQuestionsList ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
        </button>

        {showQuestionsList && (
          <div className="p-5 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 space-y-3.5 max-h-[500px] overflow-y-auto">
            {result.detailedAnswers?.map((item) => (
              <div
                key={item.questionNumber}
                className={`p-4 rounded-2xl bg-white dark:bg-slate-900 border shadow-xs ${
                  item.isFlagged ? 'border-amber-400 ring-1 ring-amber-400/40' : 'border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">سوال شماره {item.questionNumber}</span>
                    {item.isFlagged && (
                      <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold flex items-center gap-1">
                        <Flag size={10} fill="currentColor" /> نشانه‌دار برای جلسه
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px]">
                    {item.latencyFlag === 'rapid' && (
                      <span className="text-rose-500 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
                        <Zap size={10} /> شتاب‌زده ({item.responseTimeSeconds} ثانیه)
                      </span>
                    )}
                    {item.latencyFlag === 'prolonged' && (
                      <span className="text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
                        <Clock size={10} /> مکث طولانی ({item.responseTimeSeconds} ثانیه)
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.factorTitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 text-right leading-relaxed">
                  {item.questionText}
                </p>

                {/* Selected answer highlighted */}
                <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                      پاسخ انتخابی مراجع:
                    </span>
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-100">
                      « {item.selectedOptionLabel} »
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-white/80 dark:bg-slate-900 px-2 py-0.5 rounded">
                    امتیاز: {item.selectedValue}
                  </span>
                </div>

                {/* Counselor note if available */}
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  <span className="font-semibold text-amber-600 dark:text-amber-500">نکته بالینی: </span>
                  {item.clinicalSignificance}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Back Button */}
      <button
        onClick={onBackToHome}
        className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm transition-all shadow-md active:scale-98"
      >
        اتمام بررسی و بازگشت
      </button>
    </div>
  );
};
