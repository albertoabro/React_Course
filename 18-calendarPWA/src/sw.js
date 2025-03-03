import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";
   
cleanupOutdatedCaches();

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// to allow work offline
registerRoute(
    new NavigationRoute(createHandlerBoundToURL("index.html"), {
    denylist: [/^\/backoffice/],
    })
);

self.skipWaiting();
clientsClaim();

self.addEventListener("install", async (event) => {
    const cache = await caches.open("cache-1");

    await cache.addAll([
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
        '/react.ico'
    ]);
});

const apiOfflineFallbacks = [
    'http://localhost:4000/api/auth/renew',
    'http://localhost:4000/api/events/'
];

self.addEventListener( 'fetch', (event) => {

    console.log(event.request.url);
    if(!apiOfflineFallbacks.includes(event.request.url)) return;

    const resp = fetch( event.request )
        .then( response => {

            if(!response)
                return caches.match(event.request);
            
            caches.open('cache-dynamic')
                .then( cache => cache.put( event.request, response ) );

            return response.clone();
        })
        .catch( err => {
            console.warn('Offline: Try to fetch from cache...');
            return caches.match(event.request).then((cacheResponse => {
                return cacheResponse || new Response(JSON.stringify({ error: 'No internet connection'}), {
                    status: 503,
                    headers: { "Content-Type": "application/json" }
                })
            }));
        });
    
        event.respondWith( resp );
});
