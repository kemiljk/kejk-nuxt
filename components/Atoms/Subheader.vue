<template>
  <header class="pt-4 pb-4 max-w-lg mx-auto">
    <p class="text-2xl text-center">
      <slot name="text" />
    </p>
    <div class="flex flex-col md:flex-row justify-center mt-6">
      <slot name="buttons" />
    </div>
  </header>
</template>
