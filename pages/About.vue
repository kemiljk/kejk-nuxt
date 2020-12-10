<template>
  <div class="relative mx-auto">
    <nav class="fixed flex  backgroundBlur w-full pt-4 border-b-2 border-gray-100 dark:border-gray-900">
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
                isActive
                to="/about"
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 transition ease-in-out duration-100': isActive }]"
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
                :class="['font-medium block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-800 dark:hover:text-indigo-300 transition ease-in-out duration-100']"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          /About
        </h1>
      </header>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <p>
          "Less, but better", a design principle coined by Dieter Rams that I live by when thinking about anything I do in life. As an essentialist and practitioner of Time Well Spent, I believe in focusing on what is best, not on what is perceived to be important.
        </p>
        <p>
          I also apply this principle across my work life. Both internal and external stakeholders are bogged down with lots of things to worry about; from budget, to planning and strategy and delivering on tight timelines. So I see it that in my role as a product designer and frontend developer, I should be able to provide my team with the most minimal and intuitive solution to their problem, whilst adding as much value to the business and the best possible experience for the person interacting with the end product or service.
        </p>
        <p>
          I've been fortunate to work at several awesome and interesting startups over the years, across several different industries. I started out working within Pharmaceutical advertising at Incuna [now shuttered] and then <a href="https://www.cognite.co" target="_blank" el="noreferrer">Cognite</a> across their digital portfolios, delivering user experience and digital management, progressing into leadership.
        </p>
        <p>
          I then moved into Renewable Energy, using design thinking methodologies to create a human-centred AI-driven PaaS at <a href="https://www.neuerenergy.com" target="_blank" el="noreferrer">NeuerEnergy</a>.
        </p>
        <p>
          Most recently, I've transitioned into a tighter Product Design focus with a strong DesignOps responsibility. At <a href="https://www.homehero.co.uk" target="_blank" el="noreferrer">HomeHero</a> I'm helping to design and define the Home as a Service, a new customer and business category. HomeHero is a VC-backed startup transforming how people manage their homes. Our network of products and services help users manage their bills and household services, as well as bringing users closer to their neighbourhoods.
        </p>
      </div>
    </div>
    <header class="pt-4 max-w-xl">
      <h2>
        Where to find me.
      </h2>
    </header>
      <div class="flex flex-row">
        <div class="grid grid-row grid-cols-2 md:grid-cols-6 w-full gap-4">
          <div v-for="social in socials" :key="social._id">
              <keep-alive>
                  <SocialCard :social="social" />
              </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
    title: 'KEJK – About',
    meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.'
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
  data() {
    return {
      isActive: Boolean,
      socials: [
        {
          href: 'https://www.twitter.com/_kejk',
          icon: 'logo-twitter',
          title: 'Twitter',
          color: 'text-blue-400'
        },
        {
          href: 'https://www.Linkedin.com/kejk',
          icon: 'logo-linkedin',
          title: 'LinkedIn',
          color: 'text-blue-600'
        },
        {
          href: 'https://www.figma.com/@_kejk',
          icon: 'earth-outline',
          title: 'Figma',
          color: 'text-green-400'
        },
        {
          href: 'https://www.github.com/kemiljk/',
          icon: 'logo-github',
          title: 'Github',
          color: 'dark:text-white text-black'
        },
        {
          href: 'https://dribbble.com/_kejk',
          icon: 'logo-dribbble',
          title: 'Dribbble',
          color: 'text-pink-400'
        },
        {
          href: 'https://music.apple.com/gb/album/cornerstone/1300802348',
          icon: 'musical-notes',
          title: 'Music',
          color: 'text-red-600'
        },
      ]
    }
  }
};
</script>