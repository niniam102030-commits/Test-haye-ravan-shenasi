import { TestDefinition, TestResult, DetailedAnswerItem } from '../types';

/**
 * ایجاد لیست ساختاریافته از تمام سوالات همراه با پاسخ دقیق مراجع، زمان پاسخ و نشانه‌گذاری
 */
export const buildDetailedAnswers = (
  test: TestDefinition,
  rawAnswers: Record<string | number, number>,
  flaggedQuestionIds: (string | number)[] = [],
  responseTimes: Record<string | number, number> = {}
): DetailedAnswerItem[] => {
  return test.questions.map((q, idx) => {
    const selectedVal = rawAnswers[q.id];
    const options = q.options || test.defaultOptions || [];
    const matchedOption = options.find((o) => o.value === selectedVal);

    const timeSpent = responseTimes[q.id] || 0;
    let latencyFlag: 'rapid' | 'normal' | 'prolonged' = 'normal';
    if (timeSpent > 0 && timeSpent <= 2) {
      latencyFlag = 'rapid';
    } else if (timeSpent >= 25) {
      latencyFlag = 'prolonged';
    }

    const isFlagged = flaggedQuestionIds.includes(q.id);

    return {
      questionNumber: idx + 1,
      questionId: q.id,
      questionText: q.text,
      factorKey: q.factor,
      factorTitle: q.factorTitle,
      selectedOptionLabel: matchedOption
        ? matchedOption.label
        : selectedVal !== undefined
        ? String(selectedVal)
        : 'پاسخ داده نشده',
      selectedValue: selectedVal ?? 0,
      isReversed: q.isReversed,
      clinicalSignificance: q.counselorInsight?.clinicalSignificance || 'بررسی گرایش رفتاری و روان‌شناختی',
      responseTimeSeconds: timeSpent,
      latencyFlag,
      isFlagged,
    };
  });
};

/**
 * تولید متن کامل گزارش مشاور شامل نتایج کلی + جدول تک‌تک سوالات و پاسخ‌ها
 */
