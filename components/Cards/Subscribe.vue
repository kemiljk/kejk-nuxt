<template>
    <div class="flex justify-center mt-2 bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-900 rounded-xl">
          <div class="max-w-5xl mx-auto py-4">
          <h1
              class="text-xl sm:text-2xl text-gray-800 dark:text-white font-bold pb-4"
            >
              Subscribe to stay up-to-date.
            </h1>
          <div class="flex flex-col md:flex-row">
          <a
            href="https://www.kejk.tech/feed.xml"
            target="_blank"
            rel="noreferrer"
            class="mx-2"
          >
            <button
              class="flex flex-row justify-center text-center font-medium w-full sm:w-max bg-indigo-600 px-6 py-3 rounded-md text-indigo-100 hover:bg-indigo-500"
            >
              <rss-icon
                size="1x"
                class="flex align-middle mt-1 text-indigo-100 mr-2"
              ></rss-icon>
              Subscribe via RSS
            </button>
          </a>
          <a
            href="https://share.mailbrew.com/_kejk/kejk-sXWcveOcS678?aff=_kejk"
            target="_blank"
            rel="noreferrer"
            class="mx-2"
          >
            <button
              class="flex flex-row justify-center text-center font-medium mt-2 md:mt-0 w-full sm:w-max bg-red-500 px-6 py-3 rounded-md text-red-50 hover:bg-red-400"
            >
              <coffee-icon
                size="1x"
                class="flex align-middle mt-1 text-red-100 mr-2"
              ></coffee-icon>
              Subscribe via Mailbrew
            </button>
          </a>
         </div>
         <div class="flex justify-center w-full md:w-max mx-auto">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/karl"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/karl', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <div class="flex flex-col w-full md:w-max mt-4">
                <label for="bd-email" class="font-medium text-black dark:text-white">Enter your email</label>
                <div class="flex flex-col md:flex-row md:space-x-2 w-full md:w-max">
                  <input type="email" name="email" id="bd-email" placeholder="e.g. sly@stallone,com" class="mt-2 py-3 px-6 w-full md:w-max rounded-md bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none"
                    required />
                  <input type="hidden" value="1" name="embed" />
                  <button type="submit" class="flex flex-row justify-center text-center font-medium mt-2 w-full sm:w-max py-3 px-6 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 text-white py-3 px-6 rounded-md transition ease-in-out duration-300">
                   <mail-icon
                size="1x"
                class="flex align-middle mt-1 text-white mr-2"
              ></mail-icon
              >
                  Subscribe for updates
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
</template>

<script>
import { RssIcon, CoffeeIcon, MailIcon } from "vue-feather-icons";

export default {
  components: {
    RssIcon,
    CoffeeIcon,
    MailIcon
    }
}

</script>