import path from 'path';

import { OpenApiGenerator } from '@goast/core';
import { TypeScriptAngularServicesGenerator, TypeScriptModelsGenerator } from '@goast/typescript';

export async function main(): Promise<void> {
  await new OpenApiGenerator({
    outputDir: path.join(__dirname, '../src/app/api'),
  })
    .useType(TypeScriptModelsGenerator, {
      typeNameCasing: { casing: 'pascal' },
      immutableTypes: false,
    })
    .useType(TypeScriptAngularServicesGenerator, {
      provideKind: 'provide-fn',
      defaultRequestContentType: 'application/json',
      defaultSuccessResponseContentType: 'application/json',
    })
    .parseAndGenerate(path.join(__dirname, 'v1.json'));
}

main();
