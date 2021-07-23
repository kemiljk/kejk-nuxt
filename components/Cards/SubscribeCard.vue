<template>
  <div class="flex bg-gray-50 dark:bg-gray-900 rounded-xl">
    <div class="p-8 w-full">
      <h1
        class="text-lg sm:text-xl text-gray-800 dark:text-white font-medium pb-2"
      >
        Subscribe to stay up-to-date.
      </h1>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/karl"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/karl', 'popupwindow')"
        class="embeddable-buttondown-form grid grid-cols-1 gap-2 mt-2 md:grid-cols-3 pb-4"
      >
        <label for="bd-email" class="md:col-span-2">
          <span class="sr-only">Enter your email</span>
          <input
            type="email"
            keyup.enter="submit"
            name="email"
            id="bd-email"
            placeholder="e.g. sly@stallone.com"
            class="py-3 px-3 w-full rounded-lg bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-2 focus:outline-none"
            required
          />
        </label>
        <input type="hidden" value="1" name="embed" />
        <Button type="submit" color="white">
          <template #icon>
            <mail-icon
              size="1x"
              class="inline-block mr-2 text-gray-50 dark:text-gray-900"
            />
          </template>
          <template #label> Newsletter </template>
        </Button>
      </form>
      <div class="flex flex-row space-x-2 pt-2 items-center justify-start">
        <a
          href="https://www.kejk.tech/rss.xml"
          target="_blank"
          rel="noreferrer"
          class="no-underline"
        >
          <Button color="grey" class="rounded-full w-full md:w-max">
            <template #icon>
              <rss-icon
                size="1x"
                class="inline-block mr-2 text-gray-900 dark:text-gray-50"
              />
            </template>
            <template #label> RSS </template>
          </Button>
        </a>
        <a
          href="https://app.mailbrew.com/_kejk/kejk-thoughts-QQU8XZ7Y1S4b?aff=_kejk"
          target="_blank"
          rel="noreferrer"
          class="no-underline"
        >
          <Button color="red" class=" rounded-full w-full md:w-max">
            <template #icon>
              <coffee-icon size="1x" class="inline-block mr-2 text-red-100" />
            </template>
            <template #label> Mailbrew </template>
          </Button>
        </a>
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
    MailIcon,
  },
};
</script>
