<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive id="HOME" v-scroll-to="'#HOME'">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-5xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 text-center">Hej, I'm Karl</h1>
      </header>
      <header class="pt-4 pb-2 max-w-xl mx-auto">
        <p class="text-2xl text-center">
          I'm a Product Designer and "sometimes" Frontend Developer, designing
          and defining the Home as a Service at
          <a
            href="https://www.homehero.co.uk"
            class="text-indigo-600 dark:text-indigo-500 font-bold"
            target="_blank"
            rel="noreferrer"
            >HomeHero</a
          >
          in London, UK.
        </p>
        <div class="flex flex-col md:flex-row justify-center mt-8">
          <a href="https://www.twitter.com/_kejk" class="mx-2">
            <button
              type="button"
              class="flex flex-row justify-center text-center font-medium w-full bg-blue-400 text-white rounded-xl px-6 py-3 btn btn-primary transition duration-500 ease hover:bg-blue-500 focus:outline-none focus:shadow-outline"
            >
              <twitter-icon
                size="1x"
                class="text-white mr-2 mt-1"
              ></twitter-icon
              >Follow me on Twitter
            </button>
          </a>
          <a class="mx-2">
            <button
              type="button"
              class="flex flex-row justify-center text-center font-medium w-full mt-2 md:mt-0 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl px-6 py-3 btn btn-secondary transition duration-500 ease hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline"
              v-scroll-to="'#GET_IN_TOUCH'"
            >
              <mail-icon
                size="1x"
                class="text-gray-800 dark:text-white mr-2 mt-1"
              ></mail-icon
              >Get in touch
            </button>
          </a>
        </div>
      </header>
      <header class="pt-16 max-w-xl">
        <h2>Some things I've made.</h2>
      </header>
      <div class="flex flex-row">
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="made in mades" :key="made.title">
            <keep-alive>
              <MadeCard :made="made" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>Some things I've helped make.</h2>
      </header>
      <div class="flex flex-row">
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="helpedMake in helpedMakes" :key="helpedMake.title">
            <keep-alive>
              <HelpedMakeCard :helpedMake="helpedMake" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>Thoughts on design and development.</h2>
        <!--<NuxtLink to="/thoughts" class="flex justify-between text-black bg-transparent hover:bg-gray-1-0 dark:hover:bg-gray-800 dark:text-white dark:bg-transparent rounded-xl px-6 py-3">
        See all
        <arrow-right-icon class="text-gray-700 dark:text-gray-300 ml-2"></arrow-right-icon>
      </NuxtLink>-->
      </header>
      <div class="flex flex-row mt-4">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
        >
          <div v-for="blog in blogs" :key="blog._id">
            <keep-alive>
              <BlogCard :blog="blog" />
            </keep-alive>
          </div>
          <div v-for="link in links" :key="link._id">
            <keep-alive>
              <LinkCard :link="link" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>Some things I'm currently enjoying.</h2>
      </header>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="media in medias" :key="media._id">
            <keep-alive>
              <MediaCard :media="media" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>Music I've written.</h2>
      </header>
      <div class="flex flex-row">
        <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
          <div v-for="album in albums" :key="album._id">
            <keep-alive>
              <AlbumCard :album="album" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header id="GET_IN_TOUCH" class="pt-16 max-w-xl">
        <h2>How to reach me.</h2>
      </header>
      <div>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import { TwitterIcon } from "vue-feather-icons";
import { MailIcon } from "vue-feather-icons";
import { ArrowRightIcon } from "vue-feather-icons";
import getSiteMeta from "~/utils/getSiteMeta.js";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "kemiljk",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Home",
        description:
          "A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.",
        url: "https://kejk.tech/",
        image:
          "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | Home",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/" }],
    };
  },
  components: {
    TwitterIcon,
    MailIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      loading: false,
      medias: {},
      albums: {},
      mades: [
        {
          href: "https://apps.apple.com/us/app/id1518887590",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607281437/pxtoem_ubarny.webp",
          title: "Hand››over",
          type: "iOS app",
        },
        {
          href:
            "https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607281435/px2em_qnscic.webp",
          title: "Px››Em",
          type: "Figma plugin installs",
          id: "install-count",
        },
        {
          href: "https://actions.getdrafts.com/a/1fP",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607678050/drafts_cosmic_tykczi.webp",
          title: "Drafts››Cosmic",
          type: "Drafts Action",
        },
        {
          href: "https://www.lazypdf.tech",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607281439/lazyPDF_vxsn1b.webp",
          title: "Lazy PDF",
          type: "macOS app",
        },
      ],
      helpedMakes: [
        {
          href: "https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1606907284/mmac_z5flxv.webp",
          title: "Make Me a Cocktail",
          skill: "Design",
        },
        {
          href: "https://www.confidotalent.com",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607678970/confido_g9gr6k.webp",
          title: "Confido",
          skill: "Design & Development",
        },
        {
          href: "https://www.locallyuk.com",
          img:
            "https://res.cloudinary.com/kejk/image/upload/c_limit,w_400/v1607678848/locally_m7wzjq.webp",
          title: "Locally UK",
          skill: "Design",
        },
      ],
      links: {},
      blogs: {},
      slug: "",
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getLinksData();
    this.getMediasData();
    this.getAlbumsData();
    fetch("../../api/plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("install-count").prepend(data.install_count);
      });
  },
  methods: {
    async getBlogsData() {
      this.error = this.blog = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 1,
          type: "blogs",
          props: "_id,slug,title,content,metadata,modified_at",
        })
        .then((data) => {
          const blogs = data.objects;
          this.loading = false;
          this.blogs = blogs;
        });
    },
    async getLinksData() {
      this.error = this.link = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 1,
          type: "links",
          props: "_id,slug,title,content,metadata",
        })
        .then((data) => {
          const links = data.objects;
          this.loading = false;
          this.links = links;
        });
    },
    async getMediasData() {
      this.error = this.media = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 3,
          type: "medias",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const medias = data.objects;
          this.loading = false;
          this.medias = medias;
        });
    },
    async getAlbumsData() {
      this.error = this.album = null;
      this.loading = true;
      await bucket
        .getObjects({
          type: "albums",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const albums = data.objects;
          this.loading = false;
          this.albums = albums;
        });
    },
  },
};
</script>
