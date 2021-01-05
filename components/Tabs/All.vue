<template>
  <div>
    <header>
      <h2
        class="inline-block border-b-2 border-gray-100 dark:border-gray-800 max-w-max"
      >
        Articles.
      </h2>
    </header>
    <div
      class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"
      v-if="blogs.blogList"
    >
      <div v-for="(blog, index) in blogs.blogList" :key="index">
        <keep-alive>
          <BlogCard :blog="blog" />
        </keep-alive>
      </div>
    </div>
    <div class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800" />
    <div>
      <header>
        <h2
          class="inline-block border-b-2 border-gray-100 dark:border-gray-800 max-w-max"
        >
          External posts.
        </h2>
      </header>
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="link in links" :key="link._id">
          <keep-alive>
            <LinkCard :link="link" />
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800" />
    <div>
      <header>
        <h2
          class="inline-block border-b-2 border-gray-100 dark:border-gray-800 max-w-max"
        >
          Bookmarks.
        </h2>
      </header>
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="bookmark in bookmarks" :key="bookmark._id">
          <keep-alive>
            <BookmarkCard :bookmark="bookmark" />
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
  name: "AllTab",
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
      bookmarks: {},
    };
  },
  created() {
    this.getLinksData();
    this.getBookmarksData();
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
    async getBookmarksData() {
      this.loading = true;
      await bucket
        .getObjects({
          type: "bookmarks",
          props: "_id,title,metadata",
        })
        .then((data) => {
          const bookmarks = data.objects;
          this.loading = false;
          this.bookmarks = bookmarks;
        });
    },
  },
};
</script>
