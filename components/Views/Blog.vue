<template>
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left" v-if="blog">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1>
          {{ blog.title }}
        </h1>
        <p class="font-mono text-gray-500 dark:text-gray-400 pt-2">
          Updated {{ blog.modified_at | moment("from", "now") }}
        </p>
        <Tag color="indigo">
          {{ blog.metadata.tag }}
        </Tag>
      </div>
    </div>
    <div>
      <section v-html="blog.content" class="mt-4 text-black dark:text-gray-300" />
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { TwitterIcon } from "vue-feather-icons";
import { LinkedinIcon } from "vue-feather-icons";

export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
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
        url: "https://kejk.tech/thoughts/" + `${this.$route.params.id}`,
        mainImage: this.blog.metadata.hero.imgix_url,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: this.blog.title,
      meta: [...this.meta],
      link: [
        {
          rel: "canonical",
          href: `https://kejk.tech/thoughts/${this.$route.params.id}`,
        },
      ],
    };
  },
};
</script>
