// public/sw.js
self.addEventListener('push', function (event) {
  let data = {}
  try {
    data = event.data.json()
  } catch (e) {
    data = { title: 'Notificação', body: event.data ? event.data.text() : '' }
  }

  const title = data.title || 'SARA'
  const options = {
    body: data.message || data.body || '',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    data: { url: data.link || '/notifications' }
  }

  event.waitUntil(self.registration.showNotification(title, options))

  // Post message para clients informarem para atualizar badge UI
  event.waitUntil(
    self.clients.matchAll({ includeUncontrolled: true }).then(all => {
      for (const client of all) {
        client.postMessage({ type: 'PUSH_RECEIVED' })
      }
    })
  )
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  const url = event.notification.data?.url || '/'
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url.includes(url) && 'focus' in client) return client.focus()
      }
      if (clients.openWindow) return clients.openWindow(url)
    })
  )
})

self.addEventListener('message', function (event) {
  // Mensagens do client: ex: badge clear request
  const data = event.data || {}
  if (data && data.type === 'BADGE_CLEAR') {
    // não há API para limpar badge do SW; fica para client
  }
})