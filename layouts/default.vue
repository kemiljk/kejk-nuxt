<template>
  <div class="bg-gray-50 dark:bg-black pb-8">
    <nav class="flex justify-center p-4">
        <ul class="flex">
            <li class="flex space-x-2">
                <nuxt-link
                v-for="link in links"
                :key="link.label"
                :to="`${link.url}`"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 text-indigo-700': isActive }]"
                >
                {{ link.label }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
          {
            label: "Home",
            url: "/",
          },
          {
            label: "About",
            url: "/about",
          },
          {
            label: "Thoughts",
            url: "/thoughts",
          },
          {
            label: "Uses",
            url: "/uses",
          },
      ],
    };
  },
};
</script>