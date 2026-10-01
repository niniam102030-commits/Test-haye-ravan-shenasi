import { TestDefinition } from '../types';

export const enrichFactors = [
  { key: 'communication', name: 'ارتباط و گفتگو (Communication)', title: 'توانایی بیان احساسات، گوش دادن فعال و صمیمیت کلامی' },
  { key: 'conflict_resolution', name: 'حل تعارض و سازش (Conflict Resolution)', title: 'شیوه‌های حل مسالمت‌آمیز اختلافات، بخشش و کاهش تنش' },
  { key: 'financial_management', name: 'مدیریت مالی و اقتصادی (Financial Management)', title: 'توافق بر سر بودجه‌بندی، اولویت‌های خرج‌کردن و پس‌انداز' },
  { key: 'leisure', name: 'اوقات فراغت و برنامه‌های مشترک (Leisure Activities)', title: 'تعادل میان تفریحات فردی و فعالیت‌های مشترک دونفره' },
  { key: 'affection_intimacy', name: 'صمیمیت و ابراز عاطفی (Affection & Intimacy)', title: 'رضایت از صمیمیت عاطفی، ابراز محبت و درک متقابل' },
  { key: 'roles_responsibilities', name: 'تقسیم نقش‌ها و وظایف (Roles & Responsibilities)', title: 'اتحاد نظر در امور زندگی و تقسیم عادلانه مسئولیت‌ها' },
  { key: 'family_friends', name: 'روابط با خانواده‌ها و اطرافیان (Family & Friends)', title: 'حفظ مرزهای مستقل رابطه دونفره در برابر دخالت‌های اطرافیان' },
];

