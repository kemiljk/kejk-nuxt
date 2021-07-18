<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'">
        Thoughts
      </NavItem>
      <NavItem href="https://www.plugins.run" extLink>
        <span class="flex items-center">
          Plugins
          <external-link-icon
            size="1x"
            class="ml-2 text-indigo-700 dark:text-gray-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>/thoughts</Header>
      <Subheader>
        <template #text>
          Thoughts about design, development and the intersection of the two.
        </template>
      </Subheader>
      <SubscribeCard />
      <div
        class="bg-white dark:bg-black mt-8 top-16 flex flex-row py-4 space-x-2 overflow-x-auto scrollbar-hidden"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="
            selected = tab;
            active = true;
          "
          class="block font-medium rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-gray-600 hover:text-gray-800 active:text-gray-800 dark:text-gray-400 dark:hover:text-gray-50 dark:active:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-700"
          :class="[
            {
              selected:
                'text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-700 ',
              active: selected === tab,
            },
          ]"
        >
          {{ tab }}
        </button>
      </div>
      <component :is="selected" class="mt-8"></component>
      <Divider />
      <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-700;
}
</style>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
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
    ExternalLinkIcon,
  },
  computed: {
    meta() {
      const metaData = {
        title: "Thoughts | KEJK",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
      };
      return getSiteMeta(metaData);
    },
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function(blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
  },
  head() {
    return {
      title: "Thoughts | KEJK",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/thoughts" }],
    };
  },
  data() {
    return {
      active: false,
      loading: false,
      tabs: ["All", "Design", "Development", "Opinion", "Links"],
      selected: "All",
    };
  },
};
</script>
