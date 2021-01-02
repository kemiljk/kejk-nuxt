<template>
  <div class="relative mx-auto">
    <Nav class="overflow-x-auto">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'">
        Thoughts
      </NavItem>
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
          <a
            href="https://www.kejk.tech/feed.xml"
            target="_blank"
            rel="noreferrer"
            class="mx-2"
          >
            <button
              class="flex flex-row justify-center text-center font-medium w-full sm:w-max bg-indigo-600 px-6 py-3 rounded-md text-indigo-100 hover:bg-indigo-500"
            >
              <rss-icon
                size="1x"
                class="flex align-middle mt-1 text-indigo-100 mr-2"
              ></rss-icon>
              Subscribe via RSS
            </button>
          </a>
          <a
            href="https://share.mailbrew.com/_kejk/kejk-sXWcveOcS678?aff=_kejk"
            target="_blank"
            rel="noreferrer"
            class="mx-2"
          >
            <button
              class="flex flex-row justify-center text-center font-medium mt-2 md:mt-0 w-full sm:w-max bg-red-500 px-6 py-3 rounded-md text-red-50 hover:bg-red-400"
            >
              <coffee-icon
                size="1x"
                class="flex align-middle mt-1 text-red-100 mr-2"
              ></coffee-icon>
              Subscribe via Mailbrew
            </button>
          </a>
        </div>
        <div class="flex justify-center mt-2 bg-white dark:bg-black border-2 border-gray-100 dark:border-gray-900 rounded-xl">
          <div class="max-w-5xl mx-auto space-x-2">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/karl"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/karl', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <div class="flex flex-col md:flex-row">
                <label for="bd-email" class="font-medium text-black dark:text-white">Enter your email</label>
                <input type="email" name="email" id="bd-email" class="mt-2 py-3 px-3 w-full md:w-max rounded-md bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none"
                  required />
                <input type="hidden" value="1" name="embed" />
                <button type="submit" class="mt-2 w-full md:w-max bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition ease-in-out duration-300">
                Subscribe for updates
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div class="flex flex-row mt-8 overflow-x-auto scrollbar-hidden">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
          :class="[
            'font-medium block border-b-2 border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-400 hover:text-indigo-800 dark:text-gray-500 dark:hover:text-indigo-50 hover:bg-indigo-100 rounded-t-md dark:hover:bg-indigo-800 whitespace-nowrap',
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
import { RssIcon, CoffeeIcon } from "vue-feather-icons";
import Everything from "../../components/Tabs/All";
import Design from "../../components/Tabs/Design";
import Development from "../../components/Tabs/Development";
import Opinion from "../../components/Tabs/Opinion";
import External from "../../components/Tabs/External";

export default {
  components: {
    RssIcon,
    CoffeeIcon,
    Everything,
    Design,
    Development,
    Opinion,
    External,
  },
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Thoughts",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1607350722/og-image_bcs2c8.png",
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
      tabs: ["Everything", "Design", "Development", "Opinion", "External"],
      selected: "Everything",
    };
  },
};
</script>
