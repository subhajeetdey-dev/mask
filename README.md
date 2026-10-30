# 🎭 Mask (মুখোশ)

A bilingual (বাংলা + English) pass-and-play party game for friends. Everyone at the table gets the same secret word, except the imposters, who only get a hint. Talk, bluff, and find out who's wearing the mask!

## 🎮 How to Play

1. Choose the number of players, enter names, and pick a topic.
2. Pass the phone around. Each player **taps and holds** to see their card, then taps **Next player**.
3. Innocent players see the secret word (e.g. *Paneer*). Imposters only see a hint (e.g. *Cube*).
4. After all cards are seen, the game picks who starts.
5. Take turns describing the word without saying it. Imposters must blend in!
6. Vote, then press **Reveal Imposter** to see who it was.

## 🕵️ Imposter Rules

| Players | Imposters (default) |
|---------|---------------------|
| 3–5     | 1 (fixed)           |
| 6–8     | 2                   |
| 9+      | 3                   |

With 6 or more players, you can increase the number of imposters.

## ✨ Features

- 🇮🇳 Full **Bengali and English** support, for both the menus and the words
- 🐯 **West Bengal** topic with 130+ words: places, legends, actors, politics, food, festivals and culture
- 🍛 More topics: Food, Animals, Objects, Professions, Sports, and Random
- 👥 3 to 20 players, with custom names
- 💾 Remembers your names and settings
- 📱 Mobile-friendly; play on one phone

## 🛠️ Tech Stack

React · TypeScript · Vite

## 🚀 Run Locally

```bash
git clone https://github.com/subhajeetdey-dev/mask.git
cd mask
npm install
npm run dev -- --host
```

To play on your phone, open the network URL shown in the terminal while both devices are on the same Wi-Fi.

## 📦 Build

```bash
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel, or GitHub Pages.

## 🤝 Contributing

Want to add more words or topics? Edit `src/topics.ts` and open a pull request!
