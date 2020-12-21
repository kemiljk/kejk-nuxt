<template>
  <a
    :href="link.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="cursor-pointer mb-0"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg"
    >
      <header class="flex items-center justify-between px-4 pt-4 pb-2">
        <h1 class="text-yellow-600 dark:text-yellow-300 text-lg font-bold">
          {{ link.title }}
        </h1>
        <external-link-icon
          class="text-gray-700 dark:text-gray-300"
        ></external-link-icon>
      </header>
      <p class="text-gray-500 dark:text-gray-400 px-4 pt-0 pb-2 font-medium">
        {{ link.metadata.published | moment("from", "now") }}
      </p>
      <p
        class="text-gray-700 dark:text-gray-300 px-4 pb-4 font-medium mb-0"
        v-html="link.metadata.snippet"
      >
        {{ link.metadata.snippet }}
      </p>
    </div>
  </a>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Link",
  components: {
    ExternalLinkIcon,
  },
  props: {
    link: {
      type: Object,
      default: () => {
        "No links are loaded";
      },
    },
  },
};
</script>
