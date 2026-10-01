import { ProposedTest } from '../types';

export const proposedTests: ProposedTest[] = [
  {
    id: 'gardner',
    title: 'Multiple Intelligences',
    persianTitle: 'هوش‌های چندگانه گاردنر',
    category: 'talent',
    questionCount: 80,
    durationMinutes: 15,
    description: 'سنجش ۹ نوع هوش برای استعدادیابی تحصیلی و شغلی (منطقی، زبانی، فضایی، حرکتی و...).',
    whyUseful: 'کمک به شناخت استعدادهای ذاتی و هدایت تحصیلی.',
    targetAudience: 'کودکان، نوجوانان و بزرگسالان',
    factorsMeasured: ['منطقی-ریاضی', 'کلامی-زبانی', 'بصری-فضایی', 'موسیقیایی', 'بدنی-جنبشی', 'درون‌فردی', 'میان‌فردی', 'طبیعت‌گرا', 'وجودی'],
    status: 'proposed',
    badge: 'استعدادیابی'
  },
  {
    id: 'raven',
    title: 'Raven Progressive Matrices',
    persianTitle: 'ماتریس‌های پیشرونده ریون',
    category: 'iq',
    questionCount: 60,
    durationMinutes: 45,
    description: 'آزمون معتبر جهانی برای سنجش هوش سیال و استدلال انتزاعی بدون وابستگی به زبان و فرهنگ.',
    whyUseful: 'ارزیابی ضریب هوشی (IQ) و توانایی حل مسئله.',
    targetAudience: 'همه سنین',
    factorsMeasured: ['هوش سیال', 'استدلال منطقی', 'درک الگوهای بصری'],
    status: 'proposed',
    badge: 'سنجش IQ'
  },
  {
    id: 'holland',
    title: 'Holland RIASEC',
    persianTitle: 'رغبت‌سنج شغلی هالند',
    category: 'career',
    questionCount: 48,
    durationMinutes: 10,
    description: 'استانداردترین تست هدایت شغلی و تحصیلی بر اساس ۶ تیپ شخصیتی-شغلی.',
    whyUseful: 'انتخاب رشته دانشگاهی و مسیر شغلی متناسب با علایق.',
    targetAudience: 'دانش‌آموزان، دانشجویان و جویندگان کار',
    factorsMeasured: ['واقع‌گرا', 'جستجوگر', 'هنری', 'اجتماعی', 'متهور', 'قراردادی'],
    status: 'proposed',
    badge: 'مشاوره شغلی'
  },
  {
    id: 'neo',
    title: 'NEO-PI-R',
    persianTitle: 'تست شخصیت ۵ عاملی نئو',
    category: 'personality',
    questionCount: 60,
    durationMinutes: 15,
    description: 'معتبرترین تست شخصیت‌شناسی در روانشناسی برای بررسی ۵ بعد اصلی شخصیت (Big Five).',
    whyUseful: 'استخدام، مشاوره پیش از ازدواج و خودشناسی عمیق.',
    targetAudience: 'بزرگسالان',
    factorsMeasured: ['روان‌رنجورخویی (N)', 'برون‌گرایی (E)', 'گشودگی (O)', 'توافق‌پذیری (A)', 'باوجدانی (C)'],
    status: 'proposed',
    badge: 'استاندارد جهانی'
  },
  {
    id: 'enrich',
    title: 'ENRICH Marital Satisfaction',
    persianTitle: 'رضایت زناشویی انریچ',
    category: 'marriage',
    questionCount: 47,
    durationMinutes: 15,
    description: 'ابزار قدرتمند ارزیابی کیفیت روابط زوجین و شناسایی زمینه‌های تعارض.',
    whyUseful: 'زوج‌درمانی و مشاوره پیش از ازدواج.',
    targetAudience: 'زوجین',
    factorsMeasured: ['تحریف آرمانی', 'رضایت زناشویی', 'ارتباطات', 'حل تعارض', 'مدیریت مالی', 'اوقات فراغت', 'رابطه جنسی', 'فرزندپروری', 'خانواده و دوستان'],
    status: 'proposed',
    badge: 'زوج‌درمانی'
  },
  {
    id: 'dass',
    title: 'DASS-21',
    persianTitle: 'استرس، اضطراب و افسردگی',
    category: 'mental_health',
    questionCount: 21,
    durationMinutes: 5,
    description: 'مقیاس استاندارد و سریع برای غربالگری شدت علائم افسردگی، اضطراب و استرس.',
    whyUseful: 'ارزیابی اولیه سلامت روان و پیگیری روند درمان.',
    targetAudience: 'بزرگسالان',
    factorsMeasured: ['افسردگی', 'اضطراب', 'استرس'],
    status: 'proposed',
    badge: 'سلامت روان'
  }
];
