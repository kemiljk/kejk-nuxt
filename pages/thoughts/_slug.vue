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
            <Blog :blog="blog" />
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

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "BlogView",
  components: {
    ArrowLeftIcon,
  },
  computed: {
    meta() {
      const metaData = {
        type: "blog",
        title: this.blog.title,
        description: "Latest post",
        url: `https://kejk.tech/thoughts/${this.blog.slug}`,
        image: 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png',
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: this.blog.title,
          meta: [
          ...this.meta,
          ], link: [ { rel: 'canonical', href: `https://kejk.tech/thoughts/${this.blog.slug}`} ]
    }
  },
  data() {
    return {
      loading: false,
      blog: {},
      slug: ""
    };
  },
  beforeMount() {
    this.slug = this.$route.params.slug;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          console.log(this.blog)
          this.blog = data.object;
          this.loading = false;
        });
    },
  }
};
</script>