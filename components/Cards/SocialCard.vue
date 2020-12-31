<template>
  <div
    class="flex flex-cols-6 sm:flex-cols-3 p-4 bg-gray-100 dark:bg-gray-900 hover:shadow-md rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-300"
  >
    <a :href="social.href" target="_blank" rel="noreferrer">
      <twitter-icon
        v-if="social.twitter"
        size="2x"
        class="text-blue-400 pb-4"
      ></twitter-icon>
      <linkedin-icon
        v-if="social.linkedin"
        size="2x"
        class="text-blue-600 dark:text-blue-500 pb-4"
      ></linkedin-icon>
      <figma-icon
        v-if="social.figma"
        size="2x"
        class="text-green-600 dark:text-green-400 pb-4"
      ></figma-icon>
      <github-icon
        v-if="social.github"
        size="2x"
        class="dark:text-white text-black pb-4"
      ></github-icon>
      <dribbble-icon
        v-if="social.dribbble"
        size="2x"
        class="text-pink-400 pb-4"
      ></dribbble-icon>
      <music-icon
        v-if="social.music"
        size="2x"
        class="text-red-600 pb-4"
      ></music-icon>
      <div class="text-md text-gray-900 dark:text-gray-50 font-bold">
        {{ social.title }}
      </div>
    </a>
  </div>
</template>

<script>
import {
  FigmaIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  DribbbleIcon,
  MusicIcon,
} from "vue-feather-icons";

export default {
  name: "Social",
  components: {
    FigmaIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    DribbbleIcon,
    MusicIcon,
  },
  props: {
    social: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
