<template>
  <section v-html="tech.content" class="text-black dark:text-gray-300"
  />
</template>

<script>

export default {
  name: "SiteUses",
  props: {
    tech: {
      type: Object,
      default: () => {}
    }
  },
};
</script>