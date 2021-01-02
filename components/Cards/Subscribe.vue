<template>
    <div class="flex justify-center mt-2 bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-900 rounded-xl">
          <div class="max-w-5xl mx-auto py-4">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/karl"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/karl', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <div class="flex flex-col w-full md:w-max">
                <label for="bd-email" class="font-medium text-black dark:text-white">Enter your email</label>
                <div class="flex flex-col md:flex-row md:space-x-2 w-full md:w-max">
                  <input type="email" name="email" id="bd-email" class="mt-2 py-3 px-3 w-full md:w-max rounded-md bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none"
                    required />
                  <input type="hidden" value="1" name="embed" />
                  <button type="submit" class="mt-2 w-full md:w-max bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition ease-in-out duration-300">
                  Subscribe for updates
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
</template>