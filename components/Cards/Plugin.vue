<template>
  <div v-if="plugin.title">
    <a
      :href="plugin.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800   transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="px-4 py-4">
          <header class="mb-4 flex items-start justify-between">
            <div class="flex max-w-xl">
              <img
                :src="plugin.metadata.hero.imgix_url"
                class="rounded-md max-h-24 sm:max-h-32 mr-4 sm:mr-8 border border-gray-300 dark:border-none"
                alt="Image of media"
              />
              <div>
                <h4 class="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {{ plugin.title }}
                </h4>
                <p
                  class="mb-0 pt-2 text-gray-700 dark:text-gray-200 font-mono text-sm"
                >
                  {{ plugin.metadata.subtitle }}
                </p>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 text-sm"
                  v-html="plugin.metadata.body"
                ></p>
              </div>
            </div>
            <external-link-icon
              class="text-gray-700 dark:text-gray-300 -mt-2 sm:mt-0 h-10 w-10 sm:h-6"
            ></external-link-icon>
          </header>
          <hr
            class="border border-gray-300 dark:border-gray-800"
          />
          <div class="flex items-center space-x-4 mt-2">
            <Tag color="pink">Figma</Tag>
          </div>
        </div>
      </button>
    </a>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Plugin",
  components: {
    ExternalLinkIcon,
  },
  props: {
    plugin: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
