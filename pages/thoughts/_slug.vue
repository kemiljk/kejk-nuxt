<template>
  <div class="relative mx-auto">
    <nav class="fixed flex bg-white dark:bg-black w-full pt-4 border-b-2 border-gray-100 dark:border-gray-900">
        <ul class="mx-auto">
            <li class="flex space-x-4">
                <NuxtLink
                to="/"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Home
                </NuxtLink>
                <NuxtLink
                to="/about"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                About
                </NuxtLink>
                <NuxtLink
                isActive
                to="/thoughts"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 transition ease-in-out duration-100': isActive }]"
                >
                Thoughts
                </NuxtLink>
                <NuxtLink
                to="/uses"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16">
          <NuxtLink
            to="/thoughts"
            class="text-black bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white dark:bg-gray-900 rounded-xl px-6 py-3 btn btn--primary"
          >
          <div class="flex items-center justify-between font-medium">
            <arrow-left-icon class="text-gray-700 dark:text-gray-300 mr-2"></arrow-left-icon>
            Back to all posts
          </div>
          </NuxtLink>
        </div>
          <keep-alive>
            <Blog :blog="blog" />
          </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../../components/Blog.vue";
import { ArrowLeftIcon } from 'vue-feather-icons'

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "BlogView",
  components: {
    Blog,
    ArrowLeftIcon
  },
  head() {
    let blog = this.blog,
    title = blog.title,
    desc = 'Latest post',
    url = 'https://kejk.tech/thoughts/' + blog.slug,
    image = 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png';
    return {
        title: title,
          meta: [
          { hid: 'description', name: 'description', content: desc },
          { hid: 'og:title', property: 'og:title', content: title},
          { hid: 'og:url', property: 'og:url', content: url},
          { hid: 'og:image', property: 'og:image', content: image},
          { hid: 'og:description', property: 'og:description', content: desc},
          { property: 'twitter:domain', content: url},
          { name: "twitter:site", content: "@_kejk" },
          { name: "twitter:creator", content: "@_kejk" },
          { name: "twitter:card", content: "summary_large_image" },
          { hid: 'twitter:title', property: 'twitter:title', content: title},
          { hid: 'twitter:description', property: 'twitter:description', content: desc},
          { hid: 'twitter:image:src', property: 'twitter:image:src', content: image},
          { hid: 'twitter:url', property: 'twitter:url', content: url},
          { hid: 'twitter:label1', property: 'twitter:label1', content: title},  
          ], link: [ { rel: 'canonical', href: url} ]
    }
  },
  data() {
    return {
      isActive: Boolean,
      loading: false,
      blog: {},
      slug: ""
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          console.log(this.blog)
          this.blog = data.object;
          this.loading = false;
        });
    },
  }
};
</script>