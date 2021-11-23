export default {
  head: {
    title: "Axie Manager Tracker",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0",
      },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined",
      },
    ],
  },
  css: [
    {
      src: "~/assets/styles/main.scss",
      lang: "sass",
    },
  ],
  //...
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~/assets/styles/globals.scss"],
  },
  script: [
    {
      src: "/bootstrap.bundle.min.js",
    },
  ],
  target: "static",
  router: {
    base: "/axiemanagertracker.github.io/",
  },
};
