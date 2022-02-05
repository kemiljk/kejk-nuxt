<template>
  <a
    :href="feature.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="cursor-pointer mb-0"
  >
    <button
      class="text-left w-full p-4 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition ease-out duration-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div>
        <header class="flex items-center justify-between">
          <h3
            class="text-black dark:text-white text-base pt-0 mb-0 font-bold w-full"
          >
            {{ feature.title }}
          </h3>
          <arrow-up-right-icon
            class="shrink-0 text-neutral-700 dark:text-neutral-300"
            size="16"
          ></arrow-up-right-icon>
        </header>
        <p class="text-neutral-700 dark:text-neutral-300 pt-2 mb-0 text-sm">
          {{ feature.metadata.snippet }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "Feature",
  components: {
    ArrowUpRightIcon,
  },
  props: {
    feature: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
