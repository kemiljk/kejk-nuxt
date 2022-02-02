<template>
  <li class="flex w-full items-center justify-end sm:space-x-4 m-0">
    <div v-if="extLink">
      <a
        :href="`${href}`"
        target="_blank"
        class="
          w-full md:w-max flex items-center justify-center font-bold text-sm md:block px-4 py-2 text-neutral-200 md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-neutral-300 md:dark:hover:border-neutral-300 hover:bg-neutral-400 hover:text-white dark:hover:text-white dark:hover:bg-neutral-500 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline"
      >
        <slot />
      </a>
    </div>
    <div v-else>
      <NuxtLink
        :to="`${to}`"
        class="
          w-full md:w-max flex items-center justify-center font-bold text-sm md:block px-4 py-2 text-neutral-200 md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-neutral-300 md:dark:hover:border-neutral-300 hover:bg-neutral-400 hover:text-white dark:hover:text-white dark:hover:bg-neutral-500 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline"
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