const rawEnrichQuestions = [
  // ۱. ارتباط و گفتگو (Communication) - سوالات ۱ تا ۵
  { text: 'من به آسانی می‌توانم احساسات، افکار و خواسته‌های قلبی‌ام را با طرف مقابل در میان بگذارم.', factor: 'communication', rev: false },
  { text: 'گاهی اوقات احساس می‌کنم طرف مقابل به درستی به حرف‌های من گوش نمی‌دهد یا حرف‌هایم را درک نمی‌کند.', factor: 'communication', rev: true },
  { text: 'ما در طول روز زمان کافی برای گفتگوی دو نفره، صمیمانه و باکیفیت اختصاص می‌دهیم.', factor: 'communication', rev: false },
  { text: 'برای پرهیز از دلخوری، بسیاری از افکار یا احساسات مهمم را از طرف مقابل پنهان می‌کنم.', factor: 'communication', rev: true },
  { text: 'ما با صداقت کامل با یکدیگر صحبت می‌کنیم و ترس از تمسخر یا سرزنش یکدیگر نداریم.', factor: 'communication', rev: false },

  // ۲. حل تعارض و سازش (Conflict Resolution) - سوالات ۶ تا ۱۰
  { text: 'هنگام بروز اختلاف‌نظر، ما با آرامش گفتگو می‌کنیم و به توافق مشترک می‌رسیم.', factor: 'conflict_resolution', rev: false },
  { text: 'در مشاجرات و بحث‌ها، معمولاً موضوعات و دلخوری‌های گذشته دوباره پیش کشیده می‌شود.', factor: 'conflict_resolution', rev: true },
  { text: 'طرف مقابل و من پس از ناراحتی یا اختلاف، سریعاً در صدد دلجویی و رفع سوءتفاهم برمی‌آییم.', factor: 'conflict_resolution', rev: false },
  { text: 'گاهی اوقات قهر کردن یا سکوت سنگین به عنوان روشی برای نشان دادن ناراحتی استفاده می‌شود.', factor: 'conflict_resolution', rev: true },
  { text: 'ما توانایی بالایی در پذیرش اشتباهات فردی و عذرخواهی صادقانه از یکدیگر داریم.', factor: 'conflict_resolution', rev: false },

  // ۳. مدیریت مالی و اقتصادی (Financial Management) - سوالات ۱۱ تا ۱۵
  { text: 'ما در خصوص نحوه خرج کردن درآمدها و اولویت‌های هزینه‌کردن توافق نظر داریم.', factor: 'financial_management', rev: false },
  { text: 'نحوه مدیریت مالی و هزینه‌های شخصی طرف مقابل گاهی باعث نگرانی یا دلخوری من می‌شود.', factor: 'financial_management', rev: true },
  { text: 'ما تصمیم‌گیری‌های مالی و خریدهای اساسی زندگی را به صورت مشترک انجام می‌دهیم.', factor: 'financial_management', rev: false },
  { text: 'گاهی بر سر تعهدات مالی، قسط‌ها یا میزان پس‌انداز با یکدیگر به بحث و تنش می‌رسیم.', factor: 'financial_management', rev: true },
  { text: 'برنامه‌ریزی اقتصادی بلندمدت ما شفاف و مورد پذیرش هر دوی ماست.', factor: 'financial_management', rev: false },

  // ۴. اوقات فراغت و برنامه‌های مشترک (Leisure Activities) - سوالات ۱۶ تا ۲۰
  { text: 'ما از گذراندن اوقات فراغت، مسافرت و تفریحات مشترک با یکدیگر کاملاً لذت می‌بریم.', factor: 'leisure', rev: false },
  { text: 'تفاوت در علایق و سرگرمی‌های ما باعث شده کمتر بتوانیم با هم تفریحات دلنشین داشته باشیم.', factor: 'leisure', rev: true },
  { text: 'ما تعادل سالمی میان تفریحات فردی مستقل و برنامه‌های دونفره برقرار کرده‌ایم.', factor: 'leisure', rev: false },
  { text: 'احساس می‌کنم زمان کمی برای با هم بودن و لذت بردن از همراهی دونفره داریم.', factor: 'leisure', rev: true },
  { text: 'برنامه‌ریزی برای تعطیلات و فعالیت‌های آخر هفته همواره با اشتیاق دوطرفه انجام می‌شود.', factor: 'leisure', rev: false },

  // ۵. صمیمیت و ابراز عاطفی (Affection & Intimacy) - سوالات ۲۱ تا ۲۵
  { text: 'من از میزان محبت، توجه عاطفی، در آغوش گرفتن و صمیمیت در رابطه‌مان رضایت دارم.', factor: 'affection_intimacy', rev: false },
  { text: 'صحبت کردن در مورد نیازها، انتظارات عاطفی یا ترجیحات صمیمانه برایم سخت و معذب‌کننده است.', factor: 'affection_intimacy', rev: true },
  { text: 'رابطه ما سرشار از شور، محبت و درک متقابل نیازهای عاطفی یکدیگر است.', factor: 'affection_intimacy', rev: false },
  { text: 'تفاوت در میزان تمایل به صمیمیت یا ابراز احساسات گاهی میان ما فاصله ایجاد می‌کند.', factor: 'affection_intimacy', rev: true },
  { text: 'طرف مقابل همواره به احساسات، مرزها و آرامش من در رابطه احترام می‌گذارد.', factor: 'affection_intimacy', rev: false },

  // ۶. تقسیم نقش‌ها و وظایف (Roles & Responsibilities) - سوالات ۲۶ تا ۳۰
  { text: 'ما در مورد اصول مسئولیت‌پذیری، ارزش‌ها و نحوه اداره امور زندگی اشتراک نظر داریم.', factor: 'roles_responsibilities', rev: false },
  { text: 'تقسیم کارهای روزمره و مسئولیت‌های مشترک میان ما عادلانه نیست و بار اصلی بر دوش یک نفر است.', factor: 'roles_responsibilities', rev: true },
  { text: 'ما در تصمیم‌گیری‌های مهم آینده با یکدیگر هم‌صدا هستیم و تصمیمات یکدیگر را تخریب نمی‌کنیم.', factor: 'roles_responsibilities', rev: false },
  { text: 'بر سر نحوه اولویت‌بندی اهداف زندگی یا مدیریت امور بارها دچار چالش شده‌ایم.', factor: 'roles_responsibilities', rev: true },
  { text: 'همکاری ما در وظایف و چالش‌های روزمره زندگی تیمی، همراهانه و توام با قدردانی است.', factor: 'roles_responsibilities', rev: false },

  // ۷. روابط با خانواده‌ها و اطرافیان (Family & Friends) - سوالات ۳۱ تا ۳۵
  { text: 'ما احساس راحتی و احترام متقابلی در رفت و آمد با خانواده‌ها و بستگان یکدیگر داریم.', factor: 'family_friends', rev: false },
  { text: 'دخالت‌ها یا نظرات اطرافیان و خانواده‌ها گاهی در روابط میان ما دو نفر اثر منفی می‌گذارد.', factor: 'family_friends', rev: true },
  { text: 'مرزهای استقلال و حریم خصوصی ما در برابر بستگان و اطرافیان به خوبی حفظ می‌شود.', factor: 'family_friends', rev: false },
  { text: 'گاهی احساس می‌کنم طرف مقابل بستگان خود را بر اولویت‌های رابطه دونفره‌مان ترجیح می‌دهد.', factor: 'family_friends', rev: true },
  { text: 'ما برای استقلال فردی و روابط اجتماعی یکدیگر احترام قائلیم و تعاملات اجتماعی با رضایت دوطرفه صورت می‌گیرد.', factor: 'family_friends', rev: false },
];

