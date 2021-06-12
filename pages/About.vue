<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem href="https://www.plugins.run" extLink>
        <span class="flex items-center">
          Plugins
          <external-link-icon
            size="1x"
            class="ml-2 text-indigo-700 dark:text-gray-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>/about</Header>

      <div class="flex flex-row pt-8">
        <keep-alive>
          <About :about="about" />
        </keep-alive>
      </div>
      <div class="flex flex-col sm:flex-row sm:space-x-2">
        <a
          class="py-2 sm:py-4 no-underline"
          href="https://changelog.kejk.tech"
          target="_blank"
        >
          <Button color="indigo" class="w-full sm:w-max">
            <template #icon>
              <external-link-icon
                size="1x"
                class="inline-block mr-2 text-indigo-50"
              />
            </template>
            <template #label>
              My personal changelog
            </template>
          </Button>
        </a>
        <NuxtLink class="sm:py-4 no-underline" to="/uses">
          <Button color="white" class="w-full sm:w-max">
            <template #icon>
              <arrow-right-icon
                size="1x"
                class="inline-block mr-2 text-indigo-50 dark:text-gray-900"
              />
            </template>
            <template #label>
              What I use to get work done
            </template>
          </Button>
        </NuxtLink>
      </div>
      <H2Header class="pt-16">Where to find me.</H2Header>
      <div class="flex flex-row">
        <div class="grid grid-row grid-cols-2 md:grid-cols-6 w-full gap-4">
          <div v-for="social in socials" :key="social._id">
            <keep-alive>
              <SocialCard :social="social" />
            </keep-alive>
          </div>
        </div>
      </div>
      <Divider />
      <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon, ArrowRightIcon } from "vue-feather-icons";
import getSiteMeta from "~/utils/getSiteMeta.js";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "About | KEJK",
        description:
          "Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",
        url: "https://kejk.tech/about",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "About | KEJK",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/about" }],
    };
  },
  components: {
    ExternalLinkIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      loading: false,
      tech: {},
      about: {},
      socials: [
        {
          href: "https://www.figma.com/@_kejk",
          figma: true,
          title: "Figma",
        },
        {
          href: "https://www.twitter.com/_kejk",
          twitter: true,
          title: "Twitter",
        },
        {
          href: "https://www.Linkedin.com/in/kejk",
          linkedin: true,
          title: "LinkedIn",
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
          href: "https://www.ko-fi.com/kemiljk",
          coffee: true,
          title: "Ko-Fi",
        },
      ],
    };
  },
  created() {
    this.fetchAboutData();
  },
  methods: {
    async fetchAboutData() {
      this.loading = true;
      await bucket
        .getObject({
          id: "5fdb8a89a42cd10007b3cb29",
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
