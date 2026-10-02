import React, { useState, useEffect, useRef } from 'react';
import { TestDefinition, DetailedAnswerItem } from '../types';
import { CounselorHUD } from './CounselorHUD';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BookmarkCheck,
  Save,
  LogOut,
  LayoutGrid,
  Clock,
  X,
  Flag,
} from 'lucide-react';
import { saveDraft, removeDraft } from '../utils/draftStorage';
import { buildDetailedAnswers } from '../utils/reportExporter';

interface TestRunnerProps {
  test: TestDefinition;
  counselorMode: boolean;
  initialAnswers?: Record<string | number, number>;
  initialIdx?: number;
  initialFlagged?: (string | number)[];
  initialTimes?: Record<string | number, number>;
  onComplete: (answers: Record<string | number, number>, detailedAnswers: DetailedAnswerItem[]) => void;
  onCancel: () => void;
  onSaveAndExit: () => void;
}

export const TestRunner: React.FC<TestRunnerProps> = ({
  test,
  counselorMode,
  initialAnswers = {},
  initialIdx = 0,
  initialFlagged = [],
  initialTimes = {},
  onComplete,
  onCancel,
  onSaveAndExit,
}) => {
  const [currentIdx, setCurrentIdx] = useState(initialIdx);
  const [answers, setAnswers] = useState<Record<string | number, number>>(initialAnswers);
  const [flaggedIds, setFlaggedIds] = useState<(string | number)[]>(initialFlagged);
  const [responseTimes, setResponseTimes] = useState<Record<string | number, number>>(initialTimes);
  const [saveToast, setSaveToast] = useState(false);
  const [showGridModal, setShowGridModal] = useState(false);

  const startTimeRef = useRef<number>(Date.now());

  // Calculate initial remaining time in seconds
  const totalTimeSpentSeconds = Object.values(initialTimes).reduce((a, b) => a + b, 0);
  const initialRemainingSeconds = Math.max(0, (test.estimatedMinutes * 60) - totalTimeSpentSeconds);
  const [remainingSeconds, setRemainingSeconds] = useState(initialRemainingSeconds);

  // Timer effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const question = test.questions[currentIdx];
  const totalQuestions = test.questions.length;
  const answeredCount = Object.keys(answers).length;
  const remainingCount = totalQuestions - answeredCount;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const options = question.options || test.defaultOptions || [];
  const isQuestionFlagged = flaggedIds.includes(question.id);

  // Reset timer on question switch
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [currentIdx]);

  // Estimated minutes remaining (assuming average 12 seconds per question)
  const estimatedRemainingMinutes = Math.max(1, Math.ceil((remainingCount * 12) / 60));

  // Auto-save progress to local storage
  useEffect(() => {
    if (answeredCount > 0) {
      saveDraft(test.id, currentIdx, answers, totalQuestions);
    }
  }, [answers, currentIdx, test.id, answeredCount, totalQuestions]);

  const toggleFlagCurrentQuestion = () => {
    setFlaggedIds((prev) =>
      prev.includes(question.id) ? prev.filter((id) => id !== question.id) : [...prev, question.id]
    );
  };

  const handleSelect = (value: number) => {
    // Record elapsed time for latency tracking
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    const newTimes = { ...responseTimes, [question.id]: (responseTimes[question.id] || 0) + elapsedSeconds };
    setResponseTimes(newTimes);

    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    saveDraft(test.id, currentIdx, newAnswers, totalQuestions);

    setTimeout(() => {
      if (currentIdx < totalQuestions - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        // Test completed
        removeDraft(test.id);
        const detailed = buildDetailedAnswers(test, newAnswers, flaggedIds, newTimes);
        onComplete(newAnswers, detailed);
      }
    }, 350);
  };

  const handleManualSave = () => {
    saveDraft(test.id, currentIdx, answers, totalQuestions);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onSaveAndExit();
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto relative pb-28">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold animate-in fade-in zoom-in-95 duration-200">
          <BookmarkCheck size={18} />
          <span>پاسخ‌های شما ذخیره شد. می‌توانید بعداً ادامه دهید!</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-sm text-slate-800 dark:text-slate-100">{test.persianTitle}</h1>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">سوال {currentIdx + 1}</span>
            <span>از {totalQuestions}</span>
            {flaggedIds.length > 0 && (
              <span className="text-amber-500 font-bold">• {flaggedIds.length} نشانه‌دار</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Countdown Timer */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border ${
            remainingSeconds < 60 
              ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-400 animate-pulse' 
              : 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
          } text-xs font-mono font-bold`} title="زمان باقیمانده">
            <Clock size={14} className={remainingSeconds < 60 ? 'animate-bounce' : ''} />
            <span>{formatTime(remainingSeconds)}</span>
          </div>

          {/* Countdown Timer */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border ${remainingSeconds < 60 ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-400 animate-pulse' : 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'} text-xs font-mono font-bold`} title="زمان باقیمانده">
            <Clock size={14} className={remainingSeconds < 60 ? 'animate-bounce' : ''} />
            <span>{formatTime(remainingSeconds)}</span>
          </div>

          {/* Quick Jump Grid Button */}
          <button
            onClick={() => setShowGridModal(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
            title="نمایش نقشه تمام سوالات"
          >
            <LayoutGrid size={15} />
            <span className="hidden sm:inline">نقشه سوالات</span>
          </button>

          {/* Save & Exit Button */}
          <button
            onClick={handleManualSave}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 text-xs font-semibold transition-all active:scale-95"
            title="ذخیره موقت و بازگشت به منو"
          >
            <Save size={14} />
            <span>ذخیره و بعداً</span>
          </button>
        </div>
      </div>

      {/* Detailed Progress Dashboard Card (Answered vs Remaining) */}
      <div className="px-4 pt-3 pb-2 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
              <CheckCircle2 size={13} />
              <span>{answeredCount} پاسخ‌داده‌شده</span>
            </span>

            <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md">
              <span>{remainingCount} مانده تا پایان</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <Clock size={12} />
            <span>~{estimatedRemainingMinutes} دقیقه</span>
            <span className="text-slate-400">•</span>
            <span className="font-bold text-slate-700 dark:text-slate-200">{progressPercent}٪</span>
          </div>
        </div>

        {/* Dual Visual Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
          <div
            className={`h-full bg-gradient-to-r ${test.gradient} transition-all duration-300 ease-out`}
            style={{ width: `${progressPercent}%` }}
            title={`تکمیل شده: ${progressPercent}%`}
          ></div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 px-4 py-5 flex flex-col justify-center">
        {/* Counselor HUD */}
        <CounselorHUD question={question} isVisible={counselorMode} />

        {/* Question Card */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-5 relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
              سوال شماره {currentIdx + 1} از {totalQuestions}
            </span>

            <div className="flex items-center gap-2">
              {/* Flag for Clinical Interview Button */}
              <button
                onClick={toggleFlagCurrentQuestion}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  isQuestionFlagged
                    ? 'bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                }`}
                title="علامت‌گذاری برای بررسی در جلسه مشاوره"
              >
                <Flag size={13} fill={isQuestionFlagged ? 'currentColor' : 'none'} />
                <span>{isQuestionFlagged ? 'نشانه‌دار برای جلسه' : 'نشان‌گذاری'}</span>
              </button>

              {answers[question.id] !== undefined && (
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} />
                </span>
              )}
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed text-right">
            {question.text}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {options.map((opt, i) => {
            const isSelected = answers[question.id] === opt.value;
            return (
              <button
                key={i}
                onClick={() => handleSelect(opt.value)}
                className={`w-full relative overflow-hidden group flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-150 active:scale-[0.99] text-right ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-sm font-semibold'
                    : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-sm md:text-base leading-snug">{opt.label}</span>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mr-3 transition-colors ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-300 dark:border-slate-600'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 flex justify-between items-center max-w-lg mx-auto pb-safe z-30">
        <button
          onClick={onCancel}
          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-xs font-medium px-3 py-2 flex items-center gap-1.5"
        >
          <LogOut size={14} />
          <span>خروج</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold px-3 py-2 rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ArrowRight size={15} />
            <span>قبلی</span>
          </button>

          {currentIdx < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <span>بعدی</span>
              <ArrowLeft size={15} />
            </button>
          ) : (
            <button
              onClick={() => {
                if (answeredCount < totalQuestions) {
                  setShowGridModal(true);
                  return;
                }
                removeDraft(test.id);
                const detailed = buildDetailedAnswers(test, answers, flaggedIds, responseTimes);
                onComplete(answers, detailed);
              }}
              className={`flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-all ${
                answeredCount < totalQuestions
                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20 animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
              }`}
            >
              <CheckCircle2 size={15} />
              <span>{answeredCount < totalQuestions ? `تکمیل ${remainingCount} سوال مانده` : 'پایان و مشاهده نتایج'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Question Navigation Matrix Modal (Map of All Questions) */}
      {showGridModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl p-6 border border-slate-200 dark:border-slate-800 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <div>
                <h3 className="font-bold text-base text-slate-800 dark:text-white">نقشه سوالات آزمون</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {answeredCount} پاسخ داده شده • {remainingCount} باقیمانده
                  {flaggedIds.length > 0 && ` • ${flaggedIds.length} نشانه‌دار`}
                </p>
              </div>
              <button
                onClick={() => setShowGridModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center flex-wrap gap-3 text-[11px] font-semibold mb-4 px-1">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> پاسخ‌داده‌شده
              </span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> نشانه‌دار
              </span>
              <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block"></span> جاری
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 inline-block"></span> مانده
              </span>
            </div>

            {/* Questions Grid */}
            <div className="overflow-y-auto flex-1 grid grid-cols-5 sm:grid-cols-6 gap-2 p-1">
              {test.questions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = idx === currentIdx;
                const isFlagged = flaggedIds.includes(q.id);

                let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200';
                if (isCurrent) {
                  btnClass = 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400 shadow-md';
                } else if (isFlagged) {
                  btnClass = 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-700';
                } else if (isAnswered) {
                  btnClass = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-300 dark:border-emerald-800';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIdx(idx);
                      setShowGridModal(false);
                    }}
                    className={`h-11 rounded-xl text-xs flex flex-col items-center justify-center transition-all active:scale-95 relative ${btnClass}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    )}
                    {isAnswered && !isCurrent && <span className="text-[9px]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
