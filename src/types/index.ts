export type TestId = 'mbti' | 'cattell' | 'mmpi' | 'enneagram' | 'young_schema' | 'holland' | 'gardner' | 'neo' | 'enrich' | 'dass' | 'raven';

export type TestCategory = 'development' | 'clinical';

export interface Question {
  id: number | string;
  text: string;
  factor: string; // The factor or scale key
  factorTitle: string; // Persian readable title of the factor
  isReversed?: boolean; // Reverse scored
  options?: {
    label: string;
    value: number; // Raw score contribution
  }[];
  counselorInsight: {
    targetTrait: string; // What psychological trait this evaluates
    scoringMechanism: string; // Direct / Reverse and rationale
    clinicalSignificance: string; // Diagnostic meaning in therapy / counseling
    biasIndicator?: string; // Faking good/bad bias notice
  };
}

export interface FactorResult {
  key: string;
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  level: 'low' | 'moderate' | 'high' | 'very_high';
  levelText: string;
  description: string;
  counselorNote: string;
}

export interface ValidityScaleResult {
  name: string;
  score: number;
  status: 'valid' | 'caution' | 'invalid';
  interpretation: string;
}

export interface DetailedAnswerItem {
  questionNumber: number;
  questionId: string | number;
  questionText: string;
  factorKey: string;
  factorTitle: string;
  selectedOptionLabel: string;
  selectedValue: number;
  isReversed?: boolean;
  clinicalSignificance: string;
  responseTimeSeconds?: number;
  latencyFlag?: 'rapid' | 'normal' | 'prolonged';
  isFlagged?: boolean;
}

export interface TestResult {
  id: string;
  clientId?: string;
  clientName: string;
  testId: TestId;
  testTitle: string;
  category: TestCategory;
  date: string;
  timestamp: number;
  counselorModeUsed: boolean;
  isValid: boolean;
  primaryResult: {
    code: string;
    title: string;
    subtitle: string;
    summary: string;
    traits: string[];
    strengths?: string[];
    challenges?: string[];
    careerSuggestions?: string[];
  };
  factors: FactorResult[];
  validityScales?: ValidityScaleResult[];
  rawAnswers: Record<string | number, number>;
  detailedAnswers?: DetailedAnswerItem[];
  flaggedQuestionsCount?: number;
  rapidResponsesCount?: number;
  prolongedResponsesCount?: number;
}

export interface SavedDraft {
  testId: TestId;
  clientId?: string;
  currentIdx: number;
  answers: Record<string | number, number>;
  flaggedQuestionIds?: (string | number)[];
  responseTimes?: Record<string | number, number>;
  lastUpdated: string;
  progressPercent: number;
  totalQuestions: number;
}

export interface ClientProfile {
  id: string;
  fileCode: string;
  name: string;
  age?: number;
  gender: 'male' | 'female' | 'other';
  education?: string;
  clinicalNotes?: string;
  createdAt: string;
}

export interface CouplesComparisonResult {
  partnerAName: string;
  partnerBName: string;
  testTitle: string;
  overallCompatibility: number;
  compatibilityLevel: 'high' | 'moderate' | 'challenging';
  compatibilitySummary: string;
  synergyPoints: string[];
  conflictAreas: string[];
  counselorAdvice: string[];
  dimensionMatches: {
    dimension: string;
    partnerAScore: string | number;
    partnerBScore: string | number;
    harmonyScore: number;
    analysis: string;
  }[];
}

export interface JobMatch {
  title: string;
  field: string;
  matchScore: number;
  matchLevel: 'عالی' | 'بسیار خوب' | 'متوسط';
  description: string;
  requiredSkills: string[];
}

export interface TestDefinition {
  id: TestId;
  title: string;
  persianTitle: string;
  subtitle: string;
  category: TestCategory;
  questionCount: number;
  estimatedMinutes: number;
  iconName: string;
  gradient: string;
  accentColor: string;
  description: string;
  clinicalApplication: string;
  questions: Question[];
  optionType: 'likert7' | 'likert5' | 'likert6' | 'yesno' | 'custom';
  defaultOptions?: { label: string; value: number }[];
}

export interface ProposedTest {
  id: string;
  title: string;
  persianTitle: string;
  category: 'talent' | 'career' | 'marriage' | 'iq' | 'mental_health' | 'personality';
  questionCount: number;
  durationMinutes: number;
  description: string;
  whyUseful: string;
  targetAudience: string;
  factorsMeasured: string[];
  status: 'proposed' | 'approved' | 'ready_to_integrate';
  badge: string;
}
