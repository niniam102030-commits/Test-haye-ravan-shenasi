import { TestDefinition } from '../types';

export const mbtiDefinition: TestDefinition = {
  id: 'mbti',
  title: 'Myers-Briggs Type Indicator (MBTI)',
  persianTitle: 'تست شخصیت مایرز-بریگز (۱۶ تیپ)',
  subtitle: 'کشف ترجیحات شخصیتی و مسیر شغلی',
  category: 'development',
  questionCount: 60,
  estimatedMinutes: 10,
  iconName: 'Users',
  gradient: 'from-purple-500 to-indigo-600',
  accentColor: '#6366f1',
  description: 'آزمون استاندارد ارزیابی شخصیت برای شناخت ترجیحات در تعامل با جهان، پردازش اطلاعات، تصمیم‌گیری و سازماندهی زندگی.',
  clinicalApplication: 'شناخت سبک‌های ارتباطی، نقاط قوت در محیط کار، مشاوره شغلی و بهبود کار تیمی.',
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
      id: 'mq_0',
      text: 'شما مرتب دوستان جدیدی پیدا می‌کنید.',
      factor: 'E_I',
      factorTitle: 'برون‌گرایی (E)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'انرژی روانی و تعاملات اجتماعی (Extraversion)',
        scoringMechanism: 'مستقیم (موافقت = گرایش به برون‌گرایی)',
        clinicalSignificance: 'میزان تمایل مراجع به دریافت انرژی از محیط بیرون و شبکه‌سازی اجتماعی.',
      }
    },
    {
      id: 'mq_1',
      text: 'ایده‌های پیچیده و نو بیشتر از ایده‌های ساده و آسان شما را هیجان‌زده می‌کنند.',
      factor: 'N_S',
      factorTitle: 'شهودی (N)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'سبک جمع‌آوری اطلاعات (Intuition vs Sensing)',
        scoringMechanism: 'مستقیم (موافقت = ترجیح شهود بر حواس)',
        clinicalSignificance: 'ارزیابی تمایل مراجع به تفکر انتزاعی، نوآوری و دیدن تصویر کلی در مقابل جزئی‌نگری.',
      }
    },
    {
      id: 'mq_2',
      text: 'معمولاً بیشتر توسط آنچه که از نظر عاطفی برایتان قابل درک است متقاعد می‌شوید تا استدلال‌های مبتنی بر حقیقت.',
      factor: 'F_T',
      factorTitle: 'احساسی (F)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'سبک تصمیم‌گیری (Feeling vs Thinking)',
        scoringMechanism: 'مستقیم (موافقت = ترجیح احساس بر منطق)',
        clinicalSignificance: 'بررسی غلبه ارزش‌های انسانی و همدلی بر تحلیل‌های منطقی و عینی در تصمیم‌گیری‌های حساس.',
      }
    },
    {
      id: 'mq_6',
      text: 'شما وظایف را به طور موثر اولویت‌بندی و برنامه‌ریزی می‌کنید و اغلب آنها را قبل از موعد مقرر به پایان می‌رسانید.',
      factor: 'J_P',
      factorTitle: 'قضاوت‌گر / ساختارگرا (J)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'سبک سازماندهی زندگی (Judging vs Perceiving)',
        scoringMechanism: 'مستقیم (موافقت = ترجیح ساختار و نظم)',
        clinicalSignificance: 'سنجش نیاز به کنترل، برنامه‌ریزی پیشاپیش و بسته بودن پایان کارها (نیاز به قطعیت).',
      }
    },
    {
      id: 'mq_4',
      text: 'شما اغلب آرام هستید حتی تحت فشار خیلی زیاد.',
      factor: 'A_T',
      factorTitle: 'قاطعیت / ثبات هیجانی (-A)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'واکنش به استرس (Assertive vs Turbulent)',
        scoringMechanism: 'مستقیم (موافقت = مقاومت در برابر استرس)',
        clinicalSignificance: 'معادل نوروتیسیزم (Neuroticism) پایین در نئو؛ ارزیابی تاب‌آوری روانی و اعتماد به نفس.',
      }
    },
    {
      id: 'mq_30',
      text: 'شما معمولاً ترجیح می‌دهید کنار دیگران باشید تا تنها.',
      factor: 'E_I',
      factorTitle: 'برون‌گرایی (E)',
      isReversed: false,
      counselorInsight: {
        targetTrait: 'نیاز به معاشرت',
        scoringMechanism: 'مستقیم',
        clinicalSignificance: 'انزوای احتمالی در صورت نمرات معکوس بالا.',
      }
    }
    // Note: Full 60 questions would be here in a real production app.
  ]
};
