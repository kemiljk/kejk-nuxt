<template>
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left"  v-if="blog">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1>
          {{ blog.title }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 pt-2 pb-2">
        {{ blog.metadata.modified_at | moment("from", "now") }}
        </p>
        <p
          class="text-indigo-900 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-800 rounded-full px-3 py-1 w-max"
        >
          {{ blog.metadata.tag }}
        </p>
      </div>
    </div>
    <!-- <div class="border-b-2 border-gray-100 py-4 inline-block mb-8" id="article-action-sheet-target">
      <div class="space-x-8">
        <span class="font-bold text-lg mr-2">
          Share this article
        </span>
          <a href=`https://twitter.com/intent/tweet?url=https://www.kejk.tech/thoughts/${blog.slug}&text&amp;via=_kejk` rel="noopener noreferrer" class="mt-2 inline-block">
            <twitter-icon v-if="social.twitter" size="2x" class="text-blue-400 mb-4"></twitter-icon><span class="font-medium text-black dark:text-white ml-2">Twitter</span>
          </a>

          <a href=`https://www.linkedin.com/shareArticle?mini=true&url=https://www.kejk.tech/thoughts/${blog.slug}&title=&summary=&source=`>
            <linkedin-icon v-if="social.linkedin" size="1x" class="text-blue-600 mb-4"></linkedin-icon><span class="font-medium text-black dark:text-white ml-2">LinkedIn</span>
          </a>
        </div>
      </div> -->
    <div class="flex flex-row px-lg-12">
      <div class="flex flex-col col-span-full md:col-span-6">
        <section
          v-html="blog.content" class="text-black dark:text-gray-300"
        />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { TwitterIcon } from 'vue-feather-icons'
import { LinkedinIcon } from 'vue-feather-icons'

export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  },
  component: {
    TwitterIcon,
    LinkedinIcon,
  },
  computed: {
    meta() {
      const metaData = {
        type: "blog",
        title: this.blog.title,
        description: this.blog.metadata.snippet,
        url: 'https://kejk.tech/thoughts/' + `${this.$route.params.id}`,
        image: this.blog.metadata.hero.imgix_url,
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: this.blog.title,
          meta: [
          ...this.meta,
          ], link: [ { rel: 'canonical', href: `https://kejk.tech/thoughts/${this.$route.params.id}`} ]
    }
  }
};
</script>