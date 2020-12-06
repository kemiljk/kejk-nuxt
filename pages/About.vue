<template>
  <div class="relative max-w-3xl mx-auto px-4 sm:px-0">
    <nav class="flex justify-center p-4">
        <ul class="flex">
            <li class="flex space-x-2">
                <NuxtLink
                isActive
                to="/"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50']"
                >
                Home
                </NuxtLink>
                <NuxtLink
                isActive
                to="/about"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50', { 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200': isActive }]"
                >
                About
                </NuxtLink>
                <NuxtLink
                to="/thoughts"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50']"
                >
                Thoughts
                </NuxtLink>
                <NuxtLink
                to="/uses"
                :class="['block px-4 py-2 rounded-md text-gray-900 dark:text-gray-50']"
                >
                Uses
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <header class="pt-10 pb-2 mb-10 max-w-md mx-auto">
      <h1 class="text-5xl font-black dark:text-white text-center">
        /About
      </h1>
    </header>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <p
          class="dark:text-white mb-3"
        >
          "Less, but better", a design principle coined by Dieter Rams that I live by when thinking about anything I do in life. As an essentialist and practitioner of Time Well Spent, I believe in focusing on what is best, not on what is perceived to be important.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          I also apply this principle across my work life. Both internal and external stakeholders are bogged down with lots of things to worry about; from budget, to planning and strategy and delivering on tight timelines. So I see it that in my role leading design and frontend development, I should be able to provide my team with the most minimal and intuitive solution to their problem, whilst adding as much value to the business and providing the best possible user experience for the human interacting with the end product or service.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          I've been fortunate to work at several awesome and interesting companies over the years, across several different industries. I started out working within Pharmaceutical advertising at Incuna [now shuttered] and then <a href="https://www.cognite.co" target="_blank" el="noreferrer" class="text-indigo-600 dark:text-indigo-300">Cognite</a> across their digital portfolios, delivering user experience and digital management, progressing into leadership.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          I then moved into Renewable Energy, using design thinking methodologies to create a human-centred AI-driven PaaS at <a href="https://www.neuerenergy.com" target="_blank" el="noreferrer" class="text-indigo-600 dark:text-indigo-300">NeuerEnergy</a>.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          Most recently, I've transitioned into a tighter Product Design focus with a strong DesignOps responsibility. At <a href="https://www.homehero.co.uk" target="_blank" el="noreferrer" class="text-indigo-600 dark:text-indigo-300">HomeHero</a> I'm helping to design and define the Home as a Service, a new customer and business category. HomeHero is a VC-backed startup transforming how people manage their homes. Our native app helps users manage their bills and household services, as well as bringing users closer to their neighbourhoods.
        </p>
      </div>
    </div>
    <header class="pt-4 pb-2 max-w-xl">
      <h2 class="font-medium text-2xl dark:text-white">
        Where to find me.
      </h2>
    </header>
      <div class="flex flex-row mt-4">
        <div class="grid grid-row grid-cols-2 md:grid-cols-6 w-full gap-4">
          <div v-for="social in socials" :key="social._id">
              <keep-alive>
                  <SocialCard :social="social" />
              </keep-alive>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Karl Emil James Koch – About',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.'
      }
    ],
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
          icon: 'logo-figma-outline',
          title: 'Figma',
          color: 'text-red-500'
        },
        {
          href: 'https://www.github.com/kemiljk/',
          icon: 'logo-github',
          title: 'Github',
          color: 'text-white'
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