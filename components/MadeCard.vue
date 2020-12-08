<template>
  <div v-else class="flex flex-cols-6 sm:flex-cols-3 mb-0 p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl">
      <a :href="made.href" target="_blank" rel="noreferrer">
          <img alt="Px to Em logo visual" :src="`${made.img}`" class="rounded-md" />
          <button class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-semibold mx-auto py-2 rounded-md">
              {{ made.title }}
              <div v-if="made.id" class="ml-4 bg-yellow-400 -mb-2 px-2 py-1 rounded-full"><span :id="made.id" class="text-black mr-2" /><ion-icon name="arrow-down-outline" class="text-black mt-1"></ion-icon></div>
          </button>
      </a>
  </div>  
</template>

<script>
export default {
  name: "Made",
  props: {
    made: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>