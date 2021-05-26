<template>
  <div>
    <div
      class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"
      v-if="blogs.blogList"
    >
      <div v-for="blog in blogs.blogList" :key="blog.metadata.tag">
        <keep-alive>
          <BlogCard :blog="blog" v-show="blog.metadata.tag === 'development'" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopmentTab",
  computed: {
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];
      blogs.forEach(function (blog) {
        if (blog.metadata.tag === "development") {
          blogList.push(blog);
        } else {
          return;
        }
      });
      return { blogList: blogList };
    },
  },
};
</script>
