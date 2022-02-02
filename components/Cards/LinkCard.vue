<template>
  <a
    :href="link.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="cursor-pointer mb-0"
  >
    <button
      class="text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <header class="flex items-top justify-between pt-4 pb-2">
        <h3
          class="text-black dark:text-white text-lg pt-0 mb-0 font-bold w-full"
        >
          {{ link.title }}
        </h3>
        <external-link-icon
          class="flex-shrink-0 text-neutral-700 dark:text-neutral-300"
        ></external-link-icon>
      </header>
      <p
        class="font-mono text-neutral-500 dark:text-neutral-400 pt-0 font-medium text-sm"
      >
        {{ link.metadata.published | moment("from", "now") }}
      </p>
      <div class="pb-4">
        <Tag color="yellow">
          Link
        </Tag>
      </div>
      <p
        class="text-neutral-700 dark:text-neutral-300 pt-2 pb-4 font-medium mb-0 text-base"
        v-html="link.metadata.snippet"
      >
        {{ link.metadata.snippet }}
      </p>
    </button>
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
