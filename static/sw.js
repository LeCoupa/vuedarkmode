importScripts("/_nuxt/workbox.4c4f5ca6.js");

workbox.precaching.precacheAndRoute(
  [
    {
      url: "/_nuxt/app.bb7e0454154fab232db0.js",
      revision: "1c5bc6ec1fe86bdd782e3a69e87e2000"
    },
    {
      url: "/_nuxt/layouts/default.7247a5a105799ddc5532.js",
      revision: "b7a2790fe3651f2d271bbec72a175cf3"
    },
    {
      url: "/_nuxt/manifest.9ef820ad783c938ef3b8.js",
      revision: "ca3406afa727495ab506f8ddd3dedb54"
    },
    {
      url: "/_nuxt/pages/index.0bac7d1611f880ffa461.js",
      revision: "ac1c2e3dbfa1ee23e1e162ccd225236f"
    },
    {
      url: "/_nuxt/vendor.bb3eac518b57e20b0b01.js",
      revision: "531a764e042322d8d8e9d0c76f00bf75"
    }
  ],
  {
    cacheId: "vuedarkmode",
    directoryIndex: "/",
    cleanUrls: false
  }
);

workbox.clientsClaim();
workbox.skipWaiting();

workbox.routing.registerRoute(
  new RegExp("/_nuxt/.*"),
  workbox.strategies.cacheFirst({}),
  "GET"
);

workbox.routing.registerRoute(
  new RegExp("/.*"),
  workbox.strategies.networkFirst({}),
  "GET"
);
