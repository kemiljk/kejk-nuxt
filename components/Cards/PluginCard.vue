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
                class="rounded-md max-h-32 sm:max-h-28 mr-4 border border-gray-300 dark:border-none"
                alt="Image of media"
              />
              <div class="w-full">
                <div class="flex justify-between items-center mb-4">
                  <Tag color="pink">Figma</Tag>
                  <external-link-icon
                    class="text-gray-700 dark:text-gray-300"
                    size="1x"
                  ></external-link-icon>
                </div>
                <h4
                  class="pt-4 md:pt-2 font-bold text-sm text-gray-900 dark:text-gray-100"
                >
                  {{ plugin.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
                >
                  {{ plugin.metadata.subtitle }}
                </p>
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
