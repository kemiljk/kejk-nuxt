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
      <NavItem to="/portfolio" isActive id="PROJECTS" v-scroll-to="'#PROJECTS'"
        >Projects</NavItem
      >
    </Nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="portfolio"> Back to all</BackLink>
        </div>
        <div class="flex" v-if="this.loading === true">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-600 dark:text-neutral-400"
            style="z-index: -1;"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              class="fill-current text-neutral-600 dark:text-neutral-400"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h3 class="text-md font-md text-neutral-600 dark:text-neutral-400">
            Loading...
          </h3>
        </div>
        <Portfolio :portfolio="portfolio" />
        <div class="flex flex-row pt-16">
          <BackLink link="portfolio"> Back to all</BackLink>
        </div>
        <div
          class="mt-16 pb-16 border-t-2 border-neutral-200 dark:border-neutral-800"
        />
        <header class="mt-4">
          <h2>How to reach me.</h2>
        </header>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  name: "PortfolioView",
  components: {
    ExternalLinkIcon,
  },
  data() {
    return {
      loading: false,
      portfolio: {},
      id: "",
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.fetchPortfolioData();
  },
  methods: {
    async fetchPortfolioData() {
      this.loading = true;
      await bucket
        .getObject({
          id: this.id,
          props: "id,slug,title,content,metadata",
        })
        .then((data) => {
          this.portfolio = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
