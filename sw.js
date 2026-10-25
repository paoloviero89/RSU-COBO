/* RSU COBO — service worker: fa funzionare l'app anche senza rete.
   Se modificate index.html, stile.css o app.js, aumentate il numero di VERSIONE
   così i telefoni scaricano la nuova versione. Per i file in "dati" non serve. */
const VERSIONE = "rsu-v3";
const FILE_APP = [
  "./",
  "index.html",
  "stile.css",
  "app.js",
  "lib/qrcode.js",
  "volantino.html",
  "manifest.webmanifest",
  "icone/favicon.png",
  "icone/apple-touch-icon.png",
  "icone/icona-192.png",
  "icone/icona-512.png",
  "fonts/archivo-narrow-latin-600-normal.woff2",
  "fonts/archivo-narrow-latin-700-normal.woff2",
  "fonts/ibm-plex-sans-latin-400-normal.woff2",
  "fonts/ibm-plex-sans-latin-400-italic.woff2",
  "fonts/ibm-plex-sans-latin-500-normal.woff2",
  "fonts/ibm-plex-sans-latin-600-normal.woff2",
  "dati/aggiornamenti.md",
  "dati/proposte.md",
  "dati/contatti.md"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE_APP)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Contenuti: prima la rete (così si vedono subito gli aggiornamenti), poi la copia salvata.
  if (url.pathname.includes("/dati/")) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSIONE).then(c => c.put(url.pathname, copy)); }
        return res;
      }).catch(() => caches.match(url.pathname, { ignoreSearch: true }))
    );
    return;
  }

  // Pagina: se offline, mostra l'app salvata.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("index.html")));
    return;
  }

  // Resto dell'app: copia salvata subito, aggiornata in background.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(cached => {
      const net = fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSIONE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
