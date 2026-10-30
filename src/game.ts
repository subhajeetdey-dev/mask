import { TOPICS, type Entry, type Topic } from './topics';

export const defaultImposters = (n: number) => (n <= 5 ? 1 : n <= 8 ? 2 : 3);
export const maxImposters = (n: number) =>
  n < 6 ? 1 : Math.max(defaultImposters(n), Math.floor(n / 2));

const rand = (max: number) => {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % max;
};

export interface Round {
  topic: Topic;
  entry: Entry;
  imposters: number[];
  starter: number;
  key: string;
}

export function newRound(players: number, impCount: number, topicId: string, lastKey?: string): Round {
  const topic =
    topicId === 'random'
      ? TOPICS[rand(TOPICS.length)]
      : TOPICS.find((t) => t.id === topicId) ?? TOPICS[0];

  let entry = topic.words[rand(topic.words.length)];
  let key = `${topic.id}:${entry[0]}`;
  while (key === lastKey && topic.words.length > 1) {
    entry = topic.words[rand(topic.words.length)];
    key = `${topic.id}:${entry[0]}`;
  }

  const order = Array.from({ length: players }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  const imposters = order.slice(0, impCount).sort((a, b) => a - b);

  return { topic, entry, imposters, starter: rand(players), key };
}