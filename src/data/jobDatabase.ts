import { JobMatch } from '../types';

interface HollandJobEntry {
  title: string;
  field: string;
  primaryCodes: string[]; // e.g. ['R', 'I'] or ['I', 'A']
  description: string;
  requiredSkills: string[];
}

const hollandJobBank: HollandJobEntry[] = [
  // Realistic (R)
  {
    title: 'مهندس مکانیک و مکاترونیک',
    field: 'فنی و مهندسی',
    primaryCodes: ['R', 'I'],
    description: 'طراحی، شبیه‌سازی و بهینه‌سازی سیستم‌های مکانیکی و رباتیک با تکیه بر ابزارآلات و تحلیل فیزیکی.',
    requiredSkills: ['تحلیل استاتیک و دینامیک', 'کار با نرم‌افزارهای CAD/CAM', 'حل مسئله فیزیکی'],
  },
  {
    title: 'تکنسین شبکه و زیرساخت سخت‌افزاری',
    field: 'فناوری اطلاعات',
    primaryCodes: ['R', 'C'],
    description: 'راه‌اندازی، عیب‌یابی و کابل‌کشی سیستم‌های کامپیوتری، روترها و سرورهای فیزیکی.',
    requiredSkills: ['عیب‌یابی سخت‌افزار', 'پیکربندی تجهیزات سیسکو و میکروتیک', 'آشنایی با استاندارد کابل‌کشی'],
  },
  {
    title: 'مهندس عمران و نقشه‌برداری',
    field: 'ساختمان و ابنیه',
    primaryCodes: ['R', 'E'],
    description: 'مدیریت و نظارت بر کارگاه‌های عمرانی، اجرای نقشه‌های ساختمانی و کنترل مصالح.',
    requiredSkills: ['نظارت بر اجرا', 'کار با دوربین‌های نقشه‌برداری', 'مدیریت ایمنی کارگاه (HSE)'],
  },

  // Investigative (I)
  {
    title: 'دانشمند داده و هوش مصنوعی (Data Scientist)',
    field: 'هوش مصنوعی و علوم داده',
    primaryCodes: ['I', 'C'],
    description: 'استخراج بینش از کلان‌داده‌ها، توسعه مدل‌های یادگیری ماشین و پیش‌بینی روندهای پیچیده.',
    requiredSkills: ['برنامه‌نویسی پایتون', 'آمار کاربردی و ریاضیات', 'یادگیری عمیق (Deep Learning)'],
  },
  {
    title: 'پژوهشگر ژنتیک و بیوتکنولوژی',
    field: 'پزشکی و زیست‌فناوری',
    primaryCodes: ['I', 'R'],
    description: 'بررسی ساختارهای ژنومی، کشف داروهای جدید و تحقیق روی بیماری‌های خاص در آزمایشگاه.',
    requiredSkills: ['تحقیق آزمایشگاهی', 'روش‌شناسی پژوهش علمی', 'تحلیل بیوانفورماتیک'],
  },
  {
    title: 'توسعه‌دهنده ارشد نرم‌افزار (Software Engineer)',
    field: 'فناوری اطلاعات',
    primaryCodes: ['I', 'A'],
    description: 'معماری و کدنویسی نرم‌افزارهای پیچیده و حل چالش‌های الگوریتمی.',
    requiredSkills: ['طراحی الگوریتم', 'معماری میکروسرویس', 'کدنویسی تمیز و بهینه'],
  },

  // Artistic (A)
  {
    title: 'طراح تجربه و رابط کاربری (UI/UX Designer)',
    field: 'طراحی دیجیتال',
    primaryCodes: ['A', 'I'],
    description: 'خلق تجربیات کاربری بصری جذاب و کاربرپسند بر اساس روان‌شناسی رفتار کاربر.',
    requiredSkills: ['کار با Figma', 'پژوهش تجربه کاربر (UX Research)', 'خلق دیزاین سیستم'],
  },
  {
    title: 'کارگردان و تدوین‌گر ویدئو / موشن‌گرافیست',
    field: 'رسانه و هنر دیجیتال',
    primaryCodes: ['A', 'E'],
    description: 'داستان‌سرایی بصری، تولید جلوه‌های ویژه و تولید محتوای تبلیغاتی و سینمایی.',
    requiredSkills: ['کار با نرم‌افزارهای Premiere/AfterEffects', 'سناریونویسی', 'روایت‌گری خلاقانه'],
  },
  {
    title: 'طراح معماری و دکوراسیون داخلی',
    field: 'معماری و دیزاین',
    primaryCodes: ['A', 'R'],
    description: 'ترکیب زیبایی‌شناسی بصری با کارکرد فیزیکی فضاها برای محیط‌های مسکونی و تجاری.',
    requiredSkills: ['طراحی سه‌بعدی (3Ds Max/Revit)', 'درک نور و رنگ', 'شناخت متریال'],
  },

  // Social (S)
  {
    title: 'روان‌شناس بالینی و مشاور خانواده',
    field: 'سلامت روان و علوم انسانی',
    primaryCodes: ['S', 'I'],
    description: 'ارزیابی ساختارهای شخصیتی، روان‌درمانی فردی، خانواده‌درمانی و بهبود کیفیت روابط.',
    requiredSkills: ['همدلی و گوش‌دادن فعال', 'آشنایی با رویکردهای درمان (CBT/طرحواره)', 'رازداری بالینی'],
  },
  {
    title: 'مدیر توسعه و توانمندسازی منابع انسانی (HR)',
    field: 'مدیریت و آموزش',
    primaryCodes: ['S', 'E'],
    description: 'جذب نخبگان، توانمندسازی سازمانی، هدایت شغلی کارمندان و ایجاد فرهنگ سازمانی پویا.',
    requiredSkills: ['استعدادیابی و مصاحبه شایستگی‌محور', 'حل تعارض سازمانی', 'طراحی دوره‌های آموزشی'],
  },
  {
    title: 'استاد و مربی آموزشی (Lecturer & Mentor)',
    field: 'آموزش و آکادمیک',
    primaryCodes: ['S', 'A'],
    description: 'انتقال مفاهیم تخصصی با شیوه‌های خلاقانه و تعاملی به نسل جوان.',
    requiredSkills: ['مهارت سخنوری و تدریس', 'انگیزش‌بخشی', 'طراحی سرفصل درسی'],
  },

  // Enterprising (E)
  {
    title: 'بنیان‌گذار استارتاپ و مدیر ارشد محصول (CPO)',
    field: 'کسب‌وکار و نوآوری',
    primaryCodes: ['E', 'I'],
    description: 'شناسایی فرصت‌های بازار، رهبری تیم‌های فنی و کسب‌وکاری برای خلق ارزش اقتصادی.',
    requiredSkills: ['تفکر استراتژیک', 'رهبری و انگیزش تیم', 'مدیریت مالی و بازاریابی'],
  },
  {
    title: 'مدیر بازاریابی و فروش سازمانی (B2B Sales)',
    field: 'مارکتینگ و فروش',
    primaryCodes: ['E', 'S'],
    description: 'مذاکرات سطح بالا با مشتریان کلان و عقد قراردادهای بزرگ تجاری.',
    requiredSkills: ['تکنیک‌های مذاکره و اقناع', 'روابط عمومی حرفه‌ای', 'مدیریت تارگت‌های فروش'],
  },
  {
    title: 'وکیل و مشاور حقوقی شرکت‌ها',
    field: 'حقوق و قضا',
    primaryCodes: ['E', 'C'],
    description: 'تنظیم قراردادهای حقوقی تجاری و دفاع قاطعانه از منافع در مراجع قضایی.',
    requiredSkills: ['استدلال حقوقی و دفاع کلامی', 'آشنایی با قوانین تجارت', 'دقت در جزییات قراردادها'],
  },

  // Conventional (C)
  {
    title: 'حسابرس و تحلیل‌گر ارشد مالی',
    field: 'مالی و سرمایه‌گذاری',
    primaryCodes: ['C', 'I'],
    description: 'بررسی صورت‌های مالی، ارزیابی سلامت مالی شرکت‌ها و پیش‌بینی سودآوری.',
    requiredSkills: ['تسلط به استانداردهای حسابداری', 'تحلیل بنیادی سهام', 'کار با Excel پیشرفته'],
  },
  {
    title: 'مدیر کنترل کیفیت و عملیات (QC/QA)',
    field: 'صنعت و فرایند',
    primaryCodes: ['C', 'R'],
    description: 'تدوین استانداردها و نظارت بر رعایت فرایندهای کیفی و الزامات قانونی محصول.',
    requiredSkills: ['استانداردهای ISO', 'آمار کنترل کیفیت (SPC)', 'دقت به جزئیات سیستمی'],
  },
  {
    title: 'مدیر بانک اطلاعاتی و اسناد محرمانه',
    field: 'مدیریت اطلاعات',
    primaryCodes: ['C', 'E'],
    description: 'سازماندهی پایگاه‌های داده، حفظ محرمانگی مدارک و ایجاد گزارش‌های دوره‌ای برای مدیران.',
    requiredSkills: ['کار با SQL و بانک‌های داده', 'امنیت اطلاعات', 'نظم و طبقه‌بندی دقیق'],
  },
];

