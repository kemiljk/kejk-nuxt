<template>
        <section v-html="gear.content" class="text-black dark:text-gray-300"
        />
</template>

<script>
// const Cosmic = require('cosmicjs')
// const api = Cosmic()
// const bucket = api.bucket({
//   slug: 'd1ffcb90-35a5-11eb-b56f-05f2cd29bdde',
//   read_key: 'uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK'
// })

export default {
  name: "Uses",
  props: {
    gear: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    //
  }
};
</script>