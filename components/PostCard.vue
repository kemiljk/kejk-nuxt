<template>
   <a 
    :href="post.metadata.url"
    target="`_blank"
    rel="noreferrer"
    class="cursor-pointer"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg"
    >
    <header class="flex items-center justify-between">
      <h1 class="text-yellow-600 dark:text-yellow-300 px-4 pt-4 pb-0 text-lg font-medium">
        {{ post.title }}
      </h1>
      <external-link-icon class="text-gray-700 dark:text-gray-300 mr-4"></external-link-icon>
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
import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
  name: "Post",
  components: {
    ExternalLinkIcon
  },
  props: {
    post: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>