<template>
  <div>
    <nav class="bg-white dark:bg-black">
      <div
        class="w-full fixed z-50 backdrop-filter backdrop-blur-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          class="flex items-center justify-between w-full h-16 overflow-x-auto md:overflow-none"
        >
          <Logo class="mr-4 md:mr-0" />
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="inline-flex">
                <div
                  class="flex items-center justify-between space-x-1 md:space-x-4"
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
