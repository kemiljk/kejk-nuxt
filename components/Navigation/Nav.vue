<template>
  <div class="flex w-full bg-white dark:bg-black">
    <nav
      class="fixed z-50 mx-auto w-full pl-4 backdrop-blur-2xl sm:pl-6 lg:px-8"
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
