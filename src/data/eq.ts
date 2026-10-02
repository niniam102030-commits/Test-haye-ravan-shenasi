import { TestDefinition } from '../types';

export const eqDefinition: TestDefinition = {
  id: 'eq',
  persianTitle: 'هوش هیجانی (SSEIT)',
  category: 'career',
  popularity: 90,
  title: 'Emotional Intelligence',
  subtitle: 'آزمون معتبر روان‌سنجی',
  questionCount: 33,
  estimatedMinutes: 5,
  iconName: 'Brain',
  gradient: 'from-cyan-500 to-blue-600',
  accentColor: '#0284c7',
  description: 'این تست به منظور ارزیابی دقیق ابعاد شخصیتی طراحی شده است.',
  clinicalApplication: 'ارائه بینش عمیق برای مشاوره و خودشناسی.',
  optionType: 'likert5',
  questions: [
  {
    "id": "eq_1",
    "text": "من می‌دانم چه زمانی درباره مشکلات شخصی‌ام با دیگران صحبت کنم.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_2",
    "text": "هنگامی که با موانعی روبرو می‌شوم، زمان‌هایی را به یاد می‌آورم که با موانع مشابهی مواجه شده و بر آنها غلبه کرده‌ام.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_3",
    "text": "انتظار دارم در بیشتر کارهایی که تلاش می‌کنم، موفق شوم.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_4",
    "text": "دیگران به راحتی با من درد دل می‌کنند.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_5",
    "text": "درک پیام‌های غیرکلامی دیگران برایم دشوار است.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_6",
    "text": "برخی از رویدادهای مهم زندگی‌ام باعث شده‌اند که در مورد آنچه مهم و غیرمهم است تجدید نظر کنم.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_7",
    "text": "وقتی خلق و خوی من تغییر می‌کند، احتمالات جدیدی را می‌بینم.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_8",
    "text": "هیجانات یکی از چیزهایی هستند که زندگی من را ارزش زیستن می‌بخشند.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_9",
    "text": "من در همان لحظه‌ای که هیجاناتم را تجربه می‌کنم، از آنها آگاه هستم.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_10",
    "text": "انتظار دارم اتفاقات خوبی بیفتد.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_11",
    "text": "دوست دارم هیجاناتم را با دیگران به اشتراک بگذاریم.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_12",
    "text": "وقتی هیجان مثبتی را تجربه می‌کنم، می‌دانم چگونه آن را تداوم بخشم.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_13",
    "text": "من رویدادهایی را ترتیب می‌دهم که دیگران از آن لذت می‌برند.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_14",
    "text": "من به دنبال فعالیت‌هایی هستم که مرا خوشحال می‌کند.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_15",
    "text": "من از پیام‌های غیرکلامی که به دیگران ارسال می‌کنم آگاه هستم.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_16",
    "text": "من خودم را به گونه‌ای نشان می‌دهم که تأثیر خوبی بر دیگران بگذارد.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_17",
    "text": "هنگامی که در خلق و خوی مثبتی هستم، حل مشکلات برایم آسان است.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_18",
    "text": "با نگاه کردن به حالات چهره افراد، هیجاناتی که تجربه می‌کنند را تشخیص می‌دهم.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_19",
    "text": "می‌دانم چرا هیجاناتم تغییر می‌کنند.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_20",
    "text": "هنگامی که در خلق و خوی مثبتی هستم، می‌توانم ایده‌های جدیدی ارائه دهم.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_21",
    "text": "من روی هیجاناتم کنترل دارم.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_22",
    "text": "من هیجاناتم را در همان لحظه‌ای که تجربه می‌کنم، به راحتی می‌شناسم.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_23",
    "text": "من با تصور یک نتیجه خوب برای کارهایی که بر عهده می‌گیرم، به خودم انگیزه می‌دهم.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_24",
    "text": "زمانی که دیگران کاری را به خوبی انجام داده‌اند، از آنها تعریف می‌کنم.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_25",
    "text": "من از پیام‌های غیرکلامی که دیگران ارسال می‌کنند آگاه هستم.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_26",
    "text": "وقتی شخص دیگری درباره یک رویداد مهم در زندگی‌اش به من می‌گوید، تقریباً احساس می‌کنم که خودم این رویداد را تجربه کرده‌ام.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_27",
    "text": "وقتی تغییری در هیجاناتم احساس می‌کنم، تمایل دارم ایده‌های جدیدی ارائه دهم.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_28",
    "text": "وقتی با چالشی روبرو می‌شوم، تسلیم می‌شوم چون باور دارم شکست خواهم خورد.",
    "factor": "managing_self_emotions",
    "factorTitle": "مدیریت هیجانات خود",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات خود",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات خود» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_29",
    "text": "فقط با نگاه کردن به افراد می‌دانم چه احساسی دارند.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_30",
    "text": "من به دیگران کمک می‌کنم تا وقتی ناراحت هستند، احساس بهتری پیدا کنند.",
    "factor": "managing_others_emotions",
    "factorTitle": "مدیریت هیجانات دیگران",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "مدیریت هیجانات دیگران",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «مدیریت هیجانات دیگران» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_31",
    "text": "من از خلق و خوی خوب استفاده می‌کنم تا به خودم کمک کنم در مواجهه با موانع به تلاش ادامه دهم.",
    "factor": "utilizing_emotions",
    "factorTitle": "بهره‌برداری از هیجانات",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "بهره‌برداری از هیجانات",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «بهره‌برداری از هیجانات» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_32",
    "text": "با گوش دادن به لحن صدای افراد می‌توانم بگویم چه احساسی دارند.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "eq_33",
    "text": "برایم دشوار است درک کنم چرا افراد چنین احساساتی دارند.",
    "factor": "emotion_perception",
    "factorTitle": "ادراک هیجانی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ادراک هیجانی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «ادراک هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  }
]
};
