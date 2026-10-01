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
  category: 'development',
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
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (اضطراب پایه)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: اضطراب پایه."
    }
  },
  {
    "id": "neo_2",
    "text": "در مواقع بحرانی به سرعت آرامش و خونسردی‌ام را حفظ می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (تاب‌آوری هیجانی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: تاب‌آوری هیجانی."
    }
  },
  {
    "id": "neo_3",
    "text": "گاهی احساس شدید شرمساری، درماندگی و تحقیر شدن به من دست می‌دهد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (شرم و احساس بی‌ارزشی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: شرم و احساس بی‌ارزشی."
    }
  },
  {
    "id": "neo_4",
    "text": "به ندرت دچار احساس غم عمیق، دلمردگی یا ناامیدی می‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (پایداری خلق در برابر افسردگی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: پایداری خلق در برابر افسردگی."
    }
  },
  {
    "id": "neo_5",
    "text": "کنترل افکار منفی، نگرانی‌ها و دغدغه‌های ذهنی برایم دشوار است.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (نشخوار فکری و نگرانی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: نشخوار فکری و نگرانی."
    }
  },
  {
    "id": "neo_6",
    "text": "من اطمینان کاملی به قدرت شخصی‌ام در عبور از چالش‌های زندگی دارم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (خودکارآمدی هیجانی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: خودکارآمدی هیجانی."
    }
  },
  {
    "id": "neo_7",
    "text": "به راحتی از کوره در می‌روم و زود عصبانی و پرخاشگر می‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (خشم و تحریک‌پذیری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: خشم و تحریک‌پذیری."
    }
  },
  {
    "id": "neo_8",
    "text": "کمتر پیش می‌آید که دچار احساس ترس، وحشت ناگهانی یا بی‌قراری شدید شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (ثبات سیستم عصبی خودمختار)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: ثبات سیستم عصبی خودمختار."
    }
  },
  {
    "id": "neo_9",
    "text": "هنگامی که زیر فشار روانی شدید قرار می‌گیرم، احساس فروپاشی و استیصال می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (شکنندگی در برابر استرس)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: شکنندگی در برابر استرس."
    }
  },
  {
    "id": "neo_10",
    "text": "من ثبات عاطفی بالایی دارم و خلق و خویم به ندرت دچار دگرگونی‌های ناگهانی می‌شود.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (یکنواختی خلق)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: یکنواختی خلق."
    }
  },
  {
    "id": "neo_11",
    "text": "بسیاری از مواقع نگران پیامدهای بد تصمیمات و آینده مبهم هستم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (پیش‌بینی‌های منفی‌گرایانه)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: پیش‌بینی‌های منفی‌گرایانه."
    }
  },
  {
    "id": "neo_12",
    "text": "نسبت به نگاه، قضاوت و انتقادهای دیگران به شدت آسیب‌پذیر و حساسم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (حساسیت بین‌فردی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: حساسیت بین‌فردی."
    }
  },
  {
    "id": "neo_13",
    "text": "گاهی آن‌قدر احساس ناامیدی می‌کنم که گویی همه درها به رویم بسته شده است.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (حالت‌های ناامیدی عمیق)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: حالت‌های ناامیدی عمیق."
    }
  },
  {
    "id": "neo_14",
    "text": "حتی پس از یک روز سخت کاری، اعصابم به سرعت به آرامش می‌رسد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (سرعت آرام‌سازی عضلانی و ذهنی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: سرعت آرام‌سازی عضلانی و ذهنی."
    }
  },
  {
    "id": "neo_15",
    "text": "وسوسه‌ها و هوس‌های آنی را به سختی می‌توانم مهار کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (تکانشگری و اشتها/انگیزه مفرط)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: تکانشگری و اشتها/انگیزه مفرط."
    }
  },
  {
    "id": "neo_16",
    "text": "من قدرت مهار بالایی بر امیال ناگهانی خود دارم و تسلیم وسوسه نمی‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (مهار وسوسه و تکانه)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: مهار وسوسه و تکانه."
    }
  },
  {
    "id": "neo_17",
    "text": "در موقعیت‌های استرس‌زا احساس سرگیجه، تپش قلب یا تنگی نفس به من دست می‌دهد.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (پاسخ سوماتیک اضطراب)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: پاسخ سوماتیک اضطراب."
    }
  },
  {
    "id": "neo_18",
    "text": "احساس می‌کنم توانایی ذهنی‌ام در حل بحران‌ها بالاست و دستپاچه نمی‌شوم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (خونسردی اجرایی در بحران)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: خونسردی اجرایی در بحران."
    }
  },
  {
    "id": "neo_19",
    "text": "گاهی بدون دلیل مشخصی احساس اندوه و گریه به سراغم می‌آید.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (افسردگی نوسانی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: افسردگی نوسانی."
    }
  },
  {
    "id": "neo_20",
    "text": "من به راحتی می‌توانم ذهنم را از خاطرات تلخ و اشتباهات گذشته پاک کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (رهایی از نشخوار گذشته)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: رهایی از نشخوار گذشته."
    }
  },
  {
    "id": "neo_21",
    "text": "هنگام صحبت در میان افراد تازه یا مهم، شدیداً احساس معذب‌بودن و خودتردیدی می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (اضطراب اجتماعی و خودآگاهی منفی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: اضطراب اجتماعی و خودآگاهی منفی."
    }
  },
  {
    "id": "neo_22",
    "text": "به ندرت احساس درماندگی می‌کنم و همیشه راهی برای برون‌رفت می‌یابم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (تاب‌آوری شناختی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: تاب‌آوری شناختی."
    }
  },
  {
    "id": "neo_23",
    "text": "اگر برنامه‌ای طبق میلم پیش نرود، احساس خشم و برافروختگی زیادی پیدا می‌کنم.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (عدم تحمل ناکامی و پرخاش)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل N: حساس به تنش، مستعد اضطراب، نگرانی و نوسان خلق. اهمیت بالینی: عدم تحمل ناکامی و پرخاش."
    }
  },
  {
    "id": "neo_24",
    "text": "آرامش درونی من پایدارتر از آن است که حوادث روزمره بتواند آن را متزلزل کند.",
    "factor": "N",
    "factorTitle": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "روان‌رنجورخویی و ثبات هیجانی (Neuroticism) (استواری روانی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل N: آرام، تاب‌آور، خونسرد و باثبات هیجانی در بحران‌ها. اهمیت بالینی: استواری روانی."
    }
  },
  {
    "id": "neo_25",
    "text": "من واقعاً از گفتگو، شوخی و معاشرت در جمع‌های پرشور لذت می‌برم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (جامعه‌پذیری و گرمی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: جامعه‌پذیری و گرمی."
    }
  },
  {
    "id": "neo_26",
    "text": "ترجیح می‌دهم بیشتر اوقات فراغتم را در تنهایی، سکوت و خلوت خود بگذرانم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ترجیح خلوت فردی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: ترجیح خلوت فردی."
    }
  },
  {
    "id": "neo_27",
    "text": "من فردی سرزنده، پرانرژی، خستگی‌ناپذیر و مشتاق به فعالیت‌های اجتماعی‌ام.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (سطح بالای انرژی مثبت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: سطح بالای انرژی مثبت."
    }
  },
  {
    "id": "neo_28",
    "text": "معمولاً در گردهمایی‌ها و جلسات ساکت، نظاره‌گر و بی‌حاشیه هستم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (احتیاط و سکوت در جمع)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: احتیاط و سکوت در جمع."
    }
  },
  {
    "id": "neo_29",
    "text": "خیلی سریع و بدون تکلف با غریبه‌ها ارتباط برقرار می‌کنم و دوستان فراوانی دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (سهولت در دوستیابی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: سهولت در دوستیابی."
    }
  },
  {
    "id": "neo_30",
    "text": "کمتر پیش می‌آید پیشقدم شوم تا با کسی که نمی‌شناسم سر صحبت را باز کنم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (پرهیز از پیشگامی در ارتباط)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: پرهیز از پیشگامی در ارتباط."
    }
  },
  {
    "id": "neo_31",
    "text": "ریتم زندگی من سریع، هیجان‌انگیز، پرمشغله و متنوع است.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ریتم فعال زندگی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: ریتم فعال زندگی."
    }
  },
  {
    "id": "neo_32",
    "text": "من ترجیح می‌دهم کارهایم را با آرامش، سکون و بدون شتاب به انجام برسانم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ریتم کند و بدون هیاهو)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: ریتم کند و بدون هیاهو."
    }
  },
  {
    "id": "neo_33",
    "text": "حضور من در جمع معمولاً باعث ایجاد خنده، شوخ‌طبعی و شادابی فضا می‌شود.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (تولید جو شاداب و مثبت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: تولید جو شاداب و مثبت."
    }
  },
  {
    "id": "neo_34",
    "text": "انجام کارهای انفرادی را به مشارکت در پروژه‌های تیمی پر سر و صدا ترجیح می‌دهم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (استقلال در کار فردی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: استقلال در کار فردی."
    }
  },
  {
    "id": "neo_35",
    "text": "عاشق قرار گرفتن در کانون توجه هستم و از دیده شدن لذت می‌برم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ابراز وجود و نمایش‌طلبی مثبت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: ابراز وجود و نمایش‌طلبی مثبت."
    }
  },
  {
    "id": "neo_36",
    "text": "جاه‌طلبی و انگیزه بالایی برای هدایت دیگران و در دست گرفتن رهبری گروه دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (قاطعیت و پیشتازی در جمع)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: قاطعیت و پیشتازی در جمع."
    }
  },
  {
    "id": "neo_37",
    "text": "بودن در میان جمعیت‌های بزرگ به من انگیزه و انرژی مضاعف می‌بخشد.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (تغذیه روانی از جمع)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: تغذیه روانی از جمع."
    }
  },
  {
    "id": "neo_38",
    "text": "حضور طولانی در مکان‌های شلوغ انرژی روانی مرا کاملاً تخلیه می‌کند.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (افت انرژی در مکان‌های پرجمعیت)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: افت انرژی در مکان‌های پرجمعیت."
    }
  },
  {
    "id": "neo_39",
    "text": "من فردی رک، صریح و قاطع در بیان خواسته‌ها و مطالباتم در جمع هستم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ابراز وجود قاطعانه)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: ابراز وجود قاطعانه."
    }
  },
  {
    "id": "neo_40",
    "text": "ترجیح می‌دهم به جای سخنرانی یا حضور فعال، در ردیف‌های عقب سالن بنشینم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (تمایل به درحاشیه‌ماندن)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: تمایل به درحاشیه‌ماندن."
    }
  },
  {
    "id": "neo_41",
    "text": "عاشق ورزش‌های ماجراجویانه، تفریحات پرریسک و تجربیات غافلگیرکننده‌ام.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (هیجان‌خواهی مثبت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: هیجان‌خواهی مثبت."
    }
  },
  {
    "id": "neo_42",
    "text": "تفریحات آرام مانند مطالعه کتاب یا پیاده‌روی در سکوت را به مهمانی‌های بزرگ ترجیح می‌دهم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ترجیح تفریحات آرام)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: ترجیح تفریحات آرام."
    }
  },
  {
    "id": "neo_43",
    "text": "لبخند زدن و گرم گرفتن با افراد برای من یک عادت همیشگی است.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (گرمی رفتاری پایدار)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: گرمی رفتاری پایدار."
    }
  },
  {
    "id": "neo_44",
    "text": "معمولاً فردی خوددار و آرام به نظر می‌رسم که هیجاناتش را بروز نمی‌دهد.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (خویشتن‌داری در ابراز هیجان)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: خویشتن‌داری در ابراز هیجان."
    }
  },
  {
    "id": "neo_45",
    "text": "دوستانم مرا به عنوان فردی خوش‌مشرب، خوش‌برخورد و دست‌ودلباز می‌شناسند.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (جذابیت بین‌فردی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: جذابیت بین‌فردی."
    }
  },
  {
    "id": "neo_46",
    "text": "ترجیح می‌دهم تعطیلات را در خانه استراحت کنم تا اینکه به سفرهای شلوغ بروم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (خانه‌نشینی در برابر گشت‌وگذار)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: خانه‌نشینی در برابر گشت‌وگذار."
    }
  },
  {
    "id": "neo_47",
    "text": "قدرت بیان و زبان بدن گیرایی در متقاعد کردن دیگران دارم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (قدرت اقناع اجتماعی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل E: پرانرژی، معاشرتی، فعال، پیشگام و مشتاق به پیوند اجتماعی. اهمیت بالینی: قدرت اقناع اجتماعی."
    }
  },
  {
    "id": "neo_48",
    "text": "در مکالمات روزمره بیشتر شنونده خوبی هستم تا اینکه خودم متکلم وحده باشم.",
    "factor": "E",
    "factorTitle": "برون‌گرایی و انرژی اجتماعی (Extraversion)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی و انرژی اجتماعی (Extraversion) (ترجیح شنوندگی بر گویندگی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل E: درون‌گرا، آرام، مستقل، کم‌حرف و خودبسنده. اهمیت بالینی: ترجیح شنوندگی بر گویندگی."
    }
  },
  {
    "id": "neo_49",
    "text": "من علاقه شدیدی به ایده‌های نوآورانه، نظریات فلسفی و تامل در مفاهیم انتزاعی دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (کنجکاوی فکری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: کنجکاوی فکری."
    }
  },
  {
    "id": "neo_50",
    "text": "به ندرت وقت خود را صرف خیال‌پردازی، داستان‌سرایی یا رویاهای فکری می‌کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (تمرکز بر واقعیت عینی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: تمرکز بر واقعیت عینی."
    }
  },
  {
    "id": "neo_51",
    "text": "دیدن شگفتی‌های طبیعت، نقاشی‌های مفهومی، شعر و موسیقی مرا عمیقاً تحت تاثیر قرار می‌دهد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (حساسیت زیبایی‌شناختی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: حساسیت زیبایی‌شناختی."
    }
  },
  {
    "id": "neo_52",
    "text": "من به روش‌های سنتی، تجربی و امتحان‌پَس‌داده بیشتر از راه‌حل‌های نوظهور باور دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (محافظه‌کاری روش‌شناختی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: محافظه‌کاری روش‌شناختی."
    }
  },
  {
    "id": "neo_53",
    "text": "کنجکاوی ذهنی سیری‌ناپذیری دارم و دائماً در حال مطالعه پیرامون موضوعات گوناگونم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (عطش دانش و یادگیری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: عطش دانش و یادگیری."
    }
  },
  {
    "id": "neo_54",
    "text": "تئوری‌های انتزاعی و بحث‌های فلسفی برای من خسته‌کننده، دور از عمل و بی‌فایده‌اند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (پراگماتیسم ضدتئوری)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: پراگماتیسم ضدتئوری."
    }
  },
  {
    "id": "neo_55",
    "text": "دوست دارم غذاهای ملل مختلف، آداب فرهنگی تازه و سبک‌های نو در زندگی را تجربه کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (ماجراجویی فرهنگی و حسی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: ماجراجویی فرهنگی و حسی."
    }
  },
  {
    "id": "neo_56",
    "text": "ترجیح می‌دهم سبک زندگی و عادات روزانه‌ام کاملاً قابل پیش‌بینی، یکدست و بدون تغییر باشد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (نیاز به یکنواختی و ساختار ثابت)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: نیاز به یکنواختی و ساختار ثابت."
    }
  },
  {
    "id": "neo_57",
    "text": "جهان احساسات درونی من بسیار غنی، عمیق و سرشار از لایه‌های گوناگون است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (غنا و عمق هیجانی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: غنا و عمق هیجانی."
    }
  },
  {
    "id": "neo_58",
    "text": "در ارزیابی قوانین، اخلاقیات و سنت‌ها به پرسشگری عمیق و بازاندیشی انتقادی باور دارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (رویکرد انتقادی به سنت‌ها)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: رویکرد انتقادی به سنت‌ها."
    }
  },
  {
    "id": "neo_59",
    "text": "دیدن تنوع آرا، عقاید گوناگون و سبک‌های زیستی متفاوت برایم بسیار جذاب و آموزنده است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (پذیرش کثرت‌گرایی فکری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: پذیرش کثرت‌گرایی فکری."
    }
  },
  {
    "id": "neo_60",
    "text": "مسائل اخلاقی، سیاسی و اجتماعی را بیشتر سیاه و سفید می‌بینم تا نسبی و چندبعدی.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (تفکر مطلق‌گرا و دوگانه)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: تفکر مطلق‌گرا و دوگانه."
    }
  },
  {
    "id": "neo_61",
    "text": "از بازدید از گالری‌های هنری، تئاترهای خلاق و موزه‌ها حظ وافری می‌برم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (علاقه به هنر و فرهنگ)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: علاقه به هنر و فرهنگ."
    }
  },
  {
    "id": "neo_62",
    "text": "من فردی کاملاً عمل‌گرا هستم و علاقه‌ای به شعرسرایی و احساسات فانتزی ندارم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (عمل‌گرایی خشک و دوری از خیال)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: عمل‌گرایی خشک و دوری از خیال."
    }
  },
  {
    "id": "neo_63",
    "text": "تخیل من در حل مسائل کاری راه‌های نامتعارف و بسیار تازه‌ای خلق می‌کند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (خلاقیت کاربردی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: خلاقیت کاربردی."
    }
  },
  {
    "id": "neo_64",
    "text": "تغییر دکوراسیون یا تغییر مسیرهای همیشگی رفت‌وآمد مرا کلافه می‌کند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (عادت‌زدگی و مقاومت در برابر تغییر روزمره)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: عادت‌زدگی و مقاومت در برابر تغییر روزمره."
    }
  },
  {
    "id": "neo_65",
    "text": "هنگام گوش دادن به یک موسیقی بی‌کلام، تصاویری از عواطف و داستان‌ها در ذهنم جان می‌گیرد.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (تداعی حسی و زیبایی‌شناختی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: تداعی حسی و زیبایی‌شناختی."
    }
  },
  {
    "id": "neo_66",
    "text": "بهتر است افراد جامعه طبق الگوهای اخلاقی ثابت و پذیرفته‌شده سنتی رفتار کنند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (باور به هنجارگرایی اخلاقی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: باور به هنجارگرایی اخلاقی."
    }
  },
  {
    "id": "neo_67",
    "text": "از خواندن کتاب‌های علمی-تخیلی یا آثاری که آینده بشر را به تصویر می‌کشند لذت می‌برم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (کشش به آینده‌پژوهی و نوآوری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: کشش به آینده‌پژوهی و نوآوری."
    }
  },
  {
    "id": "neo_68",
    "text": "من به واقعیت‌های زمینی و ملموس می‌پردازم و در ابرها سیر نمی‌کنم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (واقع‌بینی ملموس)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: واقع‌بینی ملموس."
    }
  },
  {
    "id": "neo_69",
    "text": "حتی اگر با دیدگاهی شدیداً مخالف باشم، با کنجکاوی و حوصله به استدلال‌هایش گوش می‌دهم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (تساهل و رواداری فکری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: تساهل و رواداری فکری."
    }
  },
  {
    "id": "neo_70",
    "text": "آزمودن مسیرهای ناشناخته ریسکی بیهوده است و ترجیح می‌دهم از راه صاف بروم.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (محافظه‌کاری تجربی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: محافظه‌کاری تجربی."
    }
  },
  {
    "id": "neo_71",
    "text": "پیچیدگی‌های روان انسان و چرایی رفتارهای عجیب افراد برایم موضوعی شگفت‌انگیز است.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (کنجکاوی روان‌شناختی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل O: کنجکاو، خلاق، هنردوست، ژرف‌اندیش و تحول‌خواه. اهمیت بالینی: کنجکاوی روان‌شناختی."
    }
  },
  {
    "id": "neo_72",
    "text": "زیبایی‌های هنری اهمیت چندانی در حل مشکلات واقعی و اقتصادی زندگی روزمره ندارند.",
    "factor": "O",
    "factorTitle": "گشودگی به تجربه و تفکر (Openness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "گشودگی به تجربه و تفکر (Openness) (نگاه فایده‌گرایانه مادی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل O: عمل‌گرا، پایبند به روش‌های سنتی، عینی و مقاوم به تغییر. اهمیت بالینی: نگاه فایده‌گرایانه مادی."
    }
  },
  {
    "id": "neo_73",
    "text": "من صمیمانه به صداقت، نیت پاک و شرافت درونی بیشتر انسان‌ها باور دارم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (اعتماد بنیادین به انسان‌ها)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: اعتماد بنیادین به انسان‌ها."
    }
  },
  {
    "id": "neo_74",
    "text": "به نظرم اکثر افراد در صورت داشتن فرصت، برای منافع خود دیگران را دور می‌زنند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (سوءظن و دیرباوری اجتماعی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: سوءظن و دیرباوری اجتماعی."
    }
  },
  {
    "id": "neo_75",
    "text": "من همواره آماده‌ام تا بدون چشم‌داشت به نیازمندان کمک کرده و سنگ صبور باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (نوع‌دوستی و ایثار)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: نوع‌دوستی و ایثار."
    }
  },
  {
    "id": "neo_76",
    "text": "برخی افراد مرا فردی سرسخت، دیرباور و اهل رقابت بی‌رحمانه می‌دانند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (گرایش رقابتی شدید)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: گرایش رقابتی شدید."
    }
  },
  {
    "id": "neo_77",
    "text": "تلاش می‌کنم در برخوردهایم با همه اقشار متواضع، باگذشت، مهربان و محترمانه باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (فروتنی و نزاکت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: فروتنی و نزاکت."
    }
  },
  {
    "id": "neo_78",
    "text": "در صورت لزوم، بدون تعارف و با تندی تمام از حقوق شخصی‌ام در برابر دیگران دفاع می‌کنم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (قاطعیت بر سر منافع بدون گذشت)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: قاطعیت بر سر منافع بدون گذشت."
    }
  },
  {
    "id": "neo_79",
    "text": "تمایل دارم در اختلافات و مشاجرات همیشه به دنبال راه‌حل‌های مسالمت‌آمیز و سازش باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (صلح‌جویی و حل تعارض)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: صلح‌جویی و حل تعارض."
    }
  },
  {
    "id": "neo_80",
    "text": "تمایلی ندارم وقت ارزشمندم را برای شنیدن درددل‌ها و مشکلات دیگران هدر دهم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (مرزگذاری خشک عاطفی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: مرزگذاری خشک عاطفی."
    }
  },
  {
    "id": "neo_81",
    "text": "همدردی، شفقت و مراقبت از آسیب‌دیدگان یکی از والاترین ارزش‌های قلبی من است.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (همدلی و دل‌رحمی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: همدلی و دل‌رحمی."
    }
  },
  {
    "id": "neo_82",
    "text": "اطرافیانم معمولاً مرا انسانی باصداقت، بدون دورویی، یک‌رنگ و قابل اتکا می‌شناسند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (راستی و صداقت رفتاری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: راستی و صداقت رفتاری."
    }
  },
  {
    "id": "neo_83",
    "text": "برای پیشبرد اهدافم، گاهی لازم است احساسات و ناراحتی اطرافیان را نادیده بگیرم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (ابزارانگاری دیگران در مسیر هدف)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: ابزارانگاری دیگران در مسیر هدف."
    }
  },
  {
    "id": "neo_84",
    "text": "همکاری و رفاقت تیمی را بسیار ارزشمندتر و پایدارتر از رقابت تنش‌آفرین می‌دانم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (روحیه همگرایی و تعاون)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: روحیه همگرایی و تعاون."
    }
  },
  {
    "id": "neo_85",
    "text": "اگر کسی از من عذرخواهی کند، به سرعت او را می‌بخشم و کینه‌ای به دل نمی‌گیرم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (بخشندگی و گذشت سریع)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: بخشندگی و گذشت سریع."
    }
  },
  {
    "id": "neo_86",
    "text": "افرادی که زود احساساتی می‌شوند و عذرخواهی می‌کنند به نظرم ضعیف و آسیب‌پذیرند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (ارزش‌گذاری سرسختی در برابر گذشت)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: ارزش‌گذاری سرسختی در برابر گذشت."
    }
  },
  {
    "id": "neo_87",
    "text": "من به راحتی می‌توانم منافع فردی‌ام را فدای رفاه و آسایش جمع خانواده یا گروه کنم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (فداکاری به نفع جمع)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: فداکاری به نفع جمع."
    }
  },
  {
    "id": "neo_88",
    "text": "من ترجیح می‌دهم از دیگران برتر باشم تا اینکه صرفاً یکی از اعضای عادی گروه باشم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (برتری‌طلبی و فخرفروشی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: برتری‌طلبی و فخرفروشی."
    }
  },
  {
    "id": "neo_89",
    "text": "در قضاوت دیگران به دنبال یافتن حسن‌نیت‌ها هستم نه مچ‌گیری از عیوبشان.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (حسن‌ظن و دید مثبت به انسان‌ها)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: حسن‌ظن و دید مثبت به انسان‌ها."
    }
  },
  {
    "id": "neo_90",
    "text": "بسیاری از کسانی که وانمود می‌کنند دلسوزند، در واقع به دنبال منافع پنهان خود هستند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (بدبینی نسبت به دلسوزی دیگران)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: بدبینی نسبت به دلسوزی دیگران."
    }
  },
  {
    "id": "neo_91",
    "text": "رعایت ادب و حفظ حرمت دیگران حتی در شدیدترین عصبانیت‌ها خط قرمز من است.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (انضباط اخلاقی در تعامل)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: انضباط اخلاقی در تعامل."
    }
  },
  {
    "id": "neo_92",
    "text": "اگر کسی به من ضربه بزند، حتماً روزی تلافی خواهم کرد و کوتاه نمی‌آیم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (کینه‌ورزی و میل به انتقام)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: کینه‌ورزی و میل به انتقام."
    }
  },
  {
    "id": "neo_93",
    "text": "احساس دلسوزی شدیدی نسبت به کودکان بی‌سرپرست و حیوانات بی‌پناه دارم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (عطوفت و حمایتگری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: عطوفت و حمایتگری."
    }
  },
  {
    "id": "neo_94",
    "text": "در معاملات مالی و تجاری دلسوزی را کنار می‌گذارم و صرفاً بر سود متمرکز می‌شوم.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (تجارت‌محوری بدون ترحم)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: تجارت‌محوری بدون ترحم."
    }
  },
  {
    "id": "neo_95",
    "text": "ترجیح می‌دهم در برابر خطای کوچک دیگران چشم‌پوشی کنم تا بحث و تلخی ادامه پیدا نکند.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (مدارا و چشم‌پوشی حکیمانه)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل A: همدل، فداکار، صلح‌جو، نوع‌دوست، باگذشت و مورد اعتماد. اهمیت بالینی: مدارا و چشم‌پوشی حکیمانه."
    }
  },
  {
    "id": "neo_96",
    "text": "به نظر من هر کس باید فقط مراقب کلاه خودش باشد و نباید باری از دیگران برداشت.",
    "factor": "A",
    "factorTitle": "توافق‌پذیری و سازگاری (Agreeableness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "توافق‌پذیری و سازگاری (Agreeableness) (فردگرایی منفعت‌محور خشک)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل A: منتقد، رقابت‌طلب، سخت‌گیر، بی‌تعارف و شکاک. اهمیت بالینی: فردگرایی منفعت‌محور خشک."
    }
  },
  {
    "id": "neo_97",
    "text": "من قبل از آغاز هر کاری، برنامه‌ریزی هدفمند می‌کنم و تا انتها به آن پایبند می‌مانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (برنامه‌ریزی و تعهد به هدف)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: برنامه‌ریزی و تعهد به هدف."
    }
  },
  {
    "id": "neo_98",
    "text": "گاهی اوقات در انجام کارها تعلل می‌کنم و وظایفم را تا دقیقه نود به تاخیر می‌اندازم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (اهمال‌کاری و تاخیر)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: اهمال‌کاری و تاخیر."
    }
  },
  {
    "id": "neo_99",
    "text": "تمام تلاشم را می‌کنم تا به تعهدات، قول‌ها و وظایف کاری‌ام به بهترین شکل ممکن عمل کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (مسئولیت‌پذیری اخلاقی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: مسئولیت‌پذیری اخلاقی."
    }
  },
  {
    "id": "neo_100",
    "text": "میز کار، اتاق و محیط زندگی من معمولاً نامنظم و به هم ریخته است.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (بی‌نظمی محیطی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: بی‌نظمی محیطی."
    }
  },
  {
    "id": "neo_101",
    "text": "من فردی کوشا، مصمم، باانگیزه و با پشتکارم که تا رسیدن به هدف دست از تلاش برنمی‌دارد.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (پشتکار و اراده پیشرفت)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: پشتکار و اراده پیشرفت."
    }
  },
  {
    "id": "neo_102",
    "text": "انگیزه درونی چندانی برای ارتقای رتبه حرفه‌ای یا کسب دستاوردهای بزرگ ندارم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (کمبود جاه‌طلبی و میل به درجا زدن)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: کمبود جاه‌طلبی و میل به درجا زدن."
    }
  },
  {
    "id": "neo_103",
    "text": "نسبت به جزئیات، کیفیت نهایی کار و رعایت استانداردهای عالی بسیار دقیق و وسواسی‌ام.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (دقت بالا و استانداردگرایی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: دقت بالا و استانداردگرایی."
    }
  },
  {
    "id": "neo_104",
    "text": "در مدیریت زمان، الویت‌بندی امور و سازماندهی کارهای روزانه‌ام احساس ضعف می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (ضعف در مدیریت زمان)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: ضعف در مدیریت زمان."
    }
  },
  {
    "id": "neo_105",
    "text": "هر تصمیم مهمی را تنها پس از سنجش عمیق سود و زیان و بررسی پیامدها اتخاذ می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (دوراندیشی و تدبیر)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: دوراندیشی و تدبیر."
    }
  },
  {
    "id": "neo_106",
    "text": "گاهی بدون تامل و محاسبه ریسک، دست به اقدامات نسنجیده، هیجانی و پرخطر می‌زنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (تکانشگری اجرایی و شتاب‌زدگی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: تکانشگری اجرایی و شتاب‌زدگی."
    }
  },
  {
    "id": "neo_107",
    "text": "به اصول اخلاقی و استانداردهای وجدانی خود در هر شرایطی پایبند می‌مانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (وجدان پایدار)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: وجدان پایدار."
    }
  },
  {
    "id": "neo_108",
    "text": "هر پروژه‌ای را که آغاز می‌کنم، حتماً تا پایان کامل و دقیق آن را به سرانجام می‌رسانم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (پشتکار در اتمام کار)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: پشتکار در اتمام کار."
    }
  },
  {
    "id": "neo_109",
    "text": "نظم و تمیزی وسایل شخصی‌ام آرامش روانی عمیقی به من می‌بخشد.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (نیاز به نظم ساختارمند)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: نیاز به نظم ساختارمند."
    }
  },
  {
    "id": "neo_110",
    "text": "به راحتی با حواس‌پرتی‌های کوچک کار اصلی‌ام را رها کرده و مشغول کارهای فرعی می‌شوم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (حواس‌پرتی و ضعف تمرکز)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: حواس‌پرتی و ضعف تمرکز."
    }
  },
  {
    "id": "neo_111",
    "text": "برای ۵ سال آینده زندگی‌ام اهداف شفاف و برنامه‌ای مکتوب و مشخص دارم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (چشم‌انداز بلندمدت هدفمند)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: چشم‌انداز بلندمدت هدفمند."
    }
  },
  {
    "id": "neo_112",
    "text": "معمولاً اجازه می‌دهم زندگی خودش پیش برود و اهل برنامه‌ریزی سفت‌وسخت نیستم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (بی‌برنامگی و رهاسازی منفعل)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: بی‌برنامگی و رهاسازی منفعل."
    }
  },
  {
    "id": "neo_113",
    "text": "کیفیت کارم حتی زمانی که هیچ ناظری بالای سرم نیست در بالاترین سطح است.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (خودنظارتی اخلاقی)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: خودنظارتی اخلاقی."
    }
  },
  {
    "id": "neo_114",
    "text": "گاهی فراموش می‌کنم وسایلم را کجا گذاشته‌ام یا قرارهای مهم کاری را جا می‌اندازم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (فراموشکاری ناشی از بی‌نظمی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: فراموشکاری ناشی از بی‌نظمی."
    }
  },
  {
    "id": "neo_115",
    "text": "توانایی تمرکز طولانی‌مدت بر پروژه‌های سخت و پیچیده را به خوبی دارا هستم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (تمرکز عمیق و انضباط فکری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: تمرکز عمیق و انضباط فکری."
    }
  },
  {
    "id": "neo_116",
    "text": "شروع یک کار سخت برایم به قدری عذاب‌آور است که دائماً بهانه‌تراشی می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (مانع آغازگری به دلیل بی‌حوصلگی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: مانع آغازگری به دلیل بی‌حوصلگی."
    }
  },
  {
    "id": "neo_117",
    "text": "پیش از خرج کردن پول، بودجه‌بندی ماهانه‌ام را دقیقاً محاسبه و پس‌انداز می‌کنم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (انضباط مالی و حسابگری)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: انضباط مالی و حسابگری."
    }
  },
  {
    "id": "neo_118",
    "text": "خریدهای هیجانی و تصمیمات بدون پس‌انداز گاهی مرا دچار چالش مالی می‌کند.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (ولخرجی و ضعف مهار مالی)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: ولخرجی و ضعف مهار مالی."
    }
  },
  {
    "id": "neo_119",
    "text": "به عنوان فردی قابل اعتماد، منظم و وظیفه‌شناس در میان همکارانم سرآمدم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (اعتبار و خوش‌قولی حرفه‌ای)",
      "scoringMechanism": "نمره‌گذاری مستقیم (۴ به ۰)",
      "clinicalSignificance": "سنجش عامل C: منظم، هدفمند، وظیفه‌شناس، دقیق، خودانضباط و کوشا. اهمیت بالینی: اعتبار و خوش‌قولی حرفه‌ای."
    }
  },
  {
    "id": "neo_120",
    "text": "اگر کارها کمی خسته‌کننده شوند، سریعاً انگیزه خود را برای ادامه از دست می‌دهم.",
    "factor": "C",
    "factorTitle": "باوجدانی و مسئولیت‌پذیری (Conscientiousness)",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "باوجدانی و مسئولیت‌پذیری (Conscientiousness) (تاب‌آوری پایین در برابر کارهای یکنواخت)",
      "scoringMechanism": "نمره‌گذاری معکوس (۰ به ۴)",
      "clinicalSignificance": "سنجش عامل C: راحت‌گیر، نامقید به برنامه‌ریزی صلب، منعطف و اهمال‌کار. اهمیت بالینی: تاب‌آوری پایین در برابر کارهای یکنواخت."
    }
  }
]
};
