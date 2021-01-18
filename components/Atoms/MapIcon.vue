<template>
  <div class="flex items-center justify-center bg-gray-100 rounded-full h-12 w-12">
    <map-pin-icon size="1x" class="text-gray-800"></map-pin-icon>
  </div>
</template>

<script>
  import { MapPinIcon } from 'vue-feather-icons'

  export default {
    components: {
      MapPinIcon,
    }
  }

</script>