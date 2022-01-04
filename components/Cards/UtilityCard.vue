<template>
  <div v-if="utility.metadata.url">
    <a
      :href="utility.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800   transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex w-full justify-between">
            <div class="flex w-full max-w-xl">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="flex  space-x-2">
                    <Tag color="yellow" v-if="utility.metadata.ios">iOS </Tag>
                    <Tag color="purple" v-if="utility.metadata.macos"
                      >macOS
                    </Tag>
                  </div>
                  <compass-icon
                    v-if="utility.metadata.website"
                    size="1x"
                    class="text-neutral-700 dark:text-neutral-300 hidden sm:block flex-shrink-0 "
                  ></compass-icon>
                  <download-icon
                    v-if="utility.metadata.download"
                    class="text-neutral-700 dark:text-neutral-300 hidden sm:block flex-shrink-0 "
                    size="1x"
                  ></download-icon>
                </div>
                <h4
                  class="pt-4 md:pt-2 font-bold text-sm text-neutral-900 dark:text-neutral-100"
                >
                  {{ utility.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
                >
                  {{ utility.metadata.subtitle }}
                </p>
              </div>
            </div>
          </header>
        </div>
      </button>
    </a>
  </div>
  <div v-else>
    <nuxt-link :to="utility.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="bg-neutral-100 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800   transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
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
                  class="pt-4 font-bold text-sm text-neutral-900 dark:text-neutral-100"
                >
                  {{ utility.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
                >
                  {{ utility.metadata.subtitle }}
                </p>
              </div>
            </div>
            <arrow-right-icon
              v-if="utility.metadata.internal"
              class="text-neutral-700 dark:text-neutral-300"
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
