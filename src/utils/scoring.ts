import {
  ValidityScaleResult,
  TestDefinition,
  TestResult,
  DetailedAnswerItem,
  FactorResult,
} from '../types';

export const calculateFactorLevel = (percentage: number): 'low' | 'moderate' | 'high' | 'very_high' => {
  if (percentage < 35) return 'low';
  if (percentage < 60) return 'moderate';
  if (percentage < 80) return 'high';
  return 'very_high';
};

export const getLevelText = (level: 'low' | 'moderate' | 'high' | 'very_high'): string => {
  switch (level) {
    case 'low': return 'پایین';
    case 'moderate': return 'متوسط';
    case 'high': return 'نشانه‌های نیازمند توجه';
    case 'very_high': return 'گرایش بارز / نیازمند بررسی در مشاوره';
  }
};

export const getLevelColor = (level: 'low' | 'moderate' | 'high' | 'very_high'): string => {
  switch (level) {
    case 'low': return 'bg-emerald-500';
    case 'moderate': return 'bg-blue-400';
    case 'high': return 'bg-amber-500';
    case 'very_high': return 'bg-rose-500';
  }
};

export const checkValidityScales = (lScore: number, fScore: number, kScore: number): { 
  isValid: boolean; 
  message: string; 
  scales: ValidityScaleResult[] 
} => {
  const scales: ValidityScaleResult[] = [];
  let isValid = true;
  let message = 'پروفایل معتبر است و نشان‌دهنده همکاری مناسب مراجع است.';

  if (lScore > 7) {
    isValid = false;
    message = 'نیاز به بررسی مجدد با دقت بیشتر (احتمال جهت‌گیری دفاعی یا وانمود خوب).';
    scales.push({ name: 'L (دروغ)', score: lScore, status: 'invalid', interpretation: 'تمایل شدید به ارائه تصویر غیرواقعی و مثبت از خود.' });
  } else {
    scales.push({ name: 'L (دروغ)', score: lScore, status: 'valid', interpretation: 'پاسخگویی صادقانه.' });
  }

  if (fScore > 15) {
    isValid = false;
    message = 'نیاز به بررسی مجدد با دقت بیشتر (احتمال پاسخ‌دهی تصادفی، تمارض، یا آشفتگی شدید روان‌شناختی).';
    scales.push({ name: 'F (وانمود بد)', score: fScore, status: 'invalid', interpretation: 'نمره F بسیار بالاست که نشان‌دهنده پاسخ‌های اغراق‌آمیز است.' });
  } else {
    scales.push({ name: 'F (وانمود بد)', score: fScore, status: 'valid', interpretation: 'میزان پذیرش مشکلات در حد هنجار.' });
  }

  if (kScore > 20) {
    scales.push({ name: 'K (انکار)', score: kScore, status: 'caution', interpretation: 'رویکرد تدافعی نسبی در پاسخ‌دهی.' });
  } else {
    scales.push({ name: 'K (انکار)', score: kScore, status: 'valid', interpretation: 'سطح طبیعی از دفاع‌های روانی.' });
  }

  return { isValid, message, scales };
};

