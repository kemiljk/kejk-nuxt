<template>
  <div class="relative max-w-5xl mx-auto px-4 sm:px-0">
    <nav class="flex flex-row justify-center pt-4 ">
        <ul class="flex">
            <li class="flex space-x-2">
                <NuxtLink
                isActive
                to="/"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 transition ease-in-out duration-100': isActive }]"
                >
                Home
                </NuxtLink>
                <NuxtLink
                to="/about"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                About
                </NuxtLink>
                <NuxtLink
                to="/thoughts"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Thoughts
                </NuxtLink>
                <NuxtLink
                to="/uses"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <header class="pt-10 pb-2 max-w-xl mx-auto">
      <h1 class="text-5xl font-black dark:text-white text-center">
        Hej, I'm Karl
      </h1>
    </header>
    <header class="pt-4 pb-2 max-w-xl mx-auto">
      <h2 class="font-regular text-2xl dark:text-white text-center">
          Currently, I'm designing and helping define the Home as a Service at
          <a href="https://www.homehero.co.uk" class="text-indigo-600 dark:text-indigo-500 font-bold" target="_blank" rel="noreferrer">HomeHero</a> in London, UK.
      </h2>
      <div class="flex flex-col md:flex-row justify-center mt-8">
        <a href="https://www.twitter.com/_kejk" class="mx-2">
          <button type="button" class="w-full bg-blue-500 text-white rounded-md px-5 py-3 btn btn-primary transition duration-500 ease hover:bg-blue-600 focus:outline-none focus:shadow-outline"><ion-icon name="logo-twitter" class="mr-2"></ion-icon>Follow me on Twitter
          </button>
        </a>
        <a href="mailto:karl@kejk.tech?subject=Website%20enquiry" class="mx-2">
          <button type="button" class="w-full mt-2 md:mt-0 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md px-5 py-3 btn btn-secondary transition duration-500 ease hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline"><ion-icon name="mail" class="mr-2"></ion-icon>Send me an email
          </button>
        </a>
      </div>
    </header>
    <header class="pt-16 pb-2 max-w-xl">
      <h2 class="font-bold text-2xl dark:text-white">
        Some things I've made.
      </h2>
    </header>
    <div class="flex flex-row mt-4">
        <div class="grid sm:grid-cols-12 md:grid-cols-4 gap-4">
          <div v-for="made in mades" :key="made.title">
              <keep-alive>
                  <MadeCard :made="made" />
              </keep-alive>
          </div>
        </div>
    </div>
    <header class="pt-16 pb-2 max-w-xl">
      <h2 class="font-bold text-2xl dark:text-white">
        Thoughts on design and development.
      </h2>
    </header>
      <div class="flex flex-row mt-4">
        <div class="grid grid-row sm:grid-cols-12 md:grid-cols-2 gap-4">
          <div v-for="blog in blogs" :key="blog._id">
              <keep-alive>
                  <BlogCard :blog="blog" />
              </keep-alive>
          </div>
          <div v-for="post in posts" :key="post._id">
              <keep-alive>
                  <PostCard :post="post" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 pb-2 max-w-xl">
        <h2 class="font-bold text-2xl dark:text-white">
          Some things I'm currently enjoying.
        </h2>
      </header>
    <div class="flex flex-row mt-4">
      <div class="grid grid-row xs:grid-cols-12 md:grid-cols-3 w-full gap-4">
        <div v-for="media in medias" :key="media._id">
              <keep-alive>
                <MediaCard :media="media" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 pb-2 max-w-xl">
        <h2 class="font-bold text-2xl dark:text-white">
          Music I've written.
        </h2>
      </header>
    <div class="flex flex-row mt-4">
      <div class="flex flex-row grid-cols-12 w-full shadow-xs">
            <iframe src="https://embed.music.apple.com/us/album/cornerstone/1300802348?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ct=albums_cornerstone&amp;ls=1" height="440px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 100%; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"></iframe>
        </div>
      </div>
    </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import PostCard from '../components/PostCard.vue';
import MediaCard from '../components/MediaCard.vue';
import MadeCard from '../components/MadeCard.vue';

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  head: {
    title: 'KEJK – Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.'
      }
    ],
  },
  components: {
    BlogCard,
    PostCard,
    MediaCard,
    MadeCard
  },
  data() {
    return {
      isActive: Boolean,
      loading: false,
      medias: {},
      mades: [
        {
          href: "https://apps.apple.com/us/app/id1518887590",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281437/pxtoem_ubarny.png",
          title: "Hand››over"
        },
        {
          href: "https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281435/px2em_qnscic.png",
          title: "Px ›› em"
        },
        {
          href: "https://www.lazypdf.tech",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281439/lazyPDF_vxsn1b.png",
          title: "Lazy PDF"
        },
        {
          href: "https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377",
          img: "https://res.cloudinary.com/kejk/image/upload/v1606907284/mmac_z5flxv.png",
          title: "Make Me a Cocktail"
        }
      ],
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
            limit: 1,
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
            limit: 1,
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
            limit: 3,
            type: "medias",
            props: "_id,title,metadata",
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