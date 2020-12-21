<template>
  <div>
    <header>
      <h2>Thoughts and opinions on design and development.</h2>
    </header>
    <div
      class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4"
      v-if="blogs.blogList"
    >
      <div v-for="blog in blogs.blogList" :key="blog.metadata.tag">
        <keep-alive>
          <BlogCard :blog="blog" />
        </keep-alive>
      </div>
    </div>
    <div class="mt-8">
      <header>
        <h2>External posts.</h2>
      </header>
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="link in links" :key="link._id">
          <keep-alive>
            <LinkCard :link="link" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: "kemiljk",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",
});

export default {
  name: "DesignTab",
  computed: {
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function (blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
  },
  data() {
    return {
      links: {},
    };
  },
  created() {
    this.getLinksData();
  },
  methods: {
    async getLinksData() {
      this.loading = true;
      await bucket
        .getObjects({
          type: "links",
          props: "_id,slug,title,content,metadata",
        })
        .then((data) => {
          const links = data.objects;
          this.loading = false;
          this.links = links;
        });
    },
  },
};
</script>
