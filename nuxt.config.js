import axios from "axios";
import Vuex from "vuex";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en-GB",
    },
    title: "KEJK – Product Designer and Developer",
    meta: [
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "KEJK" },
      {
        hid: "description",
        name: "description",
        content: "Product Designer and Frontend Developer",
      },
      {
        hid: "description",
        name: "description",
        content: "Human-first Product Designer and Developer.",
      },
      { property: "og:site_name", content: "KEJK" },
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
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },

      { name: "twitter:site", content: "@_kejk" },
      { name: "twitter:creator", content: "@_kejk" },
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
        hid: "twitter:image:src",
        name: "twitter:image:src",
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1607350722/twitter-og_bbzz2a.png",
      },
    ],
    link: [
      { rel: "icon", href: "/favicon.svg" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "mask-icon", href: "/mask-icon.svg", color: "#667EEA" },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "57x57",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "60x60",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "72x72",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "76x76",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "114x114",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "120x120",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "144x144",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "152x152",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "180x180",
        href: "/apple-icon.png",
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://kejk.tech",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/vue-moment.js", "~/plugins/prism.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://kejk.tech",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: ["/", "/about", "/thoughts", "/thoughts/_id", "/uses"].map(
      (route) => ({
        url: route,
        changefreq: "monthly",
        priority: 1,
        lastmodISO: new Date().toISOString().split("T")[0],
      })
    ),
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    "@nuxtjs/feed",
    "@nuxtjs/sitemap",
    "vue-scrollto/nuxt",
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://graphql.cosmicjs.com/v2",
      },
    },
  },

  axios: {
    baseURL: "https://graphql.cosmicjs.com/v2",
  },

  feed: [
    // {
    //   path: './static/feed.xml', // The route to your feed.
    //   async create(feed, blogs) {
    //     feed.options = {
    //       title: 'KEJK | Thoughts',
    //       link: 'https://kejk.tech/feed.xml',
    //       description: 'Thoughts on Design and Development from here and around the web.'
    //     };
    //     const blogs = this.$store.getters.getBlog;
    //     blogs.forEach(function (blog) {
    //       feed.addItem({
    //         title: blog.title,
    //         id: blog.url,
    //         link: blog.url,
    //         date: new Date(blog.date),
    //         description: blog.metadata.snippet,
    //         content: blog.content
    //       })
    //     })
    //   },
    //   cacheTime: 1000 * 60 * 15,
    //   type: 'rss2',
    // }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
