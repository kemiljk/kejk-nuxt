<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses" isActive>Uses</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          /Uses
        </h1>
      </header>
      <div v-for="gear in gears" :key="gear._id">
        <keep-alive>
          <Uses :gear="gear" /> 
        </keep-alive>
        <div class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800" />
        <header>
          <h2>
            How to reach me.
          </h2>
        </header>
        <div> 
          <GetInTouch />
        </div>
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
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Uses",
        description: "Karl's Product Design and Development EDC and equipment",
        url: "https://kejk.tech/uses",
        image: "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: "KEJK | Uses",
        meta: [
        ...this.meta,
        ], link: [ { rel: 'canonical', href: "https://kejk.tech/uses"} ]
    }
  },
  data() {
    return {
      gears: {},
    }
  },
  created() {
    this.getGearsData();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async getGearsData() {
        // this.error = this.use = null;
        this.loading = true;
        await bucket
        .getObjects({
            limit: 1,
            type: "gears",
            props: "_id,slug,content"
        })
        .then(data => {
            const gears = data.objects;
            this.loading = false;
            this.gears = gears;
        });
    },
    async fetchData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          this.gear = data.object;
          this.loading = false;
        });
    },
  },
};
</script>