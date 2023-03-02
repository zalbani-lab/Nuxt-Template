<template>
  <span v-if="inline" class="svgIcon" v-html="icon" />
  <div v-else class="svgIcon" v-html="icon" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from '#imports'

const props = withDefaults(
  defineProps<{
    name: string
    inline?: boolean
  }>(),
  {
    inline: false,
  }
)
const icon = ref('')
watchEffect(async () => {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      as: 'raw',
      eager: false,
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    icon.value = rawIcon
  } catch {
    console.error(
      `Icon loader : '${props.name}' doesn't exist in 'assets/icons'`
    )
  }
})
</script>

<style lang="scss">
span.svgIcon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
.svgIcon,
.svgIcon * {
  fill: currentColor;
}
</style>
