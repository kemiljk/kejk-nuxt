<template>
  <a :href="software.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-lg text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
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
          <div class="flex space-x-2 mb-4">
            <Tag v-if="software.metadata.indie" color="yellow"> Indie </Tag>
            <Tag v-if="software.metadata.open_source" color="purple">
              Open source
            </Tag>
            <Tag v-if="software.metadata.company" color="red">
              {{ software.metadata.company }}
            </Tag>
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
    </button>
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
