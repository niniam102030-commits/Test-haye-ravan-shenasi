import { TestDefinition } from '../types';
export const mbtiDefinition: TestDefinition = {
  id: 'mbti',
  title: 'Myers-Briggs Type Indicator (MBTI)',
  persianTitle: 'تست مایرز-بریگز (MBTI)',
  subtitle: 'استاندارد ۶۰ سوالی فرم بازبینی شده',
  category: 'personality',
  popularity: 100,
  questionCount: 60,
  estimatedMinutes: 12,
  iconName: 'Users',
  gradient: 'from-purple-500 to-indigo-600',
  accentColor: '#6366f1',
  description: 'آزمون معتبر MBTI برای شناخت ترجیحات شخصیتی و شغلی.',
  clinicalApplication: 'ارزیابی مسیر شغلی، پویایی تیمی و مشاوره فردی.',
  optionType: 'likert7',
  defaultOptions: [
    { label: 'کاملاً موافقم', value: 3 },
    { label: 'موافقم', value: 2 },
    { label: 'کمی موافقم', value: 1 },
    { label: 'نظری ندارم', value: 0 },
    { label: 'کمی مخالفم', value: -1 },
    { label: 'مخالفم', value: -2 },
    { label: 'کاملاً مخالفم', value: -3 }
  ],
  questions: [
  {
    "id": "mq_1",
    "text": "در مهمانی‌ها معمولاً با افراد جدید زیادی صحبت می‌کنم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_2",
    "text": "اغلب ترجیح می‌دهم وقتم را در خانه و به تنهایی بگذرانم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_3",
    "text": "بودن در جمع‌های شلوغ به من انرژی زیادی می‌دهد.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_4",
    "text": "ترجیح می‌دهم دایره دوستانم کوچک اما بسیار صمیمی باشد.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_5",
    "text": "معمولاً در مکالمات پیش‌قدم می‌شوم و سر صحبت را باز می‌کنم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_6",
    "text": "بعد از حضور در رویدادهای اجتماعی نیاز به استراحت و تنهایی دارم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_7",
    "text": "فکر کردن با صدای بلند و تبادل نظر با دیگران برایم راحت‌تر است.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_8",
    "text": "قبل از اینکه حرفی بزنم یا عملی انجام دهم، دوست دارم خوب در موردش فکر کنم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_9",
    "text": "به راحتی می‌توانم با غریبه‌ها ارتباط برقرار کنم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_10",
    "text": "ترجیح می‌دهم بیشتر شنونده باشم تا گوینده.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_11",
    "text": "کار کردن در محیط‌های شلوغ و پرتحرک را دوست دارم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_12",
    "text": "سکوت و تمرکز انفرادی برایم اهمیت زیادی دارد.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_13",
    "text": "معمولاً احساساتم را به سرعت و صراحتاً بروز می‌دهم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_14",
    "text": "آشنا شدن با افراد جدید گاهی برایم خسته‌کننده است.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "درون‌گرایی (I)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (درون‌گرایی (I)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به درون‌گرایی (I) است."
    }
  },
  {
    "id": "mq_15",
    "text": "از بودن در کانون توجه دیگران لذت می‌برم.",
    "factor": "E_I",
    "factorTitle": "درون‌گرایی / برون‌گرایی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "برون‌گرایی (E)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (برون‌گرایی (E)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به برون‌گرایی (E) تایید می‌کند."
    }
  },
  {
    "id": "mq_16",
    "text": "به مفاهیم انتزاعی و تئوری‌های علمی علاقه زیادی دارم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_17",
    "text": "تمرکزم بیشتر روی واقعیت‌های موجود و جزئیات ملموس است.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_18",
    "text": "اغلب در مورد احتمالات آینده و سناریوهای مختلف رویاپردازی می‌کنم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_19",
    "text": "تجربه‌های عملی و گذشته برایم راهنمای بهتری هستند تا ایده‌های اثبات‌نشده.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_20",
    "text": "دوست دارم پشت‌پرده اتفاقات و معانی پنهان مسائل را کشف کنم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_21",
    "text": "به کارها و روش‌هایی که قبلاً امتحان شده‌اند و جواب داده‌اند پایبندم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_22",
    "text": "اغلب به ایده‌های جدید فکر می‌کنم تا راه‌حل‌های سنتی.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_23",
    "text": "دقت بالایی در مشاهده جزئیات محیط پیرامونم دارم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_24",
    "text": "نوآوری و تغییر را به حفظ وضع موجود ترجیح می‌دهم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_25",
    "text": "درک مسائل عینی و مشخص برایم راحت‌تر از مسائل فلسفی است.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_26",
    "text": "علاقه زیادی به بحث درباره نمادها و استعاره‌ها دارم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_27",
    "text": "ترجیح می‌دهم دستورالعمل‌های شفاف و گام‌به‌گام داشته باشم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_28",
    "text": "اغلب به سرعت الگوها و ارتباط بین مفاهیم را تشخیص می‌دهم.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_29",
    "text": "دوست دارم کارها کاربرد فوری و نتیجه عملی داشته باشند.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "حسی (S)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (حسی (S)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به حسی (S) است."
    }
  },
  {
    "id": "mq_30",
    "text": "نگاهم بیشتر به تصویر بزرگ (Big Picture) است تا جزئیات ریز.",
    "factor": "N_S",
    "factorTitle": "حسی / شهودی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "شهودی (N)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (شهودی (N)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به شهودی (N) تایید می‌کند."
    }
  },
  {
    "id": "mq_31",
    "text": "همدلی کردن و درک احساسات دیگران برایم بسیار مهم است.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_32",
    "text": "در تصمیم‌گیری‌ها منطق و تحلیل عینی را به احساسات ترجیح می‌دهم.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_33",
    "text": "حفظ هارمونی و صلح در روابط برایم اولویت دارد.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_34",
    "text": "بحث‌های چالش‌برانگیز منطقی را حتی اگر کسی ناراحت شود دوست دارم.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_35",
    "text": "اغلب تصمیماتم را بر اساس ندای قلبم و ارزش‌های درونی می‌گیرم.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_36",
    "text": "عدالت و انصاف برایم مهم‌تر از رحم و شفقت است.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_37",
    "text": "تحسین کردن دیگران برایم بسیار راحت و طبیعی است.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_38",
    "text": "پیدا کردن ایرادات منطقی در یک سیستم یا استدلال برایم آسان است.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_39",
    "text": "دوست دارم محیط کاری‌ام دوستانه و صمیمی باشد.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_40",
    "text": "ترجیح می‌دهم روی اهداف و وظایف تمرکز کنم تا روابط شخصی.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_41",
    "text": "ناراحتی دیگران سریعاً روی روحیه من هم تاثیر می‌گذارد.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_42",
    "text": "در هنگام بروز بحران، می‌توانم احساساتم را کنار بگذارم و منطقی عمل کنم.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_43",
    "text": "کمک کردن به افراد نیازمند برایم رضایت‌بخش‌ترین کار است.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_44",
    "text": "نقد کردن صادقانه و مستقیم را به تعارفات ترجیح می‌دهم.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منطقی (T)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منطقی (T)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منطقی (T) است."
    }
  },
  {
    "id": "mq_45",
    "text": "تلاش می‌کنم تصمیمی بگیرم که باعث خوشحالی همه شود.",
    "factor": "F_T",
    "factorTitle": "منطقی / احساسی",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "احساسی (F)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (احساسی (F)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به احساسی (F) تایید می‌کند."
    }
  },
  {
    "id": "mq_46",
    "text": "ترجیح می‌دهم برنامه‌ریزی دقیقی برای روزهایم داشته باشم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_47",
    "text": "دوست دارم در کارها منعطف باشم و با جریان پیش بروم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_48",
    "text": "بستن پرونده کارها و رسیدن به تصمیم نهایی به من آرامش می‌دهد.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_49",
    "text": "اغلب گزینه‌هایم را باز می‌گذارم تا شاید اطلاعات جدیدی به دست بیاید.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_50",
    "text": "نظم و ترتیب در محیط زندگی و کار برایم بسیار مهم است.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_51",
    "text": "با بی‌نظمی مشکلی ندارم و می‌توانم در شرایط پیش‌بینی‌نشده کار کنم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_52",
    "text": "اغلب کارها را پیش از فرا رسیدن مهلت مقرر تمام می‌کنم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_53",
    "text": "بهترین ایده‌هایم معمولاً در لحظات آخر و تحت فشار زمان به ذهنم می‌رسد.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_54",
    "text": "لیست کردن وظایف به من کمک می‌کند موثرتر باشم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_55",
    "text": "تعهدات سفت و سخت گاهی باعث احساس خفگی در من می‌شود.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_56",
    "text": "ترجیح می‌دهم اول کارم را تمام کنم بعد استراحت کنم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_57",
    "text": "ترکیب کردن کار با سرگرمی و تغییر برنامه برایم لذت‌بخش است.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_58",
    "text": "دوست دارم قبل از سفر همه چیز را تا جزئیات برنامه‌ریزی کنم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  },
  {
    "id": "mq_59",
    "text": "سفرهای بدون برنامه و کشف چیزهای جدید در لحظه را دوست دارم.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": true,
    "counselorInsight": {
      "targetTrait": "منعطف (P)",
      "scoringMechanism": "معکوس (تمایل به قطب دوم)",
      "clinicalSignificance": "این سوال قطب (منعطف (P)) را می‌سنجد. موافقت کاربر با این گزینه، نشان‌دهنده تمایل به منعطف (P) است."
    }
  },
  {
    "id": "mq_60",
    "text": "نظم قوانین و ساختارها به من حس امنیت می‌دهد.",
    "factor": "J_P",
    "factorTitle": "ساختارگرا / منعطف",
    "isReversed": false,
    "counselorInsight": {
      "targetTrait": "ساختارگرا (J)",
      "scoringMechanism": "مستقیم (تمایل به قطب اول)",
      "clinicalSignificance": "این سوال قطب (ساختارگرا (J)) را می‌سنجد. موافقت با این گزینه، گرایش فرد را به ساختارگرا (J) تایید می‌کند."
    }
  }
]
};
