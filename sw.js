// Minimal service worker: makes the site installable.
// It does not cache anything, so updates you upload always show up straight away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
