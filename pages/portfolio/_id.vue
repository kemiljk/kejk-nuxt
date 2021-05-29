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
      <NavItem to="/portfolio" isActive id="PROJECTS" v-scroll-to="'#PROJECTS'"
        >Projects</NavItem
      >
    </Nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="portfolio"> Back to all</BackLink>
        </div>
        <div v-if="this.loading === true">
          Loading...
        </div>
        <Portfolio :portfolio="portfolio" />
        <div class="flex flex-row pt-16">
          <BackLink link="portfolio"> Back to all</BackLink>
        </div>
        <div
          class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
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
