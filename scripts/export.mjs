#!/usr/bin/env node
/**
 * Regenerate the included HSK 3.0 levels 1–3 Korean dataset.
 *
 * Sources are expected from the Junggugeo site repository:
 *   HSK_SOURCE  path to data/content/hsk.json
 *   KO_DEFS     path to data/i18n/ko/hsk-definitions.json
 *
 *   HSK_SOURCE=../nihaolearn/data/content/hsk.json \
 *   KO_DEFS=../nihaolearn/data/i18n/ko/hsk-definitions.json \
 *   node scripts/export.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const sourceFile = process.env.HSK_SOURCE
const koFile = process.env.KO_DEFS
if (!sourceFile || !koFile) {
  console.error('Set HSK_SOURCE and KO_DEFS.')
  process.exit(1)
}

const hsk = JSON.parse(fs.readFileSync(sourceFile, 'utf8'))
const ko = JSON.parse(fs.readFileSync(koFile, 'utf8'))
const words = []

for (const level of [1, 2, 3]) {
  for (const word of hsk['3.0']?.[String(level)] ?? []) {
    if (!word.d) continue
    const korean = ko.words?.[word.w]
    if (!korean) throw new Error(`Missing Korean definition for ${word.w} (HSK ${level})`)
    words.push({
      level,
      word: word.w,
      pinyin: word.p ?? '',
      partOfSpeech: word.pos ?? null,
      korean,
      englishSource: word.d,
    })
  }
}

const data = {
  meta: {
    title: 'HSK 3.0 Korean vocabulary (levels 1–3)',
    locale: 'ko',
    standard: 'HSK 3.0 (2021)',
    levels: [1, 2, 3],
    count: words.length,
    status: 'draft',
    reviewed: false,
    aiReview: 'completed',
    generatedAt: new Date().toISOString().slice(0, 10),
    website: 'https://junggugeo.com/',
    wordListLicense: 'MIT (complete-hsk-vocabulary)',
    definitionLicense: 'CC BY-SA 4.0 (translation of CC-CEDICT definitions)',
    note: 'AI-edited draft. A Korean native-speaker review is still required.',
  },
  words,
}

fs.mkdirSync(path.join(process.cwd(), 'data'), { recursive: true })
fs.writeFileSync(
  path.join(process.cwd(), 'data/hsk-3.0-ko-levels-1-3.json'),
  `${JSON.stringify(data, null, 2)}\n`,
)

const esc = (value) => {
  const text = value == null ? '' : String(value)
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}
const csv = [
  [
    'level',
    'word',
    'pinyin',
    'part_of_speech',
    'korean_definition',
    'english_source_definition',
  ],
  ...words.map((w) => [
    w.level,
    w.word,
    w.pinyin,
    w.partOfSpeech,
    w.korean,
    w.englishSource,
  ]),
]
  .map((row) => row.map(esc).join(','))
  .join('\n')
fs.writeFileSync(
  path.join(process.cwd(), 'data/hsk-3.0-ko-levels-1-3.csv'),
  `${csv}\n`,
)

console.log(`Wrote ${words.length} words.`)
