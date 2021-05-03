<template>
  <a :href="helpedMake.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="text-left bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800   transition ease-in-out duration-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="p-4">
        <header class="flex justify-between">
          <div class="flex max-w-xl">
            <img
              :src="helpedMake.metadata.cover.imgix_url"
              class="rounded-md max-h-20 sm:max-h-24 mr-4"
              alt="Image of media"
            />
            <div>
              <h4 class="font-bold text-sm text-gray-900 dark:text-gray-100">
                {{ helpedMake.title }}
              </h4>
              <p
                class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
              >
                {{ helpedMake.metadata.subtitle }}
              </p>
            </div>
          </div>
          <compass-icon
            v-if="helpedMake.metadata.website"
            class="text-gray-700 dark:text-gray-300"
          ></compass-icon>
          <download-icon
            v-if="helpedMake.metadata.download"
            class="text-gray-700 dark:text-gray-300"
          ></download-icon>
        </header>
        <div class="flex space-x-2 mt-4 overflow-x-scroll">
          <Tag color="yellow" v-if="helpedMake.metadata.design">Design </Tag>
          <Tag color="purple" v-if="helpedMake.metadata.development"
            >Development
          </Tag>
          <Tag color="pink" v-if="helpedMake.metadata.brand">Brand</Tag>
        </div>
      </div>
    </button>
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
