<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive id="HOME" v-scroll-to="'#HOME'">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/bookmarks">Bookmarks</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-5xl mx-auto px-4">
      <Header>Hej, I'm Karl</Header>
      <Subheader>
        <template #text>
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
        </template>
        <template #buttons>
          <div class="flex flex-col md:flex-row md:space-x-2">
            <a href="https://www.twitter.com/_kejk">
              <Button color="blue">
                <template #icon>
                  <twitter-icon size="1x" class="inline-block mr-2 text-white" />
                </template>
                <template #label>
                  Follow me on Twitter
                </template>
              </Button>
            </a>
            <a href="#" v-scroll-to="'#GET_IN_TOUCH'">
              <Button color="grey" class="mt-2 md:mt-0">
                <template #icon>
                  <mail-icon size="1x" class="inline-block mr-2 text-gray-800 dark:text-white" />
                </template>
                <template #label>
                  Get in touch
                </template>
              </Button>
            </a>
          </div>
        </template>
      </Subheader>
      <H2Header class="pt-16">Some things I've made.</H2Header>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="made in mades" :key="made.title">
            <keep-alive>
              <MadeCard :made="made" />
            </keep-alive>
          </div>
        </div>
      </div>
      <H2Header class="pt-16">Thoughts on Design and Development.</H2Header>
      <div class="flex flex-row mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
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
      <MoreLink link="thoughts"> See All </MoreLink>
      <H2Header class="pt-16">Some things I've helped make.</H2Header>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="helpedMake in helpedMakes" :key="helpedMake.title">
            <keep-alive>
              <HelpedMakeCard :helpedMake="helpedMake" />
            </keep-alive>
          </div>
        </div>
      </div>
      <H2Header class="pt-16">Some things I'm currently enjoying.</H2Header>
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
      <H2Header class="pt-16">Music I've written.</H2Header>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="album in albums" :key="album._id">
            <keep-alive>
              <AlbumCard :album="album" />
            </keep-alive>
          </div>
        </div>
      </div>
      <H2Header class="pt-16" id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import { TwitterIcon, MailIcon, ArrowRightIcon } from "vue-feather-icons";
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
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1607350722/og-image_bcs2c8.png",
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
      mades: {},
      helpedMakes: {},
      links: {},
      blogs: {},
      slug: "",
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getLinksData();
    this.getMadesData();
    this.getHelpedMakesData();
    this.getMediasData();
    this.getAlbumsData();
    fetch("../../api/plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("install-count").prepend(data.install_count);
        document.getElementById("like-count").prepend(data.like_count);
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
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
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
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
        })
        .then((data) => {
          const links = data.objects;
          this.loading = false;
          this.links = links;
        });
    },
    async getMadesData() {
      this.error = this.made = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 6,
          type: "mades",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const mades = data.objects;
          this.loading = false;
          this.mades = mades;
        });
    },
    async getHelpedMakesData() {
      this.error = this.helpedMake = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 6,
          type: "helpedmakes",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const helpedMakes = data.objects;
          this.loading = false;
          this.helpedMakes = helpedMakes;
        });
    },
    async getMediasData() {
      this.error = this.media = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 6,
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
