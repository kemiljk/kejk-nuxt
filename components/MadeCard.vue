<template>
  <div class="flex p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl">
      <a :href="made.href" target="_blank" rel="noreferrer">
          <img alt="Logo visual" :src="`${made.img}`" class="rounded-md" />
          <div class="flex flex-col align-middle my-auto">
          <button class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-semibold mx-auto py-2 rounded-md align-middle">
              {{ made.title }}
              <div v-if="made.id" class="ml-4 bg-yellow-500 dark:text-yellow-300 -mb-3 -mt-1 px-4 py-1 rounded-full"><span :id="made.id" class="text-gray-900" /></div>
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