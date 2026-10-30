import { useEffect, useState } from 'react';
import { T, num, type Lang } from './i18n';
import { TOPICS } from './topics';
import { defaultImposters, maxImposters, newRound, type Round } from './game';

type Phase = 'setup' | 'reveal' | 'result';
const MIN_PLAYERS = 3;
const MAX_PLAYERS = 20;

function load<V>(key: string, fallback: V): V {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : (JSON.parse(v) as V);
  } catch {
    return fallback;
  }
}
function save(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
}

const isLang = (value: unknown): value is Lang => value === 'bn' || value === 'en';
const loadLang = (): Lang => {
  const value = load<unknown>('iw-lang', 'bn');
  return isLang(value) ? value : 'bn';
};
const loadCount = (): number => {
  const value = load<unknown>('iw-count', 6);
  return typeof value === 'number' && Number.isInteger(value)
    ? Math.min(MAX_PLAYERS, Math.max(MIN_PLAYERS, value))
    : 6;
};
const loadNames = (): string[] => {
  const value = load<unknown>('iw-names', []);
  return Array.isArray(value) ? value.filter((name): name is string => typeof name === 'string') : [];
};
const loadTopic = (): string => {
  const value = load<unknown>('iw-topic', 'westbengal');
  return typeof value === 'string' && (value === 'random' || TOPICS.some((topic) => topic.id === value))
    ? value
    : 'westbengal';
};

