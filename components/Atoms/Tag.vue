<template>
  <span
    class="flex w-max items-center justify-center rounded-lg px-3 py-1 font-mono text-xs uppercase"
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
          "text-yellow-700 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-900",
        purple:
          "text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-900",
        red: "text-red-700 dark:text-red-200 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900",
        pink: "text-pink-700 dark:text-pink-200 bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-900",
        green:
          "text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green9700",
        indigo:
          "text-indigo-700 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-900",
        blue: "text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-900",
      }[this.color];
    },
  },
};
</script>