// MBTI Types Metadata Dictionary
const mbtiProfiles: Record<string, { title: string; subtitle: string; summary: string }> = {
  'INTJ': { title: 'معمار و استراتژیست (Architect)', subtitle: 'درون‌گرا، شهودی، منطقی، قضاوت‌گر', summary: 'متفکری خلاق، استراتژیک و با اراده پولادین که برای هر کاری برنامه‌ای جامع و بلندمدت دارد.' },
  'INTP': { title: 'منطق‌دان و فیلسوف (Logician)', subtitle: 'درون‌گرا، شهودی، منطقی، ادراکی', summary: 'نوآوری خستگی‌ناپذیر با عطشی سیری‌ناپذیر برای کشف دانش و الگوهای عمیق جهان هستی.' },
  'ENTJ': { title: 'فرمانده و رهبر (Commander)', subtitle: 'برون‌گرا، شهودی، منطقی، قضاوت‌گر', summary: 'رهبری جسور، با انگیزه و قاطع که توانایی خارق‌العاده‌ای در سازماندهی سیستم‌ها و حل موانع دارد.' },
  'ENTP': { title: 'مجادله‌گر و مبتکر (Debater)', subtitle: 'برون‌گرا، شهودی، منطقی، ادراکی', summary: 'متفکری کنجکاو، تیزهوش و بذله‌گو که عاشق چالش‌های فکری و بررسی زوایای پنهان مسائل است.' },
  'INFJ': { title: 'حامی و آرمان‌گرا (Advocate)', subtitle: 'درون‌گرا، شهودی، احساسی، قضاوت‌گر', summary: 'انسانی ژرف‌اندیش، آرام، با بصیرت عمیق و متعهد به هدایت اخلاقی و الهام‌بخشی به دیگران.' },
  'INFP': { title: 'میانجی و درمانگر (Mediator)', subtitle: 'درون‌گرا، شهودی، احساسی، ادراکی', summary: 'فردی شاعرپیشه، مهربان و آرمان‌گرا که بر اساس ارزش‌های درونی خود به دنبال بهبود جهان است.' },
  'ENFJ': { title: 'قهرمان و پیشرو (Protagonist)', subtitle: 'برون‌گرا، شهودی، احساسی، قضاوت‌گر', summary: 'رهبری کاریزماتیک و پرشور که با توانایی برقراری ارتباط عمیق، دیگران را به سوی تعالی هدایت می‌کند.' },
  'ENFP': { title: 'فعال و پویا (Campaigner)', subtitle: 'برون‌گرا، شهودی، احساسی، ادراکی', summary: 'روحیه‌ای پر از شور زندگی، اجتماعی، خلاق و برون‌گرا که همواره فرصت‌های تازه را جستجو می‌کند.' },
  'ISTJ': { title: 'واقع‌گرا و بازرس (Logistician)', subtitle: 'درون‌گرا، حسی، منطقی، قضاوت‌گر', summary: 'فردی عمل‌گرا، حقیقت‌محور، بسیار قابل اعتماد و متعهد به حفظ نظم و سنت‌های ارزشمند.' },
  'ISFJ': { title: 'مدافع و پشتیبان (Defender)', subtitle: 'درون‌گرا، حسی، احساسی، قضاوت‌گر', summary: 'حامی بسیار فداکار، وظیفه‌شناس و خونگرم که همیشه آماده مراقبت از عزیزان خود است.' },
  'ESTJ': { title: 'مجری و مدیر (Executive)', subtitle: 'برون‌گرا، حسی، منطقی، قضاوت‌گر', summary: 'مدیری منظم، مقتدر و سخت‌کوش که در مدیریت پروژه‌ها و افراد بی‌نظیر عمل می‌کند.' },
  'ESFJ': { title: 'سفیر و هماهنگ‌کننده (Consul)', subtitle: 'برون‌گرا، حسی، احساسی، قضاوت‌گر', summary: 'فردی بسیار اجتماعی، دلسوز، محبوب و متعهد به ایجاد هارمونی و اتحاد در جمع.' },
  'ISTP': { title: 'زبردست و کاردان (Virtuoso)', subtitle: 'درون‌گرا، حسی، منطقی، ادراکی', summary: 'آزمایش‌گری جسور و منطقی، مسلط بر ابزارها و مهارت‌های فنی با رویکردی آرام و حل‌مسئله‌محور.' },
  'ISFP': { title: 'ماجراجو و هنرمند (Adventurer)', subtitle: 'درون‌گرا، حسی، احساسی، ادراکی', summary: 'هنرمندی منعطف، جذاب و خلاق که زندگی را مانند بوم نقاشی از تجربیات رنگارنگ می‌بیند.' },
  'ESTP': { title: 'کارآفرین و عمل‌گرا (Entrepreneur)', subtitle: 'برون‌گرا، حسی، منطقی، ادراکی', summary: 'فردی هوشمند، پرانرژی و ریسک‌پذیر که عاشق زیستن در لحظه و حل فوری بحران‌هاست.' },
  'ESFP': { title: 'سرگرم‌کننده و بازیگر (Entertainer)', subtitle: 'برون‌گرا، حسی، احساسی، ادراکی', summary: 'روحیه‌ای سرزنده و پرشور که با حضورش هر محفلی را شاداب و سرگرم‌کننده می‌سازد.' },
};

