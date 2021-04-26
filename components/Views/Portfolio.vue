<template>
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1>
          {{ portfolio.title }}
        </h1>
      </div>
    </div>
    <div>
      <section
        v-html="portfolio.content"
        class="text-black dark:text-gray-300 mt-8"
      />
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
  name: "Portfolio",
  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
  },
  // computed: {
  //   meta() {
  //     const metaData = {
  //       query: {
  //         type: "portfolios",
  //       },
  //       title: this.portfolio.title,
  //       description: this.portfolio.metadata.description,
  //       url: "https://kejk.tech/portfolio/" + `${this.$route.query.id}`,
  //       mainImage: this.portfolio.metadata.hero.imgix_url,
  //     };
  //     return getSiteMeta(metaData);
  //   },
  // },
  // head() {
  //   return {
  //     title: this.portfolio.title,
  //     meta: [...this.meta],
  //     link: [
  //       {
  //         rel: "canonical",
  //         href: `https://kejk.tech/portfolio/${this.$route.query.id}`,
  //       },
  //     ],
  //   };
  // },
};
</script>
