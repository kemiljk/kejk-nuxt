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
          <arrow-up-right-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <arrow-up-right-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </span>
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header class="text-left lg:text-center">/thoughts</Header>
      <Subheader class="text-left lg:text-center">
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
          class="w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline"
          :class="[
            {
              'text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700':
                selected === tab,
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

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";
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
    ArrowUpRightIcon,
  },
  computed: {
    meta() {
      const metaData = {
        title: "Thoughts | KEJK",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        mainImage:
          "https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png",
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
