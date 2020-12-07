<template>
  <div class="relative max-w-3xl mx-auto px-4 sm:px-0">
    <nav class="flex flex-row justify-center pt-4">
        <ul class="flex">
            <li class="flex space-x-2">
                <NuxtLink
                to="/"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300']"
                >
                Home
                </NuxtLink>
                <NuxtLink
                to="/about"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300']"
                >
                About
                </NuxtLink>
                <NuxtLink
                isActive
                to="/thoughts"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200': isActive }]"
                >
                Thoughts
                </NuxtLink>
                <NuxtLink
                to="/uses"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300']"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <div class="mx-4 pt-10">
      <div class="flex flex-col col-span-full">
        <div class="flex flex-row">
          <NuxtLink
            to="/thoughts"
            class="text-black bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white dark:bg-gray-900 rounded-xl px-6 py-3 btn btn--primary"
          >
            <ion-icon class="align-middle" name="chevron-back-outline" /><span class="pl-2">Back to all posts</span>
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

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "BlogView",
  components: {
    Blog
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