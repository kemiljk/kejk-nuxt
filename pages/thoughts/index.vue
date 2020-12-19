<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'"
        >Thoughts</NavItem
      >
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-5xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 text-center">/Thoughts</h1>
      </header>
      <header class="pt-16 max-w-xl">
        <h2>Thoughts on design and development.</h2>
      </header>
      <div class="my-8">
        <a href="http://www.kejk.tech/feed.xml">
          <button
            class="bg-indigo-100 dark:bg-indigo-600 px-4 py-2 rounded-md text-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-500 font-medium"
          >
            Subscribe via RSS
          </button>
        </a>
      </div>
      <div class="flex flex-row">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4"
          v-if="blogs.blogList"
        >
          <div v-for="blog in blogs.blogList" :key="blog._id">
            <keep-alive>
              <BlogCard :blog="blog" />
            </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>Posts from around the web.</h2>
      </header>
      <div class="flex flex-row">
        <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="link in links" :key="link._id">
            <keep-alive>
              <LinkCard :link="link" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div
        class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
      />
      <header class="max-w-xl">
        <h2>How to reach me.</h2>
      </header>
      <div>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "kemiljk",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Thoughts",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        image:
          "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    },
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function (blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
  },
  head() {
    return {
      title: "KEJK | Thoughts",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/thoughts" }],
    };
  },
  data() {
    return {
      loading: false,
      links: {},
    };
  },
  created() {
    this.getLinksData();
  },
  methods: {
    async getLinksData() {
      this.error = this.link = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 6,
          type: "links",
          props: "_id,slug,title,content,metadata",
        })
        .then((data) => {
          const links = data.objects;
          this.loading = false;
          this.links = links;
        });
    },
  },
};
</script>
