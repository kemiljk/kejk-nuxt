<template>
  <li class="flex space-x-4 m-0 mt-0">
    <NuxtLink
      :to="`${to}`"
      :class="[
        'w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 rounded-md text-gray-900 hover:text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:hover:text-indigo-200 transition ease-in-out duration-200',
        {
          'bg-indigo-200 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-200 transition ease-in-out duration-200': isActive,
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
  }
}
</script>
