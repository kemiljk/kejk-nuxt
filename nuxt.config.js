import axios from "axios";

export default {
  ssr: true,

  target: "static",

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
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
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
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305390/Twitter_Image_ah1nne.png",
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

  plugins: [
    { src: "~/plugins/vue-moment.js", ssr: true },
    { src: "~/plugins/prism.js", ssr: true },
  ],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/moment", "@nuxtjs/dotenv"],

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

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    "@nuxtjs/feed",
    "@nuxtjs/sitemap",
    "vue-scrollto/nuxt",
  ],

  // extends: ["@nuxtjs/eslint-config-typescript"],

  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: "./**/*.{ts,js,vue}",
  //     },
  //   },
  // },

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
    {
      path: "/rss.xml",
      async create(feed) {
        feed.options = {
          title: "KEJK | Thoughts",
          link: "https://kejk.tech/rss",
          description:
            "Thoughts on design, development and the intersection of the two",
        };

        let all_blogs = [];

        await axios
          .get(
            `https://api.cosmicjs.com/v2/buckets/kemiljk/objects?pretty=true&query=%7B%22type%22%3A%22blogs%22%7D&read_key=uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK&limit=20&props=slug,title,content,metadata,modified_at`
          )
          .then((res) => {
            res.data.objects.forEach((blog) => {
              all_blogs.push(blog);
            });
          });

        all_blogs.forEach((blog) => {
          const url = `https://kejk.tech/thoughts/${blog.slug}`;
          feed.addItem({
            title: blog.title,
            id: url,
            link: url,
            description: blog.metadata.snippet,
            image: blog.metadata.hero.imgix_url,
            content: blog.content,
            published: new Date(blog.modified_at),
            author: [
              {
                name: "Karl Koch",
                email: "karl@kejk.tech",
              },
            ],
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
    },
  ],

  build: {},
};
