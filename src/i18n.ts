export type Lang = 'en' | 'bn';

const BN_DIGITS = '০১২৩৪৫৬৭৮৯';
export const num = (n: number, lang: Lang) =>
  lang === 'bn' ? String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : String(n);

const en = {
  appName: 'Find the imposter',
  tagline: 'Find the imposter among your friends!',
  players: 'Players',
  names: 'Player names',
  imposters: 'Imposters',
  autoRule: 'Default: 5 or fewer players → 1 · 6–8 → 2 · 9+ → 3',
  canIncrease: 'With 6+ players you can add more imposters.',
  locked: 'With 5 or fewer players there is only 1 imposter.',
  topic: 'Topic',
  random: 'Random',
  start: 'Start game',
  player: (n: number) => `Player ${n}`,
  cardOf: (a: number, b: number) => `Card ${a} of ${b}`,
  passTo: 'Pass the phone to',
  holdToSee: 'Tap & hold to see your card',
  nextPlayer: 'Next player ➜',
  next: 'Next ➜',
  secretWord: 'Your word',
  youAreImposter: '🕵️ YOU ARE THE IMPOSTER',
  hint: 'Hint',
  starts: (name: string) => `${name} will start the game!`,
  reveal: 'Reveal imposter',
  hide: 'Hide imposter',
  impWere: 'Imposter(s)',
  wordWas: 'Word',
  playAgain: 'Play again',
  newGame: 'Change setup',
};

const bn: typeof en = {
  appName: 'ইম্পোস্টার কে?',
  tagline: 'বন্ধুদের মধ্যে ইম্পোস্টার খুঁজে বের করো!',
  players: 'খেলোয়াড় সংখ্যা',
  names: 'খেলোয়াড়দের নাম',
  imposters: 'ইম্পোস্টার সংখ্যা',
  autoRule: 'ডিফল্ট: ৫ বা কম জন → ১ · ৬–৮ জন → ২ · ৯+ জন → ৩',
  canIncrease: '৬ বা তার বেশি খেলোয়াড় থাকলে ইম্পোস্টার বাড়ানো যাবে।',
  locked: '৫ বা কম খেলোয়াড় হলে ইম্পোস্টার মাত্র ১ জন।',
  topic: 'বিষয়',
  random: 'এলোমেলো',
  start: 'খেলা শুরু করো',
  player: (n) => `খেলোয়াড় ${num(n, 'bn')}`,
  cardOf: (a, b) => `কার্ড ${num(a, 'bn')} / ${num(b, 'bn')}`,
  passTo: 'ফোনটা দাও',
  holdToSee: 'কার্ড দেখতে চেপে ধরে রাখো',
  nextPlayer: 'পরের খেলোয়াড় ➜',
  next: 'এগিয়ে চলো ➜',
  secretWord: 'তোমার শব্দ',
  youAreImposter: '🕵️ তুমিই ইম্পোস্টার!',
  hint: 'সংকেত',
  starts: (name) => `${name} খেলা শুরু করবে!`,
  reveal: 'ইম্পোস্টার দেখাও',
  hide: 'লুকিয়ে ফেলো',
  impWere: 'ইম্পোস্টার',
  wordWas: 'শব্দ',
  playAgain: 'আবার খেলো',
  newGame: 'সেটআপ বদলাও',
};

export const T = { en, bn };