// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service worker installed');
  });

  self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
  });

  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);

    event.respondWith(
      caches.match(event.request).then((response) => {
        // Serve from cache if available, else fetch from network
        return response || fetch(event.request).then((networkResponse) => {
          return caches.open('my-cache').then((cache) => {
            // Cache the response for future requests
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }).catch(() => {
        // Fallback response in case both cache and network fail
        return new Response('Service is currently offline.');
      })
    );
  });