/**
 * الگوریتم تطبیق مشاغل بر اساس کدهای غالب هالند (Holland Code)
 */
export const matchHollandJobs = (topHollandCodes: string[]): JobMatch[] => {
  if (!topHollandCodes || topHollandCodes.length === 0) return [];

  const firstLetter = topHollandCodes[0] || 'I';
  const secondLetter = topHollandCodes[1] || 'S';

  const scoredJobs = hollandJobBank.map((job) => {
    let score = 50;

    if (job.primaryCodes[0] === firstLetter) {
      score += 35;
    } else if (job.primaryCodes.includes(firstLetter)) {
      score += 20;
    }

    if (job.primaryCodes[0] === secondLetter || job.primaryCodes[1] === secondLetter) {
      score += 15;
    }

    score = Math.min(98, score);
    const matchLevel: 'عالی' | 'بسیار خوب' | 'متوسط' =
      score >= 85 ? 'عالی' : score >= 70 ? 'بسیار خوب' : 'متوسط';

    return {
      title: job.title,
      field: job.field,
      matchScore: score,
      matchLevel,
      description: job.description,
      requiredSkills: job.requiredSkills,
    };
  });

  return scoredJobs.sort((a, b) => b.matchScore - a.matchScore).slice(0, 6);
};

/**
 * تطبیق مشاغل بر اساس تیپ ۱۶ گانه MBTI
 */
