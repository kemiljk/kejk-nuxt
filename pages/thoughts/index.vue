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
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <external-link-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header class="text-left lg:text-center">/thoughts</Header>
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
          class="block font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          :class="[
            {
              'text-black dark:text-white bg-neutral-300 dark:bg-neutral-600':
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
