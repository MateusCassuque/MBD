// lib/pwa-badge.ts
export function setAppBadge(count: number) {
  if (typeof navigator !== 'undefined') {
    // modern API
    // @ts-ignore
    if ('setAppBadge' in navigator) {
      // @ts-ignore
      navigator.setAppBadge(count).catch(() => { })
      return
    }
    // fallback: message to service worker (some SW implementations may handle)
    // @ts-ignore
    if (navigator.serviceWorker?.controller) {
      // @ts-ignore
      navigator.serviceWorker.controller.postMessage({ type: 'BADGE_UPDATE', count })
    }
  }
}

export function clearAppBadge() {
  if (typeof navigator !== 'undefined') {
    // @ts-ignore
    if ('clearAppBadge' in navigator) {
      // @ts-ignore
      navigator.clearAppBadge().catch(() => { })
      return
    }
    // @ts-ignore
    if (navigator.serviceWorker?.controller) {
      // @ts-ignore
      navigator.serviceWorker.controller.postMessage({ type: 'BADGE_CLEAR' })
    }
  }
}