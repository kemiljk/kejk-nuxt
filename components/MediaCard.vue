<template>
  <a
    :href="media.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <div class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg">
      <div class="px-4 py-4">
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <header class="mb-4 flex justify-between">
            <img
            :src="media.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            />
            <external-link-icon class="text-gray-700 dark:text-gray-300"></external-link-icon>
          </header>
            <h4 class="pt-2 font-medium text-gray-900 dark:text-gray-100">
              {{ media.title }}
            </h4>
          </div>
          <p class="mb-0 text-gray-500 dark:text-gray-200">
            {{ media.metadata.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
  name: "Media",
  components: {
    ExternalLinkIcon
  },
  props: {
    media: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>