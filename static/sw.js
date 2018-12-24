importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4.4ffdcc49b3e3b27fe1ba.js",
    "revision": "785183ddd9b66bf654ab3a99b9582c4f"
  },
  {
    "url": "/_nuxt/app.3be728b3011953bba560.js",
    "revision": "368cda0567a3d33659bdb2203f089742"
  },
  {
    "url": "/_nuxt/layouts/default.dc5b0e9f372984ba1d90.js",
    "revision": "4d3fac326102f7c72126186244260bc9"
  },
  {
    "url": "/_nuxt/manifest.6798babf80291dd033c5.js",
    "revision": "e5c6c8a04c8c07f6946e5d966716d242"
  },
  {
    "url": "/_nuxt/pages/index.cd215a40d7da4b5c25f6.js",
    "revision": "37536bd3aba80c96067bd89c869e2aa8"
  },
  {
    "url": "/_nuxt/vendor.c6e827ea82ca06ba71b4.js",
    "revision": "623160a68b7be3b464fe7d5b7543b3a3"
  }
], {
  "cacheId": "vuedarkmode",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





