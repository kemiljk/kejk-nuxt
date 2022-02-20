<template>
  <div>
    <!-- <ais-instant-search
      :search-client="searchClient"
      index-name="blogs"
      class="w-full"
    >
      <ais-search-box
        class="h-max rounded-lg border-2 border-neutral-200 bg-white py-3 px-3 font-medium text-neutral-800 focus:border-2 focus:border-indigo-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
        type="search"
        id="Search"
      />
      <ais-hits>
        <template v-slot:item="{ item }">
          <p class="mb-0 pt-0 tracking-tight text-neutral-800 dark:text-white">
            {{ item.title }}
          </p>
        </template>
      </ais-hits>
    </ais-instant-search> -->
    <header>
      <h2
        class="inline-block max-w-max border-b-2 border-neutral-100 text-2xl dark:border-neutral-800"
      >
        Articles.
      </h2>
    </header>
    <div
      class="grid-row xs:grid-cols-1 grid gap-8 sm:grid-cols-2"
      v-if="blogs.blogList"
    >
      <div v-for="(blog, index) in blogs.blogList" :key="index">
        <keep-alive>
          <BlogCard :blog="blog" />
        </keep-alive>
      </div>
    </div>
    <Divider />
    <div>
      <header>
        <h2
          class="inline-block max-w-max border-b-2 border-neutral-100 text-2xl dark:border-neutral-800"
        >
          External posts.
        </h2>
      </header>
      <div class="grid-row xs:grid-cols-1 grid gap-8 sm:grid-cols-2">
        <div v-for="link in links" :key="link._id">
          <keep-alive>
            <LinkCard :link="link" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
button,
input[type="search"],
input[type="submith"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  width: 100%;
}

button.ais-SearchBox-submit {
  display: none;
}
button.ais-SearchBox-reset {
  display: none;
}

#Search::-webkit-search-cancel-button {
  position: relative;
  right: 20px;

  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: red;
}
</style>

<script>
import Cosmic from "cosmicjs";
import algoliasearch from "algoliasearch/lite";

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
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
      searchClient: algoliasearch(
        "NKZJE3K5TX",
        "eab15a29907c5141aacba92ef2b8fd6b"
      ),
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
          query: {
            type: "links",
          },
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
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
          query: {
            type: "bookmarks",
          },
          props: "_id,title,metadata,created_at",
          sort: "-created_at",
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
