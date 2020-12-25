<template>
  <NuxtLink :to="`/thoughts/${blog.slug}`" class="cursor-pointer">
    <div
      class="hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition ease-in-out duration-300 rounded-lg"
      v-if="blog.metadata"
    >
      <header class="flex items-center justify-between px-4 pt-4 pb-2">
        <h1 class="text-indigo-600 dark:text-indigo-300 text-lg font-bold w-60 md:w-80">
          {{ blog.title }}
        </h1>
        <arrow-right-icon
          class="text-gray-700 dark:text-gray-300"
        ></arrow-right-icon>
      </header>
      <p class="text-gray-500 dark:text-gray-400 px-4 pt-0 font-medium">
        Updated {{ blog.modified_at | moment("from", "now") }}
      </p>
      <div class="pl-4">
      <span class="w-max text-green-700 dark:text-green-400 border-2 border-green-700 dark:border-green-400 rounded-full px-3 py-1 text-sm" v-if="blog.metadata.published === today || >= lastWeek">New</span>
      <p class="w-max text-indigo-700 dark:text-indigo-400 border-2 border-indigo-700 dark:border-indigo-400 rounded-full px-3 py-1 text-sm"
        >
          {{ blog.metadata.tag }}
        </p>
        </div>
      <p class="text-gray-700 dark:text-gray-300 px-4 pt-2 pb-4 font-medium mb-0">
        {{ blog.metadata.snippet }}
      </p>
    </div>
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
  computed: {
    today() {
      let currentDate = new Date();
      let cDay = currentDate.getDate();
      let cMonth = currentDate.getMonth() + 1;
      let cYear = currentDate.getFullYear();
    return cDay + "/" + cMonth + "/" + cYear
    },
    lastWeek() {
      var lastWeek = new Date();
      var pastDate = lastWeek.getDate() - 7;
      lastWeek.setDate(pastDate);
    return lastWeek
    }
  },
};
</script>
