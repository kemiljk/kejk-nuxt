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
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16 pb-8">
          <NuxtLink
            to="/thoughts"
            class="text-black hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white border-2 border-gray-500 rounded-xl px-4 py-2 btn btn-primary transition ease-in-out duration-200"
          >
            <div class="flex items-center justify-between font-medium">
              <arrow-left-icon
                class="text-gray-700 dark:text-gray-300 mr-2"
              ></arrow-left-icon>
              Back to all posts
            </div>
          </NuxtLink>
        </div>
        <keep-alive>  
          <Blog v-if="page" :blog="page" />
        </keep-alive>
        <div
          class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
        />
        <header>
          <h2>How to follow along.</h2>
        </header>
        <Subscribe />
        <header class="mt-4">
          <h2>How to reach me.</h2>
        </header>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";
import getSiteMeta from "~/utils/getSiteMeta.js";
import getBlog from "../../queries/getBlog";
import Prism from "~/plugins/prism";

export default {
  name: "BlogView",
  components: {
    ArrowLeftIcon,
  },
  async asyncData({ app, route, redirect }) {
    let data = {};
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
