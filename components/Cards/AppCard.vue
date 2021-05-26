<template>
  <div v-if="app.metadata.url">
    <a
      :href="app.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex w-full">
              <img
                :src="app.metadata.cover.imgix_url"
                class="rounded-md max-h-32 sm:max-h-28 mr-4"
                alt="Image of media"
              />
              <div class="w-full">
                <div class="flex justify-between items-center mb-4">
                  <div class="flex space-x-1">
                    <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
                    <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
                  </div>
                  <compass-icon
                    v-if="app.metadata.website"
                    class="text-gray-700 dark:text-gray-300"
                    size="1x"
                  ></compass-icon>
                  <download-icon
                    v-if="app.metadata.download"
                    class="text-gray-700 dark:text-gray-300"
                    size="1x"
                  ></download-icon>
                </div>
                <h4
                  class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"
                >
                  {{ app.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
                >
                  {{ app.metadata.subtitle }}
                </p>
              </div>
            </div>
          </header>
        </div>
      </button>
    </a>
  </div>
  <div v-else>
    <nuxt-link :to="app.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex w-full">
              <img
                :src="app.metadata.cover.imgix_url"
                class="rounded-md max-h-32 sm:max-h-28 mr-4"
                alt="Image of media"
              />
              <div class="w-full">
                <div class="flex justify-between items-center mb-4">
                  <div class="flex space-x-2">
                    <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
                    <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
                  </div>
                  <arrow-right-icon
                    v-if="app.metadata.internal"
                    class="text-gray-700 dark:text-gray-300"
                    size="1x"
                  ></arrow-right-icon>
                </div>
                <h4
                  class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"
                >
                  {{ app.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
                >
                  {{ app.metadata.subtitle }}
                </p>
              </div>
            </div>
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
    app: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
