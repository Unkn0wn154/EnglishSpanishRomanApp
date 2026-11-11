// Shared by index.html (which course scripts to load) and sw.js (what to cache offline). Bump CACHE on every deploy.
self.CACHE = 'esen-1';
self.FILES = {
  common: ['./', 'index.html', 'style.css', 'files.js', 'app.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'],
  es: ['course.js', ...Array.from({ length: 15 }, (_, i) => `words${i + 1}.js`), 'verbs.js', 'lessons.js', 'drills.js', 'phrases.js', 'texts.js', 'reading.js'],
  en: ['course.js', ...Array.from({ length: 15 }, (_, i) => `words${i + 1}.js`), 'verbs.js', 'lessons.js', 'drills.js', 'phrases.js', 'texts.js', 'reading.js'],
};
// every data file adds to this
self.D = { words: [], verbs: [], lessons: [], drills: {}, phrases: [], phraseThemes: {}, texts: [], reads: [] };
// question helpers for data files: lesson / text question, and context drill (q contains ___, hint = base word)
self.Q = (q, opts, a, why) => ({ q, opts, a, why });
self.X = (q, hint, opts, a, why) => ({ q, hint, opts, a, why });
