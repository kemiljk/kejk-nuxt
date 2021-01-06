<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses" isActive id="USES" v-scroll-to="'#USES'"
        >Uses</NavItem
      >
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
      <header>
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
        title: "KEJK | Uses",
        description: "Karl's Product Design and Development EDC and equipment",
        url: "https://kejk.tech/uses",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | Uses",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/uses" }],
    };
  },
  data() {
    return {
      uses: {},
      tools: {},
      softwares: {},
    };
  },
  created() {
    this.fetchSoftwareData();
    this.fetchToolsData();
    this.fetchUsesData();
  },
  methods: {
    async fetchSoftwareData() {
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
    async fetchToolsData() {
      this.loading = true;
      await bucket
        .getObjects({
          type: "tools",
          props: "_id,title,metadata,modified_at",
          sort: "created_at",
        })
        .then((data) => {
          const tools = data.objects;
          this.loading = false;
          this.tools = tools;
        });
    },
    async fetchUsesData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "uses",
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
