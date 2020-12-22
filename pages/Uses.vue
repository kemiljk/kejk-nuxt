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
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">/uses</h1>
      </header>
      <keep-alive>
        <Uses :uses="uses" />
      </keep-alive>
      <p class="text-gray-500 dark:text-gray-400 px-4 pt-2 font-medium">
        Updated {{ uses.modified_at | moment("from", "now") }}
      </p> 
      <div
        class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
      />
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
        image:
          "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
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
    };
  },
  mounted() {
    this.fetchUsesData();
  },
  methods: {
    async fetchUsesData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "uses",
          props: "slug,title,content,modified_at",
        })
        .then((data) => {
          this.uses = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
