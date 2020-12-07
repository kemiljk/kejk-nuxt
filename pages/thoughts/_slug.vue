<template>
  <div class="mx-4">
    <div class="flex flex-col col-span-full">
      <div class="flex flex-row">
        <nuxt-link
          to="/"
          class="text-black bg-gray-50 dark:text-white dark:bg-gray-900 rounded-xl btn btn--primary"
        >
          <ion-icon class="align-middle" name="chevron-back-outline" /><span class="pl-2">Back to all posts</span>
        </nuxt-link>
      </div>
        <div class="mt-0 pt-4">
          <div class="flex flex-row text-left">
            <div class="flex flex-col col-span-full md:col-span-6">
              <h1 class="my-4">
                {{ blog.title }}
              </h1>
            </div>
          </div>
          <div class="flex flex-row px-lg-12">
            <div class="flex flex-col col-span-full md:col-span-6">
              <section
                v-html="blog.content"
              />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Blog from "../../components/Blog.vue";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "BlogView",
  components: {
    Blog
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
      this.error = this.blog = null;
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          this.blog = data.object;
          this.loading = false;
        });
    },
  }
};
</script>