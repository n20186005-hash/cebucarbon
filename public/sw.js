/* Pamilihang Carbon — offline-first service worker (static site, no runtime backend). */
const CACHE_NAME = 'carbon-market-v1'
const OFFLINE_URL = '/offline/'
const PRECACHE = [
  '/',
  '/offline/',
  '/site.webmanifest',
  '/logo.svg',
  '/icons/favicon.svg',
  '/icons/apple-touch-icon.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  )
})

function cachePut(request, response) {
  const copy = response.clone()
  caches
    .open(CACHE_NAME)
    .then((cache) => cache.put(request, copy))
    .catch(() => undefined)
}

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) cachePut(request, response)
          return response
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME)
          const cached = await cache.match(request)
          if (cached) return cached
          const offline = await cache.match(OFFLINE_URL)
          return (
            offline ||
            new Response('Offline', {
              status: 503,
              headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            })
          )
        })
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request)
        .then((response) => {
          if (response.ok && response.type === 'basic') cachePut(request, response)
          return response
        })
        .catch(() => cached)
    })
  )
})
