<template>
  <p>Projet numero {{ routeId }}</p>
</template>
<script lang="ts">
export default {
  setup() {
    const routeId = ref(useRoute().params.id)
    return {
      routeId,
    }
  },

  mounted() {
    console.log(this.routeId)
  },
}
</script>
