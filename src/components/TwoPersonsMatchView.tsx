import React, { useState, useEffect } from 'react';
import { TestResult, TwoPersonsComparisonResult, ClientProfile } from '../types';
import { getAllResults, getClients } from '../utils/clientStorage';
import { compareTwoPersons } from '../utils/couplesEngine';
import {
  Users,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Scale,
  ArrowRightLeft,
  Lightbulb,
  ShieldAlert,
} from 'lucide-react';

export const TwoPersonsMatchView: React.FC = () => {
  const [clients, setClients] = useState<ClientProfile[]>([]);
  const [results, setResults] = useState<TestResult[]>([]);

  const [selectedClientIdA, setSelectedClientIdA] = useState<string>('');
  const [selectedClientIdB, setSelectedClientIdB] = useState<string>('');
  const [selectedTestFilter, setSelectedTestFilter] = useState<string>('mbti');

  const [comparison, setComparison] = useState<TwoPersonsComparisonResult | null>(null);

  useEffect(() => {
    const clientList = getClients();
    const resultList = getAllResults();
    setClients(clientList);
    setResults(resultList);

    if (clientList.length >= 2) {
      setSelectedClientIdA(clientList[0].id);
      setSelectedClientIdB(clientList[1].id);
    }
  }, []);

  const handleRunComparison = () => {
    // Find tests for person A and person B matching the selected test
    const resultsA = results.filter((r) => r.clientId === selectedClientIdA && r.testId === selectedTestFilter);
    const resultsB = results.filter((r) => r.clientId === selectedClientIdB && r.testId === selectedTestFilter);

    if (resultsA.length > 0 && resultsB.length > 0) {
      const comp = compareTwoPersons(resultsA[0], resultsB[0]);
      setComparison(comp);
      return;
    }

    // If client IDs not set, fallback to finding by available results
    const rA = results.find((r) => r.testId === selectedTestFilter && r.id !== selectedClientIdB);
    const rB = results.find((r) => r.testId === selectedTestFilter && r.id !== rA?.id);

    if (rA && rB) {
      const comp = compareTwoPersons(rA, rB);
      setComparison(comp);
    } else {
      // Prompt simulation
      alert('برای آزمون انتخابی هنوز نتیجه ثبت‌شده‌ای برای هر دو کاربر یافت نشد. می‌توانید با کلیک بر روی دکمه «نمایش شبیه‌سازی نمونه»، تحلیل انطباق را مشاهده فرمایید.');
    }
  };

  // Demo simulation with full MBTI or NEO data
  const handleLoadSampleSimulation = (testType: 'mbti' | 'neo' = 'mbti') => {
    if (testType === 'neo') {
      const mockA: TestResult = {
        id: 'mock_neo_a',
        clientName: 'شخص اول (علی)',
        testId: 'neo',
        testTitle: 'تست جامع ۵ عاملی شخصیت نئو (NEO-120)',
        category: 'development',
        date: '۱۴۰۳/۰۷/۱۰',
        timestamp: Date.now(),
        counselorModeUsed: true,
        isValid: true,
        primaryResult: {
          code: 'N: پایین | C: بالا',
          title: 'پروفایل متعهد و باثبات',
          subtitle: 'باوجدانی بالا، روان‌رنجورخویی پایین',
          summary: 'فردی مسئولیت‌پذیر، خونسرد و پایبند به برنامه.',
          traits: ['باوجدانی', 'ثبات هیجانی'],
        },
        factors: [
          { key: 'N', name: 'روان‌رنجورخویی (Neuroticism)', score: 20, maxScore: 96, percentage: 22, level: 'low', levelText: 'پایین', description: '', counselorNote: '' },
          { key: 'E', name: 'برون‌گرایی (Extraversion)', score: 68, maxScore: 96, percentage: 70, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
          { key: 'O', name: 'گشودگی به تجربه (Openness)', score: 55, maxScore: 96, percentage: 58, level: 'moderate', levelText: 'متوسط', description: '', counselorNote: '' },
          { key: 'A', name: 'توافق‌پذیری (Agreeableness)', score: 45, maxScore: 96, percentage: 48, level: 'moderate', levelText: 'متوسط', description: '', counselorNote: '' },
          { key: 'C', name: 'باوجدانی (Conscientiousness)', score: 82, maxScore: 96, percentage: 85, level: 'very_high', levelText: 'بسیار بالا', description: '', counselorNote: '' },
        ],
        rawAnswers: {},
      };

      const mockB: TestResult = {
        id: 'mock_neo_b',
        clientName: 'شخص دوم (مریم)',
        testId: 'neo',
        testTitle: 'تست جامع ۵ عاملی شخصیت نئو (NEO-120)',
        category: 'development',
        date: '۱۴۰۳/۰۷/۱۰',
        timestamp: Date.now(),
        counselorModeUsed: true,
        isValid: true,
        primaryResult: {
          code: 'N: بالا | O: بسیار بالا',
          title: 'پروفایل خلاق و حساس',
          subtitle: 'گشودگی بالا، حساسیت عاطفی',
          summary: 'هنردوست، منعطف و حساس به تنش‌های محیطی.',
          traits: ['گشودگی به تجربه', 'حساسیت هیجانی'],
        },
        factors: [
          { key: 'N', name: 'روان‌رنجورخویی (Neuroticism)', score: 65, maxScore: 96, percentage: 68, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
          { key: 'E', name: 'برون‌گرایی (Extraversion)', score: 38, maxScore: 96, percentage: 40, level: 'moderate', levelText: 'متوسط', description: '', counselorNote: '' },
          { key: 'O', name: 'گشودگی به تجربه (Openness)', score: 84, maxScore: 96, percentage: 88, level: 'very_high', levelText: 'بسیار بالا', description: '', counselorNote: '' },
          { key: 'A', name: 'توافق‌پذیری (Agreeableness)', score: 76, maxScore: 96, percentage: 79, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
          { key: 'C', name: 'باوجدانی (Conscientiousness)', score: 40, maxScore: 96, percentage: 42, level: 'moderate', levelText: 'متوسط', description: '', counselorNote: '' },
        ],
        rawAnswers: {},
      };

      setComparison(compareTwoPersons(mockA, mockB));
      return;
    }

    // Default MBTI Demo
    const mockA: TestResult = {
      id: 'mock_a',
      clientName: 'شخص اول (سارا)',
      testId: 'mbti',
      testTitle: 'تست مایرز-بریگز (MBTI)',
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
      clientName: 'شخص دوم (امیر)',
      testId: 'mbti',
      testTitle: 'تست مایرز-بریگز (MBTI)',
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
        { key: 'E', name: 'برون‌گرایی', score: 10, maxScore: 36, percentage: 28, level: 'low', levelText: 'پایین', description: '', counselorNote: '' },
        { key: 'N', name: 'شهود', score: 29, maxScore: 36, percentage: 80, level: 'high', levelText: 'بالا', description: '', counselorNote: '' },
        { key: 'F', name: 'احساس', score: 8, maxScore: 36, percentage: 22, level: 'low', levelText: 'پایین', description: '', counselorNote: '' },
        { key: 'J', name: 'قضاوت', score: 12, maxScore: 36, percentage: 33, level: 'low', levelText: 'پایین', description: '', counselorNote: '' },
      ],
      rawAnswers: {},
    };

    setComparison(compareTwoPersons(mockA, mockB));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 text-right">
      {/* View Header */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-md mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
              <ArrowRightLeft size={13} />
              <span>تحلیل انطباق بین‌فردی</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
              مقایسه شخصیتی و ارتباطی دو نفر
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
              با انتخاب دو کاربر، الگوهای تعامل، زمینه‌های هماهنگی و حوزه‌هایی که ممکن است منجر به سوءتفاهم یا چالش میان طرفین شود را با توضیحات و راهکارهای روان‌شناختی بررسی نمایید.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <button
              onClick={() => handleLoadSampleSimulation('mbti')}
              className="py-2 px-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 hover:bg-indigo-100 transition-colors shadow-xs"
            >
              <Sparkles size={14} />
              <span>نمونه MBTI</span>
            </button>
            <button
              onClick={() => handleLoadSampleSimulation('neo')}
              className="py-2 px-3.5 rounded-xl border border-cyan-200 dark:border-cyan-800/60 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-100 transition-colors shadow-xs"
            >
              <Sparkles size={14} />
              <span>نمونه نئو (NEO)</span>
            </button>
          </div>
        </div>

        {/* Selection Form */}
        <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              شخص اول:
            </label>
            <select
              value={selectedClientIdA}
              onChange={(e) => setSelectedClientIdA(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {clients.length === 0 ? (
                <option value="">(پروفایلی ثبت نشده)</option>
              ) : (
                clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.gender === 'female' ? 'خانم' : 'آقا'}{c.age ? `، ${c.age} سال` : ''})
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              شخص دوم:
            </label>
            <select
              value={selectedClientIdB}
              onChange={(e) => setSelectedClientIdB(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {clients.length === 0 ? (
                <option value="">(پروفایلی ثبت نشده)</option>
              ) : (
                clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.gender === 'female' ? 'خانم' : 'آقا'}{c.age ? `، ${c.age} سال` : ''})
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              آزمون مورد مقایسه:
            </label>
            <select
              value={selectedTestFilter}
              onChange={(e) => setSelectedTestFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="mbti">مایرز-بریگز (MBTI ۶۰ سوالی)</option>
              <option value="neo">تست ۵ عاملی نئو (NEO ۱۲۰ سوالی)</option>
              <option value="cattell">۱۶ عاملی کتل (۱۸۷ سوالی)</option>
              <option value="young_schema">طرحواره‌های یانگ (YSQ-S3)</option>
              <option value="holland">رغبت‌سنج شغلی و سبک زندگی هالند</option>
              <option value="enrich">رضایت ارتباطی انریچ</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleRunComparison}
            className="py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2"
          >
            <Scale size={16} />
            <span>محاسبه و مقایسه دو نفر</span>
          </button>
        </div>
      </div>

      {/* Comparison Results Section */}
      {comparison ? (
        <div className="space-y-6">
          {/* Compatibility Score Banner */}
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center font-black ${
                    comparison.compatibilityLevel === 'high'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300'
                      : comparison.compatibilityLevel === 'moderate'
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300'
                      : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300'
                  }`}
                >
                  <span className="text-2xl">{comparison.overallCompatibility}٪</span>
                  <span className="text-[10px] font-bold">میزان انطباق</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    مقایسه «{comparison.personAName}» و «{comparison.personBName}»
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    بر اساس آزمون: {comparison.testTitle}
                  </p>
                  <span
                    className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      comparison.compatibilityLevel === 'high'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : comparison.compatibilityLevel === 'moderate'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    }`}
                  >
                    {comparison.compatibilityLevel === 'high'
                      ? 'سطح انطباق بسیار مطلوب'
                      : comparison.compatibilityLevel === 'moderate'
                      ? 'سطح انطباق متوسط و نیازمند هماهنگی'
                      : 'تفاوت‌های بارز نیازمند توجه ویژه'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed sm:text-left">
                {comparison.compatibilitySummary}
              </p>
            </div>
          </div>

          {/* CRITICAL SECTION: Potential Challenge Areas between the Two Persons */}
          <div className="glass-card rounded-3xl p-6 md:p-7 border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 shadow-sm">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-4">
              <ShieldAlert size={18} />
              <span>زمینه‌هایی که می‌تواند منجر به چالش میان طرفین شود ({comparison.challengeAreas.length} مورد)</span>
            </div>

            <div className="space-y-3.5">
              {comparison.challengeAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-amber-200/60 dark:border-amber-900/60 shadow-xs"
                >
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                      {area.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pr-7 mb-2.5">
                    {area.explanation}
                  </p>

                  <div className="mr-7 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-amber-700 dark:text-amber-400">راهکار پیشگیری و توافق:</strong> {area.practicalTip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Constructive Synergy Points */}
          <div className="glass-card rounded-3xl p-6 md:p-7 border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-bold text-sm mb-3">
              <CheckCircle2 size={18} />
              <span>نقاط قوت و پیوندهای هم‌افزا</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {comparison.synergyPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dimension Matches Table */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span>تطبیق ابعاد شخصیتی به تفکیک شاخص‌ها</span>
            </h3>

            <div className="space-y-3">
              {comparison.dimensionMatches.map((dm, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                      {dm.dimension}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-semibold">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {comparison.personAName}: {dm.personAScore}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600">|</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        {comparison.personBName}: {dm.personBScore}
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full transition-all duration-300 ${
                        dm.harmonyScore >= 80
                          ? 'bg-emerald-500'
                          : dm.harmonyScore >= 60
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${dm.harmonyScore}%` }}
                    ></div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {dm.analysis}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card rounded-3xl p-12 text-center border border-slate-200/80 dark:border-slate-800/80">
          <Users size={40} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <h3 className="font-bold text-base text-slate-800 dark:text-slate-200 mb-1">
            دو کاربر را برای مقایسه انتخاب کنید
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
            می‌توانید دو نفر از پروفایل‌های ثبت‌شده در دستگاه را انتخاب کنید یا بر روی دکمه‌های «نمونه MBTI» یا «نمونه نئو» در بالا کلیک کنید تا تحلیل شبیه‌سازی را مشاهده فرمایید.
          </p>
        </div>
      )}
    </div>
  );
};
