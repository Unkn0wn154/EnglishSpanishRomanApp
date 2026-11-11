importScripts('files.js');
const ALL = [...FILES.common, ...['es', 'en'].flatMap(c => FILES[c].map(f => `${c}/${f}`))];

// start from an empty cache: a half-finished earlier install must not make addAll fail
self.addEventListener('install', e => { e.waitUntil(caches.delete(CACHE).then(() => caches.open(CACHE)).then(c => c.addAll(ALL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
