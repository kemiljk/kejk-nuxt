<template>
  <div class="flex p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300 rounded-xl">
      <a :href="made.href" target="_blank" rel="noreferrer" :alt="made.alt">
          <img alt="Logo visual" :src="`${made.img}`" class="rounded-md" />
          <div class="flex flex-col align-middle my-auto">
          <div class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-semibold mx-auto py-2 align-middle">
              {{ made.title }}
          </div>
            <p v-if="made.id" class="flex mb-0 text-gray-500 dark:text-gray-400 font-medium mx-auto">
                <span :id="made.id" class="text-yellow-600 dark:text-yellow-300 font-bold mr-1" />{{ made.type }}
            </p>
            <p v-else class="flex mb-0 text-gray-500 dark:text-gray-400 font-medium mx-auto">
                {{ made.type }}
            </p>
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