import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TestCard } from './components/TestCard';
import { ProposedTestCard } from './components/ProposedTestCard';
import { TestRunner } from './components/TestRunner';
import { ResultDashboard } from './components/ResultDashboard';
import { ClientsView } from './components/ClientsView';
import { CouplesMatchView } from './components/CouplesMatchView';
import { testsIndex } from './data';
import { proposedTests } from './data/proposedTests';
import {
  Compass,
  Beaker,
  AlertTriangle,
  ShieldCheck,
  Play,
  RotateCcw,
  BookmarkCheck,
  Users,
  Heart,
} from 'lucide-react';
import { TestDefinition, TestResult, DetailedAnswerItem, SavedDraft, ClientProfile } from './types';
import { getAllDrafts, getDraft, removeDraft } from './utils/draftStorage';
import { processTestResults } from './utils/scoring';
import { getActiveClient, saveTestResultToHistory } from './utils/clientStorage';

function App() {
  const [counselorMode, setCounselorMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'tests' | 'clients' | 'couples' | 'proposed'>('tests');

  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [activeTest, setActiveTest] = useState<TestDefinition | null>(null);
  const [activeResult, setActiveResult] = useState<TestResult | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDraftModal, setShowDraftModal] = useState<SavedDraft | null>(null);

  const [drafts, setDrafts] = useState<Record<string, SavedDraft>>({});
  const [activeClient, setActiveClient] = useState<ClientProfile | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const refreshState = () => {
    setDrafts(getAllDrafts());
    setActiveClient(getActiveClient());
  };

  useEffect(() => {
    refreshState();
  }, [activeTest, activeResult, activeTab]);

  const handleStartTestAttempt = (id: string) => {
    const test = testsIndex[id];
    if (!test) return;

    setSelectedTestId(id);

    // Check for draft
    const existingDraft = getDraft(test.id);
    if (existingDraft && Object.keys(existingDraft.answers).length > 0) {
      setShowDraftModal(existingDraft);
      return;
    }

    if (test.category === 'clinical') {
      setShowDisclaimer(true);
    } else {
      setActiveTest(test);
    }
  };

  const handleResumeDraft = () => {
    if (!showDraftModal) return;
    const test = testsIndex[showDraftModal.testId];
    setShowDraftModal(null);
    if (test) {
      setActiveTest(test);
    }
  };

  const handleRestartFromScratch = () => {
    if (!showDraftModal) return;
    const testId = showDraftModal.testId;
    removeDraft(testId);
    refreshState();
    setShowDraftModal(null);

    const test = testsIndex[testId];
    if (test) {
      if (test.category === 'clinical') {
        setShowDisclaimer(true);
      } else {
        setActiveTest(test);
      }
    }
  };

  const acceptDisclaimerAndStart = () => {
    if (selectedTestId && testsIndex[selectedTestId]) {
      setActiveTest(testsIndex[selectedTestId]);
      setShowDisclaimer(false);
    }
  };

  const handleTestComplete = (
    answers: Record<string | number, number>,
    detailedAnswers: DetailedAnswerItem[]
  ) => {
    if (!activeTest) return;

    const client = getActiveClient();
    const clientName = client?.name || 'مراجع گرامی';
    const clientId = client?.id;

    const result = processTestResults(
      activeTest,
      answers,
      detailedAnswers,
      counselorMode,
      clientName,
      clientId
    );

    // Save to persistent clinical history linked with this client
    saveTestResultToHistory(result);

    setActiveResult(result);
    setActiveTest(null);
    setSelectedTestId(null);
    refreshState();
  };

  const handleApproveProposed = (_id: string) => {
    alert(`آزمون با موفقیت تایید شد و در صف یکپارچه‌سازی با نرم‌افزار قرار گرفت.`);
  };

  // If viewing a completed Result
  if (activeResult) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <ResultDashboard
          result={activeResult}
          onBackToHome={() => {
            setActiveResult(null);
            refreshState();
          }}
        />
      </div>
    );
  }

  // If taking a test
  if (activeTest) {
    const currentDraft = getDraft(activeTest.id);
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <TestRunner
          test={activeTest}
          counselorMode={counselorMode}
          initialAnswers={currentDraft?.answers || {}}
          initialIdx={currentDraft?.currentIdx || 0}
          initialFlagged={currentDraft?.flaggedQuestionIds || []}
          initialTimes={currentDraft?.responseTimes || {}}
          onComplete={handleTestComplete}
          onCancel={() => {
            setActiveTest(null);
            setSelectedTestId(null);
            refreshState();
          }}
          onSaveAndExit={() => {
            setActiveTest(null);
            setSelectedTestId(null);
            refreshState();
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pb-24 relative">
      <Header
        counselorMode={counselorMode}
        setCounselorMode={setCounselorMode}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeClient={activeClient}
        onOpenClients={() => setActiveTab('clients')}
      />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl mb-8 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab('tests')}
            className={`flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'tests'
                ? 'bg-white dark:bg-slate-700 shadow-xs text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Compass size={15} />
            <span>آزمون‌ها</span>
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'clients'
                ? 'bg-white dark:bg-slate-700 shadow-xs text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Users size={15} />
            <span>مراجعین و پرونده‌ها</span>
          </button>

          <button
            onClick={() => setActiveTab('couples')}
            className={`flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'couples'
                ? 'bg-white dark:bg-slate-700 shadow-xs text-rose-600 dark:text-rose-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Heart size={15} />
            <span>تطبیق زوجین</span>
          </button>

          <button
            onClick={() => setActiveTab('proposed')}
            className={`flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'proposed'
                ? 'bg-white dark:bg-slate-700 shadow-xs text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Beaker size={15} />
            <span>پیشنهادی</span>
          </button>
        </div>

        {/* Tab 1: Tests View */}
        {activeTab === 'tests' && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">آزمون‌های روان‌شناختی</h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                  ارزیابی استاندارد با ثبت زمان پاسخ‌دهی، نشانه‌گذاری سوالات و خروجی کامل
                </p>
              </div>

              {activeClient && (
                <div className="text-xs bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-xl font-semibold self-start">
                  ثبت به نام: {activeClient.name} ({activeClient.fileCode})
                </div>
              )}
            </div>

            {/* Development Tests Section */}
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 mt-6 flex items-center gap-1.5">
              <Compass size={15} /> توسعه فردی، شغلی و استعدادیابی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {Object.values(testsIndex)
                .filter((t) => t.category === 'development')
                .map((test) => (
                  <TestCard
                    key={test.id}
                    test={test}
                    draft={drafts[test.id]}
                    onStart={handleStartTestAttempt}
                  />
                ))}
            </div>

            {/* Clinical Tests Section */}
            <h3 className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-3 mt-6 flex items-center gap-1.5">
              <AlertTriangle size={15} /> ارزیابی و غربالگری بالینی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {Object.values(testsIndex)
                .filter((t) => t.category === 'clinical')
                .map((test) => (
                  <TestCard
                    key={test.id}
                    test={test}
                    draft={drafts[test.id]}
                    onStart={handleStartTestAttempt}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Tab 2: Clients & Longitudinal Progress */}
        {activeTab === 'clients' && <ClientsView onViewResult={(r) => setActiveResult(r)} />}

        {/* Tab 3: Couples Matching Engine */}
        {activeTab === 'couples' && <CouplesMatchView />}

        {/* Tab 4: Proposed Tests View */}
        {activeTab === 'proposed' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">آزمون‌های پیشنهادی جهت تایید</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                لیست آزمون‌های معتبر بر اساس استانداردهای روان‌سنجی ایران
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {proposedTests.map((test) => (
                <ProposedTestCard key={test.id} test={test} onApprove={handleApproveProposed} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Resume Draft Modal */}
      {showDraftModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full shadow-2xl p-6 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookmarkCheck size={28} />
            </div>

            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
              پیش‌نویس ذخیره‌شده یافت شد!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              شما قبلاً <span className="font-bold text-amber-600 dark:text-amber-400">{showDraftModal.progressPercent}٪</span> از این آزمون را پاسخ داده‌اید ({Object.keys(showDraftModal.answers).length} سوال از {showDraftModal.totalQuestions}).
              مایلید آزمون را ادامه دهید یا از ابتدا آغاز کنید؟
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleResumeDraft}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
              >
                <Play size={16} fill="currentColor" />
                <span>ادامه آزمون از سوال {(showDraftModal.currentIdx || 0) + 1}</span>
              </button>

              <button
                onClick={handleRestartFromScratch}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw size={16} />
                <span>شروع مجدد از سوال اول</span>
              </button>

              <button
                onClick={() => setShowDraftModal(null)}
                className="w-full py-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-medium"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clinical Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 scale-in-center">
            <div className="p-6 bg-rose-50 dark:bg-rose-950/30 border-b border-rose-100 dark:border-rose-900/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300">هشدار ارزیابی بالینی</h3>
            </div>

            <div className="p-6">
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify mb-6">
                کاربر گرامی، این آزمون در دسته <span className="font-bold">ارزیابی‌های بالینی</span> قرار دارد. خواهشمند است پیش از شروع توجه داشته باشید:
                <br /><br />
                «این نتایج صرفاً جهت غربالگری، خودآگاهی و آگاهی‌بخشی اولیه است و به هیچ‌وجه جایگزین ارزیابی دقیق، مصاحبه ساختاریافته و تشخیص نهایی توسط روان‌پزشک یا روان‌شناس بالینی معتبر <strong>نمی‌باشد</strong>.»
              </p>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-sm transition-colors"
                >
                  انصراف
                </button>
                <button
                  onClick={acceptDisclaimerAndStart}
                  className="flex-1 px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30"
                >
                  <ShieldCheck size={18} />
                  تایید و شروع
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
