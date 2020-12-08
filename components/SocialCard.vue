<template>
  <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-md rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300">
      <a :href="social.href" target="_blank" rel="noreferrer">
          <ion-icon :name="social.icon" :class="social.color"></ion-icon>
          <button class="flex mt-2 text-md text-gray-900 dark:text-gray-50 font-bold mx-auto py-2 rounded-md">
              {{ social.title }}
          </button>
      </a>
  </div>  
</template>

<script>
export default {
  name: "Social",
  props: {
    social: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  }
};
</script>