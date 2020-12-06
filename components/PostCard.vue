<template>
   <a 
    :href="post.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="hover:shadow-md rounded-lg cursor-pointer"
  >
    <div
      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 rounded-lg"
    >
      <h1 class="text-yellow-600 px-4 pt-4 pb-0 text-lg font-medium">
        {{ post.title }}
      </h1>
      <p class="text-gray-500 dark:text-gray-200 px-4 pt-0 pb-2">
        {{ post.metadata.published | moment("DD MMM, YYYY") }}
      </p>
      <p class="text-gray-900 dark:text-gray-50 px-4 pt-2 pb-4">
        {{ post.metadata.snippet }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: String,
      default: "No post are loaded"
    }
  }
};
</script>