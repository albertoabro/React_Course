
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute }  = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly }  = workbox.strategies;
const { Queue } = workbox.backgroundSync;

const queue = new Queue('postOfflineEvent');

registerRoute(
    /https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.3.3\/dist\/css\/bootstrap.min.css/,
    new CacheFirst()
);

registerRoute(
    /https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/6.7.2\/css\/all.min.css/,
    new CacheFirst()
); 

registerRoute(
    /http:\/\/localhost:4000\/api\/auth\/renew/,
    new NetworkFirst()
);

registerRoute(
    /http:\/\/localhost:4000\/api\/events/,
    new NetworkFirst()
);


self.addEventListener('fetch', event => {

    if (event.request.method !== 'POST')
      return;
    
  
    const bgSyncLogic = async () => {
      try {

        self.registration.sync.register('postOfflineEvent'); // Registro explícito del evento de sincronización
        return new Response(JSON.stringify({ message: 'Save in queue for later sync' }), {
            status: 202,
            headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        await queue.pushRequest({request: event.request});
        return error;
      }
    };
  
    event.respondWith(bgSyncLogic());
  });

self.addEventListener('sync', (event) => {

    if (event.tag === 'postOfflineEvent') {
        console.log('[Service Worker] Try to resend the request...');
        event.waitUntil(queue.replayRequests());
    }
});