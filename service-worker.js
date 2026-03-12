self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("acordo-app").then(function(cache) {
      return cache.addAll([
        "controle_acordo.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});