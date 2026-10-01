import React, { useState, useEffect } from 'react';
import { TestResult, CouplesComparisonResult } from '../types';
import { getAllResults } from '../utils/clientStorage';
import { compareCouples } from '../utils/couplesEngine';
import {
  Heart,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Users,
  CheckCircle2,
  RefreshCw,
  Scale,
} from 'lucide-react';

export const CouplesMatchView: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [selectedIdA, setSelectedIdA] = useState<string>('');
  const [selectedIdB, setSelectedIdB] = useState<string>('');
  const [comparison, setComparison] = useState<CouplesComparisonResult | null>(null);

  useEffect(() => {
    const list = getAllResults();
    setResults(list);
    if (list.length >= 2) {
      setSelectedIdA(list[0].id);
      setSelectedIdB(list[1].id);
    } else if (list.length === 1) {
      setSelectedIdA(list[0].id);
    }
  }, []);

  const handleRunComparison = () => {
    const rA = results.find((r) => r.id === selectedIdA);
    const rB = results.find((r) => r.id === selectedIdB);

    if (rA && rB) {
      const comp = compareCouples(rA, rB);
      setComparison(comp);
    } else {
      alert('لطفاً آزمون هر دو پارتنر را برای تطبیق انتخاب کنید.');
    }
  };

  // Sample simulation if user doesn't have 2 tests saved yet
  const handleLoadSampleSimulation = () => {
    const mockA: TestResult = {
      id: 'mock_a',
      clientName: 'سارا (پارتنر ۱)',
      testId: 'mbti',
      testTitle: 'تست شخصیت مایرز-بریگز (MBTI)',
      category: 'development',
      date: '۱۴۰۳/۰۷/۱۰',
      timestamp: Date.now(),
      counselorModeUsed: true,
      isValid: true,
      primaryResult: {
        code: 'ENFJ-A',
        title: 'پیشرو و الهام‌بخش',
        subtitle: 'برون‌گرا، شهودی، احساسی، قضاوت‌گر',
        summary: 'کاریزماتیک و حامی رشد دیگران.',
        traits: ['برون‌گرایی', 'شهود', 'احساس', 'قضاوت'],
      },
      factors: [
        { key: 'E', name: 'برون‌گرایی', score: 26, maxScore: 36, percentage: 72, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
        { key: 'N', name: 'شهود', score: 28, maxScore: 36, percentage: 78, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
        { key: 'F', name: 'احساس', score: 30, maxScore: 36, percentage: 83, level: 'very_high', levelText: 'بسیار بالا', description: '', counselorNote: '' },
        { key: 'J', name: 'قضاوت', score: 25, maxScore: 36, percentage: 69, level: 'moderate', levelText: 'متوسط', description: '', counselorNote: '' },
      ],
      rawAnswers: {},
    };

    const mockB: TestResult = {
      id: 'mock_b',
      clientName: 'امیر (پارتنر ۲)',
      testId: 'mbti',
      testTitle: 'تست شخصیت مایرز-بریگز (MBTI)',
      category: 'development',
      date: '۱۴۰۳/۰۷/۱۰',
      timestamp: Date.now(),
      counselorModeUsed: true,
      isValid: true,
      primaryResult: {
        code: 'INTP-A',
        title: 'متفکر و منطقی',
        subtitle: 'درون‌گرا، شهودی، منطقی، ادراکی',
        summary: 'تحلیل‌گر و مستقل در تفکر.',
        traits: ['درون‌گرایی', 'شهود', 'منطق', 'ادراک'],
      },
      factors: [
        { key: 'E', name: 'برون‌گرایی', score: 10, maxScore: 36, percentage: 28, level: 'low', levelText: 'پایین (درون‌گرا)', description: '', counselorNote: '' },
        { key: 'N', name: 'شهود', score: 29, maxScore: 36, percentage: 80, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
        { key: 'F', name: 'احساس', score: 8, maxScore: 36, percentage: 22, level: 'low', levelText: 'پایین (منطقی)', description: '', counselorNote: '' },
        { key: 'J', name: 'قضاوت', score: 12, maxScore: 36, percentage: 33, level: 'low', levelText: 'پایین (منعطف)', description: '', counselorNote: '' },
      ],
      rawAnswers: {},
    };

    const comp = compareCouples(mockA, mockB);
    setComparison(comp);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Heart size={22} className="text-rose-500 fill-rose-500" />
          <span>موتور تطبیق زوجین و سازگاری پیش از ازدواج</span>
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          ارزیابی هوشمند هم‌پوشانی شخصیتی، پیش‌بینی زمینه‌های تعارض و راهکارهای بالینی بهبود رابطه
        </p>
      </div>

      {/* Select Partners Card */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
          <Scale size={16} className="text-indigo-600" />
          <span>انتخاب نتایج آزمون دو پارتنر برای تطبیق</span>
        </h3>

        {results.length < 2 ? (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="shrink-0" />
              <span>برای تطبیق واقعی، نیاز به حداقل دو آزمون ذخیره‌شده دارید.</span>
            </div>
            <button
              onClick={handleLoadSampleSimulation}
              className="px-3.5 py-1.5 rounded-xl bg-amber-600 text-white font-bold hover:bg-amber-700 transition-all shrink-0"
            >
              مشاهده دموی شبیه‌سازی زوجین
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                آزمون پارتنر اول (خانم / آقا):
              </label>
              <select
                value={selectedIdA}
                onChange={(e) => setSelectedIdA(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                {results.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.clientName} ── {r.testTitle} ({r.primaryResult.code} - {r.date})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                آزمون پارتنر دوم (همسر / نامزد):
              </label>
              <select
                value={selectedIdB}
                onChange={(e) => setSelectedIdB(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                {results.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.clientName} ── {r.testTitle} ({r.primaryResult.code} - {r.date})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <button
          onClick={handleRunComparison}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-rose-500/20 active:scale-98 transition-all"
        >
          <Sparkles size={16} />
          <span>تحلیل و محاسبه درصد سازگاری زوجین</span>
        </button>
      </div>

      {/* Comparison Results Section */}
      {comparison && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
          {/* Main Compatibility Hero Card */}
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-rose-200/80 dark:border-rose-950/80 shadow-lg text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-3 text-xs font-bold text-slate-400 mb-3">
              <Users size={16} className="text-rose-500" />
              <span>
                تطبیق {comparison.partnerAName} و {comparison.partnerBName}
              </span>
            </div>

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-rose-50 dark:bg-rose-950/60 border-4 border-rose-500/30 text-rose-600 dark:text-rose-400 font-black text-3xl mb-3 shadow-inner">
              {comparison.overallCompatibility}٪
            </div>

            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-2">
              شاخص سازگاری: {comparison.compatibilityLevel === 'high' ? 'بسیار بالا و پایدار' : comparison.compatibilityLevel === 'moderate' ? 'متوسط و قابل رشد' : 'نیازمند مشاوره متمرکز'}
            </h3>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
              {comparison.compatibilitySummary}
            </p>
          </div>

          {/* Synergy & Conflict Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Synergy Points */}
            <div className="glass-card rounded-3xl p-5 border border-emerald-200/70 dark:border-emerald-900/50 shadow-sm">
              <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>نقاط قوت و جاذبه‌های مکمل (Synergy)</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {comparison.synergyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 bg-emerald-50/50 dark:bg-emerald-950/30 p-2.5 rounded-xl">
                    <span className="text-emerald-500 font-bold shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conflict Areas */}
            <div className="glass-card rounded-3xl p-5 border border-amber-200/70 dark:border-amber-900/50 shadow-sm">
              <h4 className="font-bold text-sm text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-3">
                <AlertCircle size={18} className="text-amber-500" />
                <span>زمینه‌های بالقوه تعارض و سوءتفاهم</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {comparison.conflictAreas.map((cf, i) => (
                  <li key={i} className="flex items-start gap-2 bg-amber-50/50 dark:bg-amber-950/30 p-2.5 rounded-xl">
                    <span className="text-amber-500 font-bold shrink-0">•</span>
                    <span>{cf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dimension Matches Side by Side */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-4">
              ارزیابی تطبیقی ابعاد شخصیتی طرفین
            </h4>

            <div className="space-y-3">
              {comparison.dimensionMatches.map((dim, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs"
                >
                  <div className="flex justify-between items-center font-bold mb-2">
                    <span className="text-slate-800 dark:text-slate-200">{dim.dimension}</span>
                    <span className="text-rose-500 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded">
                      هماهنگی: {dim.harmonyScore}٪
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] mb-2">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block">{comparison.partnerAName}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{dim.partnerAScore}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block">{comparison.partnerBName}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{dim.partnerBScore}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {dim.analysis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Counselor Advice Section */}
          <div className="p-5 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60">
            <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-300 flex items-center gap-2 mb-2">
              <HelpCircle size={18} className="text-indigo-600" />
              <span>توصیه‌های کاربردی مشاور به زوجین</span>
            </h4>
            <div className="space-y-1.5 text-xs text-indigo-800 dark:text-indigo-200 leading-relaxed">
              {comparison.counselorAdvice.map((adv, i) => (
                <p key={i}>• {adv}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
