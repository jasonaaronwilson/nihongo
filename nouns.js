/* ================================================================ */
/* Simple Nouns */
/* ================================================================ */

// TODO(jawilson): break out adjectives that might have ended up in
// here.

var NOUN_CONCEPTS = [
    {
        id: 'n-kodomo',
        romaji: 'kodomo',
        hiragana: 'こども',
        kanji: '子供',
        english: 'child',
    },
    {
        id: 'n-dansei',
        romaji: 'dansei',
        hiragana: 'だんせい',
        kanji: '男性',
        english: 'man',
    },
    {
        id: 'n-jyosei',
        romaji: 'jyosei',
        hiragana: 'じょせい',
        kanji: '女性',
        english: 'woman',
    },
    {
        id: 'n-kazoku',
        romaji: 'kazoku',
        hiragana: 'かぞく',
        kanji: '家族',
        english: 'family',
    },
    {
        id: 'n-machi',
        romaji: 'machi',
        hiragana: 'まち',
        kanji: '町',
        english: 'town / city',
    },
    {
        id: 'n-inaka',
        romaji: 'inaka',
        hiragana: 'いなか',
        kanji: '田舎',
        english: 'country',
    },
    {
        id: 'n-sekai',
        romaji: 'sekai',
        hiragana: 'せかい',
        kanji: '世界',
        english: 'world',
    },
    {
        id: 'n-ie',
        romaji: 'ie',
        hiragana: 'いえ',
        kanji: '家',
        english: 'house',
    },
    {
        id: 'n-kuruma',
        romaji: 'kuruma',
        hiragana: 'くるま',
        kanji: '車',
        english: 'car',
    },
    {
        id: 'n-michi',
        romaji: 'michi',
        hiragana: 'みち',
        kanji: '道',
        english: 'street / road',
    },
    {
        id: 'n-omise',
        romaji: 'omise',
        hiragana: 'おみせ',
        kanji: 'お店',
        english: 'shop',
    },
    /*
      {
      id: 'n-doa',
      romaji: 'doa',
      katakna: 'ドア',
      english: 'door',
      },

      table,

    */
    {
        id: 'n-isu',
        romaji: 'isu',
        hiragana: 'いす',
        kanji: '椅子',
        english: 'chair',
    },
    {
        id: 'n-mado',
        romaji: 'mado',
        hiragana: 'まど',
        kanji: '窓',
        english: 'window',
    },
    {
        id: 'n-shinbun',
        romaji: 'shinbun',
        hiragana: 'しんぶん',
        kanji: '新聞',
        english: 'newspaper',
    },
    {
        id: 'n-hon',
        romaji: 'hon',
        hiragana: 'ほん',
        kanji: '本',
        english: 'book',
    },
    {
        id: 'n-hana',
        romaji: 'hana',
        hiragana: 'はな',
        kanji: '花',
        english: 'flower',
    },
    {
        id: 'n-kasa',
        romaji: 'kasa',
        hiragana: 'かさ',
        kanji: '',
        english: 'umbrella',
    },
    {
        id: 'n-gakkō',
        romaji: 'gakkō',
        hiragana: 'がっこう',
        kanji: '学校',
        english: 'school',
    },
    {
        id: 'n-byōin',
        romaji: 'byōin',
        hiragana: 'びょういん',
        kanji: '病院',
        english: 'hospital',
    },
    {
        id: 'n-asa',
        romaji: 'asa',
        hiragana: 'あさ',
        kanji: '朝',
        english: 'morning',
    },
    {
        id: 'n-gogo',
        romaji: 'gogo',
        hiragana: 'ごご',
        kanji: '午後',
        english: 'afternoon',
    },
    {
        id: 'n-yoru',
        romaji: 'yoru',
        hiragana: 'よる',
        kanji: '夜',
        english: 'night',
    },
    {
        id: 'n-kaisha',
        romaji: 'kaisha',
        hiragana: 'きあしゃ',
        kanji: '会社',
        english: 'company',
    },
    {
        id: 'n-isha',
        romaji: 'isha',
        hiragana: 'いしゃ',
        kanji: '医師',
        english: 'doctor',
    },
    {
        id: 'n-untensha',
        romaji: 'untensha',
        hiragana: 'うてんしゃ',
        kanji: '運転者',
        english: 'driver',
    },
    {
        id: 'n-Shōbō-shi',
        romaji: 'Shōbō-shi',
        hiragana: 'しょうぼう-し',
        kanji: '消防士',
        english: 'firefighter',
    },
    {
        id: 'n-bengoshi',
        romaji: 'bengoshi',
        hiragana: 'べんごし',
        kanji: '弁護士',
        english: 'lawyer',
    },
    {
        id: 'n-jūi',
        romaji: 'jūi',
        hiragana: 'じゅうい',
        kanji: '獣医',
        english: 'vet',
    },
    {
        id: 'n-kangoshi',
        romaji: 'kangoshi',
        hiragana: 'かんごし',
        kanji: '看護婦',
        english: 'nurse',
    },
    {
        id: 'n-ban',
        romaji: 'ban',
        hiragana: 'ばん',
        kanji: '夜',
        english: 'evening',
    },
    {
        id: 'n-gozen',
        romaji: 'gozen',
        hiragana: 'ごぜん',
        kanji: '午前',
        english: 'a.m.',
    },
    {
        id: 'n-gogo',
        romaji: 'gogo',
        hiragana: 'ごご',
        kanji: '午後',
        english: 'p.m.',
    },
    {
        id: 'n-hayai',
        romaji: 'hayai',
        hiragana: 'はやい',
        kanji: '早い',
        english: 'early',
    },
    {
        id: 'n-osoi',
        romaji: 'osoi',
        hiragana: 'おそい',
        kanji: '遅い',
        english: 'late',
    },
    {
        id: 'n-ima',
        romaji: 'ima',
        hiragana: 'いま',
        kanji: '今',
        english: 'now',
    },
    {
        id: 'n-tsuki',
        romaji: 'tsuki',
        hiragana: 'つき',
        kanji: '月',
        english: 'month',
    },
    {
        id: 'n-toshi',
        romaji: 'toshi',
        hiragana: 'とし',
        kanji: '年',
        english: 'year',
    },
    {
        id: 'n-hi',
        romaji: 'hi',
        hiragana: 'ひ',
        kanji: '日',
        english: 'day',
    },
    {
        id: 'n-shūmatsu',
        romaji: 'shūmatsu',
        hiragana: 'しゅうまつ',
        kanji: '週末',
        english: 'weekend',
    },
    {
        id: 'n-shū',
        romaji: 'shū',
        hiragana: 'しゅう',
        kanji: '週',
        english: 'week',
    },
    {
        id: 'n-haru',
        romaji: 'haru',
        hiragana: 'はる',
        kanji: '春',
        english: 'spring',
    },
    {
        id: 'n-natsu',
        romaji: 'natsu',
        hiragana: 'なつ',
        kanji: '夏',
        english: 'summer',
    },
    {
        id: 'n-aki',
        romaji: 'aki',
        hiragana: 'あき',
        kanji: '秋',
        english: 'autumn',
    },
    {
        id: 'n-fuyu',
        romaji: 'fuyu',
        hiragana: 'ふゆ',
        kanji: '冬',
        english: 'winter',
    },
    {
        id: 'n-atsui',
        romaji: 'atsui',
        hiragana: 'あつい',
        kanji: '',
        english: 'hot',
    },
    {
        id: 'n-atatakai',
        romaji: 'atatakai',
        hiragana: 'あたたかい',
        kanji: '暖かい',
        english: 'warm',
    },
    {
        id: 'n-samui',
        romaji: 'samui',
        hiragana: 'さむい',
        kanji: '',
        english: 'cold',
    },
    {
        id: 'n-ame',
        romaji: 'ame',
        hiragana: 'あめ',
        kanji: '雨',
        english: 'rain/wet',
    },
    {
        id: 'n-yuki',
        romaji: 'yuki',
        hiragana: 'ゆき',
        kanji: '雪',
        english: 'snow',
    },
    {
        id: 'n-arare',
        romaji: 'arare',
        hiragana: 'あられ',
        kanji: '',
        english: 'hail',
    },
    {
        id: 'n-kōri',
        romaji: 'kōri',
        hiragana: 'こうり',
        kanji: '氷',
        english: 'ice',
    },
    {
        id: 'n-kaze',
        romaji: 'kaze',
        hiragana: 'かぜ',
        kanji: '風',
        english: 'wind',
    },
    {
        id: 'n-kippu',
        romaji: 'kippu',
        hiragana: 'きっぷ',
        kanji: '切符',
        english: 'ticket',
    },
    {
        id: 'n-chizu',
        romaji: 'chizu',
        hiragana: 'ちず',
        kanji: '地図',
        english: 'map',
    },
    {
        id: 'n-kōtsū',
        romaji: 'kōtsū',
        hiragana: 'こおつう',
        kanji: '交通',
        english: 'traffic',
    },
    {
        id: 'n-kūchō',
        romaji: 'kūchō',
        hiragana: 'くうちょう',
        kanji: '空調',
        english: 'air conditioning',
    },
    {
        id: 'n-yane',
        romaji: 'yane',
        hiragana: 'やね',
        kanji: '屋根',
        english: 'roof',
    },
    {
        id: 'n-deguchi',
        romaji: 'deguchi',
        hiragana: 'でぐち',
        kanji: '出口',
        english: 'exit',
    },
    {
        id: 'n-hashi',
        romaji: 'hashi',
        hiragana: 'はし',
        kanji: '橋',
        english: 'bridge',
    },
    {
        id: 'n-jiko',
        romaji: 'jiko',
        hiragana: 'じこ',
        kanji: '事故',
        english: 'accident',
    },
    {
        id: 'n-unchin',
        romaji: 'unchin',
        hiragana: 'うんちん',
        kanji: '運賃',
        english: 'fare',
    },
    {
        id: 'n-jitensha',
        romaji: 'jitensha',
        hiragana: 'じてんしゃ',
        kanji: '自転車',
        english: 'bicyle',
    },
    {
        id: 'n-sharin',
        romaji: 'sharin',
        hiragana: 'しゃりん',
        english: 'wheel',
    },
    {
        id: 'n-kikansha',
        romaji: 'kikansha',
        hiragana: 'きかんしゃ',
        kanji: '機関車',
        english: 'locomotive',
    },
    {
        id: 'n-densha',
        romaji: 'densha',
        hiragana: 'でんしゃ',
        kanji: '列車',
        english: 'train',
    },
    {
        id: 'n-kūkō',
        romaji: 'kūkō',
        hiragana: 'くうこう',
        kanji: '空港',
        english: 'airport',
    },
    {
        id: 'n-unga',
        romaji: 'unga',
        hiragana: 'うんが',
        kanji: '運河',
        english: 'canal',
    },
    {
        id: 'n-minato',
        romaji: 'minato',
        hiragana: 'みなと',
        kanji: '港',
        english: 'port',
    },
    {
        id: 'n-yachin',
        romaji: 'yachin',
        hiragana: 'やちん',
        kanji: '家賃',
        english: 'rent',
    },

];
