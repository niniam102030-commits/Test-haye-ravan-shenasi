import { TestDefinition } from '../types';

export const mbtiDefinition: TestDefinition = {
  id: 'mbti',
  title: 'Myers-Briggs Type Indicator (MBTI)',
  persianTitle: 'تست شخصیت مایرز-بریگز (۱۶ تیپ استاندارد)',
  subtitle: 'بر پایه فرم ۶۰ سوالی و ۵ بعدی رسمی 16Personalities',
  category: 'development',
  questionCount: 60,
  estimatedMinutes: 12,
  iconName: 'Users',
  gradient: 'from-purple-500 to-indigo-600',
  accentColor: '#6366f1',
  description: 'آزمون رسمی و کامل ۶۰ سوالی ارزیابی ۱۶ تیپ شخصیتی و ۵ بعد (شامل بعد هویت قاطع -A در برابر حساس -T) برگرفته از پایگاه مرجع 16Personalities.',
  clinicalApplication: 'شناخت سبک ارتباطی، خودآگاهی، انطباق شغلی، حل تعارض و تحلیل واکنش به استرس.',
  optionType: 'likert7',
  defaultOptions: [
    { label: 'کاملاً موافقم', value: 3 },
    { label: 'موافقم', value: 2 },
    { label: 'کمی موافقم', value: 1 },
    { label: 'نظری ندارم', value: 0 },
    { label: 'کمی مخالفم', value: -1 },
    { label: 'مخالفم', value: -2 },
    { label: 'کاملاً مخالفم', value: -3 },
  ],
  questions: [
  {
    "id": "mq_0",
    "text": "شما مرتب دوستان جدیدی پیدا می‌کنید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_41",
    "text": "از کاوش در ایده‌ها و نظرات ناآشنا لذت می‌برید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_27",
    "text": "دلایل عاطفی به آسانی نظرتان را عوض نمی‌کنند.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_58",
    "text": "شما در رعایت موعد‌های زمانی تعیین شده مشکل دارید.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_39",
    "text": "شما به ندرت حس نامطمئن بودن می‌کنید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_40",
    "text": "شما از برقراری تماس تلفنی اجتناب می‌کنید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_29",
    "text": "شما از بحث در مورد مسائل غامض اخلاقی لذت می‌برید.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_17",
    "text": "شما حساس بودن را به کاملاً صادق بودن ترجیح می‌دهید.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_3",
    "text": "فضاهای زندگی و کاری شما تمیز و مرتب هستند.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_54",
    "text": "شما اغلب احساس غرق شدن در امور را دارید.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_15",
    "text": "شما از شرکت در فعالیت‌های تیمی لذت می‌برید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_16",
    "text": "شما از تجربه کردن رویکردهای جدید و امتحان نشده لذت می‌برید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_12",
    "text": "در هنگام تعیین اقدامات، حقایق را به احساسات افراد ترجیح می‌دهید.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_13",
    "text": "اغلب بدون این که کلاً برنامه‌ای داشته باشید با جریان روز پیش می‌روید.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_14",
    "text": "شما به ندرت در این باره نگران می‌شوید که آیا تاثیر ذهنی خوبی روی افرادی که با آنها ملاقات می‌کنید می‌گذارید یا خیر.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_10",
    "text": "رفتن به سوی شخصی که به نظرتان جالب است و باز کردن سر صحبت با او برای تان راحت است.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_11",
    "text": "شما خیلی تمایلی به بحث‌های مربوط به برداشت‌های گوناگون از آثار خلاقانه ندارید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_7",
    "text": "داستان‌ها و عواطف مردم از ارقام و داده‌ها برایتان مهم‌تر هستند.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_18",
    "text": "شما فعالانه در جستجوی تجربیات و حوزه‌های دانش جدید برای کاوش در آنها هستید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_19",
    "text": "شما مستعد نگرانی از این هستید که اوضاع بدتر خواهد شد.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_20",
    "text": "شما از سرگرمی‌ها یا فعالیت‌های انفرادی بیشتر از موارد گروهی لذت می‌برید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_21",
    "text": "نمی‌توانید تصور کنید که برای کسب درآمد زندگی داستان‌های تخیلی بنویسید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_22",
    "text": "در تصمیم‌گیری، کارایی را ترجیح می‌دهید حتی اگر به معنی نادیده گرفتن برخی جنبه‌های عاطفی باشد.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_23",
    "text": "شما ترجیح می‌دهید قبل از این که به خودتان اجازه استراحت بدهید اول کارهای خود را انجام دهید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_24",
    "text": "در اختلاف‌ها، اثبات حرف خودتان اولویت بیشتری از محافظت از احساسات دیگران دارد.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_25",
    "text": "در گردهمآیی‌های اجتماعی، معمولاً اول صبر می‌کنید دیگران خودشان را معرفی کنند.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_26",
    "text": "خلق و خوی شما می‌تواند به سرعت تغییر کند.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_2",
    "text": "معمولاً بیشتر توسط آنچه که از نظر عاطفی برایتان قابل درک است متقاعد می‌شوید تا استدلال‌های مبتنی بر حقیقت.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_28",
    "text": "شما اغلب کارها را در آخرین لحظه ممکن انجام می‌دهید.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_6",
    "text": "شما وظایف را به طور موثر اولویت‌بندی و برنامه‌ریزی می‌کنید و اغلب آنها را قبل از موعد مقرر به پایان می‌رسانید.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_30",
    "text": "شما معمولاً ترجیح می‌دهید کنار دیگران باشید تا تنها.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_31",
    "text": "وقتی بحث به شدت تئوری می‌شود خسته می‌شوید یا علاقه خود را از دست می‌دهید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_32",
    "text": "در هنگام تضاد حقایق و احساسات، معمولاً حرف دل خود را گوش می‌کنید.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_33",
    "text": "حفظ ثبات در دنبال کردن یک برنامه کاری یا مطالعاتی برای شما چالش برانگیز است.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_34",
    "text": "شما به ندرت انتخاب‌های خود را زیر سوال می‌برید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_35",
    "text": "دوستان تان شما را سرزنده و برونگرا توصیف می‌کنند.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_36",
    "text": "شما به اشکال مختلف بیان خلاقانه مثل نوشتن جذب می‌شوید.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_37",
    "text": "شما معمولاً انتخاب‌های خود را بر مبنای حقایق عینی استوار می‌کنید تا تاثیرات عاطفی.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_38",
    "text": "شما دوست دارید یک فهرست از کارهای هر روز داشته باشید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_4",
    "text": "شما اغلب آرام هستید حتی تحت فشار خیلی زیاد.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_5",
    "text": "به نظر شما فکر شبکه بندی یا تبلیغ کردن خودتان برای غریبه‌ها بسیار ترسناک است.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_1",
    "text": "ایده‌های پیچیده و نو بیشتر از ایده‌های ساده و آسان شما را هیجان‌زده می‌کنند.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_42",
    "text": "به آسانی می‌توانید با افرادی که تازه ملاقات کرده‌اید ارتباط برقرار کنید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_43",
    "text": "اگر برنامه‌هایتان بهم بخورند، اولویت اول شما برگشتن به مسیر در سریعترین زمان ممکن است.",
    "factor": "J_P",
    "factorTitle": "سبک زندگی و سازماندهی (J / P)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "سبک زندگی و سازماندهی (J / P)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص سبک زندگی و سازماندهی (J / P) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_44",
    "text": "اشتباهاتی که در گذشته‌های دور مرتکب شده‌اید هنوز شما را آزار می‌دهند.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_45",
    "text": "شما خیلی تمایل به بحث در مورد این نظریه‌ها ندارید که جهان در آینده چه شکلی خواهد بود.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_46",
    "text": "احساسات شما بیشتر از اینکه آنها را کنترل کنید، شما را کنترل می‌کنند.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_47",
    "text": "در هنگام تصمیم‌گیری بیشتر بر احساس افرادی که تحت تأثیر قرار می‌گیرند تمرکز می‌کنید تا آنچه که منطقی‌تر یا کاراتر است.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_48",
    "text": "سبک کاری فردی شما بیشتر به انفجارهای خودبخودی انرژی نزدیک است تا تلاش‌های سازماندهی شده و مداوم.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_49",
    "text": "وقتی کسی ارزش زیادی برای شما قائل است با خود فکر می‌کنید چقدر طول خواهد کشید که از شما ناامید شود.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_50",
    "text": "شما شغلی را دوست دارید که بیشتر اوقات نیاز باشد به تنهایی کار کنید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_51",
    "text": "شما باور دارید که فکر کردن به پرسش‌های فلسفی انتزاعی اتلاف وقت است.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_52",
    "text": "حس می‌کنید بیشتر به سمت فضاهای شلوغ و پر جنب و جوش کشیده می‌شوید تا مکان‌های ساکت و صمیمی.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_53",
    "text": "اگر حس می‌کنید گرفتن تصمیمی درست است، اغلب بدون نیاز به اثبات بیشتر آن را عملی می‌کنید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_9",
    "text": "حتی یک اشتباه کوچک می‌تواند باعث شود به توانایی‌های کلی و دانش خود شک کنید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_55",
    "text": "شما کارها به صورت روشمند و بدون رد شدن از کنار هیچ مرحله‌ای انجام می‌دهید.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_56",
    "text": "شما وظایفی را ترجیح می‌دهید که برای انجام شان باید راه‌حل‌های خلاقانه پیدا کنید تا دنبال کردن مراحل مشخص.",
    "factor": "N_S",
    "factorTitle": "جمع‌آوری اطلاعات و پردازش (N / S)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "جمع‌آوری اطلاعات و پردازش (N / S)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص جمع‌آوری اطلاعات و پردازش (N / S) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_57",
    "text": "در هنگام انتخاب کردن، بیشتر این احتمال وجود دارد که به شهود عاطفی اتکا کنید تا استدلال منطقی.",
    "factor": "F_T",
    "factorTitle": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "تصمیم‌گیری و قضاوت ارزشی (F / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص تصمیم‌گیری و قضاوت ارزشی (F / T) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_8",
    "text": "شما دوست دارید از ابزارهای سازماندهی مثل برنامه‌های زمانی و لیست‌ها استفاده کنید.",
    "factor": "E_I",
    "factorTitle": "انرژی و تعامل اجتماعی (E / I)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "انرژی و تعامل اجتماعی (E / I)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص انرژی و تعامل اجتماعی (E / I) در مدل ۵ بعدی شخصیت."
    }
  },
  {
    "id": "mq_59",
    "text": "شما مطمئن هستید که همه چیز برای شما خوب پیش خواهد رفت.",
    "factor": "A_T",
    "factorTitle": "هویت روانی و پایداری هیجانی (A / T)",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "هویت روانی و پایداری هیجانی (A / T)",
      "scoringMechanism": "مستقیم (نمره مثبت به قطب غالب)",
      "clinicalSignificance": "سنجش شاخص هویت روانی و پایداری هیجانی (A / T) در مدل ۵ بعدی شخصیت."
    }
  }
]
};
