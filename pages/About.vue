<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about" isActive>About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          /About
        </h1>
      </header>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <p>
          "Less, but better", a design principle that I live by when thinking about anything I do in life. As an <a href="https://gregmckeown.com/book/" target="_blank" el="noreferrer">essentialist</a> and practitioner of <a href="https://www.humanetech.com/who-we-are" target="_blank" el="noreferrer">Time Well Spent</a>, I believe in focusing on what is best, not on what is perceived to be important.
        </p>
        <p>
          I've been fortunate to work at several awesome and interesting startups over the years across several different industries. I started out working within Pharmaceutical advertising at Incuna [now shuttered] and then <a href="https://www.cognite.co" target="_blank" el="noreferrer">Cognite</a> across their digital portfolios, delivering user experience and digital management, progressing into leadership.
        </p>
        <p>
          I then moved into Renewable Energy, using design thinking methodologies to lead the product design of an innovative AI-driven renewable energy purchasing marketplace for corporations at <a href="https://www.neuerenergy.com" target="_blank" el="noreferrer">NeuerEnergy</a>.
        </p>
        <p>
          Most recently, I've transitioned into integrating a strong DesignOps responsibility alongside Product Design and Frontend Development roles. At <a href="https://www.homehero.co.uk" target="_blank" el="noreferrer">HomeHero</a> I'm helping to design, build and define the Home as a Service, a new customer and business category. We're transforming how people manage their homes with a network of products and services that help people consolidate their bills and household services, as well as bringing them closer to their neighbourhoods.
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
      <div class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800" />
      <header class="max-w-xl">
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
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | About",
        description: "Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",
        url: "https://kejk.tech/about",
        image: "https://res.cloudinary.com/kejk/image/upload/v1607350722/og-image_bcs2c8.png",
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: "KEJK | About",
          meta: [
          ...this.meta,
          ], link: [ { rel: 'canonical', href: "https://kejk.tech/about"} ]
    }
  },
  data() {
    return {
      socials: [
        {
          href: 'https://www.twitter.com/_kejk',
          twitter: true,
          title: 'Twitter',
        },
        {
          href: 'https://www.Linkedin.com/kejk',
          linkedin: true,
          title: 'LinkedIn',
        },
        {
          href: 'https://www.figma.com/@_kejk',
          figma: true,
          title: 'Figma',
        },
        {
          href: 'https://www.github.com/kemiljk/',
          github: true,
          title: 'Github',
        },
        {
          href: 'https://dribbble.com/_kejk',
          dribbble: true,
          title: 'Dribbble',
        },
        {
          href: 'https://music.apple.com/gb/album/cornerstone/1300802348',
          music: true,
          title: 'Music',
        },
      ]
    }
  }
};
</script>