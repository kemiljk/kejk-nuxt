<template v-if="portfolio.metadata">
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left">
      <div class="flex flex-col col-span-full md:col-span-6">
        <img
          :src="portfolio.metadata.featured.imgix_url"
          class="w-full rounded-xl mb-4"
        />
        <h1>
          {{ portfolio.title }}
        </h1>
        <h3>{{ portfolio.metadata.description }}</h3>
      </div>
    </div>
    <div>
      <section
        v-html="portfolio.content"
        class="text-black dark:text-neutral-300 mt-8"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
