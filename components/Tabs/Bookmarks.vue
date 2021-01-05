<template>
  <div>
    <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
      <div v-for="bookmark in bookmarks" :key="bookmark._id">
        <keep-alive>
          <BookmarkCard :bookmark="bookmark" />
        </keep-alive>
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
  name: "BookmarkTab",
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
