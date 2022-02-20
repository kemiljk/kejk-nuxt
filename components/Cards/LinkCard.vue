<template>
  <div class="group w-full text-left">
    <a
      :href="link.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="mb-0 cursor-pointer no-underline"
    >
      <header class="flex items-center justify-between pt-4 pb-2">
        <h3
          class="mb-0 w-full pt-0 text-lg font-bold text-black group-hover:underline group-hover:decoration-yellow-500 group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white"
        >
          {{ link.title }}
        </h3>
        <arrow-up-right-icon
          class="shrink-0 text-neutral-700 dark:text-neutral-300"
          size="16"
        ></arrow-up-right-icon>
      </header>
      <div class="flex items-center justify-between">
        <Tag color="yellow"> Link </Tag>
      <p class="pt-0 font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {{ link.metadata.published | moment("from", "now") }}
      </p>
      </div>
      <p
        class="mb-0 pt-2 pb-4 font-normal text-neutral-700 dark:text-neutral-300"
        v-html="link.metadata.snippet"
      >
        {{ link.metadata.snippet }}
      </p>
    </a>
  </div>
</template>

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "Link",
  components: {
    ArrowUpRightIcon,
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
