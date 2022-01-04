<template>
  <div>
    <nuxt-link
      :to="{
        path: '/portfolio/' + portfolio.slug,
        query: { id: portfolio.id },
      }"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div>
          <header class="flex justify-between">
            <img
              :src="portfolio.metadata.hero.imgix_url"
              class="w-full h-full rounded-tl-xl rounded-tr-xl"
              alt="Image of media"
            />
          </header>
          <div class="p-4">
            <div class="w-full flex justify-between items-center">
              <h4
                class="font-bold text-sm text-neutral-900 dark:text-neutral-100"
              >
                {{ portfolio.title }}
              </h4>
              <arrow-right-icon
                class="text-neutral-700 dark:text-neutral-300"
              ></arrow-right-icon>
            </div>
            <p
              class="mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"
            >
              {{ portfolio.metadata.description }}
            </p>
          </div>
        </div>
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Portfolio",
  components: {
    ArrowRightIcon,
  },
  props: {
    portfolio: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
