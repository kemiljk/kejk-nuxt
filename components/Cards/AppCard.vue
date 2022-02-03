<template>
  <div v-if="app.metadata.url">
    <a
      :href="app.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 rounded-3xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"
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
                    class="text-neutral-700 dark:text-neutral-300"
                    size="1x"
                  ></compass-icon>
                  <download-icon
                    v-if="app.metadata.download"
                    class="text-neutral-700 dark:text-neutral-300"
                    size="1x"
                  ></download-icon>
                </div>
                <h4
                  class="pt-4 md:pt-2 font-bold text-sm text-neutral-900 dark:text-neutral-100"
                >
                  {{ app.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
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
        class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 rounded-3xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
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
                    class="text-neutral-700 dark:text-neutral-300"
                    size="1x"
                  ></arrow-right-icon>
                </div>
                <h4
                  class="pt-4 md:pt-2 font-bold text-sm text-neutral-900 dark:text-neutral-100"
                >
                  {{ app.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
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
