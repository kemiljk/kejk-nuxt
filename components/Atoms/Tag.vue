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
        yellow:
          "text-yellow-700 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700",
        purple:
          "text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700",
        red:
          "text-red-700 dark:text-red-200 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700",
        pink:
          "text-pink-700 dark:text-pink-200 bg-pink-50 dark:bg-pink-900 border border-pink-200 dark:border-pink-700",
        green:
          "text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700",
        indigo:
          "text-indigo-700 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-700",
        blue:
          "text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700",
      }[this.color];
    },
  },
};
</script>
