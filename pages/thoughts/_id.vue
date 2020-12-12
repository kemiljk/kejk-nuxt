<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts" isActive>Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16">
          <NuxtLink
            to="/thoughts"
            class="text-black bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white dark:bg-gray-900 rounded-xl px-6 py-3 btn btn--primary"
          >
          <div class="flex items-center justify-between font-medium">
            <arrow-left-icon class="text-gray-700 dark:text-gray-300 mr-2"></arrow-left-icon>
            Back to all posts
          </div>
          </NuxtLink>
        </div>
          <keep-alive>
            <Blog 
              v-if="page"
              :blog="page"
            />
          </keep-alive>
        <div class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800" />
        <header>
          <h2>
            How to reach me.
          </h2>
        </header>
        <div> 
          <GetInTouch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons';
import getSiteMeta from "~/utils/getSiteMeta.js";
import getBlog from "../../queries/getBlog";

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
  computed: {
    myRoute() {
      return this.$route.params.id;
    },
  },
};
</script>