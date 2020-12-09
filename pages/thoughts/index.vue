<template>
  <div class="container mx-auto">
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
    <div class="max-w-5xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 text-center">
          /Thoughts
        </h1>
      </header>
    <header class="pt-16 pb-2 max-w-xl">
      <h2>
        Thoughts on design and development.
      </h2>
    </header>
      <div class="flex flex-row mt-4">
        <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="blog in blogs" :key="blog._id">
              <keep-alive>
                  <BlogCard :blog="blog" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 pb-2 max-w-xl">
        <h2>
          Posts from around the web.
        </h2>
      </header>
        <div class="flex flex-row mt-4">
          <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="post in posts" :key="post._id">
              <keep-alive>
                  <PostCard :post="post" />
              </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../../components/BlogCard.vue';
import PostCard from '../../components/PostCard.vue';

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  head: {
    title: 'KEJK – Thoughts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Thoughts on Design and Development from here and around the web.'
      }
    ],
  },
  components: {
    BlogCard,
    PostCard,
  },
  data() {
    return {
      isActive: Boolean,
      loading: false,
      posts: {},
      blogs: {},
      slug: "",
    }
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getPostsData();
  },
  methods: {
    getBlogsData() {
            this.error = this.blog = null;
            this.loading = true;
            bucket
            .getObjects({
                type: "blogs",
                props: "_id,slug,title,content,metadata"
            })
            .then(data => {
                const blogs = data.objects;
                this.loading = false;
                this.blogs = blogs;
            });
        },
    getPostsData() {
        this.error = this.post = null;
        this.loading = true;
        bucket
        .getObjects({
            type: "posts",
            props: "_id,slug,title,content,metadata"
        })
        .then(data => {
            const posts = data.objects;
            this.loading = false;
            this.posts = posts;
        });
    },
  },
}
</script>