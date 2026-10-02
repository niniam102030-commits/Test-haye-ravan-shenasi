import { TestDefinition } from '../types';
import { mbtiDefinition } from './mbti';
import { cattellDefinition } from './cattell';
import { dassDefinition } from './dass';
import { neoDefinition } from './neo';
import { youngSchemaDefinition } from './youngSchema';
import { hollandDefinition } from './holland';
import { gardnerDefinition } from './gardner';
import { enrichDefinition } from './enrich';

import { attachmentDefinition } from './attachment';
import { eqDefinition } from './eq';
import { darkTriadDefinition } from './darkTriad';
import { viaDefinition } from './via';

export const testsIndex: Record<string, TestDefinition> = {
  mbti: mbtiDefinition,
  cattell: cattellDefinition,
  dass: dassDefinition,
  neo: neoDefinition,
  young_schema: youngSchemaDefinition,
  holland: hollandDefinition,
  gardner: gardnerDefinition,
  enrich: enrichDefinition,
  attachment: attachmentDefinition,
  eq: eqDefinition,
  dark_triad: darkTriadDefinition,
  via: viaDefinition,
};
