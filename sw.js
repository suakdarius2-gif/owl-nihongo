// Owl Nihongo pindah ke https://owl-nihongo.pages.dev/ — service worker lama dibersihkan.
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil((async function(){var k=await caches.keys();for(var i=0;i<k.length;i++)await caches.delete(k[i]);await self.registration.unregister();var c=await self.clients.matchAll({type:'window'});c.forEach(function(w){w.navigate(w.url)})})())});
