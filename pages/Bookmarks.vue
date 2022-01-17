<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem href="https://www.plugins.run" extLink>
        <span class="flex items-center">
          Plugins
          <external-link-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <external-link-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>/bookmarks</Header>
      <Subheader>
        <template #text>
          Bookmarks of interesting things I've found around the web, for me to
          keep and for you to enjoy.
        </template>
      </Subheader>
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="bookmark in bookmarks" :key="bookmark._id">
          <keep-alive>
            <BookmarkCard :bookmark="bookmark" />
          </keep-alive>
        </div>
      </div>
      <Divider />
      <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
import getSiteMeta from "~/utils/getSiteMeta.js";
import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "Bookmarks | KEJK",
        description:
          "Bookmarks of interesting things I've found around the web, for me to keep and for you to enjoy.",
        url: "https://kejk.tech/bookmarks",
        mainImage:
          "https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KBookmarks | KEJK",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/bookmarks" }],
    };
  },
  components: {
    ExternalLinkIcon,
  },
  data() {
    return {
      bookmarks: {},
    };
  },
  created() {
    this.getBookmarksData();
  },
  methods: {
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
