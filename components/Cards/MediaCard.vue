<template>
  <a :href="media.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-lg text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="media.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of media"
          />
          <external-link-icon
            class="text-gray-700 dark:text-gray-300"
          ></external-link-icon>
        </header>
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <div class="flex space-x-2 mb-4">
            <Tag color="yellow" v-if="media.metadata.indie">Indie </Tag>
            <Tag color="purple" v-if="media.metadata.open_source"
              >Open source
            </Tag>
          </div>
          <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
            {{ media.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
        >
          {{ media.metadata.subtitle }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Media",
  components: {
    ExternalLinkIcon,
  },
  props: {
    media: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
