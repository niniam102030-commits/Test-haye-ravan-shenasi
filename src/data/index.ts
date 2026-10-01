import { TestDefinition } from '../types';
import { mbtiDefinition } from './mbti';
import { hollandDefinition } from './holland';
import { youngSchemaDefinition } from './youngSchema';

export const testsIndex: Record<string, TestDefinition> = {
  mbti: mbtiDefinition,
  holland: hollandDefinition,
  young_schema: youngSchemaDefinition,
};
