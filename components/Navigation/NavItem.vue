<template>
  <li class="flex space-x-4 m-0">
    <NuxtLink
      :to="`${to}`"
      :class="[
        'w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-300 transition ease-in-out duration-200',
        {
          'border-b-2 border-black dark:border-white text-black dark:text-white hover:border-black dark:hover:border-white transition ease-in-out duration-200': isActive,
        },
      ]"
    >
      <slot />
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
};
</script>
