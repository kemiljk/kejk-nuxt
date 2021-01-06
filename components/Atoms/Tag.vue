<template>
  <span
    class="flex w-max justify-center font-mono rounded-full px-3 py-1 text-xs"
    :class="kindClasses"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: ["kind"],
  computed: {
    kindClasses() {
      return {
          yellow: "text-yellow-700 dark:text-yellow-400 border-2 border-yellow-700 dark:border-yellow-400",
          purple: "text-purple-700 dark:text-purple-400 border-2 border-purple-700 dark:border-purple-400",
          red: "text-red-700 dark:text-red-400 border-2 border-red-700 dark:border-red-400",
      }[this.kind]
    },
  },
};
</script>
