/**
 * Minimal (no-op) Service Worker
 * --------------------------------
 * – Immediately activates (skipWaiting)
 * – Claims any open clients (clients.claim)
 * – Does NOT cache or intercept requests
 *
 * Its only job is to satisfy the automatic
 * registration coming from the v0 preview
 * environment so the console error disappears.
 */

self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim())
})