export const matchMBTIJobs = (mbtiCode: string): JobMatch[] => {
  const code = (mbtiCode || 'INFJ').split('-')[0].toUpperCase();

  const mbtiJobMap: Record<string, JobMatch[]> = {
    INTJ: [
      { title: 'معمار سیستم‌های نرم‌افزاری', field: 'فناوری', matchScore: 96, matchLevel: 'عالی', description: 'طراحی ساختارهای کلان و الگوریتم‌های هوش مصنوعی.', requiredSkills: ['دید سیستمی', 'برنامه‌نویسی پیشرفته', 'تحلیل انتزاعی'] },
      { title: 'تحلیل‌گر استراتژیک سرمایه‌گذاری', field: 'مالی', matchScore: 92, matchLevel: 'عالی', description: 'پیش‌بینی روندهای بازار و بهینه‌سازی پرتفوی سهام.', requiredSkills: ['آمار و ریاضیات', 'تصمیم‌گیری عقلانی', 'برنامه‌ریزی بلندمدت'] },
      { title: 'پژوهشگر ارشد علوم اعصاب و کامپیوتر', field: 'پژوهش', matchScore: 90, matchLevel: 'عالی', description: 'مطالعه سیستم‌های عصبی و الگوهای هوش محاسباتی.', requiredSkills: ['روش تحقیق علمی', 'تفکر عمیق', 'تمرکز فردی بالا'] },
    ],
    INFP: [
      { title: 'روان‌شناس و مشاور خانواده', field: 'سلامت روان', matchScore: 95, matchLevel: 'عالی', description: 'همدلی عمیق و ریشه‌یابی مشکلات بین‌فردی.', requiredSkills: ['شنیدن فعال', 'همدلی بدون قضاوت', 'بینش روان‌شناختی'] },
      { title: 'طراح تجربه کاربری (UX) و نویسنده', field: 'دیجیتال و محتوا', matchScore: 91, matchLevel: 'عالی', description: 'خلق داستان‌سرایی و درک نیازهای عاطفی کاربران.', requiredSkills: ['خلاقیت کلامی', 'طراحی همدلانه', 'اصول دیزاین'] },
      { title: 'مترجم و ویراستار آثار ادبی', field: 'ادبیات و هنر', matchScore: 88, matchLevel: 'بسیار خوب', description: 'ترجمه و انطباق آثار با حفظ احساسات و بار معنایی.', requiredSkills: ['تسلط زبانی', 'نکته‌سنجی ادبی', 'علاقه به تنهایی سازنده'] },
    ],
    ENTJ: [
      { title: 'مدیر ارشد اجرایی (CEO / مدیر سازمان)', field: 'مدیریت کلان', matchScore: 97, matchLevel: 'عالی', description: 'تعیین اهداف کلان سازمانی و هدایت تیم‌ها برای سودآوری.', requiredSkills: ['تصمیم‌گیری قاطع', 'رهبری استراتژیک', 'مذاکره قدرتمند'] },
      { title: 'وکیل دعاوی تجاری و بازرگانی', field: 'حقوق', matchScore: 93, matchLevel: 'عالی', description: 'دفاع قاطع در محاکم بین‌المللی و تجاری.', requiredSkills: ['استدلال محکم', 'فصاحت کلام', 'تسلط بر قوانین'] },
      { title: 'مشاور مدیریت و استراتژی سازمان', field: 'مشاوره کسب‌وکار', matchScore: 89, matchLevel: 'بسیار خوب', description: 'اصلاح فرایندهای ناکارآمد شرکت‌ها و افزایش بهره‌وری.', requiredSkills: ['تحلیل فرآیند', 'مدیریت تغییر', 'ارائه به مدیران'] },
    ],
    ENFP: [
      { title: 'مدیر نوآوری و توسعه کسب‌وکار', field: 'استارتاپ', matchScore: 95, matchLevel: 'عالی', description: 'کشف فرصت‌های تازه، ایده‌پردازی و اتصال افراد به اهداف.', requiredSkills: ['شبکه‌سازی', 'طوفان فکری', 'شور و اشتیاق واگیردار'] },
      { title: 'کارگردان و تولیدکننده محتوای خلاق', field: 'رسانه', matchScore: 92, matchLevel: 'عالی', description: 'خلق برنامه‌ها و ویدئوهای پرطرفدار در رسانه‌ها.', requiredSkills: ['خلاقیت هنری', 'ارتباط اجتماعی قوی', 'داستان‌سرایی'] },
      { title: 'مربی زندگی و کوچ فردی (Life Coach)', field: 'توسعه فردی', matchScore: 90, matchLevel: 'عالی', description: 'کمک به افراد برای شکوفایی پتانسیل‌ها و علایق پنهان.', requiredSkills: ['انگیزه‌بخشی', 'روان‌شناسی مثبت‌گرا', 'پرسشگری موثر'] },
    ],
  };

  if (mbtiJobMap[code]) {
    return mbtiJobMap[code];
  }

  // Fallback default high-demand positions
  return [
    { title: 'مدیر پروژه و برنامه‌ریزی', field: 'مدیریت', matchScore: 86, matchLevel: 'بسیار خوب', description: 'سازماندهی منابع و رساندن اهداف به نتیجه در زمان مقرر.', requiredSkills: ['مدیریت زمان', 'رهبری تیم', 'ارتباطات'] },
    { title: 'متخصص بازاریابی و فروش دیجیتال', field: 'دیجیتال مارکتینگ', matchScore: 84, matchLevel: 'بسیار خوب', description: 'جذب مخاطب و افزایش فروش از طریق کمپین‌های آنلاین.', requiredSkills: ['تحلیل مخاطب', 'خلاقیت تبلیغاتی', 'بهینه‌سازی قیف فروش'] },
    { title: 'پژوهشگر و تحلیل‌گر کسب‌وکار', field: 'تحلیل داده', matchScore: 82, matchLevel: 'بسیار خوب', description: 'شناسایی نقاط ضعف فرایندها و ارائه راهکارهای مدرن.', requiredSkills: ['تحلیل داده', 'مهارت ارائه', 'حل مسئله'] },
  ];
};
