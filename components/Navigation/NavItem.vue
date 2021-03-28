<template>
  <li class="flex w-full items-center justify-center sm:space-x-4 m-0">
    <a
      :href="`${href}`"
      v-if="extLink"
      target="_blank"
      :class="[
        'w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline',
        {
          'md:border-b-2 md:border-black md:dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline': isActive,
        },
      ]"
    >
      <slot />
    </a>
    <NuxtLink
      v-else
      :to="`${to}`"
      :class="[
        'w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline',
        {
          'md:border-b-2 md:border-black md:dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline': isActive,
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
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
    extLink: Boolean,
  },
};
</script>
