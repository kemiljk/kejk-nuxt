<template>
    <nav class="bg-white/90 dark:bg-black/90 w-full fixed z-50 mx-auto pl-4 sm:pl-6 lg:px-8">
        <div
          class="backdrop-blur-2xl flex items-center justify-between w-full h-16 overflow-x-auto md:overflow-none scrollbar-hidden"
        >
          <Logo class="mr-6 md:mr-0 shrink-0" />
            <div class="flex items-center justify-between shrink-0 space-x-2 md:space-x-4 mr-6 md:mr-0">
          <slot></slot>
        </div>
      </div>
    </nav>
</template>
