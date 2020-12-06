<template>
    <div class="mt-0 pt-4">
    <img
      :src="blog.metadata.hero.imgix_url"
      height="240"
    />
    <div class="flex flex-row text-left">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1 class="my-4">
          {{ blog.title }}
        </h1>
      </div>
    </div>
    <div class="flex flex-row px-lg-12">
      <div class="flex flex-col col-span-full md:col-span-6">
        <section
          v-html="blog.content"
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