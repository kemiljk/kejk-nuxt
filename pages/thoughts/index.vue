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
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-2 text-center">/thoughts</h1>
      </header>
      <header class="pt-4 pb-4 max-w-xl mx-auto">
        <p class="text-2xl text-center">
          Thoughts about design, development and the intersection of the two.
        </p>
      <div class="flex flex-col md:flex-row justify-center mt-6">
        <a href="https://www.kejk.tech/feed.xml" target="_blank" rel="noreferrer">
          <button
            class="flex flex-row justify-center mx-2 text-center font-medium w-full sm:w-max bg-indigo-100 dark:bg-indigo-600 px-6 py-3 rounded-md text-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-500"
          >
          <rss-icon
                size="1x"
                class="text-indigo-900 dark:text-indigo-100 mr-2 mt-1"
              ></rss-icon
              >
            Subscribe via RSS
          </button>
        </a>
        <a href="https://share.mailbrew.com/_kejk/kejk-sXWcveOcS678" target="_blank" rel="noreferrer">
          <button
            class="flex flex-row justify-center mx-2 text-center font-medium mt-2 md:mt-0 w-full sm:w-max bg-red-200 dark:bg-red-500 px-6 py-3 rounded-md text-red-900 dark:text-red-50 hover:bg-red-300 dark:hover:bg-red-400"
          >
          <coffee-icon
                size="1x"
                class="text-indigo-900 dark:text-indigo-100 mr-2 mt-1"
              ></coffee-icon
              >
            Subscribe via Mailbrew
          </button>
        </a>
      </div>
    </header>
      <div class="flex flex-row mt-8">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
          :class="[
            'font-medium block border-b-2 border-gray-50 dark:border-gray-700 px-4 py-2 text-gray-300 dark:text-gray-500',
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
import { RssIcon, CoffeeIcon } from 'vue-feather-icons'
import All from "../../components/All";
import Design from "../../components/Design";
import Dev from "../../components/Development";
import Opinion from "../../components/Opinion";
import Ext from "../../components/External";

export default {
  components: {
    RssIcon,
    CoffeeIcon,
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
