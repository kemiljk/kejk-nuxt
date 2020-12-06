<template>
  <a 
    :to="blog.metadata.url"
    class="hover:shadow-md rounded-lg cursor-pointer"
  >
    <div
      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 rounded-lg"
    >
      <h1 class="text-indigo-600 px-4 pt-4 pb-0 text-lg font-medium">
        {{ blog.title }}
      </h1>
      <p class="text-gray-500 dark:text-gray-200 px-4 pt-0 pb-2">
        {{ blog.metadata.published | moment("DD MMM, YYYY") }}
      </p>
      <p class="text-gray-900 dark:text-gray-50 px-4 pt-2 pb-4">
        {{ blog.metadata.snippet }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: String,
      default: "No posts are loaded"
    }
  }
};
</script>