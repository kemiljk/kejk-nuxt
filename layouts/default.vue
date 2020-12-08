<template>
  <div class="pb-16 h-full w-full">
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
        class: 'bg-white dark:bg-black'
      }
    }
  },
};
</script>