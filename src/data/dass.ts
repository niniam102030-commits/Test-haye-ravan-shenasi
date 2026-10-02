import { TestDefinition } from '../types';

export const dassDefinition: TestDefinition = {
  id: 'dass',
  title: 'Depression Anxiety Stress Scales (DASS-21)',
  persianTitle: 'مقیاس افسردگی، اضطراب و استرس (DASS-21)',
  subtitle: 'ابزار استاندارد غربالگری بالینی حالات عاطفی منفی در هفته گذشته',
  category: 'clinical',
  popularity: 95,
  questionCount: 21,
  estimatedMinutes: 5,
  iconName: 'Activity',
  gradient: 'from-rose-500 to-amber-600',
  accentColor: '#f43f5e',
  description: 'پرسشنامه معتبر جهانی DASS-21 برای سنجش سریع و دقیق شدت سه حالت عاطفی پریشانی: افسردگی (خلق پایین، ناامیدی)، اضطراب (برانگیختگی خودمختار، واکنش‌های فیزیولوژیک) و استرس (تنش روانی، تحریک‌پذیری).',
  clinicalApplication: 'غربالگری سطح تنش و هیجانات منفی، ارزیابی پیشرفت جلسات درمانی و پایش هفتگی وضعیت روانی مراجع.',
  optionType: 'likert4',
  defaultOptions: [
    { label: 'اصلاً در مورد من صدق نمی‌کرد (۰)', value: 0 },
    { label: 'تا حدودی یا در بعضی مواقع (۱)', value: 1 },
    { label: 'تا حد زیادی یا بیشتر مواقع (۲)', value: 2 },
    { label: 'خیلی زیاد یا تقریباً همیشه (۳)', value: 3 },
  ],
  questions: [
  {
    "id": "dass_1",
    "text": "من به سختی می‌توانستم آرامش خود را به دست آورم و ریلکس شوم.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_2",
    "text": "متوجه شدم دهانم خشک شده است (بدون تشنگی یا مصرف داروی خاص).",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_3",
    "text": "احساس می‌کردم اصلاً نمی‌توانم هیچ تجربه احساسی مثبت یا خوشایندی داشته باشم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_4",
    "text": "در تنفس دچار مشکل شدم (مثلاً تندتند نفس کشیدن بدون اینکه فعالیت بدنی داشته باشم).",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_5",
    "text": "برایم سخت بود که نیروی محرکه‌ای برای شروع انجام کارها پیدا کنم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_6",
    "text": "تمایل داشتم در برابر موقعیت‌ها واکنش‌های بیش از حد و تند نشان دهم.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_7",
    "text": "در دست‌ها یا سایر اندام‌های بدنم احساس لرزش داشتم.",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_8",
    "text": "احساس می‌کردم مقدار زیادی انرژی عصبی مصرف می‌کنم و بی‌قرارم.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_9",
    "text": "نگران موقعیت‌هایی بودم که ممکن بود دچار وحشت‌زدگی شوم یا خودم را مضحکه کنم.",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_10",
    "text": "احساس می‌کردم هیچ چیز چشم‌انداز خوبی ندارد و آینده امیدوارکننده‌ای نمی‌بینم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_11",
    "text": "متوجه شدم که به سادگی آشفته و برانگیخته می‌شوم.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_12",
    "text": "پیدا کردن آرامش و فرار از فشارهای فکری برایم بسیار سخت بود.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_13",
    "text": "احساس غمگینی شدید، دلمردگی و افسردگی می‌کردم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_14",
    "text": "نسبت به هر چیزی که مانع پیشرفت کارم می‌شد ناشکیبا و کم‌تحمل بودم.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_15",
    "text": "احساس می‌کردم در آستانه غش کردن یا وحشت‌زدگی غیرقابل کنترل هستم.",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_16",
    "text": "نمی‌توانستم در مورد هیچ رویدادی احساس شوق و ذوق یا هیجان مثبت داشته باشم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_17",
    "text": "احساس می‌کردم به عنوان یک شخص ارزش چندانی ندارم.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_18",
    "text": "احساس می‌کردم خیلی زودرنج و حساس شده‌ام.",
    "factor": "stress",
    "factorTitle": "استرس و تنش مزمن",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "استرس و تنش مزمن",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «استرس و تنش مزمن» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_19",
    "text": "متوجه تپش قلب شدید یا نامنظم در حالت استراحت شدم (بدون ورزش یا فعالیت).",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_20",
    "text": "بدون هیچ علت مشخصی احساس ترس، وحشت یا دلشوره به من دست می‌داد.",
    "factor": "anxiety",
    "factorTitle": "اضطراب و برانگیختگی خودمختار",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب و برانگیختگی خودمختار",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب و برانگیختگی خودمختار» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "dass_21",
    "text": "احساس می‌کردم زندگی پوچ و بی‌معنا شده است.",
    "factor": "depression",
    "factorTitle": "افسردگی و ناامیدی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "افسردگی و ناامیدی",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «افسردگی و ناامیدی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  }
],
};
