<template>
  <div>
    <nav>
      <div
        class="w-full fixed z-50 backdrop-blur-2xl bg-white/30 dark:bg-black/30 mx-auto pl-4 sm:pl-6 lg:px-8"
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
