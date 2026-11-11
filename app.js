'use strict';
// One engine, two courses. index.html loaded es/* or en/* into D before this file. COURSE = 'es' | 'en'.
const ES = COURSE === 'es';

// ---------- data ----------
const POS = { n: 'nom', v: 'verbe', adj: 'adjectif', adv: 'adverbe', pron: 'pronom', prep: 'préposition', conj: 'conjonction',
  det: 'déterminant', num: 'nombre', int: 'interjection', phr: 'verbe à particule', idiom: 'expression' };
const GENDER = { m: 'masc.', f: 'fém.', mf: 'masc./fém.' };
const ART = { m: 'el', f: 'la', mf: 'el/la' };
const THEMES = {
  core: 'Mots-outils · Службові слова', people: 'Personnes & famille · Люди й родина', body: 'Corps & santé · Тіло й здоров’я',
  home: 'Maison & objets · Дім і речі', nature: 'Nature & météo · Природа й погода', time: 'Temps · Час',
  color: 'Couleurs · Кольори', num: 'Nombres & quantité · Числа', place: 'Lieux & voyages · Місця й подорожі',
  food: 'Nourriture · Їжа', feel: 'Esprit & sentiments · Почуття', move: 'Mouvement · Рух', talk: 'Parole · Мовлення',
  act: 'Actions · Дії', society: 'Société & travail · Суспільство й робота', qual: 'Qualités · Якості',
  abstract: 'Notions abstraites · Абстрактне', culture: 'Culture & loisirs · Культура й дозвілля', tech: 'Sciences & techniques · Наука й техніка',
  money: 'Argent & commerce · Гроші', law: 'Loi & crime · Право й злочин',
};
// line format: id|word|pos|gender|fr|ru|uk|theme|emoji|note|example (target = fr)
const WORDS = D.words.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => {
  const [id, w, pos, g, fr, ru, uk, theme, emoji, note, ex] = l.split('|');
  return { id: +id, w, pos, g, fr, ru, uk, theme, emoji, note, ex };
});
const BY_ID = new Map(WORDS.map(w => [w.id, w]));
const band = w => D.bands.findIndex(b => w.id <= b) + 1 || D.bands.length + 1;

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const today = () => new Date().toLocaleDateString('sv'); // local YYYY-MM-DD
const addDays = (d, n) => { const x = new Date(d + 'T12:00'); x.setDate(x.getDate() + n); return x.toLocaleDateString('sv'); };
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.random() * a.length | 0];
// typed answers: `strict` keeps accents (á, ñ), `plain` drops them — a missing accent is accepted with a warning
const strict = s => String(s ?? '').toLowerCase().replace(/[’`]/g, "'").replace(/[^\p{L}\p{N}' -]/gu, ' ').replace(/\s+/g, ' ').trim();
const plain = s => strict(String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC'));
const LANGS = { fr: '🇫🇷', ru: '🇷🇺', uk: '🇺🇦' };
const meaning = x => S.help.map(k => x[k]).filter(Boolean).join(' · ');
const shown = w => ES && w.pos === 'n' && ART[w.g] && !w.w.includes(',') ? `${ART[w.g]} ${w.w}` : w.w; // el libro, la casa

// ---------- state (one per course) ----------
const KEY = 'esen-' + COURSE;
const fresh = () => ({ quota: 30, theme: '', rate: 0.9, help: ['fr', 'ru', 'uk'], words: {}, day: null, lessons: {}, texts: {}, reads: {},
  tenses: ['pres'], active: [], created: today(), lastExport: null });
let S = load();
function load() { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(KEY)) }; } catch { return fresh(); } }
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { alert('Sauvegarde impossible : ' + e.message + '\nExporte une sauvegarde maintenant (Réglages).'); }
}
navigator.storage?.persist?.(); // ask Chrome not to evict our data
function switchCourse() { localStorage.setItem('esen-course', ES ? 'en' : 'es'); location.hash = '#today'; location.reload(); }

// spaced repetition: box 0 = new/failed, box k → next review after STEPS[k-1] days
const STEPS = [1, 2, 4, 7, 15, 30, 60];
function grade(id, ok) {
  const p = S.words[id] ||= { box: 0, ok: 0, ko: 0 };
  if (ok) { p.ok++; p.box = Math.min(p.box + 1, STEPS.length); } else { p.ko++; p.box = 0; }
  p.due = addDays(today(), ok ? STEPS[p.box - 1] : 1);
  markActive();
}
const markActive = () => { if (!S.active.includes(today())) S.active = [...S.active.slice(-400), today()]; };
const status = id => { const p = S.words[id]; return !p ? 'new' : p.box >= 4 ? 'mastered' : 'learning'; };
const known = () => Object.keys(S.words).map(Number).filter(id => BY_ID.has(id));
const score = p => p.ko - p.ok;
const dueIds = () => known().filter(id => S.words[id].due <= today()).sort((a, b) => score(S.words[b]) - score(S.words[a]));
const hardIds = () => known().filter(id => S.words[id].ko > 0).sort((a, b) => score(S.words[b]) - score(S.words[a])).slice(0, 20);
function streak() {
  let d = S.active.includes(today()) ? today() : addDays(today(), -1), n = 0;
  while (S.active.includes(d)) { n++; d = addDays(d, -1); }
  return n;
}

// random inside frequency/level bands, easiest band first
function pickNew(n, theme) {
  const pool = WORDS.filter(w => !S.words[w.id] && (!theme || w.theme === theme));
  const out = [];
  for (let b = 1; b <= D.bands.length + 1; b++) out.push(...shuffle(pool.filter(w => band(w) === b)).slice(0, n - out.length));
  return out.map(w => w.id);
}
function todaySet() {
  if (S.day?.date !== today()) { S.day = { date: today(), ids: pickNew(S.quota, S.theme), learned: 0, score: null }; save(); }
  return S.day;
}

// ---------- speech (Android built-in TTS) ----------
let voice = null;
const hasTTS = 'speechSynthesis' in window;
function pickVoice() {
  const vs = speechSynthesis.getVoices(), norm = v => v.lang.replace('_', '-').toLowerCase();
  voice = vs.find(v => norm(v) === D.lang.toLowerCase()) || vs.find(v => norm(v).startsWith(COURSE)) || null;
}
if (hasTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, slow) {
  if (!hasTTS || !text) return;
  speechSynthesis.cancel();
  // long texts are queued sentence by sentence: Chrome may cut off one very long utterance
  for (const part of String(text).split(/(?<=[.!?…])\s+/)) {
    const u = new SpeechSynthesisUtterance(part);
    u.lang = D.lang; if (voice) u.voice = voice; u.rate = slow ? 0.55 : S.rate;
    speechSynthesis.speak(u);
  }
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) return say(b.dataset.say, b.dataset.slow === '1');
  const s = e.target.closest('.s');
  if (s) say(s.dataset.t || s.textContent);
});
const sayBtn = (text, label = '🔊') => `<button class="say" data-say="${esc(text)}">${label}</button>`;
const slowBtn = text => `<button class="say" data-say="${esc(text)}" data-slow="1">🐢</button>`;
const bigEar = text => `<button class="say" style="font-size:2.5rem;padding:16px 28px" data-say="${esc(text)}">🔊</button> ${slowBtn(text)}`;

// ---------- word card ----------
const exParts = w => (w.ex || '').split(' = ');
const tri = x => `<div class="meaning">${Object.entries(LANGS).map(([k, f]) => x[k] ? `${f} ${esc(x[k])}` : '').filter(Boolean).join('<br>')}</div>`;
function card(w) {
  const [exT, exFr] = exParts(w);
  return `<div class="row"><div class="grow"><div class="w">${esc(shown(w))}</div>
      <span class="tag">${POS[w.pos] || w.pos}${GENDER[w.g] ? ' · ' + GENDER[w.g] : ''}</span> <span class="tag">${esc(THEMES[w.theme] || '')}</span> <span class="tag">n° ${w.id}</span></div>
      ${w.emoji ? `<div class="emoji">${w.emoji}</div>` : ''}</div>
    <div class="row" style="margin-top:8px">${sayBtn(shown(w))} ${slowBtn(shown(w))}</div>
    ${tri(w)}
    ${w.note ? `<div class="note">💡 ${esc(w.note)}</div>` : ''}
    ${exT ? `<div class="ex">${sayBtn(exT)} <b>${esc(exT)}</b><br><span class="muted">🇫🇷 ${esc(exFr || '')}</span></div>` : ''}`;
}

// ---------- quiz engine ----------
function options(w, label) {
  const others = shuffle(WORDS.filter(x => x.id !== w.id && plain(x.w) !== plain(w.w) && x.fr !== w.fr));
  const picks = [...new Set([...others.filter(x => x.pos === w.pos), ...others])].slice(0, 3);
  const opts = shuffle([w, ...picks]);
  return { opts: opts.map(label).map(esc), a: opts.indexOf(w) };
}
const WORD_TYPES = ['read', 'pick', 'type', 'type', 'ear', 'dict'];
const IN = ES ? 'en espagnol' : 'en anglais';
function wordQ(w, only) {
  const types = (only ? [only] : [...WORD_TYPES, ...(w.emoji ? ['pic'] : [])]).filter(t => hasTTS || (t !== 'ear' && t !== 'dict'));
  const t = pick(types.length ? types : ['read']);
  const emo = w.emoji && t !== 'pic' ? `<div class="emoji">${w.emoji}</div>` : '';
  // any variant of "hijo, hija" / "este, esta, esto" is accepted, with or without article
  const sw = shown(w), alt = [w.w, ...w.w.split(', '), ...(!ES && w.pos === 'v' ? ['to ' + w.w] : [])];
  const base = { key: w.id, after: sw, why: `<b>${esc(sw)}</b> = ${esc(meaning(w))}` };
  if (t === 'read') return { ...base, ...options(w, meaning), speak: sw,
    html: `<div class="w">${esc(sw)}</div>${sayBtn(sw)}<p class="muted">Que veut dire… ?</p>` };
  if (t === 'ear') return { ...base, ...options(w, meaning), speak: sw, html: `${bigEar(sw)}<p class="muted">Écoute — que veut dire… ?</p>` };
  if (t === 'pic') return { ...base, ...options(w, shown), html: `<div class="emoji">${w.emoji || '❔'}</div><p class="muted">Quel mot ?</p>` };
  if (t === 'pick') return { ...base, ...options(w, shown), html: `${emo}<h2>${esc(meaning(w))}</h2><p class="muted">Quel mot ${IN} ?</p>` };
  if (t === 'dict') return { ...base, a: sw, alt, speak: sw, html: `${bigEar(sw)}<p class="muted">Dictée — écris ce que tu entends</p>` };
  return { ...base, a: sw, alt, html: `${emo}<h2>${esc(meaning(w))}</h2><p class="muted">Écris-le ${IN}${ES && w.pos === 'n' ? ' (l’article est facultatif)' : ''}</p>` };
}
// word-order question from a target-language sentence
function orderQ(key, s, prompt) {
  const tokens = s.split(' ');
  if (tokens.length < 3 || tokens.length > 12) return null;
  return { key, tokens: shuffle(tokens.slice()), a: s, after: s, html: `<h2>${esc(prompt)}</h2><p class="muted">Remets les mots dans l’ordre</p>` };
}
// Spanish written accent: where does the tilde go? (the Spanish twin of the Russian stress quiz)
const VOWEL = /[aeiouáéíóú]/i, ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
function accentQ(w) {
  const bare = plain(w.w), right = [...w.w].findIndex(c => /[áéíóú]/.test(c));
  if (right < 0 || bare.length !== w.w.length || /\s/.test(bare)) return null;
  const pos = [...bare].map((c, i) => VOWEL.test(c) ? i : -1).filter(i => i >= 0);
  if (pos.length < 2) return null;
  const opts = shuffle([right, ...shuffle(pos.filter(i => i !== right)).slice(0, 3)]);
  const mark = i => esc(bare.slice(0, i)) + `<b class="st">${ACC[bare[i]]}</b>` + esc(bare.slice(i + 1));
  return { key: w.id, opts: opts.map(mark), a: opts.indexOf(right), after: w.w, why: `<b>${esc(w.w)}</b> = ${esc(meaning(w))}`,
    html: `<div class="w">${esc(bare)}</div><p class="muted">${esc(meaning(w))}</p><p class="muted">Où va l’accent écrit ?</p>` };
}
// Spanish gender: el or la?
function genderQ(w) {
  const opts = ['masculin · <b>el</b>', 'féminin · <b>la</b>'];
  return { key: w.id, opts, a: w.g === 'm' ? 0 : 1, after: shown(w), why: `<b>${esc(shown(w))}</b> = ${esc(meaning(w))}${w.note ? '<br>💡 ' + esc(w.note) : ''}`,
    html: `${w.emoji ? `<div class="emoji">${w.emoji}</div>` : ''}<div class="w">${esc(w.w)}</div><p class="muted">${esc(meaning(w))}</p><p class="muted">Masculin ou féminin ?</p>` };
}

// qs: [{key, html, opts?, a (index | answer text), alt?, tokens?, why?, speak?, after?}] → onDone(results Map key→firstTryOk)
function runQuiz(qs, title, onDone) {
  const queue = qs.slice(), results = new Map();
  let i = 0;
  step();
  function step() {
    const q = queue[i];
    if (!q) return onDone(results);
    const mc = typeof q.a === 'number';
    let body;
    if (mc) body = `<div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div>`;
    else if (q.tokens) body = `<div class="chips ans" id="built"></div><div class="chips" id="pool">${q.tokens.map((t, k) =>
      `<button class="chip" data-k="${k}">${esc(t)}</button>`).join('')}</div><button class="wide" id="ok">Valider</button>`;
    else body = `<form class="typing"><input id="ans" lang="${COURSE}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
      placeholder="${IN}…"><button>OK</button></form>`;
    app.innerHTML = `<h1>${esc(title)}</h1><div class="muted">${Math.min(i + 1, qs.length)} / ${qs.length}${i >= qs.length ? ' · rattrapage' : ''}</div>
      <div class="bar"><span style="width:${100 * results.size / qs.length}%"></span></div>
      <div class="card"><div class="q">${q.html}</div>${body}<div id="fb"></div></div>`;
    if (q.speak) say(q.speak);
    if (mc) app.querySelectorAll('.opt').forEach(b => b.onclick = () => check(+b.dataset.k === q.a, b));
    else if (q.tokens) {
      const built = [];
      const draw = () => { $('#built').innerHTML = built.map((k, j) => `<button class="chip" data-j="${j}">${esc(q.tokens[k])}</button>`).join('');
        app.querySelectorAll('#pool .chip').forEach(b => b.disabled = built.includes(+b.dataset.k)); };
      $('#pool').onclick = e => { const b = e.target.closest('.chip'); if (b && !b.disabled) { built.push(+b.dataset.k); draw(); } };
      $('#built').onclick = e => { const b = e.target.closest('.chip'); if (b) { built.splice(+b.dataset.j, 1); draw(); } };
      $('#ok').onclick = () => { if (built.length) { $('#ok').disabled = true; check(plain(built.map(k => q.tokens[k]).join(' ')) === plain(q.a)); } };
    } else {
      const inp = $('#ans'); inp.focus();
      $('.typing').onsubmit = e => {
        e.preventDefault();
        if (!inp.value.trim()) return;
        const all = [q.a, ...(q.alt || [])];
        const exact = all.some(x => strict(x) === strict(inp.value)), loose = all.some(x => plain(x) === plain(inp.value));
        check(loose, null, loose && !exact);
      };
    }
    function check(ok, btn, accentSlip) {
      if (!results.has(q.key)) { results.set(q.key, ok); if (!ok) queue.push(q); } // retry missed ones at the end
      if (mc) { app.querySelectorAll('.opt').forEach((b, k) => { b.disabled = true; if (k === q.a) b.classList.add('right'); }); if (!ok) btn.classList.add('wrong'); }
      else if (!q.tokens) $('#ans').disabled = true;
      if (q.after) say(q.after);
      $('#fb').innerHTML = `<div class="fb ${accentSlip ? 'acc' : ok ? 'ok' : 'ko'}"><b>${accentSlip ? '✓ Presque — attention aux accents' : ok ? '✓ Correct' : '✗ Pas tout à fait'}</b>
        ${!mc && (!ok || accentSlip) ? `<p>Réponse : <b>${esc(q.a)}</b></p>` : ''}${q.why ? `<p>${q.why}</p>` : ''}</div>
        <button class="wide" id="next" style="margin-top:10px">Continuer →</button>`;
      $('#next').onclick = () => { i++; step(); };
      $('#next').focus();
    }
  }
}
const resultHtml = (res, missedHtml, backHref, backLabel) => {
  const right = [...res.values()].filter(Boolean).length;
  return `<h1>${right} / ${res.size} ✓</h1>
    ${missedHtml ? `<div class="card"><h2>À revoir</h2><ul class="list">${missedHtml}</ul></div>` : right === res.size ? '<div class="card">Parfait ! 🎉</div>' : ''}
    <div class="row"><a class="btn ghost grow" href="#tests">Tests</a><a class="btn grow" href="${backHref}">${backLabel}</a></div>`;
};
const noWords = title => `<h1>${esc(title)}</h1><div class="card">Apprends d’abord quelques mots (Aujourd’hui → Commencer).</div>`;
// mode 'srs' grades every answer; 'drill' only records misses so free practice never pushes reviews further away
function wordQuiz(ids, title, { only, mode = 'srs' } = {}) {
  if (!ids.length) { app.innerHTML = noWords(title); return; }
  runQuiz(shuffle(ids.slice()).map(id => wordQ(BY_ID.get(id), only)), title, res => {
    res.forEach((ok, id) => { if (mode !== 'drill' || !ok) grade(id, ok); });
    markActive();
    if (mode === 'today' && S.day) S.day.score = `${[...res.values()].filter(Boolean).length}/${res.size}`;
    save();
    const missed = [...res].filter(([, ok]) => !ok).map(([id]) => BY_ID.get(id));
    app.innerHTML = resultHtml(res, missed.map(w => `<li>${sayBtn(shown(w))} <b>${esc(shown(w))}</b> — ${esc(meaning(w))}</li>`).join(''), location.hash, 'Encore');
  });
}
// generic multiple-choice / typed drill: qs already built
function drill(qs, title, again = location.hash) {
  qs = qs.filter(Boolean);
  if (!qs.length) { app.innerHTML = noWords(title); return; }
  runQuiz(qs, title, res => { markActive(); save(); app.innerHTML = resultHtml(res, '', again, 'Encore'); });
}
// pick 3 distractor labels different from the answer
function mcq(right, pool) {
  const wrong = shuffle([...new Set(pool.filter(x => plain(x) !== plain(right)))]).slice(0, 3);
  const opts = shuffle([right, ...wrong]);
  return { opts: opts.map(esc), a: opts.indexOf(right) };
}

// ---------- Spanish conjugation ----------
// verbs.js line: inf|fr|ru|uk|flags|overrides|note
// flags (space separated): ie, ue, i (stem change), u (jugar: u→ue), zc (conozco), y (construyo), acc (envío, continúo)
// overrides (key=v1,v2…; separated by ";"): yo = present yo form, P/R/I/S = full present/preterite/imperfect/subjunctive (6),
//   pret = strong preterite stem (tuv → tuve, tuvo), fut = future stem (tendr), s = subjunctive stem (sep), imp = tú imperative,
//   vos = vosotros imperative, pp = past participle, ger = gerund
const PERS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'];
const IMP_P = ['tú', 'usted', 'vosotros', 'ustedes'];
const TENSES = ES ? { pres: 'Présent · Presente', pret: 'Passé simple · Pretérito indefinido', impf: 'Imparfait · Pretérito imperfecto',
  fut: 'Futur · Futuro', cond: 'Conditionnel · Condicional', perf: 'Passé composé · Pretérito perfecto', subj: 'Subjonctif présent · Presente de subjuntivo',
  imp: 'Impératif · Imperativo' } : {};
const END = {
  ar: { pres: ['o', 'as', 'a', 'amos', 'áis', 'an'], pret: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], impf: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], subj: ['e', 'es', 'e', 'emos', 'éis', 'en'] },
  er: { pres: ['o', 'es', 'e', 'emos', 'éis', 'en'], pret: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], impf: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], subj: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
};
END.ir = { ...END.er, pres: ['o', 'es', 'e', 'imos', 'ís', 'en'] };
const FUT = ['é', 'ás', 'á', 'emos', 'éis', 'án'], COND = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'];
const HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'], STRONG = ['e', 'iste', 'o', 'imos', 'isteis', 'ieron'];
const VERBS = !ES ? [] : D.verbs.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => {
  const [inf, fr, ru, uk, flags = '', ov = '', note = ''] = l.split('|'), o = {};
  for (const kv of ov.split(';').filter(Boolean)) { const [k, v] = kv.split('='); o[k] = v.split(','); }
  return { inf, fr, ru, uk, f: flags.split(' ').filter(Boolean), o, note };
});
// keep the sound of the stem's last consonant before the new ending (busc-é → busqué, cog-o → cojo, venc-o → venzo)
function join(stem, end, cl) {
  const fix = (re, map) => stem.replace(re, m => map[m] ?? m[0] + map[m.slice(1)]);
  if (cl === 'ar' && /^[eé]/.test(end)) stem = fix(/(gu|c|g|z)$/, { gu: 'gü', c: 'qu', g: 'gu', z: 'c' });
  if (cl !== 'ar' && /^[aoáó]/.test(end)) stem = fix(/(gu|g|[^aeiouz]c)$/, { gu: 'g', g: 'j', c: 'z' });
  if (cl !== 'ar' && /[aeiou]$/.test(stem) && !/[gq]u$/.test(stem)) { // vowel stems: le-ió → leyó, le-iste → leíste
    if (/^i[aeoó]/.test(end)) end = 'y' + end.slice(1);
    else if (/[aeo]$/.test(stem) && /^i/.test(end)) end = 'í' + end.slice(1);
  }
  return stem + end;
}
const lastV = (s, re, to) => { const m = [...s.matchAll(re)].pop(); return m ? s.slice(0, m.index) + to(m[0]) + s.slice(m.index + m[0].length) : s; };
// strong stem change (pienso, vuelvo, pido) and weak one for -ir verbs (sintió, durmamos)
const strongStem = (st, f) => f.includes('ie') ? lastV(st, /e/g, () => 'ie') : f.includes('ue') ? lastV(st, /o/g, () => 'ue') : f.includes('u') ? lastV(st, /u/g, () => 'ue')
  : f.includes('i') ? lastV(st, /e/g, () => 'i') : f.includes('acc') ? lastV(st, /[iu]/g, c => c === 'i' ? 'í' : 'ú') : st;
const weakStem = (st, f) => f.includes('ie') || f.includes('i') ? lastV(st, /e/g, () => 'i') : f.includes('ue') ? lastV(st, /o/g, () => 'u') : st;
const BOOT = [0, 1, 2, 5]; // persons that take the stem change
function conj(v, t) {
  const o = v.o, f = v.f, cl = v.inf.slice(-2).replace('ír', 'ir'), st = v.inf.slice(0, -2), E = END[cl], ir = cl === 'ir';
  const changes = ['ie', 'ue', 'i'].some(x => f.includes(x)), boot = f.includes('y') ? st + 'y' : strongStem(st, f);
  const pp = () => o.pp?.[0] || join(st, cl === 'ar' ? 'ado' : 'ido', cl);
  switch (t) {
    case 'pres': return o.P || E.pres.map((e, p) => p === 0 && o.yo ? o.yo[0] : p === 0 && f.includes('zc') ? st.slice(0, -1) + 'zco'
      : join(BOOT.includes(p) ? boot : st, e, cl));
    case 'pret': {
      if (o.R) return o.R;
      const s = o.pret?.[0]; // strong preterite: tuve, tuvo · dijeron · hizo
      if (s) return STRONG.map((e, p) => p === 5 && s.endsWith('j') ? s + 'eron' : p === 2 && s.endsWith('c') ? s.slice(0, -1) + 'zo' : s + e);
      return E.pret.map((e, p) => join(ir && changes && (p === 2 || p === 5) ? weakStem(st, f) : st, e, cl));
    }
    case 'impf': return o.I || E.impf.map(e => st + e);
    case 'fut': return FUT.map(e => (o.fut?.[0] || v.inf.replace('í', 'i')) + e);
    case 'cond': return COND.map(e => (o.fut?.[0] || v.inf.replace('í', 'i')) + e);
    case 'perf': return HABER.map(h => h + ' ' + pp());
    case 'subj': {
      if (o.S) return o.S;
      // an irregular yo form gives the stem of every person (tengo → tenga, tengamos); no spelling fix-ups on it
      const se = E.subj;
      const irr = o.s?.[0] || (o.yo || o.P)?.[0].slice(0, -1) || (f.includes('zc') ? st.slice(0, -1) + 'zc' : f.includes('y') ? st + 'y' : null);
      if (irr) return se.map(e => irr + e);
      return se.map((e, p) => join(BOOT.includes(p) ? boot : ir && changes ? weakStem(st, f) : st, e, cl));
    }
    case 'imp': {
      const s = conj(v, 'subj');
      return [o.imp?.[0] || conj(v, 'pres')[2], s[2], o.vos?.[0] || v.inf.replace(/r$/, 'd'), s[5]];
    }
  }
}
function gerund(v) {
  if (v.o.ger) return v.o.ger[0];
  const st = v.inf.slice(0, -2);
  if (v.inf.endsWith('ar')) return st + 'ando';
  const ir = /[ií]r$/.test(v.inf) && ['ie', 'ue', 'i'].some(x => v.f.includes(x)); // sintiendo, durmiendo, pidiendo
  return join(ir ? weakStem(st, v.f) : st, 'iendo', 'er');
}
const whoList = t => t === 'imp' ? IMP_P : PERS;
const vmeaning = v => meaning(v);
function conjQ(k, ts) {
  const v = pick(VERBS), t = pick(ts), f = conj(v, t), p = Math.random() * f.length | 0, who = whoList(t);
  return { key: k, a: f[p], after: t === 'imp' ? f[p] : `${who[p].split(' ')[0]} ${f[p]}`,
    html: `<div class="w">${esc(v.inf)}</div><p class="muted">${esc(vmeaning(v))}</p><h2>${esc(TENSES[t])}</h2><h2>👤 ${esc(who[p])}</h2>`,
    why: f.map((x, j) => `${esc(who[j])} <b>${esc(x)}</b>`).join(', ') };
}
function conjQuiz() {
  const ts = S.tenses.filter(t => TENSES[t]);
  drill(Array.from({ length: 15 }, (_, k) => conjQ(k, ts.length ? ts : ['pres'])), 'Conjugaison · Conjugación', '#conj');
}

// ---------- Spanish numbers ----------
const UNITS = 'cero uno dos tres cuatro cinco seis siete ocho nueve diez once doce trece catorce quince dieciséis diecisiete dieciocho diecinueve veinte veintiuno veintidós veintitrés veinticuatro veinticinco veintiséis veintisiete veintiocho veintinueve'.split(' ');
const TENS = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const HUND = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
function numEs(n) {
  if (n < 30) return UNITS[n];
  if (n < 100) return TENS[n / 10 | 0] + (n % 10 ? ' y ' + UNITS[n % 10] : '');
  if (n < 1000) return n === 100 ? 'cien' : HUND[n / 100 | 0] + (n % 100 ? ' ' + numEs(n % 100) : '');
  const k = n / 1000 | 0, r = n % 1000;
  return (k === 1 ? 'mil' : numEs(k).replace(/uno$/, 'ún') + ' mil') + (r ? ' ' + numEs(r) : '');
}
const randNum = () => pick([() => Math.random() * 31 | 0, () => 30 + Math.random() * 70 | 0, () => 100 + Math.random() * 900 | 0,
  () => 1950 + Math.random() * 80 | 0, () => 1000 + Math.random() * 99000 | 0])();
function numberQ(k) {
  const n = randNum(), words = numEs(n), why = `<b>${n}</b> = ${esc(words)}`;
  if (hasTTS && Math.random() < .5) return { key: k, a: String(n), speak: words, after: words, why, html: `${bigEar(words)}<p class="muted">Écris le nombre en chiffres</p>` };
  return { key: k, a: words, after: words, why, html: `<div class="w">${n}</div><p class="muted">Écris-le en lettres, en espagnol</p>` };
}
const numbersQuiz = () => drill(Array.from({ length: 15 }, (_, k) => numberQ(k)), 'Nombres · Números', '#numbers');

// ---------- English irregular verbs ----------
// en/verbs.js line: base|past|participle|fr|ru|uk|note — "a/b" = both accepted (learned/learnt)
const IRREG = ES ? [] : D.verbs.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => {
  const [base, past, pp, fr, ru, uk, note = ''] = l.split('|');
  return { base, past, pp, fr, ru, uk, note };
});
function irregQ(k) {
  const v = pick(IRREG), part = pick(['past', 'pp', 'both']), all = `${v.base} – ${v.past} – ${v.pp}`;
  const why = `<b>${esc(all)}</b>${v.note ? '<br>💡 ' + esc(v.note) : ''}`;
  const html = `<div class="w">${esc(v.base)}</div><p class="muted">${esc(meaning(v))}</p>`;
  if (part === 'both') { // distractors = the classic mistakes: regularised -ed, swapped or doubled forms
    const reg = v.base.replace(/e?$/, 'ed'), [pa, pp] = [v.past.split('/')[0], v.pp.split('/')[0]];
    return { key: k, ...mcq(`${pa} – ${pp}`, [`${reg} – ${reg}`, `${pp} – ${pa}`, `${pa} – ${pa}`, `${pp} – ${pp}`, `${reg} – ${pp}`, `${pa} – ${reg}`]),
      html: html + '<h2>Prétérit – participe passé ?</h2>', why, after: all };
  }
  const forms = v[part].split('/');
  return { key: k, a: forms[0], alt: forms, after: all, why,
    html: html + `<h2>${part === 'past' ? 'Prétérit (past simple) ?' : 'Participe passé (past participle) ?'}</h2>` };
}

// ---------- texts & phrases ----------
const TEXTS = { oral: D.texts, read: D.reads };
const TEXT_KEY = { oral: 'texts', read: 'reads' };
const LESSONS = D.lessons;
// phrases.js line: theme|target|fr|ru|uk
const PHRASES = D.phrases.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#')).map((l, i) => {
  const [theme, w, fr, ru, uk] = l.split('|');
  return { i, theme, w, fr, ru, uk };
});
function phraseQ(p, kind) {
  const same = PHRASES.filter(x => x.theme === p.theme && x !== p), pool = [...shuffle(same), ...shuffle(PHRASES.slice(0, 60))];
  const why = `<b>${esc(p.w)}</b><br>${esc(meaning(p))}`;
  if (kind === 'order') return orderQ(p.i, p.w, meaning(p));
  if (kind === 'ear' && hasTTS) return { key: p.i, ...mcq(meaning(p), pool.map(meaning)), speak: p.w, after: p.w, why, html: `${bigEar(p.w)}<p class="muted">Qu’as-tu entendu ?</p>` };
  if (kind === 'trans') return { key: p.i, ...mcq(p.w, pool.map(x => x.w)), after: p.w, why, html: `<h2>${esc(meaning(p))}</h2><p class="muted">Comment le dire ${IN} ?</p>` };
  return { key: p.i, ...mcq(meaning(p), pool.map(meaning)), after: p.w, why, html: `<div class="big">${esc(p.w)}</div>${sayBtn(p.w)}<p class="muted">Que veut dire… ?</p>` };
}
// context drills (drills.js): { key: { title, sub, items: [{q (with ___), hint, opts, a, why}] } }
const ctxQ = (c, k) => ({ key: k, html: `<h2>${esc(c.q)}</h2>${c.hint ? `<p class="muted">${esc(c.hint)}</p>` : ''}`, opts: c.opts.map(esc), a: c.a, why: c.why,
  after: c.q.replace(/_{3}/, c.opts[c.a]) });

// ---------- views ----------
const item = (href, title, sub, tag = '') => `<li><a class="item" href="${href}"><b>${title}</b> ${tag}<br><span class="muted">${sub}</span></a></li>`;
const best = (n, of) => n != null ? `<span class="tag">✓ ${n}/${of}</span>` : '';
const other = ES ? '🇺🇸 English' : '🇪🇸 Español';
const views = {
  today() {
    const d = todaySet(), seen = known().length, mastered = known().filter(id => status(id) === 'mastered').length;
    const due = dueIds().length, hard = hardIds().length;
    const since = S.lastExport ? daysBetween(S.lastExport, today()) : daysBetween(S.created, today());
    const remind = seen > 0 && since >= 7;
    return `<div class="row"><h1 class="grow">${D.flag} ${esc(D.hello)}</h1><button class="ghost" onclick="switchCourse()">⇄ ${other}</button></div>
      ${remind ? `<div class="banner">💾 ${S.lastExport ? `Dernière sauvegarde il y a ${since} jours.` : 'Pas encore de sauvegarde.'} Sauvegarde ta progression chaque semaine.
        <button class="wide" style="margin-top:8px" onclick="exportData()">Exporter maintenant</button></div>` : ''}
      <div class="card stats"><div><b>${seen}</b><span class="muted">vus / ${WORDS.length}</span></div>
        <div><b>${mastered}</b><span class="muted">maîtrisés</span></div><div><b>🔥 ${streak()}</b><span class="muted">jours de suite</span></div></div>
      <div class="card"><h2>Mots du jour</h2>
        ${d.ids.length ? `<p class="muted">${d.ids.length} mots${S.theme ? ' · ' + esc(THEMES[S.theme]) : ''}</p>
        <div class="bar"><span style="width:${100 * d.learned / d.ids.length}%"></span></div>
        <div class="row"><a class="btn grow" href="#learn">${d.learned ? d.learned >= d.ids.length ? 'Revoir' : 'Continuer' : 'Commencer'}</a>
        <a class="btn grow ${d.learned ? '' : 'ghost'}" href="#test">${d.score ? `Refaire le test (${d.score})` : 'Test du soir'}</a></div>`
        : `<p>Plus de nouveaux mots${S.theme ? ' dans ce thème — choisis-en un autre dans Réglages' : ' — tu les as tous vus ! 🎓'}.</p>`}</div>
      <div class="card"><h2>Révision</h2><p class="muted">${due} à réviser aujourd’hui${hard ? ` · ${hard} mots difficiles` : ''}</p>
        <div class="row"><a class="btn grow ${due ? '' : 'ghost'}" href="#review">Réviser</a><a class="btn ghost grow" href="#tests">Tous les tests</a></div></div>`;
  },
  learn() {
    const d = todaySet();
    if (!d.ids.length) return views.today();
    let i = d.learned >= d.ids.length ? 0 : Math.min(d.learned, d.ids.length - 1);
    const show = () => {
      const id = d.ids[i], w = BY_ID.get(id);
      if (!S.words[id]) S.words[id] = { box: 0, ok: 0, ko: 0, due: addDays(today(), 1) };
      d.learned = Math.max(d.learned, i + 1); markActive(); save();
      app.innerHTML = `<h1>Apprendre</h1><div class="muted">${i + 1} / ${d.ids.length}</div>
        <div class="bar"><span style="width:${100 * (i + 1) / d.ids.length}%"></span></div>
        <div class="card">${card(w)}</div>
        <div class="row"><button class="ghost" id="prev" ${i ? '' : 'disabled'}>←</button>
        ${i + 1 < d.ids.length ? '<button class="grow" id="nx">Suivant →</button>' : '<a class="btn grow" href="#test">Fini — passe le test</a>'}</div>`;
      say(shown(w));
      $('#prev').onclick = () => { i--; show(); };
      $('#nx') && ($('#nx').onclick = () => { i++; show(); });
    };
    setTimeout(show);
    return '';
  },
  test() { const d = todaySet(); setTimeout(() => wordQuiz(d.ids.slice(0, d.learned), 'Test du jour', { mode: 'today' })); return ''; },
  review() {
    const ids = dueIds().slice(0, 40); // 40 per session keeps sessions short; the rest stay due
    if (!ids.length) return `<h1>Révision</h1><div class="card">Rien à réviser aujourd’hui ✓</div>
      ${hardIds().length ? '<a class="btn wide" href="#hard">Travailler les mots difficiles</a>' : ''}<a class="btn ghost wide" style="margin-top:10px" href="#tests">Tests</a>`;
    setTimeout(() => wordQuiz(ids, 'Révision'));
    return '';
  },
  hard() { setTimeout(() => wordQuiz(hardIds(), 'Mots difficiles')); return ''; },
  drill(kind) {
    const titles = { ear: 'Écoute', read: 'Lecture', type: 'Écriture', dict: 'Dictée', pic: 'Images' };
    if (!titles[kind]) return views.tests();
    const pool = kind === 'pic' ? known().filter(id => BY_ID.get(id).emoji) : known();
    setTimeout(() => wordQuiz(shuffle(pool).slice(0, 20), titles[kind], { only: kind, mode: 'drill' }));
    return '';
  },
  accent() { setTimeout(() => drill(shuffle(known().map(id => BY_ID.get(id))).map(accentQ).filter(Boolean).slice(0, 15), 'Accents écrits · Tildes')); return ''; },
  gender() {
    const nouns = w => w.pos === 'n' && (w.g === 'm' || w.g === 'f') && !w.w.includes(',');
    const mine = known().map(id => BY_ID.get(id)).filter(nouns), pool = mine.length >= 10 ? mine : WORDS.filter(nouns);
    setTimeout(() => drill(shuffle(pool.slice()).slice(0, 15).map(genderQ), 'Genre · ¿el o la?'));
    return '';
  },
  order() {
    setTimeout(() => drill(shuffle(known().map(id => BY_ID.get(id))).map(w => { const [s, fr] = exParts(w); return s && orderQ(w.id, s, fr); }).filter(Boolean).slice(0, 12),
      'Phrases de tes mots'));
    return '';
  },
  phrasetest(kind) {
    const titles = { order: 'Phrases dans l’ordre', ear: 'Écoute de phrases', read: 'Sens des phrases', trans: `Dis-le ${IN}` };
    if (!titles[kind]) return views.tests();
    setTimeout(() => drill(shuffle(PHRASES.slice()).map(p => phraseQ(p, kind)).filter(Boolean).slice(0, 12), titles[kind]));
    return '';
  },
  tests() {
    const n = known().length, due = dueIds().length;
    return `<h1>Tests</h1>
      <div class="card"><h2>📚 Vocabulaire</h2><ul class="list">
        ${item('#test', '📅 Test du jour', 'Les mots appris aujourd’hui')}
        ${item('#review', '🔁 Révision', `${due} à réviser (répétition espacée)`)}
        ${item('#hard', '💪 Mots difficiles', `${hardIds().length} mots que tu rates souvent`)}
        ${item('#drill/ear', '🎧 Écoute', 'Entends le mot, choisis le sens')}
        ${item('#drill/read', '👀 Lecture', 'Lis le mot, choisis le sens')}
        ${item('#drill/type', '⌨️ Écriture', `Traduis et écris ${IN}`)}
        ${item('#drill/dict', '✏️ Dictée', 'Écris le mot que tu entends')}
        ${item('#drill/pic', '🖼️ Images', 'Associe l’image au mot')}
        ${ES ? item('#accent', '🎯 Accents écrits', 'Où va la tilde ? (á, é, í, ó, ú)') + item('#gender', '⚥ Genre', '¿el o la? Masculin ou féminin') : ''}
      </ul><p class="muted">Basé sur tes ${n} mots vus.</p></div>
      <div class="card"><h2>🔤 Grammaire</h2><ul class="list">
        ${ES ? item('#conj', '📝 Conjugaison', `${VERBS.length} verbes — choisis tes temps`) + item('#numbers', '🔢 Nombres', 'Chiffres ⇄ lettres, à l’écrit et à l’oral')
          : item('#irreg', '📝 Verbes irréguliers', `${IRREG.length} verbes : prétérit et participe passé`)}
        ${Object.entries(D.drills).map(([k, x]) => item(`#ctx/${k}`, esc(x.title), esc(x.sub || ''))).join('')}
      </ul></div>
      <div class="card"><h2>🗣️ Compréhension</h2><ul class="list">
        ${item('#texts/oral', '🎙️ Compréhension orale', `${TEXTS.oral.length} textes à écouter, avec questions`)}
        ${item('#texts/read', '📰 Compréhension écrite', `${TEXTS.read.length} textes à lire, avec questions`)}
        ${item('#phrasetest/ear', '👂 Écoute de phrases', 'Entends une phrase courante, choisis son sens')}
        ${item('#phrasetest/read', '📖 Sens des phrases', 'Lis une phrase, choisis son sens')}
        ${item('#phrasetest/trans', `💬 Dis-le ${IN}`, 'Choisis la bonne phrase')}
        ${item('#phrasetest/order', '🧱 Phrases dans l’ordre', 'Reconstruis des phrases courantes')}
        ${item('#order', '🔀 Phrases de tes mots', 'Reconstruis les exemples des mots que tu connais')}
      </ul></div>
      <div class="card"><h2>🎓 Tests des leçons</h2><ul class="list">${LESSONS.map((x, k) =>
        `<li><a class="item" href="#lquiz/${k}"><b>${k + 1}. ${esc(x.title)}</b> ${best(S.lessons[k], x.quiz.length)}</a></li>`).join('')}</ul></div>`;
  },
  lessons() {
    return `<h1>Leçons</h1>
      <div class="row" style="margin-bottom:14px">${ES ? '<a class="btn ghost grow" href="#verbs">📋 Verbes</a><a class="btn ghost grow" href="#numbers">🔢 Nombres</a>'
        : '<a class="btn ghost grow" href="#verbs">📋 Verbes irréguliers</a>'}<a class="btn ghost grow" href="#phrases">💬 Phrases</a></div>
      <ul class="list card">${LESSONS.map((l, k) =>
      `<li><a class="item" href="#lesson/${k}"><b>${k + 1}. ${esc(l.title)}</b> ${best(S.lessons[k], l.quiz.length)}<br><span class="muted">${esc(l.sub)}</span></a></li>`).join('')}</ul>`;
  },
  lesson(k) {
    const l = LESSONS[k];
    if (!l) return views.lessons();
    return `<a href="#lessons">← Leçons</a><h1>${esc(l.title)}</h1><div class="card lesson-body">${l.body}</div>
      <a class="btn wide" href="#lquiz/${k}">Quiz (${l.quiz.length} questions)</a>
      ${LESSONS[+k + 1] ? `<p style="text-align:center"><a href="#lesson/${+k + 1}">Leçon suivante →</a></p>` : ''}`;
  },
  lquiz(k) {
    const l = LESSONS[k];
    if (!l) return views.tests();
    setTimeout(() => runQuiz(shuffle(l.quiz.map((q, j) => ({ key: j, html: `<h2>${q.q}</h2>`, opts: q.opts, a: q.a, why: q.why }))), l.title, res => {
      const right = [...res.values()].filter(Boolean).length;
      S.lessons[k] = Math.max(S.lessons[k] ?? 0, right); markActive(); save();
      app.innerHTML = `<h1>${right} / ${res.size} ✓</h1><div class="card">${esc(l.title)}</div>
        <div class="row"><a class="btn ghost grow" href="#lesson/${k}">Relire</a><a class="btn grow" href="#tests">Tests</a></div>`;
    }));
    return '';
  },
  conj() {
    if (!ES) return views.tests();
    setTimeout(() => app.querySelectorAll('[data-tense]').forEach(c => c.onchange = () => {
      S.tenses = [...app.querySelectorAll('[data-tense]:checked')].map(x => x.dataset.tense); save();
    }));
    return `<h1>Conjugaison · Conjugación</h1><div class="card"><h2>Temps à travailler</h2>
      ${Object.entries(TENSES).map(([k, v]) => `<label class="check"><input type="checkbox" data-tense="${k}" ${S.tenses.includes(k) ? 'checked' : ''}>${v}</label>`).join('')}
      <p class="muted">Écris la forme conjuguée. Un accent oublié est accepté mais signalé. Impératif : forme affirmative (tú, usted, vosotros, ustedes).</p>
      <button class="wide" onclick="conjQuiz()">15 questions</button></div><a class="btn ghost wide" href="#verbs">📋 Tableaux de conjugaison</a>`;
  },
  irreg() { setTimeout(() => drill(Array.from({ length: 15 }, (_, k) => irregQ(k)), 'Verbes irréguliers', '#irreg')); return ''; },
  verbs(inf) {
    const search = list => { setTimeout(() => { $('#vq').oninput = e => { const q = plain(e.target.value); app.querySelectorAll('[data-v]').forEach(li => li.hidden = q && !li.dataset.v.includes(q)); }; }); return list; };
    if (!ES) return search(`<a href="#lessons">← Leçons</a><h1>Verbes irréguliers</h1>
      <p class="muted">Base – prétérit – participe passé. Touche une forme pour l’entendre.</p><input id="vq" type="search" placeholder="Chercher…">
      <ul class="list card" style="margin-top:12px">${IRREG.map(v => `<li data-v="${esc(plain(`${v.base} ${v.past} ${v.pp} ${v.fr} ${v.ru} ${v.uk}`))}">
        <span class="s">${esc(v.base)}</span> – <span class="s">${esc(v.past)}</span> – <span class="s">${esc(v.pp)}</span><br>
        <span class="muted">${esc(meaning(v))}${v.note ? ' · 💡 ' + esc(v.note) : ''}</span></li>`).join('')}</ul>
      <a class="btn wide" href="#irreg">S’entraîner</a>`);
    const v = VERBS.find(x => x.inf === inf);
    if (!v) return search(`<a href="#lessons">← Leçons</a><h1>Verbes · Verbos</h1>
      <p class="muted">Touche un verbe pour voir tous ses temps.</p><input id="vq" type="search" placeholder="Chercher…">
      <ul class="list card" style="margin-top:12px">${VERBS.map(x => `<li data-v="${esc(plain(`${x.inf} ${x.fr} ${x.ru} ${x.uk}`))}"><a class="item" href="#verbs/${encodeURIComponent(x.inf)}">
        <b>${esc(x.inf)}</b> ${x.f.length || Object.keys(x.o).length ? '<span class="tag">irrégulier</span>' : ''}<br><span class="muted">${esc(meaning(x))}</span></a></li>`).join('')}</ul>`);
    const block = t => {
      const f = conj(v, t), who = whoList(t);
      return `<div class="card"><h2>${TENSES[t]}</h2><table class="conj">${f.map((x, p) =>
        `<tr><td class="muted">${esc(who[p])}</td><td><span class="s" data-t="${esc(t === 'imp' ? x : who[p].split(' ')[0] + ' ' + x)}">${esc(x)}</span></td></tr>`).join('')}</table></div>`;
    };
    return `<a href="#verbs">← Verbes</a><h1>${esc(v.inf)} ${sayBtn(v.inf)}</h1>${tri(v)}
      <p class="muted">Gérondif : <span class="s">${esc(gerund(v))}</span> · Participe : <span class="s">${esc(conj(v, 'perf')[0].split(' ')[1])}</span></p>
      ${v.note ? `<div class="note">💡 ${esc(v.note)}</div>` : ''}<div style="margin-top:12px">${Object.keys(TENSES).map(block).join('')}</div>`;
  },
  ctx(kind) {
    const d = D.drills[kind];
    if (!d) return views.tests();
    setTimeout(() => drill(shuffle(d.items.slice()).slice(0, 15).map(ctxQ), d.title));
    return '';
  },
  numbers() {
    if (!ES) return views.tests();
    return `<a href="#lessons">← Leçons</a><h1>Nombres · Números</h1><div class="card lesson-body">
      <table><tr><td>0–15</td><td>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince</td></tr>
      <tr><td>16–29</td><td>un seul mot : dieciséis, veintiuno, veintidós…</td></tr>
      <tr><td>30–99</td><td>dizaine + <b>y</b> + unité : treinta y uno, noventa y nueve</td></tr>
      <tr><td>100</td><td><b>cien</b> seul ; <b>ciento</b> + suite : ciento uno</td></tr>
      <tr><td>200–900</td><td>doscientos, trescientos… ⚠️ quinientos, setecientos, novecientos</td></tr>
      <tr><td>1000</td><td>mil (jamais « un mil ») · 2000 = dos mil</td></tr></table>
      <div class="fr-box">🇫🇷 Pas de « soixante-dix » ni « quatre-vingts » : setenta (70), ochenta (80), noventa (90), comme en belge/suisse. Les centaines s’accordent : doscient<b>as</b> personas.</div>
      <div class="ru-box">🇷🇺🇺🇦 Comme сто / сто, <b>cien</b> devient <b>ciento</b> dès qu’un nombre suit. « Y » ne s’emploie qu’entre dizaines et unités : ciento tres (pas « ciento y tres »).</div></div>
      <button class="wide" onclick="numbersQuiz()">15 questions</button>`;
  },
  texts(kind = 'oral') {
    const list = TEXTS[kind];
    if (!list) return views.tests();
    const done = S[TEXT_KEY[kind]];
    return `<h1>${kind === 'oral' ? 'Compréhension orale' : 'Compréhension écrite'}</h1>
      <p class="muted">${kind === 'oral' ? 'Écoute d’abord sans lire, puis réponds. N’affiche le texte que si tu bloques.' : 'Lis, aide-toi du vocabulaire, puis réponds.'}</p>
      <ul class="list card">${list.map((t, k) => `<li><a class="item" href="#text/${kind}/${k}"><b>${k + 1}. ${esc(t.title)}</b> <span class="tag">${esc(t.level)}</span>
      ${best(done[k], t.qs.length)}<br><span class="muted">${esc(t.sub || '')}</span></a></li>`).join('')}</ul>`;
  },
  text(kind, k) {
    const t = TEXTS[kind]?.[k];
    if (!t) return views.texts(kind);
    const oral = kind === 'oral', body = `<div class="text">${esc(t.text).replace(/\n/g, '<br>')}</div>`;
    return `<a href="#texts/${kind}">← Textes</a><h1>${esc(t.title)}</h1><p class="muted">${esc(t.sub || '')} · ${esc(t.level)}</p>
      <div class="card"><div class="row"><button class="grow" data-say="${esc(t.text)}">🔊 Écouter</button><button class="ghost grow" data-say="${esc(t.text)}" data-slow="1">🐢 Lentement</button></div>
        ${oral ? `<details style="margin-top:12px"><summary>Afficher le texte</summary>${body}</details>` : `<div style="margin-top:12px">${body}</div>`}
        ${t.words ? `<details style="margin-top:8px"><summary>Vocabulaire utile</summary><p class="muted">${esc(t.words)}</p></details>` : ''}
        ${Object.entries(LANGS).map(([l, f]) => t[l] ? `<details style="margin-top:8px"><summary>${f} Traduction</summary><p class="muted">${esc(t[l])}</p></details>` : '').join('')}</div>
      <button class="wide" onclick="textQuiz('${kind}', ${+k})">Questions (${t.qs.length})</button>`;
  },
  phrases(theme) {
    const TH = D.phraseThemes;
    if (!TH[theme]) return `<a href="#lessons">← Leçons</a><h1>Phrases utiles</h1><ul class="list card">${Object.entries(TH).map(([k, v]) =>
      `<li><a class="item" href="#phrases/${k}"><b>${esc(v)}</b> <span class="tag">${PHRASES.filter(p => p.theme === k).length}</span></a></li>`).join('')}</ul>
      <a class="btn wide" href="#tests">S’entraîner dans Tests</a>`;
    return `<a href="#phrases">← Phrases</a><h1>${esc(TH[theme])}</h1><ul class="list card">${PHRASES.filter(p => p.theme === theme).map(p =>
      `<li>${sayBtn(p.w)} <b>${esc(p.w)}</b><br><span class="muted">${Object.entries(LANGS).map(([l, f]) => `${f} ${esc(p[l])}`).join('<br>')}</span></li>`).join('')}</ul>`;
  },
  words() {
    setTimeout(() => {
      const draw = () => {
        const q = plain($('#q').value), t = $('#th').value;
        const hits = WORDS.filter(w => (!t || w.theme === t) && (!q || plain(`${w.w} ${w.fr} ${w.ru} ${w.uk}`).includes(q)));
        $('#list').innerHTML = hits.slice(0, 300).map(w => `<li data-id="${w.id}"><span class="dot ${status(w.id)}"></span><b>${esc(shown(w))}</b> ${w.emoji || ''}
          <span class="muted">— ${esc(meaning(w))}</span></li>`).join('') + (hits.length > 300 ? '<li class="muted">…affine ta recherche</li>' : '');
        $('#count').textContent = hits.length + ' mots';
      };
      $('#q').oninput = $('#th').onchange = draw;
      $('#list').onclick = e => {
        const li = e.target.closest('li[data-id]');
        if (!li || e.target.closest('.card')) return;
        if (li.querySelector('.card')) { li.querySelector('.card').remove(); return; }
        li.insertAdjacentHTML('beforeend', `<div class="card" style="margin-top:8px">${card(BY_ID.get(+li.dataset.id))}</div>`);
      };
      draw();
    });
    return `<h1>Mots · ${esc(D.name)}</h1><input id="q" type="search" placeholder="Chercher ${COURSE} / fr / ru / uk…">
      <select id="th" style="margin-top:8px"><option value="">Tous les thèmes</option>${Object.entries(THEMES).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select>
      <p class="muted" id="count"></p><ul class="list card" id="list"></ul>`;
  },
  settings() {
    setTimeout(() => {
      $('#quota').onchange = e => { S.quota = +e.target.value; resetDayIfUnstarted(); };
      $('#theme').onchange = e => { S.theme = e.target.value; resetDayIfUnstarted(); };
      $('#rate').oninput = e => { S.rate = +e.target.value; save(); };
      app.querySelectorAll('[data-help]').forEach(c => c.onchange = () => {
        const on = [...app.querySelectorAll('[data-help]:checked')].map(x => x.dataset.help);
        if (on.length) { S.help = on; save(); } else c.checked = true; // keep at least one
      });
      $('#imp').onchange = e => e.target.files[0]?.text().then(importData);
      navigator.storage?.persisted?.().then(p => $('#persist').textContent = p ? '✓ Stockage persistant' : '⚠ Stockage pas encore persistant (installe l’appli sur l’écran d’accueil)');
    });
    const vname = !hasTTS ? '⚠ Synthèse vocale non disponible dans ce navigateur' : voice ? `✓ ${esc(voice.name)} (${esc(voice.lang)})`
      : `⚠ Aucune voix ${D.lang} trouvée. Android : Paramètres → Gestion globale → Synthèse vocale → moteur → Installer les données vocales → ${esc(D.voiceName)}`;
    return `<h1>Réglages · ${D.flag} ${esc(D.name)}</h1>
      <div class="card"><h2>Cours</h2><button class="wide ghost" onclick="switchCourse()">⇄ Passer à ${other}</button>
        <p class="muted">Chaque cours garde sa propre progression.</p></div>
      <div class="card"><label for="quota">Nouveaux mots par jour</label><select id="quota">${[10, 20, 30, 40, 50, 75, 100].map(n => `<option ${n === S.quota ? 'selected' : ''}>${n}</option>`).join('')}</select>
        <label for="theme">Thème des nouveaux mots</label><select id="theme"><option value="">Tous (par fréquence / niveau)</option>${Object.entries(THEMES).map(([k, v]) =>
          `<option value="${k}" ${k === S.theme ? 'selected' : ''}>${v} (${WORDS.filter(w => w.theme === k && !S.words[w.id]).length} nouveaux)</option>`).join('')}</select>
        <p class="muted">S’applique aujourd’hui si tu n’as pas commencé, sinon dès demain.</p>
        <label>Langues des traductions dans les quiz</label>
        ${Object.entries({ fr: '🇫🇷 Français', ru: '🇷🇺 Русский', uk: '🇺🇦 Українська' }).map(([k, v]) =>
          `<label class="check"><input type="checkbox" data-help="${k}" ${S.help.includes(k) ? 'checked' : ''}>${v}</label>`).join('')}
        <p class="muted">Les fiches de mots montrent toujours les trois.</p></div>
      <div class="card"><label for="rate">Vitesse de la voix</label><input id="rate" type="range" min="0.5" max="1.2" step="0.05" value="${S.rate}" class="wide">
        <p class="muted">${vname}</p>${sayBtn(D.testVoice, '🔊 Tester la voix')}</div>
      <div class="card"><h2>Sauvegarde</h2><p class="muted">Un seul fichier pour les deux cours. Dernier export : ${S.lastExport || 'jamais'} · <span id="persist"></span></p>
        <div class="row"><button class="grow" onclick="exportData()">Exporter</button><label class="btn ghost grow" style="margin:0">Importer<input id="imp" type="file" accept=".json,application/json" hidden></label></div></div>
      <p class="muted" style="text-align:center">${esc(D.source)} · ${WORDS.length} mots</p>`;
  },
};
function resetDayIfUnstarted() { if (S.day && !S.day.learned) S.day = null; save(); }

function textQuiz(kind, k) {
  const t = TEXTS[kind][k];
  runQuiz(t.qs.map((q, j) => ({ key: j, html: `<h2>${esc(q.q)}</h2>`, opts: q.opts.map(esc), a: q.a, why: q.why && esc(q.why) })), t.title, res => {
    const d = S[TEXT_KEY[kind]];
    d[k] = Math.max(d[k] ?? 0, [...res.values()].filter(Boolean).length); markActive(); save();
    app.innerHTML = resultHtml(res, '', `#text/${kind}/${k}`, 'Retour au texte');
  });
}

