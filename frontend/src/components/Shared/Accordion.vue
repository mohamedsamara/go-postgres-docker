<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

import { Button, Collapse } from '@/components/Shared'

interface Props {
  title: string
}

withDefaults(defineProps<Props>(), {
  title: ''
})

const rotate = ref('transform duration-300 ease')
const active = ref(false)

const onToggle = () => {
  active.value = !active.value
  rotate.value = active.value
    ? 'transform duration-300 ease rotate-180'
    : 'transform duration-300 ease'
}
</script>

<template>
  <div class="relative mb-3">
    <Button
      class="flex items-center justify-between w-full bg-white border rounded-full"
      @click="onToggle"
    >
      {{ title }}
      <template #suffix>
        <ChevronDownIcon :class="['ml-2 w-4 h-4', rotate]" />
      </template>
    </Button>
    <Collapse :open="active">
      <div className="p-6">
        <slot />
      </div>
    </Collapse>
  </div>
</template>
