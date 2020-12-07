<template>
  <div class="bg-gray-50 dark:bg-black pb-16 h-full">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: Boolean,
      links: [
          {
            label: "Home",
            url: "/",
            isActive: true,
          },
          {
            label: "About",
            url: "/about",
            isActive: true,
          },
          {
            label: "Thoughts",
            url: "/thoughts",
            isActive: true,
          },
          {
            label: "Uses",
            url: "/uses",
            isActive: true,
          },
      ],
    };
  },
};
</script>