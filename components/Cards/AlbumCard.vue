<template>
  <a
    :href="album.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <button class="bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white">
      <div class="px-4 py-4">
        <div class="divide-y divide-solid divide-gray-300 dark:divide-gray-800">
          <header class="mb-4 flex justify-between">
            <img
            :src="album.metadata.cover.imgix_url"
            class="rounded-md max-h-24" alt="Image of album"
            />
            <music-icon class="text-gray-700 dark:text-gray-300"></music-icon>
          </header>
            <h4 class="pt-4 font-bold text-sm text-gray-900 dark:text-gray-100">
              {{ album.title }}
            </h4>
          </div>
          <p class="mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm">
            {{ album.metadata.subtitle }}
          </p>
        </div>
      </button>
    </div>
  </a>
</template>

<script>
import { MusicIcon } from "vue-feather-icons";

export default {
  name: "Media",
  components: {
    MusicIcon,
  },
  props: {
    album: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
