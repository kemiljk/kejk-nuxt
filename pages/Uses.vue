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
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>/uses</Header>
      <div class="flex flex-row pt-8">
        <keep-alive>
          <Uses :uses="uses" />
        </keep-alive>
      </div>
      <h3>Software.</h3>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
        >
          <div v-for="tool in tools" :key="tool._id">
            <keep-alive>
              <ToolsCard :tool="tool" />
            </keep-alive>
          </div>
        </div>
      </div>
      <Divider />
      <H2Header>How this site works.</H2Header>
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
      <Divider />
      <H2Header>Things I'm currently enjoying.</H2Header>
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
      <Divider />
      <H2Header>
        How to reach me.
      </H2Header>
      <div>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
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
        title: "Uses | KEJK",
        description: "Karl's Product Design and Development EDC and equipment",
        url: "https://kejk.tech/uses",
        mainImage:
          "https://imgix.cosmicjs.com/17dbe8e0-4b69-11ec-9940-53a088b36636-meta.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Uses | KEJK",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/uses" }],
    };
  },
  components: {
    ExternalLinkIcon,
  },
  data() {
    return {
      uses: {},
      tools: {},
      medias: {},
      softwares: {},
    };
  },
  created() {
    this.fetchSoftwareData();
    this.fetchToolsData();
    this.fetchMediasData();
    this.fetchUsesData();
  },
  methods: {
    async fetchSoftwareData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "softwares",
          },
          props: "_id,title,metadata",
        })
        .then((data) => {
          const softwares = data.objects;
          this.loading = false;
          this.softwares = softwares;
        });
    },
    async fetchToolsData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "tools",
          },
          props: "_id,title,metadata,modified_at",
          sort: "created_at",
        })
        .then((data) => {
          const tools = data.objects;
          this.loading = false;
          this.tools = tools;
        });
    },
    async fetchMediasData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "medias",
          },
          props: "_id,title,metadata,modified_at",
          sort: "-created_at",
        })
        .then((data) => {
          const medias = data.objects;
          this.loading = false;
          this.medias = medias;
        });
    },
    async fetchUsesData() {
      this.loading = true;
      await bucket
        .getObject({
          id: "5fd0a43f831dc500070c39ea",
          props: "slug,title,content",
        })
        .then((data) => {
          this.uses = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
