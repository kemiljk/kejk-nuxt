<template>
  <div
    class="justify-center bg-white dark:bg-black sm:pt-0 border-2 border-gray-100 dark:border-gray-900 rounded-xl"
  >
    <div class="max-w-5xl mx-auto">
      <div class="overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div
            class="p-6 sm:mr-2 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"
          >
            <h1
              class="text-xl sm:text-2xl text-gray-800 dark:text-white font-bold tracking-tight"
            >
              Get in touch.
            </h1>
            <p
              class="text-medium text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-2"
            >
              Fill in the form to start a conversation
            </p>
            <div
              class="grid grid-row grid-cols-2 md:grid-cols-2 w-full gap-4 pt-4"
            >
              <div v-for="social in socials" :key="social._id">
                <keep-alive>
                  <SocialCard :social="social" />
                </keep-alive>
              </div>
            </div>
          </div>

          <form
            class="p-6 flex flex-col justify-center"
            action="https://formcarry.com/s/mGfGBUrWtY"
            method="POST"
            accept-charset="UTF-8"
          >
            <div class="flex flex-col mt-2">
              <label for="email" class="font-medium text-black dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. arnold@schwarzenegger.com"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-2 focus:outline-none"
                required
              />
            </div>

            <div class="flex flex-col mt-2">
              <label
                for="message"
                class="font-medium text-black dark:text-white"
                >Your message</label
              >
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                placeholder="Ask me anything"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-2 focus:outline-none"
                required
              />
            </div>
            <input type="hidden" name="_gotcha" />

            <button
              id="submitbutton"
              type="submit"
              class="mt-8 md:w-32 bg-black hover:bg-gray-900 dark:bg-white text-white dark:text-gray-900 dark:hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "GetInTouch",
  components: {
    CheckIcon,
  },
  data() {
    return {
      socials: [
        {
          href: "https://www.figma.com/@_kejk",
          figma: true,
          title: "Figma",
        },
        {
          href: "https://www.twitter.com/_kejk",
          twitter: true,
          title: "Twitter",
        },
        {
          href: "https://www.Linkedin.com/in/kejk",
          linkedin: true,
          title: "LinkedIn",
        },
        {
          href: "https://www.github.com/kemiljk/",
          github: true,
          title: "Github",
        },
        {
          href: "https://dribbble.com/_kejk",
          dribbble: true,
          title: "Dribbble",
        },
        {
          href: "https://www.ko-fi.com/kemiljk",
          coffee: true,
          title: "Ko-Fi",
        },
      ],
    };
  },
};
</script>
