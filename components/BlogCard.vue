<template>
  <NuxtLink 
    :to="`/thoughts/${blog.slug}`"
    class="cursor-pointer"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg"
      v-if="blog.metadata"
    >
      <header class="flex items-center justify-between">
        <h1 class="text-indigo-600 dark:text-indigo-300 px-4 pt-4 pb-0 text-lg font-medium">
          {{ blog.title }}
        </h1>
      <ion-icon name="arrow-forward-outline" class="text-2xl text-black dark:text-white pr-4"></ion-icon>
    </header>
      <p class="text-gray-500 dark:text-gray-400 px-4 pt-0 pb-2">
        {{ blog.metadata.published | moment("DD MMM, YYYY") }}
      </p>
      <p class="text-gray-900 dark:text-gray-50 px-4 pt-2 pb-4">
        {{ blog.metadata.snippet }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>