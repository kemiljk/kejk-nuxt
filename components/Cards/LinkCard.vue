<template>
  <a
    :href="link.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="cursor-pointer mb-0"
  >
    <div
      class="hover:px-4 focused:px-4 rounded-lg hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-300"
    >
      <header class="flex items-center justify-between pt-4 pb-2">
        <h1
          class="text-yellow-600 dark:text-yellow-300 text-lg font-bold w-60 md:w-80"
        >
          {{ link.title }}
        </h1>
        <external-link-icon
          class="text-gray-700 dark:text-gray-300"
        ></external-link-icon>
      </header>
      <p class="font-mono text-gray-500 dark:text-gray-400 pt-0 pb-2 font-medium">
        {{ link.metadata.published | moment("from", "now") }}
      </p>
      <p
        class="text-gray-700 dark:text-gray-300 pb-4 font-medium mb-0"
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
