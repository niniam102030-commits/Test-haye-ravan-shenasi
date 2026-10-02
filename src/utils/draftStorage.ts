import { SavedDraft, TestId } from '../types';

const DRAFTS_STORAGE_KEY = 'psychotests_saved_drafts';

export const getAllDrafts = (): Record<string, SavedDraft> => {
  try {
    const raw = localStorage.getItem(DRAFTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error reading drafts from localStorage:', e);
    return {};
  }
};

export const getDraft = (testId: TestId): SavedDraft | null => {
  const drafts = getAllDrafts();
  return drafts[testId] || null;
};

export const saveDraft = (
  testId: TestId,
  currentIdx: number,
  answers: Record<string | number, number>,
  totalQuestions: number
): void => {
  try {
    const drafts = getAllDrafts();
    const answeredCount = Object.keys(answers).length;
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

    drafts[testId] = {
      testId,
      currentIdx,
      answers,
      lastUpdated: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      progressPercent,
      totalQuestions,
    };

    localStorage.setItem(DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
  } catch (e) {
    console.error('Error saving draft to localStorage:', e);
  }
};

export const removeDraft = (testId: TestId): void => {
  try {
    const drafts = getAllDrafts();
    delete drafts[testId];
    localStorage.setItem(DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
  } catch (e) {
    console.error('Error removing draft from localStorage:', e);
  }
};

export const incrementUsage = (testId: string) => { try { const k = 'test_usage_' + testId; const curr = parseInt(localStorage.getItem(k)||'0'); localStorage.setItem(k, (curr+1).toString()); }catch(e){} };
export const getUsage = (testId: string) => { try { return parseInt(localStorage.getItem('test_usage_' + testId)||'0'); }catch(e){return 0;} };

