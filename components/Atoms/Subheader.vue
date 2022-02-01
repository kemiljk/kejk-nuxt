<template>
  <header class="pb-4 max-w-lg mx-auto">
    <p class="text-2xl leading-snug text-left lg:text-center">
      <slot name="text" />
    </p>
    <div class="flex flex-col md:flex-row justify-center mt-6">
      <slot name="buttons" />
    </div>
  </header>
</template>
