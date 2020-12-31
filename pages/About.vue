<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about" isActive id="ABOUT" v-scroll-to="'#ABOUT'"
        >About</NavItem
      >
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">/about</h1>
      </header>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <keep-alive>
            <About :about="about" />
          </keep-alive>
        </div>
      </div>
      <header class="pt-4 max-w-xl">
        <h2>Where to find me.</h2>
      </header>
      <div class="flex flex-row">
        <div class="grid grid-row grid-cols-2 md:grid-cols-6 w-full gap-4">
          <div v-for="social in socials" :key="social._id">
            <keep-alive>
              <SocialCard :social="social" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div
        class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
      />
      <header>
        <h2>About this site.</h2>
      </header>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="software in softwares" :key="software._id">
            <keep-alive>
              <SoftwareCard :software="software" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div
        class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
      />
      <header class="max-w-xl">
        <h2>How to reach me.</h2>
      </header>
      <div>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
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
        title: "KEJK | About",
        description:
          "Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",
        url: "https://kejk.tech/about",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | About",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/about" }],
    };
  },
  data() {
    return {
      loading: false,
      tech: {},
      about: {},
      softwares: {},
      socials: [
        {
          href: "https://www.twitter.com/_kejk",
          twitter: true,
          title: "Twitter",
        },
        {
          href: "https://www.Linkedin.com/kejk",
          linkedin: true,
          title: "LinkedIn",
        },
        {
          href: "https://www.figma.com/@_kejk",
          figma: true,
          title: "Figma",
        },
        {
          href: "https://www.github.com/kemiljk/",
          github: true,
          title: "Github",
        },
        {
          href: "https://dribbble.com/_kejk",
          dribbble: true,
          title: "Dribbble",
        },
        {
          href: "https://music.apple.com/gb/album/cornerstone/1300802348",
          music: true,
          title: "Music",
        },
      ],
    };
  },
  created() {
    this.fetchSoftwareData();
  },
  mounted() {
    this.fetchTechsData();
    this.fetchAboutData();
  },
  methods: {
    async fetchTechsData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "site-uses",
          props: "slug,title,content",
        })
        .then((data) => {
          this.tech = data.object;
          this.loading = false;
        });
    },
    async fetchSoftwareData() {
      this.error = this.software = null;
      this.loading = true;
      await bucket
        .getObjects({
          type: "softwares",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const softwares = data.objects;
          this.loading = false;
          this.softwares = softwares;
        });
    },
    async fetchAboutData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "about",
          props: "slug,title,content",
        })
        .then((data) => {
          this.about = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
