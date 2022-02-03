<template>
  <a :href="tool.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800   transition ease-in-out duration-300 rounded-3xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="tool.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of tool"
          />
          <arrow-up-right-icon
            class="text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </header>
        <div
          class="divide-y divide-solid divide-neutral-300 dark:divide-neutral-800"
        >
          <div class="flex space-x-2 mb-4">
            <Tag v-if="tool.metadata.indie" color="yellow"> Indie </Tag>
            <Tag v-if="tool.metadata.open_source" color="purple">
              Open source
            </Tag>
            <Tag v-if="tool.metadata.company" color="red">
              {{ tool.metadata.company }}
            </Tag>
          </div>
          <h4
            class="pt-4 font-bold text-sm text-neutral-900 dark:text-neutral-100"
          >
            {{ tool.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
        >
          {{ tool.metadata.subtitle }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "Tools",
  components: {
    ArrowUpRightIcon,
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
