<template>
  <div class="bg-gray-50 dark:bg-black pb-16 h-full">
    <nav class="flex justify-center p-4">
        <ul class="flex">
            <li class="flex space-x-2">
                <NuxtLink
                v-for="link in links"
                :key="link.label"
                :to="`${link.url}`"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200': isActive }]"
                >
                {{ link.label }}
                </NuxtLink>
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