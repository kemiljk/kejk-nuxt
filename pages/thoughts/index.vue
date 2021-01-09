<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'">
        Thoughts
      </NavItem>
      <NavItem to="/bookmarks">Bookmarks</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>/thoughts</Header>
      <Subheader>
        <template #text>
          Thoughts about design, development and the intersection of the two.
        </template>
        <template #buttons>
          <SubscribeCard class="max-w-3xl px-8" />
        </template>
      </Subheader>
      <div class="sticky bg-current top-16 flex flex-row py-4 space-x-2 overflow-x-auto scrollbar-hidden">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
          class="block font-medium bg-gray-100 dark:bg-gray-800 px-4 py-2 text-gray-400 hover:text-indigo-800 dark:text-gray-400 dark:hover:text-indigo-50 hover:bg-indigo-100 rounded-md dark:hover:bg-indigo-800"
          :class="[{ active: selected === tab }]"
        >
          {{ tab }}
        </button>
      </div>
      <component :is="selected" class="tab mt-8"></component>
      <Divider />
      <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import All from "../../components/Tabs/All";
import Design from "../../components/Tabs/Design";
import Development from "../../components/Tabs/Development";
import Opinion from "../../components/Tabs/Opinion";
import Links from "../../components/Tabs/External";

export default {
  components: {
    All,
    Design,
    Development,
    Opinion,
    Links,
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
      tabs: [
        "All",
        "Design",
        "Development",
        "Opinion",
        "Links",
      ],
      selected: "All",
    };
  },
};
</script>
