<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'"
        >Thoughts</NavItem
      >
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
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="thoughts"> Back to all posts </BackLink>
        </div>
        <keep-alive>
          <Blog v-if="page" :blog="page" />
        </keep-alive>
        <div
          class="mt-16 pb-4 border-t-2 border-neutral-200 dark:border-neutral-800"
        />
        <div class="flex flex-row py-8">
          <BackLink link="thoughts"> Back to all posts </BackLink>
        </div>
        <header>
          <h2>How to follow along.</h2>
        </header>
        <SubscribeCard />
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
import getBlog from "../../queries/getBlog";
import Prism from "~/plugins/prism";

export default {
  name: "BlogView",
  components: {
    ExternalLinkIcon,
  },
  async asyncData({ app, route, redirect }) {
    // let data = {};
    try {
      const d = await app.apolloProvider.defaultClient.query({
        query: getBlog,
        variables: { slug: route.params.id },
      });
      const data = d.data;
      console.log("data", data);
      return {
        page: data.getObject,
      };
    } catch (error) {
      console.log("error", error);
      redirect("/thoughts");
    }
  },
  mounted() {
    Prism.highlightAll();
  },
  computed: {
    myRoute() {
      return this.$route.params.id;
    },
  },
};
</script>
