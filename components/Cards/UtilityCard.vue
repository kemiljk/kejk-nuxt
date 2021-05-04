<template>
  <div v-if="utility.metadata.url">
    <a
      :href="utility.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800   transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex max-w-xl">
              <img
                :src="utility.metadata.cover.imgix_url"
                class="rounded-md max-h-32 sm:max-h-28 mr-4"
                alt="Image of media"
              />
              <div>
                <div class="flex space-x-2 mb-4">
                  <Tag color="yellow" v-if="utility.metadata.ios">iOS </Tag>
                  <Tag color="purple" v-if="utility.metadata.macos">macOS </Tag>
                </div>
                <h4
                  class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"
                >
                  {{ utility.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
                >
                  {{ utility.metadata.subtitle }}
                </p>
              </div>
            </div>
            <compass-icon
              v-if="utility.metadata.website"
              class="text-gray-700 dark:text-gray-300"
            ></compass-icon>
            <download-icon
              v-if="utility.metadata.download"
              class="text-gray-700 dark:text-gray-300"
              size="1x"
            ></download-icon>
          </header>
        </div>
      </button>
    </a>
  </div>
  <div v-else>
    <nuxt-link :to="utility.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800   transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex max-w-xl">
              <img
                :src="utility.metadata.cover.imgix_url"
                class="rounded-md max-h-24 sm:max-h-28 mr-4"
                alt="Image of media"
              />
              <div>
                <div class="flex space-x-2 mb-4">
                  <Tag color="yellow" v-if="utility.metadata.ios">iOS </Tag>
                  <Tag color="purple" v-if="utility.metadata.macos">macOS </Tag>
                </div>
                <h4
                  class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"
                >
                  {{ utility.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
                >
                  {{ utility.metadata.subtitle }}
                </p>
              </div>
            </div>
            <arrow-right-icon
              v-if="utility.metadata.internal"
              class="text-gray-700 dark:text-gray-300"
            ></arrow-right-icon>
          </header>
        </div>
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import {
  ArrowRightIcon,
  CompassIcon,
  DownloadIcon,
  HeartIcon,
} from "vue-feather-icons";

export default {
  name: "App",
  components: {
    ArrowRightIcon,
    CompassIcon,
    DownloadIcon,
    HeartIcon,
  },
  props: {
    utility: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
