<template>
  <div class="container max-w-3xl mx-auto px-4 sm:px-4">
    <nav class="flex flex-row justify-center pt-4">
      <ul class="flex">
            <li class="flex space-x-2">
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
    <header class="pt-10 pb-2 mb-10 max-w-md mx-auto">
      <h1 class="text-center">
        /Uses
      </h1>
    </header>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <p
          class="dark:text-white mb-3"
        >
          I use a variety of tools to get my work done on a daily basis. Being a designer and frontend developer, I have to switch between two very different but complimentary workflows.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          As much as possible, I try to integrate these two workflows to reduce cognitive load and improve productivity.
        </p>
        <p
          class="dark:text-white mb-3"
        >
          I'm primarily a designer first but I learned the fundamentals of web development by hacking other peoples' MySpace pages back when that was a real thing.
        </p>
        <p class="dark:text-white mb-3">
          Now, I'm exploring building frontends in
          <a
            href="https://vuejs.org"
            target="_blank"
            rel="noreferrer"
            class="text-indigo-600 dark:text-indigo-300 font-medium"
          >Vue.js</a> and utilising 
          <a
            href="https://nuxtjs.org"
            target="_blank"
            rel="noreferrer"
            class="text-indigo-600 dark:text-indigo-300 font-medium"
          >Nuxtjs</a> and the 
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            class="text-indigo-600 dark:text-indigo-300 font-medium"
          >
          TailwindCSS</a> library. As a developer who started with bare HTML and CSS and stayed that way for a while, I couldn't recommend Vue more to designers who're looking to code. Primarily building your application in semantic HTML whilst leveraging the power of JavaScript makes it a one of a kind framework that allows me to write fast, performant code.
        </p>
        <p class="dark:text-white mb-3">
            I'm also now exploring the wonders of <a
            href="https://developer.apple.com/documentation/swiftui"
            target="_blank"
            rel="noreferrer"
            class="text-indigo-600 dark:text-indigo-300 font-medium"
          >SwiftUI</a> which is leading to a whole new experience of developing. 
        </p>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col"
      >
        <h3 class="font-bold dark:text-white text-lg mt-4 mb-2">
          Design.
        </h3>
        <p
          class="dark:text-white mb-3"
        >
          My design tools are simple and straightforward. I keep it lean and minimal.
        </p>
        <ul class="dark:text-white mb-4">
          <li class="mb-3">
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Figma</a> is my design tool of choice. It's constantly updated and has such a flexible and vast ecosystem of plugins that I can't see myself using anything else. You can find me over at
            <a
              href="https://www.figma.com/@_kejk"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >@_kejk</a> where I've released the <a
            href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em"
            target="_blank" 
            rel="noreferrer"
            class="text-indigo-600 dark:text-indigo-300 font-medium"
          >Px ›› Em</a> plugin.
          </li>
          <li class="mb-3">
            <a
              href="https://developer.apple.com/documentation/swiftui"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >SwiftUI</a> is slowly becoming a prototyping and design/build tool for me. It allows me to create custom designs and production-ready code, whilst utilising the constraints of iOS by default. This increases the rate of design exploration but also helps with the final real-world application when working with engineers. I've now released <a
              href="https://developer.apple.com/xcode/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Hand››over</a> on the App Store to help with handing over pixel-based designs to developers and make it easier to calculate em values and line-heights with more to come.
          </li>
          <li>
            <a
              href="https://framer.com/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Framer</a> is slowly becoming a tool I use more often for more complex prototyping when not building direct in SwiftUI. It's now eaiser than ever to build complex interactions using just the tools at hand whilst also being able to modify and amplify those interactions with knowledge of JavaScript and primarily React.
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col"
      >
        <h3 class="font-bold dark:text-white text-lg mt-4 mb-2">
          Development.
        </h3>
        <p
          class="dark:text-white mb-3"
        >
          Like with design, I keep my development toolset minimal but have a few more pieces of software I need.
        </p>
        <ul class="dark:text-white mb-4">
          <li class="mb-3">
            <strong>Languages:</strong> HTML, CSS/SCSS, JavaScript and Swift
          </li>
          <li class="mb-3">
            <strong>Frameworks / Libraries / Tools:</strong> Vue.js, Veutify, Git, SwiftUI
          </li>
          <li class="mb-3">
            <a
              href="https://www.adobe.com/products/xd.html"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >VSCode</a> is my editor of choice. I currently use GitHub's new
            <a
              href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >GitHub</a> theme with a custom set of a few background colours to create a pure black environment along with
            <a
              href="https://www.jetbrains.com/lp/mono/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >JetBrains Mono</a> as my default code font with ligatures set to true.
          </li>
          <li class="mb-3">
            <a
              href="https://developer.apple.com/xcode/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Xcode</a> has gotten so much better recently, especially with Xcode 12. Live previews of SwiftUI code make it the defacto choice for iOS prototyping and dev.
          </li>
          <li class="mb-3">
            <a
              href="https://ohmyz.sh"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >ZSH</a> is my default terminal shell
            in Hyper with a basic custom theme set.
          </li>
          <li>
            <a
              href="https://www.mozilla.org/en-GB/firefox/developer/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Firefox Developer Edition</a> is the dev browser I tend to use. It offers
            an extremely powerful set of dev tools whilst maintaining the privacy I want to have online.
            Although colour rendering is very different when compared with Safari or Chrome, the dev
            tools alone make it the best fit for me. I do still use Chrome from time to time though, always safer to use multiple!
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col"
      >
        <h3 class="font-bold dark:text-white text-lg mt-4 mb-2">
          Hardware.
        </h3>
        <p
          class="dark:text-white mb-3"
        >
          I don't use a lot of hardware, and it varies if I'm travelling but here's my common EDC.
        </p>
        <ul class="dark:text-white mb-6">
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/iphone-12/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >
              iPhone
              12
            </a> in black.
          </li>
          <li class="mb-3">Apple Watch Series 5 [no longer sold] in Space Grey.
          </li>
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/ipad-air/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
          >
            iPad Air (2020)</a> in Space Grey with the
            <a
              href="https://www.apple.com/uk/ipad-keyboards/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Magic Keyboard</a> and
            <a
              href="https://www.apple.com/uk/apple-pencil"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >second generation Apple Pencil</a>.
          </li>
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/macbook-pro-13/"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >MacBook Pro 13" (2020)</a> in space grey with the
            <a
              href="https://www.keychron.com/pages/k6"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Keychron K6 keyboard</a>,
            <a
              href="https://smile.amazon.co.uk/gp/product/B07W6JG6Z7/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Logitech MX Master 3 mouse</a> and a <a
              href="https://smile.amazon.co.uk/dp/B084XR8RPB/ref=cm_sw_r_cp_tai_W4bbFbAX7S70V"
              target="_blank"
              rel="noreferrer"
              class="text-indigo-600 dark:text-indigo-300 font-medium"
            >Lenovo L28u-30</a> monitor
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'KEJK – Uses',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'What software, hardware and services I use daily.'
      }
    ],
  },
  data() {
    return {
      isActive: Boolean,
    }
  }
};
</script>