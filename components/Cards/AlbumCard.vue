<template>
  <a
    :href="album.metadata.url"
    target="`_blank"
    rel="noreferrer"
    cursor="pointer"
  >
    <button class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800   transition ease-in-out duration-300 rounded-3xl w-full text-left focus:outline-none focus:ring-2 focus:ring-white">
      <div class="px-4 py-4">
        <div class="divide-y divide-solid divide-neutral-300 dark:divide-neutral-800">
          <header class="mb-4 flex justify-between">
            <img
            :src="album.metadata.cover.imgix_url"
            class="rounded-md max-h-24" alt="Image of album"
            />
            <music-icon class="text-neutral-700 dark:text-neutral-300"></music-icon>
          </header>
            <h4 class="pt-4 font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {{ album.title }}
            </h4>
          </div>
          <p class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm">
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
