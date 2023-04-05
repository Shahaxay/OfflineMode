console.log("woking");
const CACHE_NAME='static_cache18'
const CACHE_RESOURSE=[
  './index.html',
  './style.css',
  './script.js',
  'Image/i1.png',
  'Image/i2.jpg'
]
async function precache(){
  const cache= await caches.open(CACHE_NAME);
  return cache.addAll(CACHE_RESOURSE);
}
self.addEventListener('install',(event)=>{
  event.waitUntil(precache());
  self.skipWaiting(); 
  console.log("SW intalled");
});

async function cleanupCache(){
  const keys=await caches.keys();   //return array of cache name
  const keysToDel=keys.map(key=>{  //return array of promise
    if(key !== CACHE_NAME){
      return caches.delete(key);
    }
  })
  console.log(keys);
  console.log(keysToDel);
  return Promise.all(keysToDel);  //fulfill all the promise of array
}
self.addEventListener('activate',(event)=>{
  event.waitUntil(cleanupCache());
  console.log("SW activated");
});

async function fetchassist(event) {
  try {
    const response = await fetch(event.request);
    return response;
  } catch (err) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetchassist(event).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request);
      });
    })
  );
});



//cachename
//cacheresources
//install event listener
//activate event listener
//fetch event listener


