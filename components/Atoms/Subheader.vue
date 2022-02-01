<template>
  <header class="pb-4 max-w-lg mx-auto">
    <span class="text-2xl leading-snug text-left lg:text-center text-black dark:text-white">
      <slot name="text" />
    </span>
    <div class="flex flex-col md:flex-row justify-center mt-6">
      <slot name="buttons" />
    </div>
  </header>
</template>
