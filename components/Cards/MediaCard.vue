<template>
  <a :href="media.metadata.url" target="`_blank" rel="noreferrer">
    <button
      class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="media.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of media"
          />
          <arrow-up-right-icon
            class="text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </header>
        <div
          class="divide-y divide-solid divide-neutral-300 dark:divide-neutral-800"
        >
          <div class="flex space-x-2 mb-4">
            <Tag color="yellow" v-if="media.metadata.indie">Indie </Tag>
            <Tag color="purple" v-if="media.metadata.open_source"
              >Open source
            </Tag>
          </div>
          <h4
            class="pt-4 font-bold text-sm text-neutral-900 dark:text-neutral-100"
          >
            {{ media.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
        >
          {{ media.metadata.subtitle }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "Media",
  components: {
    ArrowUpRightIcon,
  },
  props: {
    media: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
