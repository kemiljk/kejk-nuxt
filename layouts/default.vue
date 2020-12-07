<template>
  <div class="pb-16 h-full">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: Boolean,
    };
  },
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-50 dark:bg-black'
      }
    }
  },
};
</script>