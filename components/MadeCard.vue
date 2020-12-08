<template>
  <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl">
      <a :href="made.href" target="_blank" rel="noreferrer">
          <img alt="Px to Em logo visual" :src="`${made.img}`" class="rounded-md" />
          <button class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-semibold mx-auto py-2 rounded-md">
              {{ made.title }}
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