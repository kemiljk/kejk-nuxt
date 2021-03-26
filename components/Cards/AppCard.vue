<template>
  <div v-if="app.metadata.url">
    <a
      :href="app.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="px-4 py-4">
          <header class="mb-4 flex justify-between">
            <img
              :src="app.metadata.cover.imgix_url"
              class="rounded-md max-h-24"
              alt="Image of media"
            />
            <compass-icon
              v-if="app.metadata.website"
              class="text-gray-700 dark:text-gray-300"
            ></compass-icon>
            <download-icon
              v-if="app.metadata.download"
              class="text-gray-700 dark:text-gray-300"
            ></download-icon>
          </header>
          <div
            class="divide-y divide-solid divide-gray-300 dark:divide-gray-800"
          >
            <div class="flex space-x-2 mb-4">
              <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
              <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
            </div>
            <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
              {{ app.title }}
            </h4>
          </div>
          <p
            class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
          >
            {{ app.metadata.subtitle }}
          </p>
        </div>
      </button>
    </a>
  </div>
  <div v-else>
    <nuxt-link :to="app.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="px-4 py-4">
          <header class="mb-4 flex justify-between">
            <img
              :src="app.metadata.cover.imgix_url"
              class="rounded-md max-h-24"
              alt="Image of media"
            />
            <arrow-right-icon
              v-if="app.metadata.internal"
              class="text-gray-700 dark:text-gray-300"
            ></arrow-right-icon>
          </header>
          <div
            class="divide-y divide-solid divide-gray-300 dark:divide-gray-800"
          >
            <div class="flex space-x-2 mb-4">
              <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
              <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
            </div>
            <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
              {{ app.title }}
            </h4>
          </div>
          <p
            class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
          >
            {{ app.metadata.subtitle }}
          </p>
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
