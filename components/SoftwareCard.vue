<template>
  <a
    :href="software.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <div
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="software.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of software"
          />
          <external-link-icon
            class="text-gray-700 dark:text-gray-300"
          ></external-link-icon>
        </header>
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <div class="flex mb-4">
            <span
              class="flex w-max justify-center text-yellow-700 dark:text-yellow-400 border-2 border-yellow-700 dark:border-yellow-400 rounded-full px-3 py-1 text-xs mr-2"
              v-if="software.metadata.indie"
              >Indie</span
            >
            <span
              class="flex w-max justify-center text-purple-700 dark:text-purple-400 border-2 border-purple-700 dark:border-purple-400 rounded-full px-3 py-1 text-xs mr-2"
              v-if="software.metadata.open_source"
              >Open source</span
            >
          </div>
          <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
            {{ software.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
        >
          {{ software.metadata.subtitle }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Software",
  components: {
    ExternalLinkIcon,
  },
  props: {
    software: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
