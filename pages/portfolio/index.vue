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
    <div class="max-w-5xl mx-auto px-4">
      <!--<Header>Featured projects</Header>
      <div class="flex flex-row mt-4">
      <div class="grid w-full sm:grid-cols-2 gap-4">
      <div v-for="portfolio in portfolios" :key="portfolio.id">
      <keep-alive>
      <PortfolioCard :portfolio="portfolio" />
      </keep-alive>
      </div>
      </div>
      </div>-->
      <Header>Live projects</Header>
      <H2Header class="pt-4">Things I've built.</H2Header>
      <div class="flex flex-row">
        <div class="grid w-full sm:grid-cols-2 gap-4">
          <PluginCard :plugin="plugin" />
          <div v-for="app in apps" :key="app.title">
            <keep-alive>
              <AppCard :app="app" />
            </keep-alive>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="utility in utilities" :key="utility.title">
              <keep-alive>
                <UtilityCard :utility="utility" />
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
      <H2Header class="mt-16">Things I've helped to make.</H2Header>
      <div
        class="mt-4 grid grid-row xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4"
      >
        <div v-for="helpedMake in helpedMakes" :key="helpedMake.title">
          <keep-alive>
            <HelpedMakeCard :helpedMake="helpedMake" />
          </keep-alive>
        </div>
      </div>
    </div>
    <Divider />
      <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
  </div>
</template>

<script>
import {
  InfoIcon,
  MailIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "vue-feather-icons";
import getSiteMeta from "~/utils/getSiteMeta.js";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  name: "PortfolioGrid",
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Portfolio",
        description:
          "A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.",
        url: "https://kejk.tech/",
        mainImage:
          "https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | Portfolio",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/portfolio" }],
    };
  },
  components: {
    InfoIcon,
    MailIcon,
    ArrowRightIcon,
    ExternalLinkIcon,
  },
  data() {
    return {
      loading: false,
      portfolios: {},
      plugin: {},
      apps: {},
      utilities: {},
      helpedMakes: {},
      slug: "",
      id: "",
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.id = this.$route.params.id;
    this.getPortfoliosData();
    this.fetchPluginData();
    this.getAppsData();
    this.getUtilitiesData();
    this.getHelpedMakesData();
  },
  methods: {
    async getPortfoliosData() {
      this.error = this.portfolio = null;
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "portfolios",
          },
          props: "id,slug,content,title,metadata",
        })
        .then((data) => {
          const portfolios = data.objects;
          this.loading = false;
          this.portfolios = portfolios;
        });
    },
    async fetchPluginData() {
      this.loading = true;
      await bucket
        .getObject({
          id: "605cc05178306b0007588909",
          props: "slug,title,content,metadata",
        })
        .then((data) => {
          this.plugin = data.object;
          this.loading = false;
        });
    },
    async getAppsData() {
      this.error = this.app = null;
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "apps",
          },
          props: "_id,slug,title,content,metadata,created_at,modified_at",
          sort: "created_at",
        })
        .then((data) => {
          const apps = data.objects;
          this.loading = false;
          this.apps = apps;
        });
    },
    async getUtilitiesData() {
      this.error = this.utility = null;
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "utilities",
          },
          props: "_id,title,metadata",
        })
        .then((data) => {
          const utilities = data.objects;
          this.loading = false;
          this.utilities = utilities;
        });
    },
    async getHelpedMakesData() {
      this.error = this.helpedMake = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 6,
          query: {
            type: "helpedmakes",
          },
          props: "_id,title,metadata",
        })
        .then((data) => {
          const helpedMakes = data.objects;
          this.loading = false;
          this.helpedMakes = helpedMakes;
        });
    },
  },
};
</script>