/**
 * پردازش دقیق و علمی نتایج آزمون بر اساس استانداردهای روان‌سنجی
 */
export const processTestResults = (
  test: TestDefinition,
  rawAnswers: Record<string | number, number>,
  detailedAnswers: DetailedAnswerItem[],
  counselorModeUsed: boolean,
  clientName: string = 'مراجع گرامی',
  clientId?: string
): TestResult => {
  const isLikert7 = test.optionType === 'likert7'; // MBTI (-3 to +3)
  const isLikert6 = test.optionType === 'likert6'; // Young (1 to 6)
  const isLikert5 = test.optionType === 'likert5'; // Holland (1 to 5)

  // Accumulate scores per factor
  const factorMap: Record<string, { name: string; rawSum: number; count: number }> = {};

  test.questions.forEach((q) => {
    if (!factorMap[q.factor]) {
      factorMap[q.factor] = {
        name: q.factorTitle,
        rawSum: 0,
        count: 0,
      };
    }

    let val = rawAnswers[q.id];
    if (val === undefined) return;

    if (q.isReversed) {
      if (isLikert6) val = 7 - val;
      else if (isLikert5) val = 6 - val;
      else if (isLikert7) val = -val;
    }

    factorMap[q.factor].rawSum += val;
    factorMap[q.factor].count += 1;
  });

  const factors: FactorResult[] = Object.keys(factorMap).map((key) => {
    const item = factorMap[key];
    let percentage = 50;
    let maxScore = item.count;

    if (isLikert7) {
      // Scale from -3*count to +3*count -> mapped to 0%..100%
      const maxPossible = item.count * 3;
      maxScore = maxPossible;
      percentage = maxPossible > 0 ? Math.round(((item.rawSum + maxPossible) / (2 * maxPossible)) * 100) : 50;
    } else if (isLikert6) {
      // Scale from 1*count to 6*count
      maxScore = item.count * 6;
      const minPossible = item.count * 1;
      percentage = Math.round(((item.rawSum - minPossible) / (maxScore - minPossible)) * 100);
    } else if (isLikert5) {
      // Scale from 1*count to 5*count
      maxScore = item.count * 5;
      const minPossible = item.count * 1;
      percentage = Math.round(((item.rawSum - minPossible) / (maxScore - minPossible)) * 100);
    }

    percentage = Math.max(0, Math.min(100, percentage));
    const level = calculateFactorLevel(percentage);

    let counselorNote = 'در محدوده نرمال.';
    if (test.id === 'young_schema') {
      const avg = item.count > 0 ? (item.rawSum / item.count) : 0;
      if (avg >= 4.5) {
        counselorNote = 'طرحواره کاملاً فعال و ریشه‌دار (نیازمند توجه ویژه در طرحواره‌درمانی).';
      } else if (avg >= 3.5) {
        counselorNote = 'گرایش متوسط به طرحواره (فعال‌سازی در شرایط تنیدگی).';
      } else {
        counselorNote = 'طرحواره خاموش یا انطباقی.';
      }
    } else if (percentage >= 75) {
      counselorNote = 'گرایش بسیار بالا؛ شاخص بارز در پروفایل مراجع.';
    } else if (percentage <= 25) {
      counselorNote = 'گرایش بسیار پایین در این مقیاس.';
    }

    return {
      key,
      name: item.name,
      score: item.rawSum,
      maxScore,
      percentage,
      level,
      levelText: getLevelText(level),
      description: `شاخص ${item.name} (${percentage}٪)`,
      counselorNote,
    };
  });

  // Calculate flagged and latency metrics
  const flaggedQuestionsCount = detailedAnswers.filter((a) => a.isFlagged).length;
  const rapidResponsesCount = detailedAnswers.filter((a) => a.latencyFlag === 'rapid').length;
  const prolongedResponsesCount = detailedAnswers.filter((a) => a.latencyFlag === 'prolonged').length;

  // Determine Primary Result Dynamically
  let primaryCode = 'PRO-1';
  let primaryTitle = 'پروفایل ارزیابی استاندارد';
  let primarySubtitle = 'خلاصه شاخص‌های روان‌شناختی';
  let primarySummary = 'پاسخ‌های شما با موفقیت پردازش شد و نمودارهای توزیع فاکتورها در زیر آماده بررسی است.';

  if (test.id === 'mbti') {
    // Dynamically calculate MBTI 4-letter code + Identity (-A or -T)
    const e_i = factorMap['E_I'] ? factorMap['E_I'].rawSum : 0;
    const s_n = factorMap['N_S'] ? factorMap['N_S'].rawSum : 0;
    const t_f = factorMap['F_T'] ? factorMap['F_T'].rawSum : 0;
    const j_p = factorMap['J_P'] ? factorMap['J_P'].rawSum : 0;
    const a_t = factorMap['A_T'] ? factorMap['A_T'].rawSum : 0;

    const letterE = e_i >= 0 ? 'E' : 'I';
    const letterN = s_n >= 0 ? 'N' : 'S';
    const letterF = t_f >= 0 ? 'F' : 'T';
    const letterJ = j_p >= 0 ? 'J' : 'P';
    const letterA = a_t >= 0 ? 'A' : 'T';

    const baseCode = `${letterE}${letterN}${letterF}${letterJ}`;
    primaryCode = `${baseCode}-${letterA}`;

    const profile = mbtiProfiles[baseCode] || mbtiProfiles['INFJ'];
    primaryTitle = profile.title;
    primarySubtitle = `${profile.subtitle} (${letterA === 'A' ? 'قاطع و باثبات -A' : 'حساس و کمال‌گرا -T'})`;
    primarySummary = profile.summary;

  } else if (test.id === 'holland') {
    // Sort factors by raw score descending to find Holland Top-3 Code
    const sorted = [...factors].sort((a, b) => b.score - a.score);
    const top3 = sorted.slice(0, 3).map((f) => f.key).join('');
    primaryCode = top3 || 'RIA';
    primaryTitle = `کد رغبت‌سنجی شغلی: ${primaryCode}`;
    primarySubtitle = 'سه بعد شخصیتی-شغلی غالب شما';
    primarySummary = `بر اساس اولویت‌های انتخابی، محیط‌های کاری ایده‌آل شما به ترتیب شامل «${sorted[0]?.name || ''}»، «${sorted[1]?.name || ''}» و «${sorted[2]?.name || ''}» است.`;

  } else if (test.id === 'young_schema') {
    // Identify schemas with significant activation
    const activeSchemas = factors.filter((f) => f.percentage >= 60);
    primaryCode = `طرحواره‌های فعال: ${activeSchemas.length}`;
    primaryTitle = activeSchemas.length > 0 ? 'شناسایی طرحواره‌های ناسازگار فعال' : 'الگوهای شناختی در محدوده انطباقی';
    primarySubtitle = 'ارزیابی ساختارهای شناختی ناسازگار اولیه (YSQ-S3)';
    primarySummary = activeSchemas.length > 0
      ? `در این ارزیابی، تعداد ${activeSchemas.length} طرحواره به عنوان الگوهای پررنگ‌تر شناسایی شدند (از جمله: ${activeSchemas.slice(0, 3).map((s) => s.name).join('، ')}). توجه داشته باشید این موارد صرفاً گرایش‌های ادراکی هستند و بررسی ریشه‌ای آن‌ها در بستر مشاوره و روان‌درمانی فردی توصیه می‌شود.`
      : 'نمرات در اکثر حوزه‌های طرحواره‌ای در بازه کنترل‌شده و متناسب با هنجار جامعه قرار دارند.';
  }

  return {
    id: `res_${Date.now()}`,
    clientId,
    clientName,
    testId: test.id,
    testTitle: test.persianTitle,
    category: test.category,
    date: new Date().toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    timestamp: Date.now(),
    counselorModeUsed,
    isValid: true,
    primaryResult: {
      code: primaryCode,
      title: primaryTitle,
      subtitle: primarySubtitle,
      summary: primarySummary,
      traits: factors.map((f) => f.name),
    },
    factors,
    rawAnswers,
    detailedAnswers,
    flaggedQuestionsCount,
    rapidResponsesCount,
    prolongedResponsesCount,
  };
};