// ---------- backup: one file holds both courses ----------
function exportData() {
  S.lastExport = today(); save();
  const states = {};
  for (const c of ['es', 'en']) { try { const s = JSON.parse(localStorage.getItem('esen-' + c)); if (s) states[c] = s; } catch {} }
  const blob = new Blob([JSON.stringify({ app: 'esen', version: 1, exported: today(), states })], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = `es-en-backup-${today()}.json`; a.click();
  route();
}
const isDay = d => typeof d === 'string' && /^\d{4}-\d\d-\d\d$/.test(d);
const nums = o => Object.fromEntries(Object.entries(o || {}).filter(([i, v]) => /^\d+$/.test(i) && Number.isFinite(v)));
// keep only well-formed fields: a hand-edited or foreign file must not break the app
function clean(st) {
  const f = fresh(), words = {};
  for (const [id, p] of Object.entries(st.words || {})) {
    if (/^\d+$/.test(id) && p && [p.box, p.ok, p.ko].every(Number.isFinite) && isDay(p.due)) words[id] = { box: p.box, ok: p.ok, ko: p.ko, due: p.due };
  }
  return { ...f, words, quota: +st.quota || f.quota, theme: THEMES[st.theme] ? st.theme : '', rate: Math.min(1.2, Math.max(0.5, +st.rate || f.rate)),
    help: Array.isArray(st.help) && st.help.every(l => LANGS[l]) && st.help.length ? st.help : f.help,
    lessons: nums(st.lessons), texts: nums(st.texts), reads: nums(st.reads),
    tenses: Array.isArray(st.tenses) ? st.tenses.filter(t => typeof t === 'string') : f.tenses,
    active: Array.isArray(st.active) ? st.active.filter(isDay) : [], created: isDay(st.created) ? st.created : f.created, lastExport: today() };
}
function importData(text) {
  try {
    const states = JSON.parse(text).states;
    if (!states || !(states.es || states.en)) throw new Error('ce fichier n’est pas une sauvegarde Español · English');
    const count = c => Object.keys(states[c]?.words || {}).length;
    if (!confirm(`Remplacer la progression actuelle par cette sauvegarde (espagnol : ${count('es')} mots, anglais : ${count('en')} mots) ?`)) return;
    for (const c of ['es', 'en']) if (states[c]) localStorage.setItem('esen-' + c, JSON.stringify(clean(states[c])));
    S = load(); alert('Sauvegarde restaurée ✓'); location.hash = '#today'; route();
  } catch (e) { alert('Échec de l’import : ' + e.message); }
}

// ---------- router ----------
const TAB = { learn: 'today', lesson: 'lessons', verbs: 'lessons', phrases: 'lessons', numbers: 'lessons', words: 'words', settings: 'settings', today: 'today', lessons: 'lessons' };
function route() {
  const [name, ...args] = (location.hash.slice(1) || 'today').split('/').map(decodeURIComponent);
  if (hasTTS) speechSynthesis.cancel();
  app.innerHTML = (views[name] || views.today)(...args);
  const tab = views[name] ? TAB[name] || 'tests' : 'today';
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', a.hash === '#' + tab));
  scrollTo(0, 0);
}
addEventListener('hashchange', route);
route();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
