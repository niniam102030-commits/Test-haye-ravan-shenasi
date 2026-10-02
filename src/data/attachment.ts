import { TestDefinition } from '../types';

export const attachmentDefinition: TestDefinition = {
  id: 'attachment',
  persianTitle: 'سبک‌های دلبستگی (ECR-R)',
  category: 'relationship',
  popularity: 90,
  title: 'ECR-R Attachment',
  subtitle: 'آزمون معتبر روان‌سنجی',
  questionCount: 36,
  estimatedMinutes: 5,
  iconName: 'Heart',
  gradient: 'from-pink-500 to-rose-600',
  accentColor: '#e11d48',
  description: 'این تست به منظور ارزیابی دقیق ابعاد شخصیتی طراحی شده است.',
  clinicalApplication: 'ارائه بینش عمیق برای مشاوره و خودشناسی.',
  optionType: 'likert7',
  questions: [
  {
    "id": "ecr_1",
    "text": "ترجیح می‌دهم احساسات درونی‌ام را به شریک عاطفی‌ام نشان ندهم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_2",
    "text": "نگرانم که طرد شوم یا مرا ترک کنند.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_3",
    "text": "از نزدیک بودن و صمیمیت با شریک عاطفی‌ام کاملاً احساس راحتی می‌کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_4",
    "text": "من خیلی در مورد روابطم نگرانم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_5",
    "text": "دقیقاً زمانی که شریک عاطفی‌ام شروع به نزدیک شدن به من می‌کند، خودم را عقب می‌کشم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_6",
    "text": "نگرانم که شرکای عاطفی‌ام به اندازه‌ای که من به آنها اهمیت می‌دهم، به من اهمیت ندهند.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_7",
    "text": "وقتی شریک عاطفی‌ام می‌خواهد خیلی به من نزدیک شود، احساس ناراحتی می‌کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_8",
    "text": "نسبتاً زیاد نگران از دست دادن شریک عاطفی‌ام هستم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_9",
    "text": "از اینکه سفره دلم را برای شریک عاطفی‌ام باز کنم، احساس راحتی نمی‌کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_10",
    "text": "اغلب آرزو می‌کنم که احساسات شریک عاطفی‌ام نسبت به من به اندازه احساسات من نسبت به او قوی باشد.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_11",
    "text": "می‌خواهم به شریک عاطفی‌ام نزدیک شوم، اما مدام خودم را عقب می‌کشم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_12",
    "text": "اغلب می‌خواهم کاملاً با شریک عاطفی‌ام یکی شوم و این گاهی اوقات آنها را می‌ترساند و دور می‌کند.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_13",
    "text": "وقتی شرکای عاطفی‌ام بیش از حد به من نزدیک می‌شوند، عصبی می‌شوم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_14",
    "text": "نگران تنها ماندن هستم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_15",
    "text": "از در میان گذاشتن افکار و احساسات خصوصی‌ام با شریک عاطفی‌ام احساس راحتی می‌کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_16",
    "text": "تمایل من برای صمیمیت زیاد، گاهی اوقات افراد را می‌ترساند و فراری می‌دهد.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_17",
    "text": "سعی می‌کنم از نزدیک شدن بیش از حد به شریک عاطفی‌ام اجتناب کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_18",
    "text": "نیاز زیادی به اطمینان خاطر دارم که شریک عاطفی‌ام مرا دوست دارد.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_19",
    "text": "نزدیک شدن به شریک عاطفی‌ام برایم نسبتاً آسان است.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_20",
    "text": "گاهی اوقات احساس می‌کنم شرکایم را مجبور می‌کنم احساسات و تعهد بیشتری نشان دهند.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_21",
    "text": "برایم دشوار است که به خودم اجازه دهم به شرکای عاطفی وابسته شوم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_22",
    "text": "اغلب نگران طرد شدن نیستم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_23",
    "text": "ترجیح می‌دهم به شرکای عاطفی بیش از حد نزدیک نباشم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_24",
    "text": "اگر نتوانم کاری کنم که شریک عاطفی‌ام به من توجه نشان دهد، ناراحت یا عصبانی می‌شوم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_25",
    "text": "تقریباً همه چیز را به شریک عاطفی‌ام می‌گویم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_26",
    "text": "متوجه می‌شوم که شریک(های) عاطفی‌ام نمی‌خواهند به اندازه‌ای که من دوست دارم به من نزدیک شوند.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_27",
    "text": "معمولاً مشکلات و نگرانی‌هایم را با شریک عاطفی‌ام در میان می‌گذارم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_28",
    "text": "وقتی درگیر رابطه‌ای نیستم، تا حدودی احساس اضطراب و نقص می‌کنم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_29",
    "text": "از تکیه کردن و وابستگی به شرکای عاطفی احساس راحتی می‌کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "ecr_30",
    "text": "وقتی شریک عاطفی‌ام به اندازه‌ای که من دوست دارم حضور ندارد، ناامید و کلافه می‌شوم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_31",
    "text": "برام مهم نیست که از شرکای عاطفی‌ام طلب آرامش، نصیحت یا کمک کنم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_32",
    "text": "اگر شرکای عاطفی در زمان نیاز در دسترس نباشند، ناامید و کلافه می‌شوم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_33",
    "text": "در مواقع نیاز، روی آوردن به شریک عاطفی کمک‌کننده است.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_34",
    "text": "وقتی شرکای عاطفی مرا تایید نمی‌کنند، واقعاً احساس بدی نسبت به خودم پیدا می‌کنم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_35",
    "text": "برای بسیاری از چیزها، از جمله آرامش و اطمینان خاطر، به شریک عاطفی‌ام روی می‌آورم.",
    "factor": "Avoidance",
    "factorTitle": "اجتناب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اجتناب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اجتناب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "ecr_36",
    "text": "وقتی شریک عاطفی‌ام وقتش را دور از من می‌گذراند، ناراحت می‌شوم و رنجش پیدا می‌کنم.",
    "factor": "Anxiety",
    "factorTitle": "اضطراب",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "اضطراب",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «اضطراب» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  }
]
};
