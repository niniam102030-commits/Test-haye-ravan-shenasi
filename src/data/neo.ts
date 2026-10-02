import { TestDefinition, Question } from '../types';

export const neoFactors = [
  {
    "key": "N",
    "name": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "title": "روان‌رنجورخویی در برابر ثبات هیجانی",
    "high": "حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق",
    "low": "آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها"
  },
  {
    "key": "E",
    "name": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "title": "برون‌گرایی در برابر درون‌گرایی",
    "high": "پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی",
    "low": "درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده"
  },
  {
    "key": "O",
    "name": "گشودگی به تجربه و تفکر (Openness)",
    "title": "گشودگی به تجربه در برابر محافظه‌کاری",
    "high": "کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه",
    "low": "عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر"
  },
  {
    "key": "A",
    "name": "توافق‌پذیری و سازگاری (Agreeableness)",
    "title": "توافق‌پذیری در برابر رقابت‌جویی",
    "high": "همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد",
    "low": "منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک"
  },
  {
    "key": "C",
    "name": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "title": "باوجدانی در برابر بی‌نظمی",
    "high": "منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا",
    "low": "راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار"
  }
];

export const neoDefinition: TestDefinition = {
  id: 'neo',
  title: 'NEO Personality Inventory (NEO-120)',
  persianTitle: 'تست جامع ۵ عاملی شخصیت نئو (فرم استاندارد ۱۲۰ سوالی)',
  subtitle: 'کامل‌ترین الگوی روان‌سنجی ارزیابی صفات ۵‌گانه بزرگ شخصیت انسان',
  category: 'personality',
  popularity: 95,
  questionCount: 120,
  estimatedMinutes: 20,
  iconName: 'Sparkles',
  gradient: 'from-blue-600 to-cyan-600',
  accentColor: '#0ea5e9',
  description: 'پرسشنامه معتبر ۱۲۰ سوالی نئو (IPIP-NEO-120) منطبق با استانداردهای دانشگاهی و سامانه‌های مرجع روان‌سنجی کشور (نظیر ای‌سنج)؛ این آزمون به بررسی عمیق و دقیق ۵ ابرعامل بنیادین شخصیت (روان‌رنجورخویی، برون‌گرایی، گشودگی به تجربه، توافق‌پذیری و باوجدانی) می‌پردازد.',
  clinicalApplication: 'ارزیابی ساختار شخصیت، راهنمایی مسیر شغلی و تحصیلی، مشاوره پیش از ازدواج، انتخاب مدیران و خودشناسی بالینی.',
  optionType: 'likert5',
  defaultOptions: [
    { label: 'کاملاً موافقم (۴)', value: 4 },
    { label: 'موافقم (۳)', value: 3 },
    { label: 'خنثی / بدون نظر (۲)', value: 2 },
    { label: 'مخالفم (۱)', value: 1 },
    { label: 'کاملاً مخالفم (۰)', value: 0 },
  ],
  questions: [
  {
    "id": "neo_1",
    "text": "من غالباً احساس تنش، اضطراب و دلشوره مبهم می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_2",
    "text": "در مواقع بحرانی به سرعت آرامش و خونسردی‌ام را حفظ می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_3",
    "text": "گاهی احساس شدید شرمساری، درماندگی و تحقیر شدن به من دست می‌دهد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_4",
    "text": "به ندرت دچار احساس غم عمیق، دلمردگی یا ناامیدی می‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_5",
    "text": "کنترل افکار منفی، نگرانی‌ها و دغدغه‌های ذهنی برایم دشوار است.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_6",
    "text": "من اطمینان کاملی به قدرت شخصی‌ام در عبور از چالش‌های زندگی دارم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_7",
    "text": "به راحتی از کوره در می‌روم و زود عصبانی و پرخاشگر می‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_8",
    "text": "کمتر پیش می‌آید که دچار احساس ترس، وحشت ناگهانی یا بی‌قراری شدید شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_9",
    "text": "هنگامی که زیر فشار روانی شدید قرار می‌گیرم، احساس فروپاشی و استیصال می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_10",
    "text": "من ثبات عاطفی بالایی دارم و خلق و خویم به ندرت دچار دگرگونی‌های ناگهانی می‌شود.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_11",
    "text": "بسیاری از مواقع نگران پیامدهای بد تصمیمات و آینده مبهم هستم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_12",
    "text": "نسبت به نگاه، قضاوت و انتقادهای دیگران به شدت آسیب‌پذیر و حساسم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_13",
    "text": "گاهی آن‌قدر احساس ناامیدی می‌کنم که گویی همه درها به رویم بسته شده است.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_14",
    "text": "حتی پس از یک روز سخت کاری، اعصابم به سرعت به آرامش می‌رسد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_15",
    "text": "وسوسه‌ها و هوس‌های آنی را به سختی می‌توانم مهار کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_16",
    "text": "من قدرت مهار بالایی بر امیال ناگهانی خود دارم و تسلیم وسوسه نمی‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_17",
    "text": "در موقعیت‌های استرس‌زا احساس سرگیجه، تپش قلب یا تنگی نفس به من دست می‌دهد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_18",
    "text": "احساس می‌کنم توانایی ذهنی‌ام در حل بحران‌ها بالاست و دستپاچه نمی‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_19",
    "text": "گاهی بدون دلیل مشخصی احساس اندوه و گریه به سراغم می‌آید.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_20",
    "text": "من به راحتی می‌توانم ذهنم را از خاطرات تلخ و اشتباهات گذشته پاک کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_21",
    "text": "هنگام صحبت در میان افراد تازه یا مهم، شدیداً احساس معذب‌بودن و خودتردیدی می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_22",
    "text": "به ندرت احساس درماندگی می‌کنم و همیشه راهی برای برون‌رفت می‌یابم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_23",
    "text": "اگر برنامه‌ای طبق میلم پیش نرود، احساس خشم و برافروختگی زیادی پیدا می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_24",
    "text": "آرامش درونی من پایدارتر از آن است که حوادث روزمره بتواند آن را متزلزل کند.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «روان‌رنجورخویی و ثبات هیجانی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_25",
    "text": "من واقعاً از گفتگو، شوخی و معاشرت در جمع‌های پرشور لذت می‌برم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_26",
    "text": "ترجیح می‌دهم بیشتر اوقات فراغتم را در تنهایی، سکوت و خلوت خود بگذرانم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_27",
    "text": "من فردی سرزنده، پرانرژی، خستگی‌ناپذیر و مشتاق به فعالیت‌های اجتماعی‌ام.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_28",
    "text": "معمولاً در گردهمایی‌ها و جلسات ساکت، نظاره‌گر و بی‌حاشیه هستم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_29",
    "text": "خیلی سریع و بدون تکلف با غریبه‌ها ارتباط برقرار می‌کنم و دوستان فراوانی دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_30",
    "text": "کمتر پیش می‌آید پیشقدم شوم تا با کسی که نمی‌شناسم سر صحبت را باز کنم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_31",
    "text": "ریتم زندگی من سریع، هیجان‌انگیز، پرمشغله و متنوع است.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_32",
    "text": "من ترجیح می‌دهم کارهایم را با آرامش، سکون و بدون شتاب به انجام برسانم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_33",
    "text": "حضور من در جمع معمولاً باعث ایجاد خنده، شوخ‌طبعی و شادابی فضا می‌شود.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_34",
    "text": "انجام کارهای انفرادی را به مشارکت در پروژه‌های تیمی پر سر و صدا ترجیح می‌دهم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_35",
    "text": "عاشق قرار گرفتن در کانون توجه هستم و از دیده شدن لذت می‌برم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_36",
    "text": "جاه‌طلبی و انگیزه بالایی برای هدایت دیگران و در دست گرفتن رهبری گروه دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_37",
    "text": "بودن در میان جمعیت‌های بزرگ به من انگیزه و انرژی مضاعف می‌بخشد.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_38",
    "text": "حضور طولانی در مکان‌های شلوغ انرژی روانی مرا کاملاً تخلیه می‌کند.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_39",
    "text": "من فردی رک، صریح و قاطع در بیان خواسته‌ها و مطالباتم در جمع هستم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_40",
    "text": "ترجیح می‌دهم به جای سخنرانی یا حضور فعال، در ردیف‌های عقب سالن بنشینم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_41",
    "text": "عاشق ورزش‌های ماجراجویانه، تفریحات پرریسک و تجربیات غافلگیرکننده‌ام.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_42",
    "text": "تفریحات آرام مانند مطالعه کتاب یا پیاده‌روی در سکوت را به مهمانی‌های بزرگ ترجیح می‌دهم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_43",
    "text": "لبخند زدن و گرم گرفتن با افراد برای من یک عادت همیشگی است.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_44",
    "text": "معمولاً فردی خوددار و آرام به نظر می‌رسم که هیجاناتش را بروز نمی‌دهد.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_45",
    "text": "دوستانم مرا به عنوان فردی خوش‌مشرب، خوش‌برخورد و دست‌ودلباز می‌شناسند.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_46",
    "text": "ترجیح می‌دهم تعطیلات را در خانه استراحت کنم تا اینکه به سفرهای شلوغ بروم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_47",
    "text": "قدرت بیان و زبان بدن گیرایی در متقاعد کردن دیگران دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_48",
    "text": "در مکالمات روزمره بیشتر شنونده خوبی هستم تا اینکه خودم متکلم وحده باشم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «برون‌گرایی و انرژی اجتماعی» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_49",
    "text": "من علاقه شدیدی به ایده‌های نوآورانه، نظریات فلسفی و تامل در مفاهیم انتزاعی دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_50",
    "text": "به ندرت وقت خود را صرف خیال‌پردازی، داستان‌سرایی یا رویاهای فکری می‌کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_51",
    "text": "دیدن شگفتی‌های طبیعت، نقاشی‌های مفهومی، شعر و موسیقی مرا عمیقاً تحت تاثیر قرار می‌دهد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_52",
    "text": "من به روش‌های سنتی، تجربی و امتحان‌پَس‌داده بیشتر از راه‌حل‌های نوظهور باور دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_53",
    "text": "کنجکاوی ذهنی سیری‌ناپذیری دارم و دائماً در حال مطالعه پیرامون موضوعات گوناگونم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_54",
    "text": "تئوری‌های انتزاعی و بحث‌های فلسفی برای من خسته‌کننده، دور از عمل و بی‌فایده‌اند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_55",
    "text": "دوست دارم غذاهای ملل مختلف، آداب فرهنگی تازه و سبک‌های نو در زندگی را تجربه کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_56",
    "text": "ترجیح می‌دهم سبک زندگی و عادات روزانه‌ام کاملاً قابل پیش‌بینی، یکدست و بدون تغییر باشد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_57",
    "text": "جهان احساسات درونی من بسیار غنی، عمیق و سرشار از لایه‌های گوناگون است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_58",
    "text": "در ارزیابی قوانین، اخلاقیات و سنت‌ها به پرسشگری عمیق و بازاندیشی انتقادی باور دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_59",
    "text": "دیدن تنوع آرا، عقاید گوناگون و سبک‌های زیستی متفاوت برایم بسیار جذاب و آموزنده است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_60",
    "text": "مسائل اخلاقی، سیاسی و اجتماعی را بیشتر سیاه و سفید می‌بینم تا نسبی و چندبعدی.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_61",
    "text": "از بازدید از گالری‌های هنری، تئاترهای خلاق و موزه‌ها حظ وافری می‌برم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_62",
    "text": "من فردی کاملاً عمل‌گرا هستم و علاقه‌ای به شعرسرایی و احساسات فانتزی ندارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_63",
    "text": "تخیل من در حل مسائل کاری راه‌های نامتعارف و بسیار تازه‌ای خلق می‌کند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_64",
    "text": "تغییر دکوراسیون یا تغییر مسیرهای همیشگی رفت‌وآمد مرا کلافه می‌کند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_65",
    "text": "هنگام گوش دادن به یک موسیقی بی‌کلام، تصاویری از عواطف و داستان‌ها در ذهنم جان می‌گیرد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_66",
    "text": "بهتر است افراد جامعه طبق الگوهای اخلاقی ثابت و پذیرفته‌شده سنتی رفتار کنند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_67",
    "text": "از خواندن کتاب‌های علمی-تخیلی یا آثاری که آینده بشر را به تصویر می‌کشند لذت می‌برم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_68",
    "text": "من به واقعیت‌های زمینی و ملموس می‌پردازم و در ابرها سیر نمی‌کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_69",
    "text": "حتی اگر با دیدگاهی شدیداً مخالف باشم، با کنجکاوی و حوصله به استدلال‌هایش گوش می‌دهم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_70",
    "text": "آزمودن مسیرهای ناشناخته ریسکی بیهوده است و ترجیح می‌دهم از راه صاف بروم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_71",
    "text": "پیچیدگی‌های روان انسان و چرایی رفتارهای عجیب افراد برایم موضوعی شگفت‌انگیز است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_72",
    "text": "زیبایی‌های هنری اهمیت چندانی در حل مشکلات واقعی و اقتصادی زندگی روزمره ندارند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «گشودگی به تجربه و تفکر» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_73",
    "text": "من صمیمانه به صداقت، نیت پاک و شرافت درونی بیشتر انسان‌ها باور دارم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_74",
    "text": "به نظرم اکثر افراد در صورت داشتن فرصت، برای منافع خود دیگران را دور می‌زنند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_75",
    "text": "من همواره آماده‌ام تا بدون چشم‌داشت به نیازمندان کمک کرده و سنگ صبور باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_76",
    "text": "برخی افراد مرا فردی سرسخت، دیرباور و اهل رقابت بی‌رحمانه می‌دانند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_77",
    "text": "تلاش می‌کنم در برخوردهایم با همه اقشار متواضع، باگذشت، مهربان و محترمانه باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_78",
    "text": "در صورت لزوم، بدون تعارف و با تندی تمام از حقوق شخصی‌ام در برابر دیگران دفاع می‌کنم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_79",
    "text": "تمایل دارم در اختلافات و مشاجرات همیشه به دنبال راه‌حل‌های مسالمت‌آمیز و سازش باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_80",
    "text": "تمایلی ندارم وقت ارزشمندم را برای شنیدن درددل‌ها و مشکلات دیگران هدر دهم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_81",
    "text": "همدردی، شفقت و مراقبت از آسیب‌دیدگان یکی از والاترین ارزش‌های قلبی من است.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_82",
    "text": "اطرافیانم معمولاً مرا انسانی باصداقت، بدون دورویی، یک‌رنگ و قابل اتکا می‌شناسند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_83",
    "text": "برای پیشبرد اهدافم، گاهی لازم است احساسات و ناراحتی اطرافیان را نادیده بگیرم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_84",
    "text": "همکاری و رفاقت تیمی را بسیار ارزشمندتر و پایدارتر از رقابت تنش‌آفرین می‌دانم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_85",
    "text": "اگر کسی از من عذرخواهی کند، به سرعت او را می‌بخشم و کینه‌ای به دل نمی‌گیرم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_86",
    "text": "افرادی که زود احساساتی می‌شوند و عذرخواهی می‌کنند به نظرم ضعیف و آسیب‌پذیرند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_87",
    "text": "من به راحتی می‌توانم منافع فردی‌ام را فدای رفاه و آسایش جمع خانواده یا گروه کنم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_88",
    "text": "من ترجیح می‌دهم از دیگران برتر باشم تا اینکه صرفاً یکی از اعضای عادی گروه باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_89",
    "text": "در قضاوت دیگران به دنبال یافتن حسن‌نیت‌ها هستم نه مچ‌گیری از عیوبشان.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_90",
    "text": "بسیاری از کسانی که وانمود می‌کنند دلسوزند، در واقع به دنبال منافع پنهان خود هستند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_91",
    "text": "رعایت ادب و حفظ حرمت دیگران حتی در شدیدترین عصبانیت‌ها خط قرمز من است.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_92",
    "text": "اگر کسی به من ضربه بزند، حتماً روزی تلافی خواهم کرد و کوتاه نمی‌آیم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_93",
    "text": "احساس دلسوزی شدیدی نسبت به کودکان بی‌سرپرست و حیوانات بی‌پناه دارم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_94",
    "text": "در معاملات مالی و تجاری دلسوزی را کنار می‌گذارم و صرفاً بر سود متمرکز می‌شوم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_95",
    "text": "ترجیح می‌دهم در برابر خطای کوچک دیگران چشم‌پوشی کنم تا بحث و تلخی ادامه پیدا نکند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_96",
    "text": "به نظر من هر کس باید فقط مراقب کلاه خودش باشد و نباید باری از دیگران برداشت.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «توافق‌پذیری و سازگاری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_97",
    "text": "من قبل از آغاز هر کاری، برنامه‌ریزی هدفمند می‌کنم و تا انتها به آن پایبند می‌مانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_98",
    "text": "گاهی اوقات در انجام کارها تعلل می‌کنم و وظایفم را تا دقیقه نود به تاخیر می‌اندازم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_99",
    "text": "تمام تلاشم را می‌کنم تا به تعهدات، قول‌ها و وظایف کاری‌ام به بهترین شکل ممکن عمل کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_100",
    "text": "میز کار، اتاق و محیط زندگی من معمولاً نامنظم و به هم ریخته است.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_101",
    "text": "من فردی کوشا، مصمم، باانگیزه و با پشتکارم که تا رسیدن به هدف دست از تلاش برنمی‌دارد.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_102",
    "text": "انگیزه درونی چندانی برای ارتقای رتبه حرفه‌ای یا کسب دستاوردهای بزرگ ندارم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_103",
    "text": "نسبت به جزئیات، کیفیت نهایی کار و رعایت استانداردهای عالی بسیار دقیق و وسواسی‌ام.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_104",
    "text": "در مدیریت زمان، الویت‌بندی امور و سازماندهی کارهای روزانه‌ام احساس ضعف می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_105",
    "text": "هر تصمیم مهمی را تنها پس از سنجش عمیق سود و زیان و بررسی پیامدها اتخاذ می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_106",
    "text": "گاهی بدون تامل و محاسبه ریسک، دست به اقدامات نسنجیده، هیجانی و پرخطر می‌زنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_107",
    "text": "به اصول اخلاقی و استانداردهای وجدانی خود در هر شرایطی پایبند می‌مانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_108",
    "text": "هر پروژه‌ای را که آغاز می‌کنم، حتماً تا پایان کامل و دقیق آن را به سرانجام می‌رسانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_109",
    "text": "نظم و تمیزی وسایل شخصی‌ام آرامش روانی عمیقی به من می‌بخشد.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_110",
    "text": "به راحتی با حواس‌پرتی‌های کوچک کار اصلی‌ام را رها کرده و مشغول کارهای فرعی می‌شوم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_111",
    "text": "برای ۵ سال آینده زندگی‌ام اهداف شفاف و برنامه‌ای مکتوب و مشخص دارم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_112",
    "text": "معمولاً اجازه می‌دهم زندگی خودش پیش برود و اهل برنامه‌ریزی سفت‌وسخت نیستم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_113",
    "text": "کیفیت کارم حتی زمانی که هیچ ناظری بالای سرم نیست در بالاترین سطح است.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_114",
    "text": "گاهی فراموش می‌کنم وسایلم را کجا گذاشته‌ام یا قرارهای مهم کاری را جا می‌اندازم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  },
  {
    "id": "neo_115",
    "text": "توانایی تمرکز طولانی‌مدت بر پروژه‌های سخت و پیچیده را به خوبی دارا هستم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_116",
    "text": "شروع یک کار سخت برایم به قدری عذاب‌آور است که دائماً بهانه‌تراشی می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_117",
    "text": "پیش از خرج کردن پول، بودجه‌بندی ماهانه‌ام را دقیقاً محاسبه و پس‌انداز می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_118",
    "text": "خریدهای هیجانی و تصمیمات بدون پس‌انداز گاهی مرا دچار چالش مالی می‌کند.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_119",
    "text": "به عنوان فردی قابل اعتماد، منظم و وظیفه‌شناس در میان همکارانم سرآمدم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "مستقیم (افزایش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده تمایل و همسویی با این ویژگی است."
    }
  },
  {
    "id": "neo_120",
    "text": "اگر کارها کمی خسته‌کننده شوند، سریعاً انگیزه خود را برای ادامه از دست می‌دهم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
      "scoringMechanism": "معکوس (کاهش نمره قطب اصلی)",
      "clinicalSignificance": "این سوال شاخص «باوجدانی و مسئولیت‌پذیری» را ارزیابی می‌کند. پاسخ کاربر نشان‌دهنده مقاومت و دوری از این ویژگی است."
    }
  }
]
};
