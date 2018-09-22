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
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://lecoupa.github.io/dark-mode/"
        : "http://localhost:3000"
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
  }
};
