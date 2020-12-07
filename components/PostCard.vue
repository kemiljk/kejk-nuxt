<template>
   <a 
    :href="post.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="hover:shadow-md transition ease-in-out duration-300  rounded-lg cursor-pointer"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-md transition ease-in-out duration-300  rounded-lg"
    >
    <header class="flex items-center justify-between">
      <h1 class="text-yellow-600 dark:text-yellow-300 px-4 pt-4 pb-0 text-lg font-medium">
        {{ post.title }}
      </h1>
      <ion-icon name="link-outline" class="text-2xl text-black dark:text-white pr-4"></ion-icon>
    </header>
      <p class="text-gray-500 dark:text-gray-400 px-4 pt-0 pb-2">
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
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>