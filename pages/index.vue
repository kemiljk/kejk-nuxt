<template>
  <div class="relative bg-white max-w-5xl mx-auto">
    <header class="pt-10 pb-2 max-w-xl mx-auto">
      <h1 class="text-5xl font-black">
        Hey, I'm Karl
      </h1>
    </header>
    <header class="pt-4 pb-2 max-w-xl mx-auto">
      <h2 class="font-regular text-2xl">
          Currently, I'm designing and helping define the Home as a Service at
          <a href="https://www.homehero.co.uk" class="text-indigo-600 font-bold" target="_blank" rel="noreferrer">HomeHero</a> in London, UK.
      </h2>
    </header>
    <header class="pt-16 pb-2 max-w-xl">
      <h2 class="font-medium text-3xl">
        Things I've made.
      </h2>
    </header>
    <div class="flex flex-row mt-4">
        <div class="grid grid-cols-12 sm:grid-cols-4 gap-4">
          <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 hover:shadow-md rounded-xl">
              <a href="https://apps.apple.com/us/app/id1518887590" target="_blank" rel="noreferrer">
                  <img alt="Px to Em logo visual" src="../assets/pxtoem.webp" class="rounded-md" />
                  <button class="flex mt-2 text-md text-gray-900 font-medium mx-auto py-2 rounded-md">
                      Hand››over
                  </button>
              </a>
          </div>
          <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 hover:shadow-md rounded-xl">
              <a href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em" target="_blank" rel="noreferrer">
                  <img alt="Px to Em plugin logo visual" src="../assets/px2em.webp" class="rounded-md" />
                  <button class="flex mt-2 text-md text-gray-900 font-medium mx-auto py-2 rounded-md">
                      Px ›› Em
                  </button>
              </a>
          </div>
          <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 hover:shadow-md rounded-xl">
              <a href="https://www.lazypdf.tech" target="_blank" rel="noreferrer">
                  <img alt="Lazy PDF logo visual" src="../assets/lazyPDF.webp" class="rounded-md" />
                  <button class="flex mt-2 text-md text-gray-900 font-medium mx-auto py-2 rounded-md">
                      Lazy PDF
                  </button>
              </a>
          </div>
          <div class="flex flex-cols-6 sm:flex-cols-3 mb-3 p-4 bg-gray-100 hover:shadow-md rounded-xl">
              <a href="https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377" target="_blank" rel="noreferrer">
                  <img alt="Make Me A Cocktail visual" src="https://res.cloudinary.com/kejk/image/upload/v1606907284/mmac_z5flxv.png" class="rounded-md" />
                  <button class="flex mt-2 text-md text-gray-900 font-medium mx-auto py-2 rounded-md">
                      <span class="hidden md:block">Make Me A Cocktail</span>
                      <span class="md:hidden">MMAC</span>
                  </button>
              </a>
          </div>
        </div>
    </div>
    <header class="pt-16 pb-2 max-w-xl">
      <h2 class="font-medium text-3xl">
        Thoughts on design and development.
      </h2>
    </header>
      <div class="flex flex-row">
        <div class="grid grid-row sm:grid-cols-12 md:grid-cols-2 gap-4">
          <div v-for="blog in blogs" :key="blog._id">
              <keep-alive>
                  <BlogCard :blog="blog" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 pb-2 max-w-xl">
        <h2 class="font-medium text-3xl">
          Posts from around the web.
        </h2>
      </header>
      <div class="flex flex-row">
        <div class="grid grid-row sm:grid-cols-12 md:grid-cols-2 gap-4">
          <div v-for="post in posts" :key="post._id">
              <keep-alive>
                  <PostCard :post="post" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 pb-2 max-w-xl">
        <h2 class="font-medium text-3xl">
          Posts from around the web.
        </h2>
      </header>
    <div class="flex flex-row">
      <div class="grid grid-row sm:grid-cols-12 md:grid-cols-2 gap-4 md:gap-8">
        <div v-for="media in medias" :key="media._id">
              <keep-alive>
                <MediaCard :media="media" />
              </keep-alive>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import PostCard from '../components/PostCard.vue';
import MediaCard from '../components/MediaCard.vue';

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  components: {
    BlogCard,
    PostCard,
    MediaCard
  },
  data() {
    return {
      isActive: true,
      loading: false,
      medias: {},
      posts: {},
      blogs: {},
      slug: "",
    }
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getPostsData();
    this.getMediasData();
  },
  methods: {
    getBlogsData() {
            this.error = this.blog = null;
            this.loading = true;
            bucket
            .getObjects({
                type: "blogs",
                props: "_id,slug,title,content,metadata"
            })
            .then(data => {
                const blogs = data.objects;
                this.loading = false;
                this.blogs = blogs;
            });
        },
    getPostsData() {
        this.error = this.post = null;
        this.loading = true;
        bucket
        .getObjects({
            type: "posts",
            props: "_id,slug,title,content,metadata"
        })
        .then(data => {
            const posts = data.objects;
            this.loading = false;
            this.posts = posts;
        });
    },
    getMediasData() {
        this.error = this.media = null;
        this.loading = true;
        bucket
        .getObjects({
            type: "medias",
            props: "_id,title,metadata",
            limit: 3,
        })
        .then(data => {
            const medias = data.objects;
            this.loading = false;
            this.medias = medias;
        });
    },
  },
}
</script>