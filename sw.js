// Owl Nihongo service worker
// Saat merilis update, naikkan angka VERSI agar semua siswa mendapat versi terbaru.
const VERSI = 'owl-v12';
const FILES = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSI).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Halaman: ambil versi terbaru dari internet dulu, pakai cache bila offline.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSI).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok && (req.url.startsWith(self.location.origin) || req.url.includes('fonts.g'))) { const c = r.clone(); caches.open(VERSI).then(x => x.put(req, c)); }
    return r;
  })));
});
