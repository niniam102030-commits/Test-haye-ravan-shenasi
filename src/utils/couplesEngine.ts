import { TestResult, TwoPersonsComparisonResult, ChallengeItem } from '../types';

/**
 * موتور مقایسه و ارزیابی بین‌فردی دو کاربر در انواع آزمون‌ها
 * شناسایی زمینه‌های هماهنگی، مکمل‌بودن و چالش‌های احتمالی با رویکرد آگاهی‌بخش
 */
export const compareTwoPersons = (
  resultA: TestResult,
  resultB: TestResult
): TwoPersonsComparisonResult => {
  const nameA = resultA.clientName || 'شخص اول';
  const nameB = resultB.clientName || 'شخص دوم';

  const dimensionMatches: TwoPersonsComparisonResult['dimensionMatches'] = [];
  const synergyPoints: string[] = [];
  const challengeAreas: ChallengeItem[] = [];
  const counselorAdvice: string[] = [];

  let totalHarmony = 0;
  let count = 0;

  // ۱. مقایسه در آزمون MBTI
  if (resultA.testId === 'mbti' && resultB.testId === 'mbti') {
    const codeA = resultA.primaryResult.code.split('-')[0].toUpperCase();
    const codeB = resultB.primaryResult.code.split('-')[0].toUpperCase();

    // بعد اول: برون‌گرایی در برابر درون‌گرایی (E / I)
    const eA = codeA.includes('E');
    const eB = codeB.includes('E');
    if (eA !== eB) {
      dimensionMatches.push({
        dimension: 'انرژی و تعامل اجتماعی (E / I)',
        personAScore: eA ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        personBScore: eB ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        harmonyScore: 82,
        analysis: 'ترکیب مکمل؛ یکی پویایی و ارتباطات اجتماعی را تقویت می‌کند و دیگری آرامش و خلوت عمیق را به ارمغان می‌آورد.',
      });
      synergyPoints.push('ایجاد تعادل رفتاری میان حضور فعال در محافل اجتماعی و حفظ اوقات آرام و انفرادی.');
      challengeAreas.push({
        title: 'تفاوت در نیاز به خلوت در برابر حضور در جمع',
        explanation: `${eA ? nameA : nameB} از طریق حضور در جمع و مراودات اجتماعی انرژی می‌گیرد، در حالی که ${eA ? nameB : nameA} برای بازیابی انرژی روانی نیازمند سکوت و تنهایی است. این تفاوت در صورت عدم درک، ممکن است به عنوان بی‌تفاوتی یا تحمیل معاشرت‌های خسته‌کننده تلقی شود.`,
        practicalTip: 'توافق قبلی بر سر زمان‌های دورهمی و پذیرش حق تنهایی و شارژ روانی طرف مقابل بدون تعارف یا ناراحتی.',
      });
    } else {
      dimensionMatches.push({
        dimension: 'انرژی و تعامل اجتماعی (E / I)',
        personAScore: eA ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        personBScore: eB ? 'برون‌گرا (E)' : 'درون‌گرا (I)',
        harmonyScore: 90,
        analysis: eA ? 'هر دو پرانرژی و مشتاق ارتباطات و فعالیت‌های جمعی هستند.' : 'هر دو آرام، درون‌نگر و علاقه‌مند به خلوت و گفتگوی عمیق انفرادی هستند.',
      });
      synergyPoints.push(`هم‌سویی بالا در سطح انرژی اجتماعی (${eA ? 'اشتیاق مشترک به تعاملات پرشور' : 'احترام دوجانبه به آرامش و سکوت'}).`);
    }

    // بعد دوم: شهودی در برابر حسی (N / S)
    const nA = codeA.includes('N');
    const nB = codeB.includes('N');
    if (nA === nB) {
      dimensionMatches.push({
        dimension: 'درک اطلاعات و زبان ذهنی (S / N)',
        personAScore: nA ? 'شهودی (N)' : 'حسی (S)',
        personBScore: nB ? 'شهودی (N)' : 'حسی (S)',
        harmonyScore: 92,
        analysis: 'تطابق عمیق در زبان گفتاری؛ طرفین سریعاً منظور یکدیگر را بدون نیاز به توضیحات مکرر درک می‌کنند.',
      });
      synergyPoints.push('سرعت بالای فهم کلامی و نگاه مشترک به مفاهیم و الگوها.');
    } else {
      dimensionMatches.push({
        dimension: 'درک اطلاعات و زبان ذهنی (S / N)',
        personAScore: nA ? 'شهودی (N)' : 'حسی (S)',
        personBScore: nB ? 'شهودی (N)' : 'حسی (S)',
        harmonyScore: 68,
        analysis: 'یکی از طرفین به جزئیات، حقایق عینی و اعداد روزمره نگاه می‌کند و دیگری به چشم‌اندازهای کلی و ایده‌های انتزاعی.',
      });
      challengeAreas.push({
        title: 'تفاوت در زاویه دید: جزئی‌نگری عینی در برابر کل‌نگری انتزاعی',
        explanation: `${nA ? nameA : nameB} به احتمالات آینده و طرح‌های کلان می‌اندیشد و ممکن است از جزئیات غافل شود، در حالی که ${nA ? nameB : nameA} بر شواهد ملموس و موانع عینی تمرکز دارد. این امر می‌تواند به سوءتفاهم‌هایی نظیر «رویاپردازی ناممکن» یا «کوته‌بینی در جزئیات» دامن بزند.`,
        practicalTip: 'استفاده از رویکرد هم‌افزا: فرد شهودی افق و ایده کلی را ترسیم کند و فرد حسی مراحل اجرایی و ابزارهای ملموس آن را ارزیابی کند.',
      });
    }

    // بعد سوم: تفکری در برابر احساسی (T / F)
    const tA = codeA.includes('T');
    const tB = codeB.includes('T');
    if (tA !== tB) {
      dimensionMatches.push({
        dimension: 'تصمیم‌گیری و قضاوت ارزشی (T / F)',
        personAScore: tA ? 'منطقی (T)' : 'احساسی (F)',
        personBScore: tB ? 'منطقی (T)' : 'احساسی (F)',
        harmonyScore: 70,
        analysis: 'یکی با تحلیل منطقی، انصاف عینی و نقد برخورد می‌کند؛ دیگری بر ارزش‌های انسانی، عواطف و همدلی تمرکز دارد.',
      });
      challengeAreas.push({
        title: 'چالش در نحوه حل تعارض و پذیرش انتقاد',
        explanation: `${tA ? nameA : nameB} در مباحثات به دنبال عیب‌یابی منطقی و بیان شفاف حقیقت است، در حالی که ${tA ? nameB : nameA} پیش از هر استدلالی نیازمند احساس امنیت عاطفی و درک حس درونی‌اش است. انتقاد تند می‌تواند برای طرف احساسی حمله‌ای به عزت‌نفس تلقی شود.`,
        practicalTip: 'در هنگام تعارض، فرد منطقی ابتدا شنیدن فعال و اعتباربخشی عاطفی را به کار گیرد و سپس استدلال کند؛ فرد احساسی نیز نقد رفتار را به منزله نفی کل شخصیت تلقی نکند.',
      });
    } else {
      dimensionMatches.push({
        dimension: 'تصمیم‌گیری و قضاوت ارزشی (T / F)',
        personAScore: tA ? 'منطقی (T)' : 'احساسی (F)',
        personBScore: tB ? 'منطقی (T)' : 'احساسی (F)',
        harmonyScore: 85,
        analysis: tA ? 'هر دو با استدلال عقلانی و آرامش به گفتگو می‌پردازند.' : 'هر دو بسیار مراقب احساسات، احترام و عواطف متقابل هستند.',
      });
      synergyPoints.push(`هم‌راستایی در سبک تصمیم‌گیری (${tA ? 'بررسی شواهد بدون تصمیمات شتاب‌زده هیجانی' : 'همدلی عمیق و اولویت‌دادن به احساسات متقابل'}).`);
    }

    // بعد چهارم: قضاوت‌گر در برابر ادراکی (J / P)
    const jA = codeA.includes('J');
    const jB = codeB.includes('J');
    if (jA !== jB) {
      dimensionMatches.push({
        dimension: 'سازماندهی زمان و برنامه‌ریزی (J / P)',
        personAScore: jA ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        personBScore: jB ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        harmonyScore: 72,
        analysis: 'یکی از طرفین آرامش را در برنامه مکتوب و سر وقت بودن می‌بیند، در حالی که دیگری آزادی عمل و تصمیم‌گیری در لحظه را می‌پسندد.',
      });
      challengeAreas.push({
        title: 'ناهماهنگی در برنامه‌ریزی روزمره و زمان‌بندی امور',
        explanation: `${jA ? nameA : nameB} پیش از اقدام خواهان نهایی‌شدن برنامه‌ها و زمان‌بندی دقیق است، در حالی که ${jA ? nameB : nameA} از برنامه‌های خشک احساس فشار می‌کند و تصمیمات منعطف لحظه آخری را ترجیح می‌دهد. این موضوع در مسافرت‌ها و کارهای مشترک می‌تواند منشا دلخوری شود.`,
        practicalTip: 'تعیین چارچوب زمانی مشخص برای تعهدات اصلی و بخشیدن آزادی عمل در جزئیات به یکدیگر.',
      });
    } else {
      dimensionMatches.push({
        dimension: 'سازماندهی زمان و برنامه‌ریزی (J / P)',
        personAScore: jA ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        personBScore: jB ? 'ساختارگرا (J)' : 'انعطاف‌پذیر (P)',
        harmonyScore: 88,
        analysis: jA ? 'هر دو منظم، متعهد به زمان و اهل برنامه‌ریزی دقیق هستند.' : 'هر دو منعطف، سازگار با شرایط غیرمنتظره و ماجراجو هستند.',
      });
      synergyPoints.push(`هماهنگی بالا در ریتم اداره امور (${jA ? 'نظم و آرامش حاصل از پیش‌بینی‌پذیری' : 'انعطاف و خودانگیختگی در مواجهه با تغییرات'}).`);
    }

    totalHarmony = dimensionMatches.reduce((acc, d) => acc + d.harmonyScore, 0) / dimensionMatches.length;

  } else if (resultA.testId === 'neo' && resultB.testId === 'neo') {
    // ۲. مقایسه در آزمون ۵ عاملی نئو (NEO-120)
    resultA.factors.forEach((fA) => {
      const fB = resultB.factors.find((f) => f.key === fA.key);
      if (fB) {
        count++;
        const diff = Math.abs(fA.percentage - fB.percentage);
        const harmony = Math.max(30, Math.round(100 - diff * 0.8));
        totalHarmony += harmony;

        dimensionMatches.push({
          dimension: fA.name,
          personAScore: `${fA.percentage}٪`,
          personBScore: `${fB.percentage}٪`,
          harmonyScore: harmony,
          analysis: diff <= 20 ? 'تطابق و هم‌سویی بسیار بالا' : diff <= 40 ? 'تفاوت متعادل و قابل تطبیق' : 'تفاوت بارز در این صفت بنیادین',
        });

        if (diff > 35) {
          if (fA.key === 'N') {
            challengeAreas.push({
              title: 'تفاوت در تاب‌آوری در برابر استرس و نگرانی‌ها',
              explanation: `یکی از طرفین (${fA.percentage > fB.percentage ? nameA : nameB}) نوسانات خلقی و اضطراب بیشتری را در شرایط مبهم تجربه می‌کند، در حالی که طرف مقابل تمایل به آرامش یا نادیده گرفتن تهدیدات دارد. این تفاوت ممکن است سبب شود نگرانی‌های فرد مضطرب «وسواس یا بی‌مورد» پنداشته شود.`,
              practicalTip: 'فرد خونسردتر به جای کم‌اهمیت جلوه دادن دل‌مشغولی‌ها، فضای امن برای بیان احساسات ایجاد کند.',
            });
          } else if (fA.key === 'C') {
            challengeAreas.push({
              title: 'اختلاف در انضباط فردی و استانداردهای کیفی کار',
              explanation: `یکی از طرفین (${fA.percentage > fB.percentage ? nameA : nameB}) استانداردهای انضباطی و برنامه‌ریزی سفت‌وسختی دارد و دیگری در اجرای امور رویکردی منعطف یا اهمال‌کارانه در پیش می‌گیرد که می‌تواند منجر به احساس سنگینی وظایف بر دوش یکی از طرفین شود.`,
              practicalTip: 'شفاف‌سازی و تفکیک مشخص حوزه‌های مسئولیت به‌طوری که هر فرد شیوه اجرایی خود را مدیریت کند.',
            });
          } else if (fA.key === 'A') {
            challengeAreas.push({
              title: 'تفاوت در سبک مذاکره: قاطعیت در برابر گذشت و مدارا',
              explanation: `یکی از طرفین رویکردی انتقادی و قاطع در مطالبه مواضع شخصی دارد و دیگری متمایل به صلح، ایثار و فداکاری است. خطر احساس استثمار برای فرد سازگارتر وجود دارد.`,
              practicalTip: 'تمرین مهارت‌های جرات‌ورزی برای فرد سازگار و تقویت مهارت شنیدن توأم با انصاف برای فرد منتقد.',
            });
          } else if (fA.key === 'E') {
            challengeAreas.push({
              title: 'تفاوت در نیاز به فعالیت‌های اجتماعی و مراودات بیرونی',
              explanation: `یکی از طرفین خواهان رویدادهای پرشور و معاشرت مکرر است و طرف دیگر سکون و محیط‌های آرام را ترجیح می‌دهد.`,
              practicalTip: 'برنامه‌ریزی متوازن برای اوقات فراغت دونفره در کنار حضور گزینشی در گردهمایی‌ها.',
            });
          }
        } else if (diff < 15) {
          synergyPoints.push(`هم‌پوشانی و درک عمیق متقابل در بعد «${fA.name}».`);
        }
      }
    });

    totalHarmony = count > 0 ? Math.round(totalHarmony / count) : 75;

  } else if (resultA.testId === 'cattell' && resultB.testId === 'cattell') {
    // ۳. مقایسه در آزمون ۱۶ عاملی کتل
    resultA.factors.forEach((fA) => {
      const fB = resultB.factors.find((f) => f.key === fA.key);
      if (fB) {
        count++;
        const diff = Math.abs(fA.percentage - fB.percentage);
        const harmony = Math.max(30, Math.round(100 - diff * 0.75));
        totalHarmony += harmony;

        dimensionMatches.push({
          dimension: fA.name,
          personAScore: `${fA.percentage}٪`,
          personBScore: `${fB.percentage}٪`,
          harmonyScore: harmony,
          analysis: diff < 25 ? 'هم‌خوانی بالا' : 'تفاوت شخصیتی نیازمند هماهنگی',
        });

        if (diff > 40) {
          if (fA.key === 'E') {
            challengeAreas.push({
              title: 'کشمکش بر سر توزیع قدرت و کنترلگری (عامل E کتل)',
              explanation: `تمایل بارز یکی از طرفین به رهبری و تحمیل نظر (${fA.percentage > fB.percentage ? nameA : nameB}) در برابر استقلال‌خواهی طرف مقابل می‌تواند منجر به چالش در تصمیم‌گیری‌های اساسی شود.`,
              practicalTip: 'توافق بر سر تصمیم‌گیری مشارکتی و تقسیم حوزه‌های اختیارات بر اساس شایستگی و علاقه.',
            });
          } else if (fA.key === 'Q4') {
            challengeAreas.push({
              title: 'تفاوت در میزان تنش عصبی و آستانه شکیبایی (عامل Q4 کتل)',
              explanation: `یکی از طرفین سریعاً برانگیخته می‌شود و ناشکیباست، در حالی که دیگری طمأنینه دارد و کندی او ممکن است برای طرف پرتنش کلافه‌کننده باشد.`,
              practicalTip: 'به کار بردن تمرین‌های وقفه و بازدم در هنگام بروز فشارهای روزمره.',
            });
          } else if (fA.key === 'L') {
            challengeAreas.push({
              title: 'تفاوت در نگاه به اطرافیان: سوءظن و احتیاط در برابر ساده‌دلی',
              explanation: `یکی از طرفین نگاهی محتاطانه و دیرباور دارد و دیگری سریعاً به نیت افراد اعتماد می‌کند.`,
              practicalTip: 'استفاده از زاویه دید یکدیگر جهت پیشگیری از خطرات مالی یا ارتباطی توام با پرهیز از بدبینی افراطی.',
            });
          }
        }
      }
    });

    totalHarmony = count > 0 ? Math.round(totalHarmony / count) : 75;

  } else {
    // مقایسه تطبیقی عمومی برای سایر آزمون‌ها (طرحواره، هالند و...)
    resultA.factors.forEach((fA) => {
      const fB = resultB.factors.find((f) => f.key === fA.key);
      if (fB) {
        count++;
        const diff = Math.abs(fA.percentage - fB.percentage);
        const harmony = Math.max(25, 100 - diff);
        totalHarmony += harmony;

        dimensionMatches.push({
          dimension: fA.name,
          personAScore: `${fA.percentage}٪`,
          personBScore: `${fB.percentage}٪`,
          harmonyScore: harmony,
          analysis: diff < 20 ? 'تطابق و تشابه بالا' : 'اختلاف مشهود در این مقیاس',
        });

        if (diff > 40) {
          challengeAreas.push({
            title: `اختلاف قابل توجه در شاخص «${fA.name}»`,
            explanation: `نمره ${nameA} در این مقیاس (${fA.percentage}٪) و نمره ${nameB} (${fB.percentage}٪) فاصله معناداری دارد که نشان‌دهنده تفاوت اولویت‌ها و درک تجربی متفاوت از این موضوع است.`,
            practicalTip: 'گفتگوی شفاف پیرامون معنای شخصی این عامل و توافق بر سر تعدیل انتظارات دوجانبه.',
          });
        } else if (diff < 15) {
          synergyPoints.push(`هم‌پوشانی و درک عمیق مشترک در حوزه «${fA.name}».`);
        }
      }
    });

    totalHarmony = count > 0 ? Math.round(totalHarmony / count) : 75;
  }

  // توصیه‌های عمومی بین‌فردی
  counselorAdvice.push('تفاوت‌های فردی ذاتاً نقص رابطه نیستند، بلکه در صورت آگاهی طرفین می‌توانند به نیروی هم‌افزا و مکمل تبدیل شوند.');
  counselorAdvice.push('در گفتگوهای پیرامون زمینه‌های چالش‌زا، تمرکز بر رفتار مشخص باشد نه برچسب‌زدن به کل هویت شخصیتی طرف مقابل.');

  const overallCompatibility = Math.round(totalHarmony);
  const compatibilityLevel: 'high' | 'moderate' | 'challenging' =
    overallCompatibility >= 80 ? 'high' : overallCompatibility >= 65 ? 'moderate' : 'challenging';

  let compatibilitySummary = '';
  if (compatibilityLevel === 'high') {
    compatibilitySummary = `انطباق شخصیتی میان ${nameA} و ${nameB} در سطح بسیار مطلوب و هماهنگ برآورد می‌شود. ظرفیت درک متقابل بالا و نقاط پیوند قوی وجود دارد.`;
  } else if (compatibilityLevel === 'moderate') {
    compatibilitySummary = `انطباق در حد متوسط و رضایت‌بخش ارزیابی می‌شود؛ تفاوت‌های موجود با تقویت گفتگوی موثر و پذیرش تفاوت‌ها به فرصتی برای تکامل طرفین تبدیل می‌گردد.`;
  } else {
    compatibilitySummary = `تفاوت‌های بارز در ساختار پاسخ‌دهی و نگرش طرفین مشاهده می‌شود که نیازمند توجه ویژه به زمینه‌های چالش‌زا و تنظیم دقیق توافق‌های مشترک است.`;
  }

  return {
    personAName: nameA,
    personBName: nameB,
    testTitle: resultA.testTitle,
    overallCompatibility,
    compatibilityLevel,
    compatibilitySummary,
    synergyPoints,
    challengeAreas: challengeAreas.length > 0 ? challengeAreas : [
      {
        title: 'سازگاری عمومی بالا',
        explanation: 'در ابعاد این آزمون تعارض یا شکاف ساختاری بارزی میان الگوهای شخصیتی طرفین شناسایی نشد.',
        practicalTip: 'تداوم گفتگوی صمیمانه و ارتقای نقاط قوت مشترک.'
      }
    ],
    counselorAdvice,
    dimensionMatches,
  };
};

export const compareCouples = compareTwoPersons;
