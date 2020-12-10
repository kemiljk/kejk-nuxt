<template>
  <div class="relative mx-auto">
    <nav class="fixed flex bg-white dark:bg-black w-full pt-4 border-b-2 border-gray-100 dark:border-gray-900">
        <ul class="mx-auto">
            <li class="flex space-x-4">
                <NuxtLink
                isActive
                to="/"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Home
                </NuxtLink>
                <NuxtLink
                to="/about"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                About
                </NuxtLink>
                <NuxtLink
                to="/thoughts"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Thoughts
                </NuxtLink>
                <NuxtLink
                to="/uses"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 transition ease-in-out duration-100': isActive }]"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          /Uses
        </h1>
      </header>
      <div v-for="gear in gears" :key="gear._id">
        <keep-alive>
          <Uses :gear="gear" /> 
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Uses from '../components/Uses.vue'

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  head() {
    return {
    title: 'KEJK – Uses',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What software, hardware and services I use daily.'
        },
        { property: "og:site_name", content: "KEJK" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.kejk.tech",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Karl Emil James Koch",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Human-first Product Designer and Developer.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
        },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },

        { name: "twitter:site", content: "@_kejk" },
        { name: "twitter:card", content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/twitter-og_bbzz2a.png" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://www.kejk.tech",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Karl Emil James Koch",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Human-first Product Designer and Developer.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/twitter-og_bbzz2a.png",
        },
      ],
    }
  },
  components: {
    Uses
  },
  data() {
    return {
      isActive: Boolean,
      gears: {},
    }
  },
  created() {
    this.getGearsData();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    getGearsData() {
        // this.error = this.use = null;
        this.loading = true;
        bucket
        .getObjects({
            limit: 1,
            type: "gears",
            props: "_id,slug,content"
        })
        .then(data => {
            const gears = data.objects;
            this.loading = false;
            this.gears = gears;
        });
    },
    async fetchData() {
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          this.gear = data.object;
          this.loading = false;
        });
    },
  },
};
</script>