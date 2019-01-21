importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4.ac019f583eb69924f01d.js",
    "revision": "8fae0ce06039135a1681076b3d0a83ce"
  },
  {
    "url": "/_nuxt/app.76cabf5a371627b9a49b.js",
    "revision": "984a5603951acd99201b97d6492d91b8"
  },
  {
    "url": "/_nuxt/layouts/default.ea2363f5f94a35dc9442.js",
    "revision": "9bcf62c6c1eedc5b7a9c84fd8aba5110"
  },
  {
    "url": "/_nuxt/manifest.76202bfc048ba6a9f2cb.js",
    "revision": "ab0b22403a6c1e1f292ced407cf6b8c0"
  },
  {
    "url": "/_nuxt/pages/index.6c837b52c3390a6a7d20.js",
    "revision": "1c80d576e15a8528922d3ee52448bcfe"
  },
  {
    "url": "/_nuxt/vendor.39e145898041580c54ab.js",
    "revision": "93f9a8c76be527d057e8b5717e44f95f"
  }
], {
  "cacheId": "vuedarkmode-docs",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





