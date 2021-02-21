<template>
  <button
    class="flex justify-center items-center text-center font-medium w-full rounded-lg px-6 py-3 transition duration-500 ease focus:outline-none focus:ring-2 focus:ring-white no-underline"
    :class="colorClasses"
  >
    <slot name="icon" />
    <slot name="label" />
  </button>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
        red: "text-red-50 bg-red-500 hover:bg-red-600",
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        purple: "bg-purple-900 hover:bg-purple-700 text-purple-100",
        indigo: "text-indigo-50 bg-indigo-600 hover:bg-indigo-700",
        grey: "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white",
        white: "bg-black hover:bg-gray-900 dark:bg-white text-white dark:text-gray-900 dark:hover:bg-gray-100",
      }[this.color];
    },
  },
};
</script>
