import React from 'react';
import { TestResult } from '../types';
import { RadarChart } from './RadarChart';

interface Props {
  result: TestResult;
}

export const TestVisualizations: React.FC<Props> = ({ result }) => {
  const { testId, factors } = result;

  // 1. MBTI Bipolar Chart
  if (testId === 'mbti') {
    const getBipolarData = (positiveKey: string, negativeKey: string, positiveName: string, negativeName: string, color: string) => {
      const factor = factors.find(f => f.key === `${positiveKey}_${negativeKey}` || f.key === `${negativeKey}_${positiveKey}`);
      let leftPct = 50;
      let rightPct = 50;
      if (factor) {
         rightPct = factor.percentage;
         leftPct = 100 - factor.percentage;
      }
      return { pName: positiveName, nName: negativeName, leftPct, rightPct, color };
    };

    const axes = [
      getBipolarData('E', 'I', 'برون‌گرا (E)', 'درون‌گرا (I)', 'bg-emerald-500'),
      getBipolarData('N', 'S', 'شهودی (N)', 'حسی (S)', 'bg-amber-500'),
      getBipolarData('F', 'T', 'احساسی (F)', 'منطقی (T)', 'bg-indigo-500'),
      getBipolarData('J', 'P', 'ساختارگرا (J)', 'منعطف (P)', 'bg-rose-500'),
      getBipolarData('A', 'T', 'قاطع (A)', 'محتاط (T)', 'bg-sky-500'),
    ];

    return (
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-6">
        <h2 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-6 text-center">طیف‌های شخصیتی MBTI</h2>
        <div className="space-y-8">
          {axes.map((ax, i) => {
            if (ax.leftPct === 50 && ax.rightPct === 50 && i === 4) return null; // Skip A_T if not present
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className={ax.leftPct >= ax.rightPct ? 'text-slate-900 dark:text-white' : 'opacity-60'}>{ax.nName} ({ax.leftPct}%)</span>
                  <span className={ax.rightPct >= ax.leftPct ? 'text-slate-900 dark:text-white' : 'opacity-60'}>{ax.pName} ({ax.rightPct}%)</span>
                </div>
                <div className="relative h-5 w-full bg-slate-200 dark:bg-slate-700 rounded-full flex">
                  {/* Left Side */}
                  <div className="w-1/2 h-full flex justify-end">
                    <div className={`h-full ${ax.color} rounded-l-full transition-all duration-1000 ${ax.leftPct >= ax.rightPct ? 'opacity-100' : 'opacity-30'}`} style={{ width: `${ax.leftPct >= ax.rightPct ? (ax.leftPct - 50) * 2 : 0}%` }} />
                  </div>
                  {/* Right Side */}
                  <div className="w-1/2 h-full flex justify-start">
                    <div className={`h-full ${ax.color} rounded-r-full transition-all duration-1000 ${ax.rightPct >= ax.leftPct ? 'opacity-100' : 'opacity-30'}`} style={{ width: `${ax.rightPct >= ax.leftPct ? (ax.rightPct - 50) * 2 : 0}%` }} />
                  </div>
                  {/* Center Divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white dark:bg-slate-900 z-10 -ml-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Cattell 16PF (Sten Scores 1-10)
  if (testId === 'cattell') {
    return (
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-6 overflow-hidden">
        <h2 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-6 text-center">پروفایل شخصیتی ۱۶ عاملی (نمرات استن)</h2>
        <div className="relative pt-6 pb-2 w-full">
          {/* Average Zone Overlay (Sten 4-7) */}
          <div className="absolute top-0 bottom-0 left-[30%] right-[30%] bg-indigo-50/50 dark:bg-indigo-900/10 border-x border-indigo-200 dark:border-indigo-800/50 rounded-sm z-0" />
          
          <div className="relative z-10 space-y-4">
            {factors.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1/4 text-right text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 leading-tight">
                  {f.name.split('-')[0] || f.name}
                </div>
                <div className="w-3/4 flex items-center relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full">
                  <div 
                    className="absolute h-3 rounded-full bg-indigo-500 shadow-sm transition-all duration-1000"
                    style={{ left: 0, width: `${(f.score / 10) * 100}%` }}
                  />
                  <div 
                    className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full shadow-md -translate-y-0.5 -translate-x-2"
                    style={{ left: `${(f.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between text-[10px] text-slate-400 mt-4 px-[25%] font-bold">
            <span>گرایش چپ</span>
            <span>متوسط</span>
            <span>گرایش راست</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Holland (Radar Chart)
  if (testId === 'holland' || testId === 'eq' || testId === 'neo') {
    const radarData = factors.map((f) => ({
      label: f.name.length > 15 ? f.name.slice(0, 15) + '...' : f.name,
      value: f.percentage,
      max: 100,
    }));
    return (
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-6 flex flex-col items-center">
        <h2 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-2 text-center">پروفایل چندوجهی ویژگی‌ها</h2>
        <RadarChart data={radarData} size={260} color="#0284c7" />
        
        <div className="w-full mt-6 space-y-3">
          {factors.sort((a,b) => b.percentage - a.percentage).map((f, i) => (
            <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <span className="font-bold text-slate-700 dark:text-slate-200">{f.name}</span>
              <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{f.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. Clinical Tests (DASS, Schema, Dark Triad) - Strict Color Coding
  const isClinical = ['dass', 'young_schema', 'dark_triad'].includes(testId);
  const isStrengths = testId === 'via';
  
  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-6">
      <h2 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-6 text-center">جزئیات و شدت ویژگی‌ها</h2>
      <div className="space-y-4">
        {factors.sort((a, b) => b.percentage - a.percentage).map((f, i) => {
          let color = 'bg-indigo-500';
          let badge = '';
          
          if (isClinical) {
            if (f.percentage >= 70) { color = 'bg-rose-500'; badge = 'شدید/هشدار'; }
            else if (f.percentage >= 40) { color = 'bg-amber-500'; badge = 'متوسط'; }
            else { color = 'bg-emerald-500'; badge = 'نرمال'; }
          } else if (isStrengths) {
            if (f.percentage >= 75) { color = 'bg-emerald-500'; badge = 'نقطه قوت برتر'; }
            else if (f.percentage >= 50) { color = 'bg-sky-500'; badge = 'خوب'; }
            else { color = 'bg-slate-400'; badge = 'معمولی'; }
          } else {
            color = 'bg-indigo-500';
          }

          return (
            <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  {f.name}
                  {badge && (
                    <span className={`px-1.5 py-0.5 rounded text-[10px] text-white ${color} bg-opacity-90`}>{badge}</span>
                  )}
                </span>
                <span className="text-slate-500">{f.percentage}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color} transition-all duration-1000`}
                  style={{ width: `${f.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
