<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/thoughts" isActive>Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-5xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 text-center">
          /Thoughts
        </h1>
      </header>
    <header class="pt-16 max-w-xl">
      <h2>
        Thoughts on design and development.
      </h2>
    </header>
      <div class="flex flex-row">
        <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="blog in blogs" :key="blog._id">
              <keep-alive>
                  <BlogCard :blog="blog" />
              </keep-alive>
          </div>
        </div>
      </div>
      <header class="pt-16 max-w-xl">
        <h2>
          Posts from around the web.
        </h2>
      </header>
        <div class="flex flex-row">
          <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="post in posts" :key="post._id">
              <keep-alive>
                  <PostCard :post="post" />
              </keep-alive>
          </div>
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

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
    read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  head() {
    return {
    title: 'KEJK – Thoughts',
    meta: [
      { hid: 'description', name: 'description', content: 'Thoughts on Design and Development from here and around the web.' },
      { hid: 'og:title', property: 'og:title', content: 'KEJK – Thoughts'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.kejk.tech/thoughts'},
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png'},
      { hid: 'og:description', property: 'og:description', content: 'Thoughts on Design and Development from here and around the web.'},
      { property: 'twitter:domain', content: 'https://www.kejk.tech/thoughts'},
      { name: "twitter:site", content: "@_kejk" },
      { name: "twitter:creator", content: "@_kejk" },
      { name: "twitter:card", content: "summary_large_image" },
      { hid: 'twitter:title', property: 'twitter:title', content: 'KEJK – Thoughts'},
      { hid: 'twitter:description', property: 'twitter:description', content: 'Thoughts on Design and Development from here and around the web.'},
      { hid: 'twitter:image:src', property: 'twitter:image:src', content: 'https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png'},
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://www.kejk.tech/thoughts'},
      { hid: 'twitter:label1', property: 'twitter:label1', content: 'KEJK – Thoughts'},  
      ], link: [ { rel: 'canonical', href: 'https://www.kejk.tech/thoughts'} ]
    }
  },
  data() {
    return {
      loading: false,
      posts: {},
      blogs: {},
      slug: "",
    }
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getPostsData();
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
  },
}
</script>