<template>
  <a :href="tool.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800   transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="tool.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of tool"
          />
          <external-link-icon
            class="text-gray-700 dark:text-gray-300"
          ></external-link-icon>
        </header>
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <div class="flex space-x-2 mb-4">
            <Tag v-if="tool.metadata.indie" color="yellow"> Indie </Tag>
            <Tag v-if="tool.metadata.open_source" color="purple">
              Open source
            </Tag>
            <Tag v-if="tool.metadata.company" color="red">
              {{ tool.metadata.company }}
            </Tag>
          </div>
          <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
            {{ tool.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
        >
          {{ tool.metadata.subtitle }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Tools",
  components: {
    ExternalLinkIcon,
  },
  props: {
    tool: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
