<template>
  <span
    class="flex w-max justify-center font-mono rounded-full px-3 py-1 text-xs uppercase"
    :class="colorClasses"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
          yellow: "text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-700",
          purple: "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-700",
          red: "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-700",
          pink: "text-pink-700 dark:text-pink-400 bg-pink-50 dark:bg-pink-700",
          green: "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-700",
          indigo: "text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-700",
          blue: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-700",
      }[this.color]
    },
  },
};
</script>
