/* ============================================================ */
/*                           Katakana                           */
/* ============================================================ */

var KATAKANA_CONCEPTS = [
    {
        id: 'k-a',
        romaji: 'a',
        katakana: 'ア',
    },
    {
        id: 'k-i',
        romaji: 'i',
        katakana: 'イ',
    },
    {
        id: 'k-u',
        romaji: 'u',
        katakana: 'ウ',
    },
    {
        id: 'k-e',
        romaji: 'e',
        katakana: 'エ',
    },
    {
        id: 'k-o',
        romaji: 'o',
        katakana: 'オ',
    },
    {
        id: 'k-ka',
        romaji: 'ka',
        katakana: 'カ',
    },
    {
        id: 'k-ki',
        romaji: 'ki',
        katakana: 'キ',
    },
    {
        id: 'k-ku',
        romaji: 'ku',
        katakana: 'ク',
    },
    {
        id: 'k-ke',
        romaji: 'ke',
        katakana: 'ケ',
    },
    {
        id: 'k-ko',
        romaji: 'ko',
        katakana: 'コ',
    },
    {
        id: 'k-sa',
        romaji: 'sa',
        katakana: 'サ',
    },
    {
        id: 'k-shi',
        romaji: 'shi',
        katakana: 'シ',
    },
    {
        id: 'k-su',
        romaji: 'su',
        katakana: 'ス',
    },
    {
        id: 'k-se',
        romaji: 'se',
        katakana: 'セ',
    },
    {
        id: 'k-so',
        romaji: 'so',
        katakana: 'ソ',
    },
    {
        id: 'k-ta',
        romaji: 'ta',
        katakana: 'タ',
    },
    {
        id: 'k-chi',
        romaji: 'chi',
        katakana: 'チ',
    },
    {
        id: 'k-tsu',
        romaji: 'tsu',
        katakana: 'ツ',
    },
    {
        id: 'k-te',
        romaji: 'te',
        katakana: 'テ',
    },
    {
        id: 'k-to',
        romaji: 'to',
        katakana: 'ト',
    },
    {
        id: 'k-na',
        romaji: 'na',
        katakana: 'ナ',
    },
    {
        id: 'k-ni',
        romaji: 'ni',
        katakana: 'ニ',
    },
    {
        id: 'k-nu',
        romaji: 'nu',
        katakana: 'ヌ',
    },
    {
        id: 'k-ne',
        romaji: 'ne',
        katakana: 'ネ',
    },
    {
        id: 'k-no',
        romaji: 'no',
        katakana: 'ノ',
    },
    {
        id: 'k-ha',
        romaji: 'ha',
        katakana: 'ハ',
    },
    {
        id: 'k-hi',
        romaji: 'hi',
        katakana: 'ヒ',
    },
    {
        id: 'k-hu',
        romaji: 'hu',
        katakana: 'フ',
    },
    {
        id: 'k-he',
        romaji: 'he',
        katakana: 'ヘ',
    },
    {
        id: 'k-ho',
        romaji: 'ho',
        katakana: 'ホ',
    },
    {
        id: 'k-ma',
        romaji: 'ma',
        katakana: 'マ',
    },
    {
        id: 'k-mi',
        romaji: 'mi',
        katakana: 'ミ',
    },
    {
        id: 'k-mu',
        romaji: 'mu',
        katakana: 'ム',
    },
    {
        id: 'k-me',
        romaji: 'me',
        katakana: 'メ',
    },
    {
        id: 'k-mo',
        romaji: 'mo',
        katakana: 'モ',
    },
    {
        id: 'k-ya',
        romaji: 'ya',
        katakana: 'ヤ',
    },
    {
        id: 'k-yu',
        romaji: 'yu',
        katakana: 'ユ',
    },
    {
        id: 'k-yo',
        romaji: 'yo',
        katakana: 'ヨ',
    },
    {
        id: 'k-ra',
        romaji: 'ra',
        katakana: 'ラ',
    },
    {
        id: 'k-ri',
        romaji: 'ri',
        katakana: 'リ',
    },
    {
        id: 'k-ru',
        romaji: 'ru',
        katakana: 'ル',
    },
    {
        id: 'k-re',
        romaji: 're',
        katakana: 'レ',
    },
    {
        id: 'k-ro',
        romaji: 'ro',
        katakana: 'ロ',
    },
    {
        id: 'k-wa',
        romaji: 'wa',
        katakana: 'ワ',
    },
    {
        id: 'k-wi',
        romaji: 'wi',
        katakana: 'ヰ',
    },
    {
        id: 'k-we',
        romaji: 'we',
        katakana: 'ヱ',
    },
    {
        id: 'k-wo',
        romaji: 'wo',
        katakana: 'ヲ',
    },
    {
        id: 'k-ga',
        romaji: 'ga',
        katakana: 'ガ',
    },
    {
        id: 'k-gi',
        romaji: 'gi',
        katakana: 'ギ',
    },
    {
        id: 'k-gu',
        romaji: 'gu',
        katakana: 'グ',
    },
    {
        id: 'k-ge',
        romaji: 'ge',
        katakana: 'ゲ',
    },
    {
        id: 'k-go',
        romaji: 'go',
        katakana: 'ゴ',
    },
    {
        id: 'k-za',
        romaji: 'za',
        katakana: 'ザ',
    },
    {
        id: 'k-ji',
        romaji: 'ji',
        katakana: 'ジ',
    },
    {
        id: 'k-zu',
        romaji: 'zu',
        katakana: 'ズ',
    },
    {
        id: 'k-ze',
        romaji: 'ze',
        katakana: 'ゼ',
    },
    {
        id: 'k-zo',
        romaji: 'zo',
        katakana: 'ゾ',
    },
    {
        id: 'k-da',
        romaji: 'da',
        katakana: 'ダ',
    },
    {
        id: 'k-zhi',
        romaji: 'zhi',
        katakana: 'ヂ',
    },
    {
        id: 'k-zu',
        romaji: 'zu',
        katakana: 'ヅ',
    },
    {
        id: 'k-de',
        romaji: 'de',
        katakana: 'デ',
    },
    {
        id: 'k-do',
        romaji: 'do',
        katakana: 'ド',
    },
    {
        id: 'k-ba',
        romaji: 'ba',
        katakana: 'バ',
    },
    {
        id: 'k-bi',
        romaji: 'bi',
        katakana: 'ビ',
    },
    {
        id: 'k-bu',
        romaji: 'bu',
        katakana: 'ブ',
    },
    {
        id: 'k-be',
        romaji: 'be',
        katakana: 'ベ',
    },
    {
        id: 'k-bo',
        romaji: 'bo',
        katakana: 'ボ',
    },
    {
        id: 'k-pa',
        romaji: 'pa',
        katakana: 'パ',
    },
    {
        id: 'k-pi',
        romaji: 'pi',
        katakana: 'ピ',
    },
    {
        id: 'k-pu',
        romaji: 'pu',
        katakana: 'プ',
    },
    {
        id: 'k-pe',
        romaji: 'pe',
        katakana: 'ペ',
    },
    {
        id: 'k-po',
        romaji: 'po',
        katakana: 'ポ',
    },
    {
        id: 'k-kya',
        romaji: 'kya',
        katakana: 'キャ',
    },
    {
        id: 'k-kyu',
        romaji: 'kyu',
        katakana: 'キュ',
    },
    {
        id: 'k-kyo',
        romaji: 'kyo',
        katakana: 'キョ',
    },
    {
        id: 'k-sha',
        romaji: 'sha',
        katakana: 'シャ',
    },
    {
        id: 'k-shu',
        romaji: 'shu',
        katakana: 'シュ',
    },
    {
        id: 'k-sho',
        romaji: 'sho',
        katakana: 'ショ',
    },
    {
        id: 'k-cha',
        romaji: 'cha',
        katakana: 'チャ',
    },
    {
        id: 'k-chu',
        romaji: 'chu',
        katakana: 'チュ',
    },
    {
        id: 'k-cho',
        romaji: 'cho',
        katakana: 'チョ',
    },
    {
        id: 'k-nya',
        romaji: 'nya',
        katakana: 'ニャ',
    },
    {
        id: 'k-nyu',
        romaji: 'nyu',
        katakana: 'ニュ',
    },
    {
        id: 'k-nyo',
        romaji: 'nyo',
        katakana: 'ニョ',
    },
    {
        id: 'k-hya',
        romaji: 'hya',
        katakana: 'ヒャ',
    },
    {
        id: 'k-hyu',
        romaji: 'hyu',
        katakana: 'ヒュ',
    },
    {
        id: 'k-hyo',
        romaji: 'hyo',
        katakana: 'ヒョ',
    },
    {
        id: 'k-mya',
        romaji: 'mya',
        katakana: 'ミャ',
    },
    {
        id: 'k-myu',
        romaji: 'myu',
        katakana: 'ミュ',
    },
    {
        id: 'k-myo',
        romaji: 'myo',
        katakana: 'ミョ',
    },
    {
        id: 'k-rya',
        romaji: 'rya',
        katakana: 'リャ',
    },
    {
        id: 'k-ryu',
        romaji: 'ryu',
        katakana: 'リュ',
    },
    {
        id: 'k-ryo',
        romaji: 'ryo',
        katakana: 'リョ',
    },
    {
        id: 'k-gya',
        romaji: 'gya',
        katakana: 'ギャ',
    },
    {
        id: 'k-gyu',
        romaji: 'gyu',
        katakana: 'ギュ',
    },
    {
        id: 'k-gyo',
        romaji: 'gyo',
        katakana: 'ギョ',
    },
    {
        id: 'k-ja',
        romaji: 'ja',
        katakana: 'ジャ',
    },
    {
        id: 'k-ju',
        romaji: 'ju',
        katakana: 'ジュ',
    },
    {
        id: 'k-jo',
        romaji: 'jo',
        katakana: 'ジョ',
    },
    {
        id: 'k-bya',
        romaji: 'bya',
        katakana: 'ビャ',
    },
    {
        id: 'k-byu',
        romaji: 'byu',
        katakana: 'ビュ',
    },
    {
        id: 'k-byo',
        romaji: 'byo',
        katakana: 'ビョ',
    },
    {
        id: 'k-pya',
        romaji: 'pya',
        katakana: 'ピャ',
    },
    {
        id: 'k-pyu',
        romaji: 'pyu',
        katakana: 'ピュ',
    },
    {
        id: 'k-pyo',
        romaji: 'pyo',
        katakana: 'ピョ',
    },

    /* TODO(jawilson): katakana new method see

       https://www.coscom.co.jp/hiragana-katakana/kanatable.html

    */
];

