self.addEventListener("install",event=>{
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
   
    const request = event.request;
   
    if(request.method !== "GET")
    {
        return;
    }

    event.respondWith(cachedResponse(request))
})

async function precache()
{
    const cache =  await caches.open("v1")
    return cache.addAll([
        // '/',
        // './index.html',
        // './assets/index.js',
        // './assets/MediaPlayer.js',
        // './assets/plugins/AutoPlay.js',
        // './assets/plugins/AutoPause.js',
        // './assets/BigBuckBunny.mp4',
        // './assets/index.css',
    ])
}

async function cachedResponse(request){
    const cache = await caches.open("v1")
    const response = await cache.match(request)
    return response || fetch(request)
}
