export type Entry = readonly [enWord: string, bnWord: string, enHint: string, bnHint: string];

export interface Topic {
  id: string;
  icon: string;
  en: string;
  bn: string;
  words: readonly Entry[];
}

export const TOPICS: readonly Topic[] = [
  {
    id: 'westbengal',
    icon: '🌉',
    en: 'West Bengal',
    bn: 'পশ্চিমবঙ্গ',
    words: [
      ['Kolkata', 'কলকাতা', 'City of joy', 'আনন্দের শহর'],
      ['Durga Puja', 'দুর্গাপূজা', 'Festival of lights and drums', 'আলো আর ঢাকের উৎসব'],
      ['Sundarbans', 'সুন্দরবন', 'Mangrove forest', 'ম্যানগ্রোভ বন'],
      ['Rasgulla', 'রসগোল্লা', 'Soft sweet in syrup', 'রসে ভেজা নরম মিষ্টি'],
      ['Howrah Bridge', 'হাওড়া ব্রিজ', 'Bridge over the Hooghly', 'হুগলি নদীর ওপর সেতু'],
      ['Darjeeling', 'দার্জিলিং', 'Hill town with tea gardens', 'চা-বাগানের পাহাড়ি শহর'],
    ],
  },
  {
    id: 'food',
    icon: '🍛',
    en: 'Food',
    bn: 'খাবার',
    words: [
      ['Biryani', 'বিরিয়ানি', 'Rice with spices', 'মশলাদার ভাতের পদ'],
      ['Mango', 'আম', 'Summer fruit', 'গ্রীষ্মের ফল'],
      ['Pani Puri', 'ফুচকা', 'Crispy shell with filling', 'পুরভরা মচমচে খাবার'],
      ['Jalebi', 'জিলাপি', 'Spiral sweet', 'পাকানো মিষ্টি'],
      ['Tea', 'চা', 'Warm drink', 'গরম পানীয়'],
      ['Samosa', 'সিঙ্গারা', 'Triangular fried snack', 'ত্রিভুজ ভাজা খাবার'],
    ],
  },
  {
    id: 'places',
    icon: '🗺️',
    en: 'Places',
    bn: 'জায়গা',
    words: [
      ['Beach', 'সমুদ্রসৈকত', 'Sandy shore', 'বালির তীর'],
      ['School', 'স্কুল', 'Place to learn', 'শেখার জায়গা'],
      ['Airport', 'বিমানবন্দর', 'Planes take off here', 'বিমান এখান থেকে ওড়ে'],
      ['Market', 'বাজার', 'Place to shop', 'কেনাকাটার জায়গা'],
      ['Zoo', 'চিড়িয়াখানা', 'Animals live here', 'এখানে পশুপাখি থাকে'],
      ['Museum', 'জাদুঘর', 'Place with historic objects', 'ঐতিহাসিক জিনিসের জায়গা'],
    ],
  },
  {
    id: 'everyday',
    icon: '🏠',
    en: 'Everyday Life',
    bn: 'দৈনন্দিন জীবন',
    words: [
      ['Umbrella', 'ছাতা', 'Keeps rain away', 'বৃষ্টি আটকায়'],
      ['Bicycle', 'সাইকেল', 'Two-wheeled ride', 'দুই চাকার বাহন'],
      ['Mobile phone', 'মোবাইল ফোন', 'Used to call friends', 'বন্ধুদের ফোন করতে লাগে'],
      ['Alarm clock', 'অ্যালার্ম ঘড়ি', 'Wakes you up', 'ঘুম ভাঙায়'],
      ['Backpack', 'ব্যাকপ্যাক', 'Carries things on your back', 'পিঠে জিনিস বহন করে'],
      ['Toothbrush', 'টুথব্রাশ', 'Used every morning', 'প্রতিদিন সকালে ব্যবহার হয়'],
    ],
  },
  {
    id: 'hard-guesses',
    icon: '🧠',
    en: 'Hard Guesses',
    bn: 'কঠিন অনুমান',
    words: [
      ['Ephemeral', 'ক্ষণস্থায়ী', 'Gone almost as soon as it arrives', 'আসার পর প্রায় সঙ্গে সঙ্গেই চলে যায়'],
      ['Paradox', 'কূটাভাস', 'A statement that challenges common sense', 'যে কথা সাধারণ বুদ্ধিকে ধাঁধায় ফেলে'],
      ['Serendipity', 'আকস্মিক সৌভাগ্য', 'A lucky discovery made by accident', 'হঠাৎ করে পাওয়া সৌভাগ্য'],
      ['Kaleidoscope', 'ক্যালাইডোস্কোপ', 'Many changing patterns in a tube', 'নলের ভেতর বদলে যাওয়া নকশা'],
      ['Nostalgia', 'স্মৃতিকাতরতা', 'A longing for a time that has passed', 'অতীত সময়ের জন্য মন কেমন করা'],
      ['Eclipse', 'গ্রহণ', 'One celestial body briefly hides another', 'একটি মহাজাগতিক বস্তু কিছুক্ষণের জন্য অন্যটিকে ঢাকে'],
      ['Murmuration', 'পাখির ঝাঁকের নৃত্য', 'A flock moving like one living shape', 'একসঙ্গে নড়া পাখির ঝাঁক'],
      ['Labyrinth', 'গোলকধাঁধা', 'A confusing network with one difficult way out', 'একটি কঠিন বেরোনোর পথসহ জটিল পথের জাল'],
    ],
  },
  {
    id: 'politics',
    icon: '🏛️',
    en: 'Politics',
    bn: 'রাজনীতি',
    words: [
      ['Election', 'নির্বাচন', 'People choose their representatives', 'মানুষ প্রতিনিধি বেছে নেয়'],
      ['Parliament', 'সংসদ', 'A place where laws are debated', 'যেখানে আইন নিয়ে আলোচনা হয়'],
      ['Manifesto', 'ইশতেহার', 'A plan promised before voting', 'ভোটের আগে দেওয়া পরিকল্পনা'],
      ['Democracy', 'গণতন্ত্র', 'Power belongs to the people', 'ক্ষমতা জনগণের হাতে'],
      ['Campaign', 'প্রচারাভিযান', 'Effort to win public support', 'জনসমর্থন পাওয়ার চেষ্টা'],
      ['Coalition', 'জোট', 'Parties working together', 'দলগুলোর একসঙ্গে কাজ করা'],
    ],
  },
  {
    id: 'riddles',
    icon: '🧩',
    en: 'Riddles',
    bn: 'ধাঁধা',
    words: [
      ['Shadow', 'ছায়া', 'Follows you but cannot be held', 'তোমাকে অনুসরণ করে কিন্তু ধরা যায় না'],
      ['Echo', 'প্রতিধ্বনি', 'Repeats what you say', 'তুমি যা বলো তা ফিরিয়ে দেয়'],
      ['Clock', 'ঘড়ি', 'Has hands but cannot clap', 'হাত আছে কিন্তু তালি দিতে পারে না'],
      ['Map', 'মানচিত্র', 'Shows places without taking you there', 'জায়গা দেখায় কিন্তু সেখানে নিয়ে যায় না'],
      ['Candle', 'মোমবাতি', 'Gets shorter while giving light', 'আলো দিতে দিতে ছোট হয়ে যায়'],
      ['Book', 'বই', 'Has pages but is not a tree', 'পাতা আছে কিন্তু গাছ নয়'],
    ],
  },
  {
    id: 'jokes',
    icon: '😂',
    en: 'Jokes',
    bn: 'কৌতুক',
    words: [
      ['Pun', 'শব্দরস', 'A joke with a clever double meaning', 'দুই অর্থের মজার শব্দখেলা'],
      ['Prank', 'দুষ্টুমি', 'A harmless trick played for fun', 'মজার জন্য করা নিরীহ দুষ্টুমি'],
      ['Punchline', 'শেষ মজার কথা', 'The funniest part at the end', 'শেষের সবচেয়ে মজার কথা'],
      ['Mimicry', 'নকল করা', 'Copying someone in a funny way', 'মজারভাবে কাউকে নকল করা'],
      ['Tickle', 'সুড়সুড়ি', 'Makes you laugh with a light touch', 'হালকা ছোঁয়ায় হাসায়'],
      ['Clown', 'ভাঁড়', 'Funny performer with colorful clothes', 'রঙিন পোশাকের মজার অভিনয়শিল্পী'],
    ],
  },
];
