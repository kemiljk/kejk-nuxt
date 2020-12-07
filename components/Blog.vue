<template>
    <div class="mt-0 pt-4">
    <div class="flex flex-row text-left"  v-if="blog.metadata">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1 class="my-4 text-4xl font-black dark:text-gray-200">
          {{ blog.title }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 pt-0 pb-8">
        {{ blog.metadata.published | moment("DD MMM, YYYY") }}
        </p>
      </div>
    </div>
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
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    let title = this?.blog?.metadata?.seo_metatitle,
    desc = this?.blog?.metadata?.seo_metadescription,
    url = 'https://kejk.tech/thoughts/' + this?.blog?.slug,
    return {
        title: title,
          meta: [
          { hid: 'description', name: 'description', content: desc },
          { hid: 'og:title', property: 'og:title', content: title},
          { hid: 'og:url', property: 'og:url', content: url},
          { hid: 'og:image', property: 'og:image', content: image},
          { hid: 'og:description', property: 'og:description', content: desc},
          { property: 'twitter:domain', content: url},
          { hid: 'twitter:title', property: 'twitter:title', content: title},
          { hid: 'twitter:description', property: 'twitter:description', content: desc},
          { hid: 'twitter:image', property: 'twitter:image', content: image},
          { hid: 'twitter:url', property: 'twitter:url', content: url},
          { hid: 'twitter:label1', property: 'twitter:label1', content: title},  
          ], link: [ { rel: 'canonical', href: url} ]
    }
  }
};
</script>