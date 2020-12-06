<template>
  <div class="divide-y divide-gray-100">
    <nav class="p-4">
        <ul class="flex space-x-2">
            <li class="flex space-x-2">
                <nuxt-link
                v-for="link in links"
                :key="link.label"
                :to="`${link.url}`"
                :class="['block px-4 py-2 rounded-md', { 'bg-indigo-100 text-indigo-700': isActive }]"
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