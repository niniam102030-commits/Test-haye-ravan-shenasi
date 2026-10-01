import { TestResult, CouplesComparisonResult } from '../types';

export const compareCouples = (
  resultA: TestResult,
  resultB: TestResult
): CouplesComparisonResult => {
  const nameA = resultA.clientName || 'پارتنر اول';
  const nameB = resultB.clientName || 'پارتنر دوم';

  const dimensionMatches: CouplesComparisonResult['dimensionMatches'] = [];
  const synergyPoints: string[] = [];
  const conflictAreas: string[] = [];
  const counselorAdvice: string[] = [];

  let totalHarmony = 0;
  let count = 0;

  // If comparing MBTI
  if (resultA.testId === 'mbti' && resultB.testId === 'mbti') {
    const codeA = resultA.primaryResult.code.split('-')[0].toUpperCase();
    const codeB = resultB.primaryResult.code.split('-')[0].toUpperCase();

    // 1. Extraversion / Introversion
    const eA = codeA.includes('E');
    const eB = codeB.includes('E');
    if (eA !== eB) {
      dimensionMatches.push({
        dimension: 'انرژی و تعامل اجتماعی (E / I)',
        partnerAScore: eA ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        partnerBScore: eB ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        harmonyScore: 85,
        analysis: 'ترکیب مکمل جذاب؛ یکی فضا را گرم و اجتماعی می‌کند و دیگری آرامش و خلوت را به رابطه می‌آورد.',
      });
      synergyPoints.push('تکمیل کنندگی در تعاملات اجتماعی: ایجاد تعادل بین حضور در مهمانی‌ها و آرامش در خلوت دونفره.');
      counselorAdvice.push('پارتنر برون‌گرا باید نیاز پارتنر درون‌گرا به تنهایی و شارژ روانی را درک کند و آن را به پای بی‌محلی نگذارد.');
    } else {
      dimensionMatches.push({
        dimension: 'انرژی و تعامل اجتماعی (E / I)',
        partnerAScore: eA ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        partnerBScore: eB ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        harmonyScore: 80,
        analysis: eA ? 'هر دو پرانرژی و عاشق معاشرت با دیگران هستند.' : 'هر دو آرامش و خانه و خلوت مشترک را ترجیح می‌دهند.',
      });
      synergyPoints.push(`هم‌سویی بالا در سطح انرژی اجتماعی (${eA ? 'علاقه‌مندی مشترک به فعالیت‌های جمعی' : 'احترام متقابل به فضای آرام خانه'}).`);
    }

    // 2. Sensing / Intuition
    const nA = codeA.includes('N');
    const nB = codeB.includes('N');
    if (nA === nB) {
      dimensionMatches.push({
        dimension: 'جمع‌آوری اطلاعات و زبان مشترک (S / N)',
        partnerAScore: nA ? 'شهودی (N)' : 'حسی (S)',
        partnerBScore: nB ? 'شهودی (N)' : 'حسی (S)',
        harmonyScore: 92,
        analysis: 'درک متقابل عمیق در گفتگوها؛ هر دو مسائل را با عینک مشابهی می‌بینند.',
      });
      synergyPoints.push('فهم کلامی فوق‌العاده سریع: نیاز بسیار کم به توضیح مکرر منظور به طرف مقابل.');
    } else {
      dimensionMatches.push({
        dimension: 'جمع‌آوری اطلاعات و زبان مشترک (S / N)',
        partnerAScore: nA ? 'شهودی (N)' : 'حسی (S)',
        partnerBScore: nB ? 'شهودی (N)' : 'حسی (S)',
        harmonyScore: 65,
        analysis: 'تفاوت در دیدگاه؛ یکی به واقعیات عینی و جزئیات می‌پردازد و دیگری به ایده‌های کلی و چشم‌انداز آینده.',
      });
      conflictAreas.push('احتمال سوءتفاهم در بیان مقصود: یکی طرف مقابل را «خیال‌پرداز» و دیگری او را «کوته‌بین یا گیرنده در جزئیات» تلقی می‌کند.');
      counselorAdvice.push('در تصمیم‌گیری‌های مالی و زندگی، فرد شهودی ایده را مطرح کند و فرد حسی آن را روی زمین واقعی و با اعداد و ارقام بسنجد.');
    }

    // 3. Thinking / Feeling
    const tA = codeA.includes('T');
    const tB = codeB.includes('T');
    if (tA !== tB) {
      dimensionMatches.push({
        dimension: 'تصمیم‌گیری و حل تعارض (T / F)',
        partnerAScore: tA ? 'منطقی (T)' : 'احساسی (F)',
        partnerBScore: tB ? 'منطقی (T)' : 'احساسی (F)',
        harmonyScore: 70,
        analysis: 'یکی از شایع‌ترین منابع چالش زوجین؛ فرد T با منطق و نقد حل مسئله می‌کند، فرد F به حمایت عاطفی نیاز دارد.',
      });
      conflictAreas.push('چالش در ابراز ناراحتی: پارتنر منطقی ممکن است انتقاد تند کند و پارتنر احساسی آن را حمله به هویت فردی خود بداند.');
      counselorAdvice.push('در هنگام بروز اختلاف، پارتنر منطقی قبل از ارائه راهکار ابتدا همدلی کلامی نشان دهد؛ پارتنر احساسی نیز موضوع را شخصی برداشت نکند.');
    } else {
      dimensionMatches.push({
        dimension: 'تصمیم‌گیری و حل تعارض (T / F)',
        partnerAScore: tA ? 'منطقی (T)' : 'احساسی (F)',
        partnerBScore: tB ? 'منطقی (T)' : 'احساسی (F)',
        harmonyScore: 82,
        analysis: tA ? 'هر دو با منطق و بحث استدلالی مسائل را پیش می‌برند.' : 'هر دو بسیار با ملاحظه و محافظ احساسات یکدیگر هستند.',
      });
      synergyPoints.push(`هم‌پوشانی سبک عاطفی (${tA ? 'حل مسئله بدون دراماتیک کردن' : 'همدلی و درک عاطفی بسیار بالا'}).`);
    }

    // 4. Judging / Perceiving
    const jA = codeA.includes('J');
    const jB = codeB.includes('J');
    if (jA !== jB) {
      dimensionMatches.push({
        dimension: 'سبک زندگی و نظم (J / P)',
        partnerAScore: jA ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        partnerBScore: jB ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        harmonyScore: 72,
        analysis: 'فرد J نیازمند برنامه دقیق است، در حالی که فرد P انعطاف‌پذیری و تصمیم‌گیری لحظه‌ای را دوست دارد.',
      });
      conflictAreas.push('تنش در مسافرت و مدیریت کارهای خانه: فرد J از شلختگی کلافه می‌شود و فرد P از مقررات زیاد احساس خفگی می‌کند.');
      counselorAdvice.push('برای امور مهم خانه (مسافرت، بودجه) چارچوب‌های کلی مشخص کنید اما در جزئیات به همدیگر آزادی عمل بدهید.');
    } else {
      dimensionMatches.push({
        dimension: 'سبک زندگی و نظم (J / P)',
        partnerAScore: jA ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        partnerBScore: jB ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        harmonyScore: 88,
        analysis: jA ? 'هر دو برنامه‌ریز، سر وقت و منظم هستند.' : 'هر دو منعطف، عاشق ماجراجویی‌های بدون برنامه قبلی هستند.',
      });
      synergyPoints.push(`هماهنگی بالای روزمره (${jA ? 'برنامه‌ریزی دقیق بدون اتلاف وقت' : 'سازگاری بالا با تغییرات ناگهانی'}).`);
    }

    totalHarmony = dimensionMatches.reduce((acc, d) => acc + d.harmonyScore, 0) / dimensionMatches.length;
  } else {
    // Generic factor-by-factor comparison for Young Schema or Holland
    resultA.factors.forEach((fA) => {
      const fB = resultB.factors.find((f) => f.key === fA.key);
      if (fB) {
        count++;
        const diff = Math.abs(fA.percentage - fB.percentage);
        const harmony = Math.max(20, 100 - diff);
        totalHarmony += harmony;

        dimensionMatches.push({
          dimension: fA.name,
          partnerAScore: `${fA.percentage}%`,
          partnerBScore: `${fB.percentage}%`,
          harmonyScore: harmony,
          analysis: diff < 20 ? 'تطابق و تشابه بالا' : 'اختلاف مشهود در این شاخص',
        });

        if (diff > 40) {
          conflictAreas.push(`اختلاف قابل توجه در مقیاس «${fA.name}» (${nameA}: ${fA.percentage}% در برابر ${nameB}: ${fB.percentage}%).`);
        } else if (diff < 15) {
          synergyPoints.push(`هم‌پوشانی و درک متقابل بالا در حوزه «${fA.name}».`);
        }
      }
    });

    if (count > 0) {
      totalHarmony = Math.round(totalHarmony / count);
    } else {
      totalHarmony = 75;
    }

    counselorAdvice.push('اختلاف در نمرات الزاماً نشانه عدم سازگاری نیست؛ بلکه نیاز به گفتگوی صریح و تنظیم انتظارات متقابل در جلسات پیش از ازدواج دارد.');
  }

  const overallCompatibility = Math.round(totalHarmony);
  const compatibilityLevel: 'high' | 'moderate' | 'challenging' =
    overallCompatibility >= 80 ? 'high' : overallCompatibility >= 65 ? 'moderate' : 'challenging';

  let compatibilitySummary = '';
  if (compatibilityLevel === 'high') {
    compatibilitySummary = `سازگاری بین ${nameA} و ${nameB} در سطح بسیار مطلوب و هماهنگ ارزیابی می‌شود. پتانسیل بالای درک متقابل و رشد دونفره وجود دارد.`;
  } else if (compatibilityLevel === 'moderate') {
    compatibilitySummary = `سازگاری در حد متوسط و رضایت‌بخش با وجود تفاوت‌های شخصیتی کلیدی است. با آموزش مهارت‌های ارتباطی، رابطه شکوفا خواهد شد.`;
  } else {
    compatibilitySummary = `تفاوت‌های اساسی در نحوه نگاه به زندگی و تصمیم‌گیری مشاهده می‌شود. نیازمند مشاوره متمرکز پیش از ازدواج جهت مدیریت تعارضات است.`;
  }

  return {
    partnerAName: nameA,
    partnerBName: nameB,
    testTitle: resultA.testTitle,
    overallCompatibility,
    compatibilityLevel,
    compatibilitySummary,
    synergyPoints,
    conflictAreas: conflictAreas.length > 0 ? conflictAreas : ['تعارض ساختاری بارزی مشاهده نشد.'],
    counselorAdvice,
    dimensionMatches,
  };
};
