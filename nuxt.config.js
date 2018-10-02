/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

const router =
  process.env.NODE_ENV === "production"
    ? {
        router: {
          base: "/dark-mode/"
        }
      }
    : {};

/**************************************************************************
 * EXPORT
 ***************************************************************************/

module.exports = {
  head: {
    title: "Dark Mode | A Minimalist Dark Design System for Vue.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Based components designed for the night people who enjoy dark interfaces as much as we do."
      },
      // Favicons Generated with
      // http://www.favicomatic.com/
      {
        name: "application-name",
        content: "&nbsp;"
      },
      {
        name: "msapplication-TileColor",
        content: "#1B2432"
      },
      {
        name: "msapplication-TileImage",
        content: "/favicons/mstile-144x144.png"
      },
      {
        name: "msapplication-square70x70logo",
        content: "/favicons/mstile-70x70.png"
      },
      {
        name: "msapplication-square150x150logo",
        content: "/favicons/mstile-150x150.png"
      },
      {
        name: "msapplication-wide310x150logo",
        content: "/favicons/mstile-310x150.png"
      },
      {
        name: "msapplication-square310x310logo",
        content: "/favicons/mstile-310x310.png"
      }
    ],
    link: [
      // Favicons Generated with
      // http://www.favicomatic.com/
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "57x57",
        href: "/favicons/apple-touch-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "60x60",
        href: "/favicons/apple-touch-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "72x72",
        href: "/favicons/apple-touch-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "76x76",
        href: "/favicons/apple-touch-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "114x114",
        href: "/favicons/apple-touch-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "120x120",
        href: "/favicons/apple-touch-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "144x144",
        href: "/favicons/apple-touch-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "152x152",
        href: "/favicons/apple-touch-icon-152x152.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicons/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/favicons/favicon-128x128.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "196x196",
        href: "/favicons/favicon-196x196.png"
      }
    ]
  },
  css: ["normalize.css/normalize.css", "hint.css/hint.min.css"],
  modules: [
    [
      "nuxt-sass-resources-loader",
      [
        // Global variables, site-wide settings, config switches, etc
        "@/assets/settings/_colors.scss",

        // Site-wide mixins and functions
        "@/assets/tools/_mq.scss"
      ]
    ]
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: [require("autoprefixer")()]
  },
  generate: {
    dir: "docs"
  },

  ...router
};
