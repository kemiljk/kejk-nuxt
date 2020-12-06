<template>
  <a
    :href="media.metadata.url"
    target="`_blank"
    rel="noreferrer"
  >
    <div class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 rounded-lg">
      <div class="px-4 py-4">
      <img
        :src="media.metadata.cover.imgix_url"
        class="rounded-md max-h-24"
        />
        <div class="mt-4">
          <p class="text-lg font-medium">{{ media.title }}</strong>
          <p class="pt-2 text-gray-400">{{ media.metadata.subtitle }}</p>
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
      type: String,
      default: "No posts are loaded"
    }
  }
};
</script>