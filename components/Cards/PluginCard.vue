<template>
  <div v-if="plugin.title">
    <a
      :href="plugin.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex w-full">
              <img
                :src="plugin.metadata.hero.imgix_url"
                class="rounded-md max-h-32 sm:max-h-40 mr-4 sm:mr-8 border border-gray-300 dark:border-none"
                alt="Image of media"
              />
              <div>
                <div class="flex justify-between items-center mb-4">
                  <Tag color="pink">Figma</Tag>
                  <external-link-icon
                    class="text-gray-700 dark:text-gray-300"
                    size="1x"
                  ></external-link-icon>
                </div>
                <h4
                  class="pt-1 font-bold text-lg text-gray-900 dark:text-gray-100"
                >
                  {{ plugin.title }}
                </h4>
                <p
                  class="mb-0 pt-2 text-gray-700 dark:text-gray-200 font-mono text-sm"
                >
                  {{ plugin.metadata.subtitle }}
                </p>
                <p
                  class="hidden sm:block mb-0 pt-1 text-gray-500 dark:text-gray-400 text-sm"
                  v-html="plugin.metadata.body"
                ></p>
              </div>
            </div>
          </header>
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
