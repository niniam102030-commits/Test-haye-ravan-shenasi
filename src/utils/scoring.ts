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
  const isLikert5 = test.optionType === 'likert5'; // Holland / Gardner / Enrich (1 to 5) or NEO (0 to 4)
  const isLikert4 = test.optionType === 'likert4'; // DASS (0 to 3)
  const isCattell = test.id === 'cattell'; // Cattell (0, 1, 2)
  const isNeo = test.id === 'neo'; // NEO (0 to 4)

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
      else if (isNeo) val = 4 - val;
      else if (isLikert5) val = 6 - val;
      else if (isLikert7) val = -val;
      else if (isLikert4) val = 3 - val;
      else if (isCattell) val = 2 - val;
    }

    factorMap[q.factor].rawSum += val;
    factorMap[q.factor].count += 1;
  });

  const factors: FactorResult[] = Object.keys(factorMap).map((key) => {
    const item = factorMap[key];
    let percentage = 50;
    let maxScore = item.count;

    if (isLikert7) {
      const maxPossible = item.count * 3;
      maxScore = maxPossible;
      percentage = maxPossible > 0 ? Math.round(((item.rawSum + maxPossible) / (2 * maxPossible)) * 100) : 50;
    } else if (isLikert6) {
      maxScore = item.count * 6;
      const minPossible = item.count * 1;
      percentage = Math.round(((item.rawSum - minPossible) / (maxScore - minPossible)) * 100);
    } else if (isNeo) {
      maxScore = item.count * 4;
      percentage = maxScore > 0 ? Math.round((item.rawSum / maxScore) * 100) : 50;
    } else if (isLikert5) {
      maxScore = item.count * 5;
      const minPossible = item.count * 1;
      percentage = Math.round(((item.rawSum - minPossible) / (maxScore - minPossible)) * 100);
    } else if (isLikert4) {
      maxScore = item.count * 3;
      percentage = maxScore > 0 ? Math.round((item.rawSum / maxScore) * 100) : 0;
    } else if (isCattell) {
      // Cattell raw score (0 to count*2), mapped to percentage and Sten score (1-10)
      maxScore = item.count * 2;
      percentage = maxScore > 0 ? Math.round((item.rawSum / maxScore) * 100) : 50;
    }

    percentage = Math.max(0, Math.min(100, percentage));
    const level = calculateFactorLevel(percentage);

    let counselorNote = 'در محدوده نرمال و متوازن.';
    if (test.id === 'young_schema') {
      const avg = item.count > 0 ? item.rawSum / item.count : 0;
      if (avg >= 4.5) {
        counselorNote = 'طرحواره کاملاً فعال و ریشه‌دار (نیازمند توجه ویژه در طرحواره‌درمانی).';
      } else if (avg >= 3.5) {
        counselorNote = 'گرایش متوسط به طرحواره (فعال‌سازی در شرایط تنیدگی).';
      } else {
        counselorNote = 'طرحواره خاموش یا انطباقی.';
      }
    } else if (test.id === 'dass') {
      const score = item.rawSum;
      if (key === 'depression') {
        if (score <= 4) counselorNote = 'نرمال (خلق طبیعی، بدون نشانه بالینی افسردگی)';
        else if (score <= 6) counselorNote = 'افسردگی خفیف (افت اندک انرژی و خلق)';
        else if (score <= 10) counselorNote = 'افسردگی متوسط (نیازمند بررسی بالینی و فعال‌سازی رفتاری)';
        else if (score <= 13) counselorNote = 'افسردگی شدید (نشانه‌های بالینی پررنگ، نیازمند مداخله روان‌درمانی)';
        else counselorNote = 'افسردگی بسیار شدید (اولویت فوری در ارزیابی تخصصی بالینی)';
      } else if (key === 'anxiety') {
        if (score <= 3) counselorNote = 'نرمال (پاسخ‌های اضطرابی در محدوده طبیعی)';
        else if (score <= 5) counselorNote = 'اضطراب خفیف (تنش‌های بدنی گهگاهی)';
        else if (score <= 7) counselorNote = 'اضطراب متوسط (برانگیختگی خودمختار قابل توجه)';
        else if (score <= 9) counselorNote = 'اضطراب شدید (علائم فیزیولوژیک بارز، نیازمند تکنیک‌های آرام‌سازی)';
        else counselorNote = 'اضطراب بسیار شدید (حملات اضطرابی یا پانیک احتمالی، نیازمند مداخله بالینی)';
      } else if (key === 'stress') {
        if (score <= 7) counselorNote = 'نرمال (تحمل فشار و استرس در محدوده طبیعی)';
        else if (score <= 9) counselorNote = 'استرس خفیف (تحریک‌پذیری ملایم)';
        else if (score <= 12) counselorNote = 'استرس متوسط (تنش مداوم، نیاز به مدیریت زمان و استرس)';
        else if (score <= 16) counselorNote = 'استرس شدید (احتمال فرسودگی روانی و کاهش تاب‌آوری)';
        else counselorNote = 'استرس بسیار شدید (تنش بسیار بالا و خطر فرسودگی کامل روانی)';
      }
    } else if (isCattell) {
      const sten = Math.round(1 + (percentage / 100) * 9);
      if (sten >= 8) {
        counselorNote = `نمره استان بالا (${sten}): گرایش پررنگ به قطب مثبت عامل.`;
      } else if (sten <= 3) {
        counselorNote = `نمره استان پایین (${sten}): گرایش به قطب منفی عامل.`;
      } else {
        counselorNote = `نمره استان متوسط (${sten}): تعادل میان دو قطب عامل.`;
      }
    } else if (test.id === 'neo') {
      if (percentage >= 70) {
        counselorNote = 'سطح نمره بالا در هنجار آزمون؛ یکی از ارکان بارز در سازمان شخصیتی.';
      } else if (percentage <= 30) {
        counselorNote = 'سطح نمره پایین در هنجار آزمون؛ گرایش به سمت قطب متضاد عامل.';
      } else {
        counselorNote = 'در دامنه هنجار و متوسط جمعیت عمومی.';
      }
    } else if (percentage >= 75) {
      counselorNote = 'گرایش بسیار بالا؛ شاخص بارز در پروفایل مراجع.';
    } else if (percentage <= 25) {
      counselorNote = 'گرایش بسیار پایین در این مقیاس.';
    }

    const sten = isCattell ? Math.min(10, Math.max(1, Math.round(1 + (percentage / 100) * 9))) : 0;

    return {
      key,
      name: item.name,
      score: isCattell ? sten : item.rawSum,
      maxScore: isCattell ? 10 : maxScore,
      percentage,
      level,
      levelText: isCattell ? `استن ${sten}` : getLevelText(level),
      description: isCattell ? `نمره استن استاندارد (Sten): ${sten} از ۱۰` : `شاخص ${item.name} (${percentage}٪)`,
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

  } else if (test.id === 'dass') {
    const depF = factors.find((f) => f.key === 'depression');
    const anxF = factors.find((f) => f.key === 'anxiety');
    const strF = factors.find((f) => f.key === 'stress');

    const depScore = depF ? depF.score : 0;
    const anxScore = anxF ? anxF.score : 0;
    const strScore = strF ? strF.score : 0;

    const getDepLabel = (s: number) => (s <= 4 ? 'نرمال' : s <= 6 ? 'خفیف' : s <= 10 ? 'متوسط' : s <= 13 ? 'شدید' : 'بسیار شدید');
    const getAnxLabel = (s: number) => (s <= 3 ? 'نرمال' : s <= 5 ? 'خفیف' : s <= 7 ? 'متوسط' : s <= 9 ? 'شدید' : 'بسیار شدید');
    const getStrLabel = (s: number) => (s <= 7 ? 'نرمال' : s <= 9 ? 'خفیف' : s <= 12 ? 'متوسط' : s <= 16 ? 'شدید' : 'بسیار شدید');

    primaryCode = `افسردگی: ${getDepLabel(depScore)} | اضطراب: ${getAnxLabel(anxScore)} | استرس: ${getStrLabel(strScore)}`;
    primaryTitle = 'پروفایل بالینی مقیاس DASS-21';
    primarySubtitle = 'شدت علائم عاطفی منفی بر اساس مقیاس استاندارد لوویبوند';
    primarySummary = `نتایج غربالگری نشان می‌دهد: نمره افسردگی شما برابر با ${depScore} (${getDepLabel(depScore)})، نمره اضطراب برابر با ${anxScore} (${getAnxLabel(anxScore)}) و نمره استرس برابر با ${strScore} (${getStrLabel(strScore)}) است. این مقیاس ابزار غربالگری است و برای تشخیص قطعی یا درمان نیاز به مصاحبه تخصصی با روانشناس می‌باشد.`;

  } else if (test.id === 'neo') {
    const sorted = [...factors].sort((a, b) => b.percentage - a.percentage);
    const highest = sorted[0];
    const lowest = sorted[sorted.length - 1];

    primaryCode = `ابعاد برجسته: ${highest?.name.split(' ')[0] || ''} و ${sorted[1]?.name.split(' ')[0] || ''}`;
    primaryTitle = 'پروفایل پنج عامل بزرگ شخصیت (NEO-FFI)';
    primarySubtitle = 'سازماندهی ابعاد بنیادین روان‌شناختی پنج‌گانه';
    primarySummary = `بر اساس الگوی پاسخ‌های شما در پرسشنامه ۶۰ سوالی نئو، بارزترین ویژگی شخصیتی شما «${highest?.name || ''}» با ${highest?.percentage || 0}٪ و متعادل‌ترین/پایین‌ترین شاخص «${lowest?.name || ''}» با ${lowest?.percentage || 0}٪ ارزیابی شده است. این ساختار نشان‌دهنده سبک انطباق رفتاری و ارتباطی شما در محیط کار و زندگی فردی است.`;

  } else if (test.id === 'gardner') {
    const sorted = [...factors].sort((a, b) => b.score - a.score);
    const top3 = sorted.slice(0, 3);

    primaryCode = top3.map((t) => t.name.split(' ')[0]).join(' + ');
    primaryTitle = 'سه استعداد برتر در هوش‌های چندگانه';
    primarySubtitle = `هوش غالب: ${top3[0]?.name || ''}`;
    primarySummary = `بر اساس نظریه هاوارد گاردنر، برجسته‌ترین هوش‌های شما به ترتیب شامل «${top3[0]?.name || ''}» (${top3[0]?.percentage || 0}٪)، «${top3[1]?.name || ''}» (${top3[1]?.percentage || 0}٪) و «${top3[2]?.name || ''}» (${top3[2]?.percentage || 0}٪) است. هدایت تحصیلی و شغلی متناسب با این سه استعداد حداکثر شکوفایی فردی را به همراه خواهد داشت.`;

  } else if (test.id === 'enrich') {
    const avgScore = Math.round(factors.reduce((sum, f) => sum + f.percentage, 0) / (factors.length || 1));
    const strengths = factors.filter((f) => f.percentage >= 65);
    const growthAreas = factors.filter((f) => f.percentage < 45);

    primaryCode = `شاخص رضایت کلی: ${avgScore}٪`;
    primaryTitle = avgScore >= 70 ? 'کیفیت رابطه پویا، سازنده و رضایت‌بخش' : avgScore >= 50 ? 'رابطه با ثبات متوسط و نیازمند تقویت گفتگو' : 'رابطه با چالش‌های ساختاری و نیازمند بررسی تخصصی';
    primarySubtitle = `دارای ${strengths.length} حوزه قوت و ${growthAreas.length} زمینه نیازمند رسیدگی`;
    primarySummary = `میانگین شاخص سازگاری و کیفیت رابطه در ۷ بعد ارزیابی‌شده برابر با ${avgScore}٪ است. حوزه‌های قوت و هم‌افزایی شامل (${strengths.map((s) => s.name.split(' ')[0]).join('، ') || 'تعادل نسبی'}) و حوزه‌های نیازمند گفتگو و تمرین مهارت‌های ارتباطی شامل (${growthAreas.map((g) => g.name.split(' ')[0]).join('، ') || 'بدون تعارض بحرانی'}) ارزیابی شده‌اند.`;

  } else if (test.id === 'attachment') {
    const anx = factors.find(f => f.key === 'anxiety' || f.key === 'Anxiety' || f.key === 'Anxious')?.percentage || 0;
    const avo = factors.find(f => f.key === 'avoidance' || f.key === 'Avoidance' || f.key === 'Avoidant')?.percentage || 0;
    let style = 'ایمن';
    if (anx > 50 && avo > 50) style = 'اضطرابی-اجتنابی (ترسان)';
    else if (anx > 50) style = 'اضطرابی-مشغول';
    else if (avo > 50) style = 'اجتنابی-طردکننده';
    primaryCode = `سبک دلبستگی: ${style}`;
    primaryTitle = 'آزمون تجربیات در روابط نزدیک (ECR)';
    primarySubtitle = 'تحلیل دینامیک دلبستگی بر اساس مدل دونمودی';
    primarySummary = `بر اساس پاسخ‌های شما، سبک دلبستگی غالب شما در روابط عاطفی و نزدیک به احتمال زیاد '${style}' است. نمره اضطراب شما ${anx}٪ و نمره اجتناب شما ${avo}٪ محاسبه شد.`;
  } else if (test.id === 'eq') {
    const avgScore = Math.round(factors.reduce((sum, f) => sum + f.percentage, 0) / (factors.length || 1));
    primaryCode = `هوش هیجانی کل: ${avgScore}٪`;
    primaryTitle = 'آزمون هوش هیجانی شرینگ';
    primarySubtitle = 'سنجش توانمندی‌های ادراک و مدیریت هیجانات';
    primarySummary = `نمره کلی هوش هیجانی (EQ) شما ${avgScore}٪ است. این نمره نشان‌دهنده توانایی شما در شناسایی، درک، و مدیریت احساسات خود و دیگران می‌باشد.`;
  } else if (test.id === 'dark_triad') {
    const mach = factors.find(f => f.key.toLowerCase().includes('mach'))?.percentage || 0;
    const narc = factors.find(f => f.key.toLowerCase().includes('narc'))?.percentage || 0;
    const psyc = factors.find(f => f.key.toLowerCase().includes('psyc'))?.percentage || 0;
    primaryCode = `ماکیاولیسم: ${mach}٪ | نارسیسیسم: ${narc}٪ | سایکوپاتی: ${psyc}٪`;
    primaryTitle = 'آزمون شخصیت تاریک (SD3)';
    primarySubtitle = 'سنجش ابعاد پنهان و تاریک شخصیت';
    primarySummary = `نتایج شما در سه‌گانه تاریک بدین شرح است: ویژگی‌های ماکیاولیستی (منفعت‌طلبی و دستکاری ذهن دیگران) ${mach}٪، نارسیسیسم (خودشیفتگی و نیاز به توجه) ${narc}٪، و سایکوپاتی (فقدان همدلی و تکانشگری) ${psyc}٪.`;
  } else if (test.id === 'via') {
    const sorted = [...factors].sort((a, b) => b.percentage - a.percentage);
    const top3 = sorted.slice(0, 3).map(f => f.name).join('، ');
    primaryCode = `نقاط قوت برتر: ${top3}`;
    primaryTitle = 'آزمون نقاط قوت منش (VIA)';
    primarySubtitle = 'شناسایی فضایل و توانمندی‌های مثبت شخصیتی';
    primarySummary = `بررسی پاسخ‌های شما نشان می‌دهد که بارزترین نقاط قوت شخصیتی شما عبارتند از: ${top3}. این نقاط قوت هسته اصلی شخصیت مثبت و ارزش‌های بنیادین شما را شکل می‌دهند.`;
  } else if (test.id === 'cattell') {
    // Calculate Cattell Second-Order Factors:
    // Helper to get sten score 1-10 for factor
    const getSten = (k: string) => {
      const f = factors.find((x) => x.key === k);
      return f ? Math.round(1 + (f.percentage / 100) * 9) : 5;
    };

    // 1. اضطراب (Anxiety): C-, L+, O+, Q4+
    const anxietyScore = Math.round(((11 - getSten('C')) + getSten('L') + getSten('O') + getSten('Q4')) / 4);
    // 2. برون‌گرایی (Extraversion): A+, F+, H+, Q2-
    const extraversionScore = Math.round((getSten('A') + getSten('F') + getSten('H') + (11 - getSten('Q2'))) / 4);
    // 3. استقلال (Independence): E+, H+, L+, Q1+
    const independenceScore = Math.round((getSten('E') + getSten('H') + getSten('L') + getSten('Q1')) / 4);
    // 4. سرسختی ذهنی (Tough-Mindedness): I-, M-, A-, Q1-
    const toughMindednessScore = Math.round(((11 - getSten('I')) + (11 - getSten('M')) + (11 - getSten('A')) + (11 - getSten('Q1'))) / 4);
    // 5. خودکنترلی و انضباط (Self-Control): G+, Q3+
    const selfControlScore = Math.round((getSten('G') + getSten('Q3')) / 2);

    primaryCode = `اضطراب: ${anxietyScore}/۱۰ | برون‌گرایی: ${extraversionScore}/۱۰`;
    primaryTitle = 'پروفایل بالینی ۱۶ عاملی کتل (16PF)';
    primarySubtitle = 'نتایج ۱۶ فاکتور اولیه + ۵ عامل مرتبه دوم کلان';
    primarySummary = `عوامل درجه دوم استخراج‌شده: سطح اضطراب کلی (${anxietyScore} از ۱۰)، برون‌گرایی (${extraversionScore} از ۱۰)، استقلال و جسارت (${independenceScore} از ۱۰)، سرسختی ذهنی (${toughMindednessScore} از ۱۰) و انضباط شخصی (${selfControlScore} از ۱۰). این ترکیب تصویر دقیقی از سازمان شخصیتی مراجع را نشان می‌دهد.`;
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
