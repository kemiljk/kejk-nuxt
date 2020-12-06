<template>
  <div class="mx-4">
    <div class="flex flex-col col-span-full">
      <div class="flex flex-row">
        <button 
            text
            to="/posts"
            class="block px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-600"
          >
          Back to all posts
        </button>
      </div>
      <Blog :blog="blog" class="justify-center" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";

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
    fetchData() {
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