export const generateFullCounselorTextReport = (result: TestResult): string => {
  const divider = '═'.repeat(60);
  const thinDivider = '─'.repeat(60);

  let text = `${divider}\n`;
  text += `📋 گزارش جامع روان‌شناختی ویژه مشاور و پرونده بالینی\n`;
  text += `${divider}\n\n`;

  text += `👤 نام مراجع: ${result.clientName || 'ثبت نشده'}\n`;
  text += `🧪 عنوان آزمون: ${result.testTitle}\n`;
  text += `📅 تاریخ اجرا: ${result.date}\n`;
  text += `🏷️ دسته‌بندی: ${result.category === 'clinical' ? 'ارزیابی و غربالگری بالینی' : 'توسعه فردی و شغلی'}\n`;
  text += `🔍 وضعیت اعتبار پاسخ‌ها: ${result.isValid ? 'معتبر و قابل استناد' : 'نیازمند بررسی مجدد با دقت بیشتر'}\n\n`;

  // Flags & Latency overview
  if (result.flaggedQuestionsCount || result.rapidResponsesCount || result.prolongedResponsesCount) {
    text += `${thinDivider}\n`;
    text += `⏱️ شاخص‌های پایش پاسخ‌دهی مراجع (Response Monitoring):\n`;
    if (result.flaggedQuestionsCount) {
      text += `🚩 سوالات نشانه‌دار شده جهت بررسی در جلسه حضوری: ${result.flaggedQuestionsCount} سوال\n`;
    }
    if (result.rapidResponsesCount) {
      text += `⚡ پاسخ‌های بسیار شتاب‌زده (زیر ۲ ثانیه): ${result.rapidResponsesCount} سوال (بررسی احتمال بی‌دقتی)\n`;
    }
    if (result.prolongedResponsesCount) {
      text += `⏳ مکث‌های طولانی (بیش از ۲۵ ثانیه): ${result.prolongedResponsesCount} سوال (نشانگر تردید یا تعارض درونی)\n`;
    }
    text += `\n`;
  }

  text += `${thinDivider}\n`;
  text += `🎯 نتیجه و تیپ نهایی:\n`;
  text += `کد شاخص: ${result.primaryResult.code}\n`;
  text += `عنوان: ${result.primaryResult.title} (${result.primaryResult.subtitle})\n`;
  text += `خلاصه تشخیصی: ${result.primaryResult.summary}\n\n`;

  text += `${thinDivider}\n`;
  text += `📊 نمرات و درصدهای فاکتورهای آزمون:\n`;
  result.factors.forEach((f) => {
    text += `• ${f.name} (${f.key}): نمره ${f.score} از ${f.maxScore} (${f.percentage}%) ── وضعیت: ${f.levelText}\n`;
    if (f.counselorNote) {
      text += `  نکته مشاور: ${f.counselorNote}\n`;
    }
  });
  text += `\n`;

  if (result.validityScales && result.validityScales.length > 0) {
    text += `${thinDivider}\n`;
    text += `🛡️ مقیاس‌های روایی و صداقت‌آزمایی:\n`;
    result.validityScales.forEach((vs) => {
      text += `• ${vs.name}: نمره ${vs.score} (${vs.status === 'valid' ? 'معتبر' : 'هشدار'}) ── ${vs.interpretation}\n`;
    });
    text += `\n`;
  }

  // Highlighted flagged questions section
  const flaggedItems = result.detailedAnswers?.filter((a) => a.isFlagged) || [];
  if (flaggedItems.length > 0) {
    text += `${divider}\n`;
    text += `🚩 سوالات علامت‌گذاری‌شده برای بررسی در جلسه مصاحبه بالینی:\n`;
    text += `${divider}\n`;
    flaggedItems.forEach((item) => {
      text += `[سوال ${item.questionNumber}] ${item.questionText}\n`;
      text += `  پاسخ مراجع: « ${item.selectedOptionLabel} » | زمان تامل: ${item.responseTimeSeconds || 0} ثانیه\n`;
      text += `  موضوع: ${item.factorTitle}\n\n`;
    });
  }

  text += `${divider}\n`;
  text += `📝 گزارش تفصیلی تک‌تک سوالات و پاسخ‌های مراجع\n`;
  text += `(جهت بررسی دقیق مشاور بر روی گزینه‌های انتخابی و تشخیص سوگیری پاسخ‌دهی)\n`;
  text += `${divider}\n\n`;

  if (result.detailedAnswers && result.detailedAnswers.length > 0) {
    result.detailedAnswers.forEach((item) => {
      const flagSymbol = item.isFlagged ? ' 🚩 [نشانه‌دار برای جلسه]' : '';
      const latencySymbol =
        item.latencyFlag === 'rapid'
          ? ' ⚡ [پاسخ شتاب‌زده]'
          : item.latencyFlag === 'prolonged'
          ? ' ⏳ [مکث طولانی]'
          : '';

      text += `[سوال ${item.questionNumber}] ${item.questionText}${flagSymbol}${latencySymbol}\n`;
      text += `  👈 پاسخ انتخابی مراجع: « ${item.selectedOptionLabel} » (امتیاز: ${item.selectedValue} | زمان پاسخ: ${item.responseTimeSeconds || 0} ثانیه)\n`;
      text += `  🏷️ فاکتور: ${item.factorTitle} (${item.factorKey})${item.isReversed ? ' [معکوس]' : ' [مستقیم]'}\n`;
      text += `  💡 تحلیل بالینی مشاور: ${item.clinicalSignificance}\n`;
      text += `${thinDivider}\n`;
    });
  }

  text += `\n⚠️ سلب مسئولیت: این نتایج صرفاً جهت بررسی مشاوره‌ای و غربالگری است و به تنهایی ملاک تشخیص روان‌پزشکی قطعی نمی‌باشد.\n`;
  text += `${divider}\n`;

  return text;
};

/**
 * دانلود گزارش به عنوان فایل متنی با انکودینگ UTF-8 در محیط وب/اندروید
 */
export const downloadTextFile = (filename: string, content: string): void => {
  const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), content], {
    type: 'text/plain;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
