<template>
  <li class="flex w-full items-center justify-center sm:space-x-4 m-0">
    <div v-if="extLink">
      <a
        :href="`${href}`"
        target="_blank"
        :class="[
          'w-full md:w-max flex items-center justify-center font-normal md:block px-4 py-2 text-gray-900 dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-400 hover:text-black dark:hover:text-white dark:hover:bg-gray-500 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline',
          {
            'md:border-b-2 md:border-black md:dark:border-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white hover:text-black dark:hover:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline': isActive,
          },
        ]"
      >
        <slot />
      </a>
    </div>
    <div v-else>
      <NuxtLink
        :to="`${to}`"
        :class="[
          'w-full md:w-max flex items-center justify-center font-normal md:block px-4 py-2 text-gray-900 dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 hover:text-black dark:hover:text-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline',
          {
            'w-full md:w-max md:border-b-2 md:border-black md:dark:border-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white hover:text-black dark:hover:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline': isActive,
          },
        ]"
      >
        <slot />
      </NuxtLink>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
    isActive: Boolean,
    extLink: Boolean,
  },
};
</script>
