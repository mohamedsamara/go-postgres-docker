<script setup lang="ts">
import { ref, onUpdated } from 'vue'

const height = ref('0px')

const contentSpace = ref<HTMLDivElement | null>(null)

interface Props {
  open: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false
})

onUpdated(() => {
  height.value = props.open ? `${contentSpace?.value?.scrollHeight}px` : '0px'
})
</script>

<template>
  <div
    ref="contentSpace"
    class="overflow-auto transition-max-height duration-300 ease-in-out"
    :style="{ maxHeight: height }"
  >
    <slot />
  </div>
</template>
