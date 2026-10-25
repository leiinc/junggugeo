# 중국어 배우기 — HSK 3.0 한국어 단어 데이터 (1~3급)

중국어 학습 사이트 「[중국어 배우기](https://junggugeo.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)」에서
사용하는 HSK 3.0(2021) 1~3급 한국어 단어 데이터입니다.

병음, 품사, 한국어 뜻과 CC-CEDICT 영어 원문 뜻을 함께 수록했습니다.
학습자, 교재 제작자와 앱 개발자가 다시 활용할 수 있도록 CC BY-SA 4.0으로
공개합니다.

## 수록 내용

| 파일 | 내용 |
| --- | --- |
| [`data/hsk-3.0-ko-levels-1-3.json`](data/hsk-3.0-ko-levels-1-3.json) | 2,209개 단어의 JSON |
| [`data/hsk-3.0-ko-levels-1-3.csv`](data/hsk-3.0-ko-levels-1-3.csv) | 같은 내용의 CSV |

수록 급수: HSK 3.0 1~3급
수록 단어: 2,209개

HSK 4~7급, 구 HSK 2.0 및 한자별 상세 해설은 포함하지 않습니다.
한국어 뜻은 AI 편집 검수를 거친 초안이며, 한국인 원어민의 최종 검수는
아직 완료되지 않았습니다.

## 데이터 형식

JSON은 `meta`와 `words`로 나뉩니다. 각 단어는 다음과 같은 형식입니다.

```json
{
  "level": 1,
  "word": "的",
  "pinyin": "de",
  "partOfSpeech": "u,n",
  "korean": "~의; 명사구를 만드는 조사",
  "englishSource": "of; ~'s (possessive particle)"
}
```

CSV 열:

```text
level,word,pinyin,part_of_speech,korean_definition,english_source_definition
```

## 사이트에서 학습하기

- [HSK 1 단어장](https://junggugeo.com/hsk/1/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)
- [HSK 3 단어장](https://junggugeo.com/hsk/3/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)
- [병음과 성조 연습](https://junggugeo.com/pinyin?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)
- [단계별 읽기](https://junggugeo.com/reading?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)
- [데이터와 라이선스](https://junggugeo.com/licenses?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data)

## 출처와 라이선스

- HSK 단어 목록: `complete-hsk-vocabulary`(MIT)와 HSK 3.0(2021) 공식 목록
- 영어 원문 뜻: CC-CEDICT(CC BY-SA 4.0)
- 한국어 뜻: CC-CEDICT 뜻을 참고한 한국어 번역 및 편집(CC BY-SA 4.0)

단어 목록 부분은 MIT 라이선스이고, CC-CEDICT 뜻과 그 번역·개작은
CC BY-SA 4.0입니다. 인용 표기는 [NOTICE.md](NOTICE.md)를 참고하세요.
전체 라이선스 문구는 [LICENSE](LICENSE)와 [LICENSES/](LICENSES/)에
포함되어 있습니다.

오역이나 부자연스러운 표현을 발견하면 단어, CSV 행 또는 페이지 URL과
함께 <hello@junggugeo.com>으로 알려 주세요.

## 데이터 재생성

중국어 사이트 저장소에서 다음 명령으로 다시 만들 수 있습니다.

```bash
HSK_SOURCE=../nihaolearn/data/content/hsk.json \
KO_DEFS=../nihaolearn/data/i18n/ko/hsk-definitions.json \
node scripts/export.mjs
```

---

## English

This repository contains the Korean HSK 3.0 levels 1–3 dataset used by
[Junggugeo / 중국어 배우기](https://junggugeo.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_ko_data).

It contains 2,209 words with pinyin, part of speech, a Korean definition, and
the original CC-CEDICT English definition. The Korean text has received an AI
editorial pass but has not yet been certified by a native Korean speaker.

The word list is MIT-licensed; the CC-CEDICT definitions and their Korean
translations are CC BY-SA 4.0. See [NOTICE.md](NOTICE.md) for attribution.
