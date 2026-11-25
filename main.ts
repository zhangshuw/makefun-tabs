import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const configuredDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = resolve(configuredDir?.trim() ? configuredDir : '/output');
mkdirSync(outputDir, { recursive: true });

// Entry for “How many tabs do you have open”.
writeFileSync(join(outputDir, 'entry.txt'), '52');
