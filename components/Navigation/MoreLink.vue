<template>
    <NuxtLink
        to="/thoughts"
        class="flex flex-row justify-start w-max mt-4 text-black bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white dark:bg-transparent rounded-xl px-4 py-2"
      >
        <slot></slot>
        <arrow-right-icon
          class="text-gray-700 dark:text-gray-300 ml-2"
        ></arrow-right-icon>
      </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
components: {
    TwitterIcon,
    MailIcon,
    ArrowRightIcon,
  },
};
</script>