function Stepper(props: { value: number; min: number; max: number; lang: Lang; onChange: (n: number) => void }) {
  const { value, min, max, lang, onChange } = props;
  return (
    <div className="stepper">
      <button className="secondary" disabled={value <= min} onClick={() => onChange(value - 1)}>−</button>
      <span>{num(value, lang)}</span>
      <button className="secondary" disabled={value >= max} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(loadLang);
  const [count, setCount] = useState<number>(loadCount);
  const [names, setNames] = useState<string[]>(loadNames);
  const [impCount, setImpCount] = useState<number>(() => defaultImposters(loadCount()));
  const [topicId, setTopicId] = useState<string>(loadTopic);

  const [phase, setPhase] = useState<Phase>('setup');
  const [round, setRound] = useState<Round | null>(null);
  const [current, setCurrent] = useState(0);
  const [holding, setHolding] = useState(false);
  const [seen, setSeen] = useState(false);
  const [showImp, setShowImp] = useState(false);

  const t = T[lang];
  const W = lang === 'en' ? 0 : 1; // word index
  const H = lang === 'en' ? 2 : 3; // hint index

  useEffect(() => save('iw-lang', lang), [lang]);
  useEffect(() => save('iw-count', count), [count]);
  useEffect(() => save('iw-names', names), [names]);
  useEffect(() => save('iw-topic', topicId), [topicId]);

  const nameOf = (i: number) => names[i]?.trim() || t.player(i + 1);

  const changeCount = (n: number) => {
    const c = Math.min(MAX_PLAYERS, Math.max(MIN_PLAYERS, n));
    setCount(c);
    setImpCount(defaultImposters(c));
  };

  const setName = (i: number, v: string) => {
    const copy = [...names];
    copy[i] = v;
    setNames(copy);
  };

  const startRound = () => {
    setRound(newRound(count, impCount, topicId, round?.key));
    setCurrent(0);
    setSeen(false);
    setHolding(false);
    setShowImp(false);
    setPhase('reveal');
  };

  const nextCard = () => {
    setHolding(false);
    if (current < count - 1) {
      setCurrent(current + 1);
      setSeen(false);
    } else {
      setPhase('result');
    }
  };

  const impMin = count < 6 ? 1 : defaultImposters(count);
  const impMax = maxImposters(count);

  // ---------- SETUP ----------
  if (phase === 'setup') {
    return (
      <>
        <div className="lang">
          <button className={`chip ${lang === 'bn' ? 'active' : ''}`} onClick={() => setLang('bn')}>বাংলা</button>
          <button className={`chip ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
        </div>
        <h1>🕵️ {t.appName}</h1>
        <p className="tagline">{t.tagline}</p>

        <div className="panel">
          <div className="row">
            <h3>{t.players}</h3>
            <Stepper value={count} min={MIN_PLAYERS} max={MAX_PLAYERS} lang={lang} onChange={changeCount} />
          </div>
        </div>

        <div className="panel">
          <div className="row">
            <h3>{t.imposters}</h3>
            <Stepper value={impCount} min={impMin} max={impMax} lang={lang} onChange={setImpCount} />
          </div>
          <p className="note">{t.autoRule}</p>
          <p className="note">{count < 6 ? t.locked : t.canIncrease}</p>
        </div>

        <div className="panel">
          <h3>{t.names}</h3>
          <div className="names">
            {Array.from({ length: count }, (_, i) => (
              <input
                key={i}
                value={names[i] ?? ''}
                placeholder={t.player(i + 1)}
                maxLength={16}
                onChange={(e) => setName(i, e.target.value)}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>{t.topic}</h3>
          <div className="chips">
            {TOPICS.map((tp) => (
              <button key={tp.id} className={`chip ${topicId === tp.id ? 'active' : ''}`} onClick={() => setTopicId(tp.id)}>
                {tp.icon} {lang === 'en' ? tp.en : tp.bn}
              </button>
            ))}
            <button className={`chip ${topicId === 'random' ? 'active' : ''}`} onClick={() => setTopicId('random')}>
              🎲 {t.random}
            </button>
          </div>
        </div>

        <button className="big" onClick={startRound}>▶ {t.start}</button>
      </>
    );
  }

  if (!round) return null;

  // ---------- REVEAL ----------
  if (phase === 'reveal') {
    const isImp = round.imposters.includes(current);
    const show = () => { setHolding(true); setSeen(true); };
    const hide = () => setHolding(false);

    return (
      <div className="center">
        <p className="note">{t.cardOf(current + 1, count)}</p>
        <p className="note">{t.passTo}</p>
        <h2>{nameOf(current)}</h2>

        <div
          className={`card ${holding ? 'open' : ''} ${holding && isImp ? 'imp' : ''}`}
          onPointerDown={(event) => {
            if (event.pointerType === 'touch' || event.button === 0) show();
          }}
          onPointerUp={hide}
          onPointerLeave={hide}
          onPointerCancel={hide}
          onContextMenu={(e) => e.preventDefault()}
        >
          {!holding && <div className="cover">👆 {t.holdToSee}</div>}
          {holding && !isImp && (
            <>
              <div className="label">{t.secretWord}</div>
              <div className="word">{round.entry[W]}</div>
            </>
          )}
          {holding && isImp && (
            <>
              <div className="badge">{t.youAreImposter}</div>
              <div className="label">{t.hint}</div>
              <div className="word">{round.entry[H]}</div>
            </>
          )}
        </div>

        <button className="big" disabled={!seen || holding} onClick={nextCard}>
          {current < count - 1 ? t.nextPlayer : t.next}
        </button>
      </div>
    );
  }

  // ---------- RESULT ----------
  return (
    <div className="center">
      <p className="note">
        {t.topic}: {round.topic.icon} {lang === 'en' ? round.topic.en : round.topic.bn}
      </p>
      <div className="starter">🎤 {t.starts(nameOf(round.starter))}</div>

      <div className="stack">
        <button onClick={() => setShowImp((s) => !s)}>{showImp ? t.hide : `🕵️ ${t.reveal}`}</button>

        {showImp && (
          <div className="imp-list">
            <div className="label">{t.impWere}</div>
            {round.imposters.map((i) => (
              <div key={i} className="name">{nameOf(i)}</div>
            ))}
            <p className="note">
              {t.wordWas}: <b>{round.entry[W]}</b> · {t.hint}: <b>{round.entry[H]}</b>
            </p>
          </div>
        )}

        <button onClick={startRound}>🔁 {t.playAgain}</button>
        <button className="secondary" onClick={() => setPhase('setup')}>⚙️ {t.newGame}</button>
      </div>
    </div>
  );
}