export const enrichDefinition: TestDefinition = {
  id: 'enrich',
  title: 'ENRICH Relationship Dynamics',
  persianTitle: 'پرسشنامه سنجش کیفیت روابط و سازگاری انریچ (فرم ۳۵ سوالی)',
  subtitle: 'استاندارد جهانی ارزیابی ۷ بعد ارتباطی، تعارضات و هم‌افزایی میان دو نفر',
  category: 'development',
  questionCount: 35,
  estimatedMinutes: 10,
  iconName: 'HeartHandshake',
  gradient: 'from-pink-500 to-rose-600',
  accentColor: '#f43f5e',
  description: 'پرسشنامه استاندارد ۳۵ سوالی انریچ (ENRICH) منطبق با آزمون تحلیلی روابط پایگاه ای‌سنج و هنجاریابی بالینی دکتر سلیمانیان و دکتر آسوده. این آزمون به بررسی جامع نقاط قوت، زمینه‌های توافق و بسترهای تعارض‌آفرین در هفت بُعد بنیادین رابطه می‌پردازد.',
  clinicalApplication: 'مشاوره پیش از ازدواج، ارزیابی تعارضات ارتباطی، مداخله در بحران‌های روابط و ارتقای صمیمیت و تفاهم متقابل.',
  optionType: 'likert5',
  defaultOptions: [
    { label: 'کاملاً موافقم (۵)', value: 5 },
    { label: 'موافقم (۴)', value: 4 },
    { label: 'نظری ندارم / خنثی (۳)', value: 3 },
    { label: 'مخالفم (۲)', value: 2 },
    { label: 'کاملاً مخالفم (۱)', value: 1 },
  ],
  questions: rawEnrichQuestions.map((q, idx) => {
    const factorInfo = enrichFactors.find((f) => f.key === q.factor)!;
    return {
      id: `enrich_${idx + 1}`,
      text: q.text,
      factor: q.factor,
      factorTitle: factorInfo.name,
      isReversed: q.rev,
      counselorInsight: {
        targetTrait: factorInfo.name,
        scoringMechanism: q.rev ? 'معکوس (۱ به ۵)' : 'مستقیم (۱ به ۵)',
        clinicalSignificance: `سنجش مولفه کیفیت رابطه: ${factorInfo.title} بر مبنای هنجار معتبر پرسشنامه انریچ در پایگاه ای‌سنج.`,
      },
    };
  }),
};
