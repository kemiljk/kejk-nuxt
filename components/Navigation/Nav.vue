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
        </nav>
        <nav class="fixed w-full z-50" v-on-clickaway="close">
      <div class="flex flex-col w-full">
        <div class="flex w-full items-center justify-between xl:hidden p-3">
        <Logo />
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
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
        <div
          class="w-full flex-col xl:hidden px-8 pb-8"
          :class="{ flex: isOpen, hidden: !isOpen }"
        >
          <div
            class="w-full bg-[#05042F] shadow-lg p-2 space-y-1 rounded-xl text-center transition transform ease-linear duration-200"
            @click="close"
          >
            <slot />
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
