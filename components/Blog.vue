<template>
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left"  v-if="blog">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1>
          {{ blog.title }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 pt-2 pb-2">
        {{ blog.metadata.published | moment("DD MMM, YYYY") }}
        </p>
      </div>
    </div>
    <!-- <div class="border-b-2 border-gray-100 py-4 inline-block mb-8" id="article-action-sheet-target">
      <div class="space-x-8">
        <span class="font-bold text-lg mr-2">
          Share this article
        </span>
          <a href="https://twitter.com/intent/tweet?text=Awesome%20article%20from%20KEJK%21&amp;url=https%3A%2F%2Fkejk.tech%2Fthoughts&amp;via=_kejk" rel="noopener noreferrer" class="mt-2 inline-block">
            <ion-icon name="logo-twitter" class="text-blue-400"></ion-icon><span class="font-medium text-black dark:text-white ml-2">Twitter</span>
          </a>

          <a href="">
            <ion-icon name="logo-linkedin" class="text-blue-600"></ion-icon><span class="font-medium text-black dark:text-white ml-2">LinkedIn</span>
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

export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "blog",
        title: this.blog.title,
        description: this.blog.metadata.snippet,
        url: 'https://kejk.tech/thoughts/' + `${this.$route.params.id}`,
        image: 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png',
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