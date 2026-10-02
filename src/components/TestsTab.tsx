import React, { useState } from 'react';
import { TestDefinition, SavedDraft, ClientProfile } from '../types';
import { TestCard } from './TestCard';
import { Compass, AlertTriangle, Users, Search, Brain, Heart, Briefcase, UserCheck } from 'lucide-react';
import { testsIndex } from '../data';
import { getUsage } from '../utils/draftStorage';

interface TestsTabProps {
  drafts: Record<string, SavedDraft>;
  activeClient: ClientProfile | null;
  onStartTest: (id: string) => void;
}

export const TestsTab: React.FC<TestsTabProps> = ({ drafts, activeClient, onStartTest }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const allTests = Object.values(testsIndex);
  
  // Sort by dynamic usage + static popularity
  const getSortScore = (t: TestDefinition) => {
    const usage = getUsage(t.id) || 0;
    const pop = t.popularity || 0;
    return (usage * 10) + pop;
  };
  
  const sortedTests = [...allTests].sort((a, b) => getSortScore(b) - getSortScore(a));
  
  const filteredTests = sortedTests.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.persianTitle.includes(searchQuery)
  );

  const categories = [
    { id: 'personality', title: 'شخصیت‌شناسی و رفتار', icon: <UserCheck size={16} />, color: 'text-indigo-600 dark:text-indigo-400' },
    { id: 'clinical', title: 'بالینی و سلامت روان', icon: <AlertTriangle size={16} />, color: 'text-rose-500' },
    { id: 'relationship', title: 'عشق و روابط بین‌فردی', icon: <Heart size={16} />, color: 'text-pink-500' },
    { id: 'career', title: 'استعدادیابی و توانمندی‌ها', icon: <Briefcase size={16} />, color: 'text-emerald-500' }
  ];

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">آزمون‌های روان‌سنجی</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
              ارزیابی استاندارد با دقت کلینیکال، نشانه‌گذاری سوالات و خروجی کامل
            </p>
          </div>
          {activeClient && (
            <div className="text-xs bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-xl font-semibold self-start">
              آزمون برای: {activeClient.name} ({activeClient.fileCode})
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mt-2">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pr-10 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow shadow-sm"
            placeholder="جستجوی آزمون (مثلاً نئو، MBTI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {categories.map(cat => {
        const catTests = filteredTests.filter(t => t.category === cat.id);
        if (catTests.length === 0) return null;
        return (
          <div key={cat.id} className="mb-6">
            <h3 className={`text-xs font-bold ${cat.color} uppercase tracking-wider mb-3 mt-6 flex items-center gap-1.5`}>
              {cat.icon} {cat.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {catTests.map((test) => (
                <TestCard
                  key={test.id}
                  test={test}
                  draft={drafts[test.id]}
                  onStart={onStartTest}
                />
              ))}
            </div>
          </div>
        );
      })}
      
      {filteredTests.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          <Brain size={48} className="mx-auto mb-3 opacity-20" />
          <p className="text-sm font-semibold">آزمونی یافت نشد!</p>
        </div>
      )}
    </div>
  );
};
