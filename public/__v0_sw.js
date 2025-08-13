// No-op service worker to prevent v0 registration errors
self.addEventListener("install", () => {
  // Skip waiting to activate immediately
  self.skipWaiting()
})

self.addEventListener("activate", () => {
  // Take control of all clients immediately
  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  // Let all requests pass through normally
  return
})
