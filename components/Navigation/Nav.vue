<template>
  <div>
    <nav class="bg-white dark:bg-black" v-on-clickaway="close">
      <div
        class="w-full fixed z-50 backdrop-filter backdrop-blur-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div class="flex items-center justify-between w-full h-16">
          <Logo />
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="hidden md:inline-flex">
                <div class="flex items-center justify-between space-x-4">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end md:hidden w-full">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <menu-icon
                v-if="!isOpen"
                size="1x"
                class="text-black dark:text-white h-6 w-6"
              ></menu-icon>
              <x-icon
                size="1x"
                class="text-black dark:text-white h-6 w-6"
                v-else
              ></x-icon>
            </button>
          </div>
        </div>
        <!-- NOTE: MOBILE MENU -->
        <div
          class="relative md:hidden"
          :class="{ relative: isOpen, hidden: !isOpen }"
        >
          <div class="-z-1 bg-black w-full h-full opacity-50 m-0 p-0"></div>
        </div>
        <div
          class="w-full fixed md:hidden shadow bg-white dark:bg-black"
          :class="{ relative: isOpen, hidden: !isOpen }"
        >
          <div
            class="z-50 backdrop-filter backdrop-blur-3xl rounded-xl border border-gray-100 dark:border-2 dark:border-gray-800 shadow-lg absolute w-full px-2 py-2 mt-4 space-y-1"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "vue-feather-icons";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close: function() {
      console.log("clicked away");
      this.isOpen = false;
    },
  },
};
</script>
