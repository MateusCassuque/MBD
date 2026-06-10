const CACHE_NAME = "freelaao-cache-v1"
const OFFLINE_URL = "/offline.html"

// Arquivos que sempre queremos em cache
const PRECACHE_ASSETS = [
  "/",
  "/manifest.json",
  "/offline.html",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
]

// Instalação do SW e cache inicial
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS)
    })
  )
  self.skipWaiting()
})

// Ativação do SW — limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

// Intercepta requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse
      return fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    })
  )
})

// Notificações push (estrutura básica)
self.addEventListener("push", (event) => {
  const data = event.data?.json() || {}
  const title = data.title || "Nova notificação"
  const options = {
    body: data.body || "",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-192x192.png",
    data: data.url || "/"
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

// Clique em notificação
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(
    clients.openWindow(event.notification.data)
  )
})
