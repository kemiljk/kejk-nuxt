<template>
  <a
    :href="made.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <button
      class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <div class="px-4 py-4">
        <header class="mb-4 flex justify-between">
          <img
            :src="made.metadata.cover.imgix_url"
            class="rounded-md max-h-24"
            alt="Image of media"
          />
          <compass-icon
            v-if="made.metadata.website"
            class="text-gray-700 dark:text-gray-300"
          ></compass-icon>
          <download-icon
            v-if="made.metadata.download"
            class="text-gray-700 dark:text-gray-300"
          ></download-icon>
        </header>
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <div class="flex space-x-2 mb-4">
            <Tag color="yellow" v-if="made.metadata.ios">iOS </Tag>
            <Tag color="purple" v-if="made.metadata.macos">macOS </Tag>
            <Tag color="pink" v-if="made.metadata.figma">Figma </Tag>
            <Tag color="green" v-if="made.metadata.installcount"
              ><span :id="made.metadata.installcount">&nbsp;installs</span>
            </Tag>
            <Tag color="blue" v-if="made.metadata.drafts">Drafts </Tag>
            <Tag color="red" v-if="made.metadata.shortcuts">Shortcuts </Tag>
          </div>
          <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
            {{ made.title }}
          </h4>
        </div>
        <p
          class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"
        >
          {{ made.metadata.subtitle }}
        </p>
      </div>
    </button>
  </a>
</template>

<script>
import { CompassIcon, DownloadIcon } from "vue-feather-icons";

export default {
  name: "Made",
  components: {
    CompassIcon,
    DownloadIcon,
  },
  props: {
    made: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
