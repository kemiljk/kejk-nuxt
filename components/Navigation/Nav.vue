<template>
  <div
    class="supports-backdrop-blur:bg-white/95 supports-backdrop-blur:dark:bg-black/95 bg-white dark:bg-black"
  >
    <nav
      class="fixed top-0 z-50 mx-auto w-full flex-none pl-4 backdrop-blur transition-colors duration-500 sm:pl-6 lg:px-8"
    >
      <div
        class="md:overflow-none scrollbar-hidden flex h-16 w-full items-center justify-between overflow-x-auto"
      >
        <Logo class="mr-6 shrink-0 md:mr-0" />
        <div
          class="mr-6 flex shrink-0 items-center justify-between space-x-2 md:mr-0 md:space-x-4"
        >
          <slot></slot>
        </div>
      </div>
    </nav>
  </div>
</template>
