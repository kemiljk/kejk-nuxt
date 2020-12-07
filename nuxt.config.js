export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'KEJK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: "description",
        name: "description",
        content:
          "Human-first Product Designer and Developer.",
      },
      { property: "og:site_name", content: "Karl Emil James Koch" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.kejk.tech",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Karl Emil James Koch",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Human-first Product Designer and Developer.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@_kejk" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://www.kejk.tech",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Karl Emil James Koch",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Human-first Product Designer and Developer.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/twitter-og_bbzz2a.png",
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.kejk.tech",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: "module",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
      },
      {
        nomodule: "",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-moment.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
};