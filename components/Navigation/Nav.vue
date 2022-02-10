<template>
  <div>
    <nav class="backdrop-blur-2xl bg-white dark:bg-black">
      <div
        class="w-full fixed z-50 mx-auto pl-4 sm:pl-6 lg:px-8"
      >
        <div
          class="flex items-center justify-between w-full h-16 overflow-x-auto md:overflow-none scrollbar-hidden"
        >
          <Logo class="mr-6 md:mr-0" />
          <div class="flex items-center">
            <div class="shrink-0">
              <div class="inline-flex">
                <div
                  class="flex items-center justify-between space-x-2 md:space-x-4 mr-6 md:mr-0"
                >
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
