<template>
  <div class="flex flex-cols-6 md:flex-cols-3 p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl">
      <a :href="made.href" target="_blank" rel="noreferrer">
          <img alt="Px to Em logo visual" :src="`${made.img}`" class="rounded-md" />
          <div class="flex flex-col align-center my-auto">
          <button class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-semibold mx-auto py-2 rounded-md">
              {{ made.title }}
              <div v-if="made.id" class="ml-4 bg-yellow-400 -mb-3 px-3 py-1 rounded-full"><span :id="made.id" class="text-black pb-2 mr-2" /><ion-icon name="code-download-outline" class="text-black"></ion-icon></div>
          </button>
          </div>
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