<template>
  <NuxtLink :to="`/thoughts/${blog.slug}`" class="cursor-pointer">
    <button
      class="text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      v-if="blog.metadata"
    >
      <header class="flex items-top justify-between pt-4 pb-2">
        <h1
          class="text-indigo-600 dark:text-indigo-300 text-lg font-bold w-60 md:w-80"
        >
          {{ blog.title }}
        </h1>
        <arrow-right-icon
          class="text-gray-700 dark:text-gray-300"
        ></arrow-right-icon>
      </header>
      <p class="font-mono text-gray-500 dark:text-gray-400 pt-0 font-medium">
        Updated {{ blog.modified_at | moment("from", "now") }}
      </p>
      <div class="flex space-x-2 pb-4">
        <Tag v-if="blog === blogs[0]" color="green"> New </Tag>
        <Tag color="indigo">
          {{ blog.metadata.tag }}
        </Tag>
      </div>
      <p class="text-gray-700 dark:text-gray-300 pt-2 pb-4 font-medium mb-0">
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
    blogs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
