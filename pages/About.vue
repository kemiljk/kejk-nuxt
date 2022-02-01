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
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <external-link-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header class="text-left lg:text-center">/about</Header>
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
                class="inline-block mr-2 text-indigo-50 dark:text-neutral-900"
              />
            </template>
            <template #label>
              What I use to get work done
            </template>
          </Button>
        </NuxtLink>
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
          "https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png",
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
