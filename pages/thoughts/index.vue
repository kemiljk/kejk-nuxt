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
        <h1 class="pt-16 text-center">/thoughts</h1>
      </header>
      <div class="flex flex-col md:flex-row justify-center md:justify-start my-8">
        <a href="http://www.kejk.tech/feed.xml">
          <button
            class="flex flex-row justify-center text-center font-medium w-full bg-indigo-100 dark:bg-indigo-600 px-4 py-2 rounded-md text-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-500"
          >
            Subscribe via RSS
          </button>
        </a>
      </div>
      <div class="flex flex-row">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
          :class="[
            'font-medium block border-b-2 border-gray-50 dark:border-gray-800 px-4 py-2 text-gray-900 dark:text-gray-50',
            { active: selected === tab },
          ]"
        >
          {{ tab }}
        </button>
      </div>
      <component :is="selected" class="tab mt-8"></component>
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
import All from "../../components/All";
import Design from "../../components/Design";
import Dev from "../../components/Development";
import Opinion from "../../components/Opinion";
import Ext from "../../components/External";

export default {
  components: {
    All,
    Design,
    Dev,
    Opinion,
    Ext,
  },
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Thoughts",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        mainImage:
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
      tabs: ["All", "Design", "Dev", "Opinion", "Ext"],
      selected: "All",
    };
  },
};
</script>
