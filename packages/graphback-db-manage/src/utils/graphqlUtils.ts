import { readFileSync } from 'fs';
import { sync } from 'glob';
import { join } from 'path';
import { GraphbackChange, ModelChangeType } from '../changes/ChangeTypes';
import { Change } from '@graphql-inspector/core';

/**
 * Collects all GraphQL files in a directory and reads the content into a string.
 *
 * @param schemaDir - The directory of the schema file(s)
 */
export const buildSchemaText = (schemaDir: string): string => {
  const schemaPath = join(schemaDir, '*.graphql');
  const files = sync(schemaPath);

  if (files.length === 0) {
    return undefined;
  }

  const schemaText = files
    // tslint:disable-next-line: no-unnecessary-callback-wrapper
    .map((f: string) => readFileSync(f))
    .join('\n');

  return schemaText.length ? schemaText : undefined;
}

export const mapGraphbackChanges = (changes: Change[]): GraphbackChange[] => {
  return changes.filter((change: Change) => {
    return !!ModelChangeType[change.type]
  }).map((change: Change) => {
    const [type, field] = change.path.split('.');

    return {
      type: ModelChangeType[change.type],
      path: {
        type,
        field
      }
    }
  });
}
