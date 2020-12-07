<template>
  <a
    :href="media.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <div class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg">
      <div class="px-4 py-4">
      <header class="flex justify-between">
        <img
          :src="media.metadata.cover.imgix_url"
          class="rounded-md max-h-24"
          />
          <ion-icon name="link-outline" class="text-2xl text-black dark:text-white pr-4"></ion-icon>
        </header>
        <div class="mt-4">
          <p class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ media.title }}
          </p>
          <p class="pt-2 text-gray-400 dark:text-gray-200">
            {{ media.metadata.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Media",
  props: {
    media: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>