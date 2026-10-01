import { TestDefinition } from '../types';
import { mbtiDefinition } from './mbti';
import { cattellDefinition } from './cattell';
import { dassDefinition } from './dass';
import { neoDefinition } from './neo';
import { youngSchemaDefinition } from './youngSchema';
import { hollandDefinition } from './holland';
import { gardnerDefinition } from './gardner';
import { enrichDefinition } from './enrich';

export const testsIndex: Record<string, TestDefinition> = {
  mbti: mbtiDefinition,
  cattell: cattellDefinition,
  dass: dassDefinition,
  neo: neoDefinition,
  young_schema: youngSchemaDefinition,
  holland: hollandDefinition,
  gardner: gardnerDefinition,
  enrich: enrichDefinition,
};
