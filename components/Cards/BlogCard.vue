<template>
  <NuxtLink :to="`/thoughts/${blog.slug}`" class="cursor-pointer">
    <button
      class="text-left w-full focus:outline-none focus:ring-2 focus:ring-white group"
      v-if="blog.metadata"
    >
      <header class="flex items-center justify-between pt-4 pb-2">
        <h3
          class="text-black dark:text-white text-lg pt-0 mb-0 font-bold w-full group-hover:underline group-hover:underline-offset-4 group-hover:decoration-indigo-500 group-hover:decoration-2"
        >
          {{ blog.title }}
        </h3>
        <arrow-right-icon
          class="shrink-0 text-neutral-700 dark:text-neutral-300"
          size="16"
        ></arrow-right-icon>
      </header>
      <p
        class="font-mono text-neutral-500 dark:text-neutral-400 pt-0 font-medium text-sm"
      >
        Updated {{ blog.modified_at | moment("from", "now") }}
      </p>
      <div class="flex space-x-2 pb-4">
        <Tag color="indigo">
          {{ blog.metadata.tag }}
        </Tag>
      </div>
      <p
        class="text-neutral-700 dark:text-neutral-300 pt-2 pb-4 font-medium mb-0 text-base"
      >
        {{ blog.metadata.snippet }}
      </p>
    </button>
  </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Blog",
  components: {
    ArrowRightIcon,
  },
  props: {
    blog: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
