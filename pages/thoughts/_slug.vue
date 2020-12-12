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
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons';

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
  head() {
    let blog = this.blog,
    title = blog.title,
    desc = 'Latest post',
    url = 'https://kejk.tech/thoughts/' + blog.slug,
    image = 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png';
    return {
        title: title,
          meta: [
          { hid: 'description', name: 'description', content: desc },
          { hid: 'og:title', property: 'og:title', content: title},
          { hid: 'og:url', property: 'og:url', content: url},
          { hid: 'og:image', property: 'og:image', content: image},
          { hid: 'og:description', property: 'og:description', content: desc},
          { property: 'twitter:domain', content: url},
          { name: "twitter:site", content: "@_kejk" },
          { name: "twitter:creator", content: "@_kejk" },
          { name: "twitter:card", content: "summary_large_image" },
          { hid: 'twitter:title', property: 'twitter:title', content: title},
          { hid: 'twitter:description', property: 'twitter:description', content: desc},
          { hid: 'twitter:image:src', property: 'twitter:image:src', content: image},
          { hid: 'twitter:url', property: 'twitter:url', content: url},
          { hid: 'twitter:label1', property: 'twitter:label1', content: title},  
          ], link: [ { rel: 'canonical', href: url} ]
    }
  },
  data() {
    return {
      loading: false,
      blog: {},
      slug: ""
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      bucket
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