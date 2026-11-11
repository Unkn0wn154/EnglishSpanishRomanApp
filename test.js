// Self-test: node test.js — loads each course exactly like index.html does (with a tiny fake DOM) and checks data + engine.
const fs = require('fs'), vm = require('vm');
let fails = 0;
const ok = (c, m) => { if (!c) { fails++; console.log('  ✗ ' + m); } };
const eq = (a, b, m) => ok(JSON.stringify(a) === JSON.stringify(b), `${m}: got ${JSON.stringify(a)}, want ${JSON.stringify(b)}`);

function load(course) {
  const el = () => ({ innerHTML: '', querySelectorAll: () => [], classList: { toggle() {} } });
  const store = {};
  const ctx = {
    console, COURSE: course, alert() {}, confirm: () => true, scrollTo() {}, addEventListener() {},
    location: { hash: '#today', reload() {} }, navigator: {},
    localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); } },
    document: { querySelector: el, querySelectorAll: () => [], addEventListener() {}, createElement: el },
    setTimeout: () => {},
  };
  ctx.self = ctx.window = ctx;
  vm.createContext(ctx);
  const run = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  run('files.js');
  for (const f of ctx.FILES[course]) if (fs.existsSync(`${course}/${f}`)) run(`${course}/${f}`); else ok(false, `${course}/${f} missing`);
  // top-level const/let of app.js stay inside the script scope: expose what the tests need
  vm.runInContext(fs.readFileSync('app.js', 'utf8') + '\n;Object.assign(self, { WORDS, VERBS, IRREG, PHRASES, LESSONS, TEXTS, THEMES, POS, conj, gerund, numEs, plain, strict, views, wordQ, accentQ, irregQ, conjQ });', ctx, { filename: 'app.js' });
  return ctx;
}

