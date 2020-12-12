<template>
  <div class="relative mx-auto">
  <Nav>
    <NavItem to="/" isActive>Home</NavItem>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/thoughts">Thoughts</NavItem>
    <NavItem to="/uses">Uses</NavItem>
  </Nav>
  <div class="max-w-5xl mx-auto px-4">
    <header class="container pt-10 pb-2 max-w-xl mx-auto">
      <h1 class="pt-16 text-center">
        Hej, I'm Karl
      </h1>
    </header>
    <header class="pt-4 pb-2 max-w-xl mx-auto">
      <p class="text-2xl text-center">
          I'm a Product Designer and "sometimes" Frontend Developer, designing and defining the Home as a Service at
          <a href="https://www.homehero.co.uk" class="text-indigo-600 dark:text-indigo-500 font-bold" target="_blank" rel="noreferrer">HomeHero</a> in London, UK.
      </p>
      <div class="flex flex-col md:flex-row justify-center mt-8">
        <a href="https://www.twitter.com/_kejk" class="mx-2">
          <button type="button" class="flex flex-row justify-center text-center font-medium w-full bg-blue-400 text-white rounded-xl px-6 py-3 btn btn-primary transition duration-500 ease hover:bg-blue-500 focus:outline-none focus:shadow-outline">
            <twitter-icon size="1x" class="text-white mr-2 mt-1"></twitter-icon>Follow me on Twitter
          </button>
        </a>
        <a href="mailto:karl@kejk.tech?subject=Website%20enquiry" class="mx-2">
          <button type="button" class="flex flex-row justify-center text-center font-medium w-full mt-2 md:mt-0 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl px-6 py-3 btn btn-secondary transition duration-500 ease hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline">
            <mail-icon size="1x" class="text-gray-800 dark:text-white mr-2 mt-1"></mail-icon>Send me an email
          </button>
        </a>
      </div>
    </header>
    <header class="pt-16 max-w-xl">
      <h2>
        Some things I've made.
      </h2>
    </header>
    <div class="flex flex-row">
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="made in mades" :key="made.title">
              <keep-alive>
                  <MadeCard :made="made" />
              </keep-alive>
          </div>
        </div>
    </div>
    <header class="pt-16 max-w-xl">
      <h2>
        Some things I've helped make.
      </h2>
    </header>
    <div class="flex flex-row">
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="helpedMake in helpedMakes" :key="helpedMake.title">
              <keep-alive>
                  <HelpedMakeCard :helpedMake="helpedMake" />
              </keep-alive>
          </div>
        </div>
    </div>
    <header class="pt-16 max-w-xl">
      <h2>
        Thoughts on design and development.
      </h2>
    </header>
      <div class="flex flex-row">
        <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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
      <header class="pt-16 max-w-xl">
        <h2>
          Some things I'm currently enjoying.
        </h2>
      </header>
    <div class="flex flex-row">
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        <div v-for="media in medias" :key="media._id">
              <keep-alive>
                <MediaCard :media="media" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>
          Music I've written.
        </h2>
      </header>
    <div class="flex flex-row">
      <div class="flex flex-row grid-cols-1 w-full shadow-xs">
            <iframe src="https://embed.music.apple.com/us/album/cornerstone/1300802348?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ct=albums_cornerstone&amp;ls=1" height="440px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 100%; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"></iframe>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>
          How to reach me.
        </h2>
      </header>
      <div> 
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import { TwitterIcon } from 'vue-feather-icons';
import { MailIcon } from 'vue-feather-icons';

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "kemiljk",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  head() {
    return {
    title: 'KEJK – Home',
    meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.'
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
        { name: "twitter:creator", content: "@_kejk" },
        { name: "twitter:card", content: "summary_large_image" },
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
          hid: "twitter:image:src",
          name: "twitter:image:src",
          content: "https://res.cloudinary.com/kejk/image/upload/v1607350722/twitter-og_bbzz2a.png",
        },
      ],
    }
  },
  components: {
    TwitterIcon,
    MailIcon
  },
  data() {
    return {
      loading: false,
      medias: {},
      mades: [
        {
          href: "https://apps.apple.com/us/app/id1518887590",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281437/pxtoem_ubarny.png",
          title: "Hand››over",
          type: "iOS app"
        },
        {
          href: "https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281435/px2em_qnscic.png",
          title: "Px››Em",
          type: "Figma plugin installs",
          id: "install-count"
        },
        {
          href: "https://actions.getdrafts.com/a/1fP",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607678050/drafts_cosmic_tykczi.png",
          title: "Drafts››Cosmic",
          type: "Drafts Action"
        },
        {
          href: "https://www.lazypdf.tech",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607281439/lazyPDF_vxsn1b.png",
          title: "Lazy PDF",
          type: "macOS app"
        },
      ],
      helpedMakes: [
        {
          href: "https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377",
          img: "https://res.cloudinary.com/kejk/image/upload/v1606907284/mmac_z5flxv.png",
          title: "Make Me a Cocktail",
          skill: "Design"
        },
        {
          href: "https://www.confidotalent.com",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607678970/confido_g9gr6k.png",
          title: "Confido",
          skill: "Design & Development"
        },
        {
          href: "https://www.locallyuk.com",
          img: "https://res.cloudinary.com/kejk/image/upload/v1607678848/locally_m7wzjq.png",
          title: "Locally UK",
          skill: "Design"
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
    fetch("../../api/plugin-stats.js")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("install-count").prepend(data.install_count);
        })
  },
  methods: {
    async getBlogsData() {
        this.error = this.blog = null;
        this.loading = true;
        await bucket
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
    async getPostsData() {
        this.error = this.post = null;
        this.loading = true;
        await bucket
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
    async getMediasData() {
        this.error = this.media = null;
        this.loading = true;
        await bucket
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