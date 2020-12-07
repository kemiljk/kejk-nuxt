<template>
    <div class="mt-0 pt-4">
    <div class="flex flex-row text-left">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1 class="my-4 text-4xl font-black dark:text-gray-200">
          {{ blog.title }}
        </h1>
      </div>
    </div>
    <div class="flex flex-row px-lg-12">
      <div class="flex flex-col col-span-full md:col-span-6">
        <section
          v-html="blog.content" class="text-black dark:text-gray-300"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  }
};
</script>