function checkCommon(c, course) {
  console.log(`[${course}]`);
  for (const l of c.D.words.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#'))) ok(l.split('|').length === 11, 'needs 11 fields: ' + l.slice(0, 50));
  for (const l of c.D.phrases.join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#'))) ok(l.split('|').length === 5, 'phrase needs 5 fields: ' + l.slice(0, 50));
  const ids = new Set(), seen = new Map();
  for (const w of c.WORDS) {
    const at = `#${w.id} ${w.w}`;
    ok(!ids.has(w.id), 'duplicate id ' + at); ids.add(w.id);
    for (const k of ['w', 'fr', 'ru', 'uk', 'ex']) ok(w[k]?.trim(), `missing ${k} ${at}`);
    ok(c.POS[w.pos], 'bad pos ' + at); ok(c.THEMES[w.theme], 'bad theme ' + at);
    ok(course === 'es' ? ['', 'm', 'f', 'mf'].includes(w.g) : w.g === '', 'bad gender ' + at);
    ok(course !== 'es' || w.pos !== 'n' || w.g, 'noun without gender ' + at);
    ok((w.ex || "").split(' = ').length === 2, 'example needs exactly one " = " ' + at);
    ok(w.ex !== undefined && w.note !== undefined, 'field count ' + at);
    ok(!/[а-яіїєґ]/i.test(w.w + w.fr + w.ex), 'cyrillic in target/fr ' + at);
    ok(/[а-яіїєґ]/i.test(w.ru) && /[а-яіїєґ]/i.test(w.uk), 'ru/uk not cyrillic ' + at);
    const key = c.strict(w.w) + '|' + w.pos;
    ok(!seen.has(key), `duplicate word ${at} (also #${seen.get(key)})`); seen.set(key, w.id);
  }
  console.log(`  ${c.WORDS.length} words, ${c.PHRASES.length} phrases, ${c.LESSONS.length} lessons, ${c.TEXTS.oral.length}+${c.TEXTS.read.length} texts`);
  for (const p of c.PHRASES) {
    ok(c.D.phraseThemes[p.theme], 'bad phrase theme ' + p.w);
    for (const k of ['w', 'fr', 'ru', 'uk']) ok(p[k]?.trim(), `phrase missing ${k}: ${p.w}`);
  }
  const q = (x, at) => { ok(Array.isArray(x.opts) && x.opts.length >= 2 && Number.isInteger(x.a) && x.a >= 0 && x.a < x.opts.length, 'bad question ' + at);
    ok(new Set(x.opts).size === x.opts.length, 'duplicate options ' + at); };
  c.LESSONS.forEach((l, k) => { ok(l.title && l.sub && l.body, 'lesson fields ' + k); ok(l.quiz.length >= 5, 'lesson quiz too short ' + l.title); l.quiz.forEach((x, j) => q(x, `${l.title} #${j}`)); });
  for (const [kind, list] of Object.entries(c.TEXTS)) list.forEach(t => {
    for (const k of ['title', 'level', 'text', 'fr', 'ru', 'uk']) ok(t[k], `text ${t.title} missing ${k}`);
    ok(t.qs.length >= 3, 'few questions ' + t.title); t.qs.forEach((x, j) => q(x, `${t.title} #${j}`));
  });
  for (const [k, d] of Object.entries(c.D.drills)) { ok(d.title && d.items.length >= 10, 'drill ' + k); d.items.forEach((x, j) => { q(x, `${k} #${j}`); ok(/___/.test(x.q), `${k} #${j} has no ___`); }); }
  // every view renders without throwing
  for (const v of Object.keys(c.views)) try { c.views[v](); } catch (e) { ok(false, `view ${v} threw ${e.message}`); }
  for (const w of c.WORDS) try { c.wordQ(w); } catch (e) { ok(false, `wordQ ${w.w} threw ${e.message}`); }
}

// ---------- Spanish ----------
const es = load('es');
checkCommon(es, 'es');
const V = inf => { const v = es.VERBS.find(x => x.inf === inf); ok(v, 'verb missing ' + inf); return v; };
const C = (inf, t) => es.conj(V(inf), t);
const expect = {
  hablar: { pres: 'hablo hablas habla hablamos habláis hablan', pret: 'hablé hablaste habló hablamos hablasteis hablaron', subj: 'hable hables hable hablemos habléis hablen', imp: 'habla hable hablad hablen', perf: 'he hablado,has hablado,ha hablado,hemos hablado,habéis hablado,han hablado' },
  comer: { pres: 'como comes come comemos coméis comen', pret: 'comí comiste comió comimos comisteis comieron', impf: 'comía comías comía comíamos comíais comían' },
  vivir: { pres: 'vivo vives vive vivimos vivís viven', subj: 'viva vivas viva vivamos viváis vivan', fut: 'viviré vivirás vivirá viviremos viviréis vivirán' },
  pensar: { pres: 'pienso piensas piensa pensamos pensáis piensan', subj: 'piense pienses piense pensemos penséis piensen' },
  dormir: { pres: 'duermo duermes duerme dormimos dormís duermen', pret: 'dormí dormiste durmió dormimos dormisteis durmieron', subj: 'duerma duermas duerma durmamos durmáis duerman' },
  pedir: { pres: 'pido pides pide pedimos pedís piden', pret: 'pedí pediste pidió pedimos pedisteis pidieron', subj: 'pida pidas pida pidamos pidáis pidan' },
  sentir: { pret: 'sentí sentiste sintió sentimos sentisteis sintieron', subj: 'sienta sientas sienta sintamos sintáis sientan' },
  jugar: { pres: 'juego juegas juega jugamos jugáis juegan', pret: 'jugué jugaste jugó jugamos jugasteis jugaron', subj: 'juegue juegues juegue juguemos juguéis jueguen' },
  empezar: { pret: 'empecé empezaste empezó empezamos empezasteis empezaron', subj: 'empiece empieces empiece empecemos empecéis empiecen' },
  buscar: { pret: 'busqué buscaste buscó buscamos buscasteis buscaron', subj: 'busque busques busque busquemos busquéis busquen' },
  llegar: { pret: 'llegué llegaste llegó llegamos llegasteis llegaron' },
  coger: { pres: 'cojo coges coge cogemos cogéis cogen', subj: 'coja cojas coja cojamos cojáis cojan' },
  seguir: { pres: 'sigo sigues sigue seguimos seguís siguen', subj: 'siga sigas siga sigamos sigáis sigan', pret: 'seguí seguiste siguió seguimos seguisteis siguieron' },
  elegir: { pres: 'elijo eliges elige elegimos elegís eligen' },
  conocer: { pres: 'conozco conoces conoce conocemos conocéis conocen', subj: 'conozca conozcas conozca conozcamos conozcáis conozcan' },
  conducir: { pret: 'conduje condujiste condujo condujimos condujisteis condujeron' },
  construir: { pres: 'construyo construyes construye construimos construís construyen', pret: 'construí construiste construyó construimos construisteis construyeron' },
  leer: { pret: 'leí leíste leyó leímos leísteis leyeron', perf: 'he leído,has leído,ha leído,hemos leído,habéis leído,han leído' },
  caer: { pres: 'caigo caes cae caemos caéis caen', pret: 'caí caíste cayó caímos caísteis cayeron', subj: 'caiga caigas caiga caigamos caigáis caigan' },
  oír: { pret: 'oí oíste oyó oímos oísteis oyeron', subj: 'oiga oigas oiga oigamos oigáis oigan', fut: 'oiré oirás oirá oiremos oiréis oirán', imp: 'oye oiga oíd oigan' },
  tener: { pres: 'tengo tienes tiene tenemos tenéis tienen', pret: 'tuve tuviste tuvo tuvimos tuvisteis tuvieron', fut: 'tendré tendrás tendrá tendremos tendréis tendrán', subj: 'tenga tengas tenga tengamos tengáis tengan', imp: 'ten tenga tened tengan' },
  hacer: { pret: 'hice hiciste hizo hicimos hicisteis hicieron', cond: 'haría harías haría haríamos haríais harían', imp: 'haz haga haced hagan' },
  decir: { pres: 'digo dices dice decimos decís dicen', pret: 'dije dijiste dijo dijimos dijisteis dijeron', subj: 'diga digas diga digamos digáis digan' },
  venir: { pres: 'vengo vienes viene venimos venís vienen', pret: 'vine viniste vino vinimos vinisteis vinieron' },
  saber: { pres: 'sé sabes sabe sabemos sabéis saben', subj: 'sepa sepas sepa sepamos sepáis sepan', pret: 'supe supiste supo supimos supisteis supieron' },
  traer: { pret: 'traje trajiste trajo trajimos trajisteis trajeron' },
  ir: { imp: 've vaya id vayan', fut: 'iré irás irá iremos iréis irán' },
  ser: { imp: 'sé sea sed sean' },
  estar: { imp: 'está esté estad estén' },
  enviar: { pres: 'envío envías envía enviamos enviáis envían', subj: 'envíe envíes envíe enviemos enviéis envíen' },
  continuar: { pres: 'continúo continúas continúa continuamos continuáis continúan' },
  morir: { perf: 'he muerto,has muerto,ha muerto,hemos muerto,habéis muerto,han muerto' },
  volver: { pres: 'vuelvo vuelves vuelve volvemos volvéis vuelven' },
  poder: { pres: 'puedo puedes puede podemos podéis pueden' },
  querer: { pres: 'quiero quieres quiere queremos queréis quieren' },
  reír: { pres: 'río ríes ríe reímos reís ríen' },
};
for (const [inf, ts] of Object.entries(expect)) for (const [t, want] of Object.entries(ts))
  eq(C(inf, t), want.includes(',') ? want.split(',') : want.split(' '), `${inf} ${t}`);
eq(['dormir', 'pedir', 'leer', 'construir', 'decir', 'venir', 'poder', 'ir', 'hablar', 'comer'].map(v => es.gerund(V(v))),
  ['durmiendo', 'pidiendo', 'leyendo', 'construyendo', 'diciendo', 'viniendo', 'pudiendo', 'yendo', 'hablando', 'comiendo'], 'gerunds');
for (const v of es.VERBS) for (const t of ['pres', 'pret', 'impf', 'fut', 'cond', 'perf', 'subj', 'imp']) {
  const f = es.conj(v, t);
  ok(Array.isArray(f) && f.length === (t === 'imp' ? 4 : 6) && f.every(x => x && !/undefined/.test(x)), `conj ${v.inf} ${t}: ${f}`);
}
eq([0, 16, 21, 22, 31, 100, 101, 115, 500, 777, 1000, 1999, 2024, 21000, 100000 - 1].map(es.numEs),
  ['cero', 'dieciséis', 'veintiuno', 'veintidós', 'treinta y uno', 'cien', 'ciento uno', 'ciento quince', 'quinientos', 'setecientos setenta y siete', 'mil',
   'mil novecientos noventa y nueve', 'dos mil veinticuatro', 'veintiún mil', 'noventa y nueve mil novecientos noventa y nueve'], 'numbers');
eq([es.plain('¿Qué tal?'), es.strict('Ñandú'), es.plain('Ñandú')], ['que tal', 'ñandú', 'nandu'], 'normalisation');

// ---------- English ----------
const en = load('en');
checkCommon(en, 'en');
for (const v of en.IRREG) { ok(v.base && v.past && v.pp && v.fr && v.ru && v.uk, 'irregular fields ' + v.base); en.irregQ(0); }

console.log(fails ? `\n${fails} FAILED` : '\nall good ✓');
process.exit(fails ? 1 : 0);
