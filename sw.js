var cacheName = 'er-cache';
var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js'
];

/*start the service worker and cache all of the ap's content*/
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/*serve cached content hen offline*/
self.addEventListener('fetch',function(e) {
    e.respondWith (
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});