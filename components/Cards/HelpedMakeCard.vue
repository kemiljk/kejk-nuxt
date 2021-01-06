<template>
  <a
    :href="helpedMake.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-lg max-w-full"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="helpedMake.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of media"
          />
          <compass-icon
            v-if="helpedMake.metadata.website"
            class="text-gray-700 dark:text-gray-300"
          ></compass-icon>
          <download-icon
            v-if="helpedMake.metadata.download"
            class="text-gray-700 dark:text-gray-300"
          ></download-icon>
        </header>
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <div class="flex space-x-2 mb-4">
            <span
              class="flex justify-center w-max font-mono text-yellow-700 dark:text-yellow-400 border-2 border-yellow-700 dark:border-yellow-400 rounded-full px-3 py-1 text-xs"
              v-if="helpedMake.metadata.design"
              >Design</span
            >
            <span
              class="flex w-max justify-center font-mono text-purple-700 dark:text-purple-400 border-2 border-purple-700 dark:border-purple-400 rounded-full px-3 py-1 text-xs"
              v-if="helpedMake.metadata.development"
              >Development</span
            >
            <span
              class="flex w-max justify-center font-mono text-pink-700 dark:text-pink-400 border-2 border-pink-700 dark:border-pink-400 rounded-full px-3 py-1 text-xs"
              v-if="helpedMake.metadata.consultancy"
              >Consultancy</span
            >
          </div>
          <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
            {{ helpedMake.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
        >
          {{ helpedMake.metadata.subtitle }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
import { DownloadIcon, CompassIcon } from "vue-feather-icons";

export default {
  name: "HelpedMake",
  components: {
    CompassIcon,
    DownloadIcon,
  },
  props: {
    helpedMake: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
