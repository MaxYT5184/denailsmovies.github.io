const cacheName = 'movie-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './movies/littlemanhatten.mp4',
  './thumbs/littlemanhatten.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
