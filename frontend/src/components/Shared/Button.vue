<script setup lang="ts">
import classNames from 'classnames'

import { ButtonVariant, type ButtonSizes, type ButtonVariants, ButtonSize } from '@/styles/theme'

interface Props {
  type?: 'submit' | 'reset' | 'button' | undefined
  variant?: ButtonVariants
  size?: ButtonSizes
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'transparent',
  size: 'md',
  disabled: false
})

const emit = defineEmits(['click'])

const handleOnClick = (event: MouseEvent) => {
  emit('click', event)
}

const btnVariant = ButtonVariant[props.variant]
const btnSize = ButtonSize[props.size]
const btnClass = classNames(btnVariant, btnSize)
</script>

<template>
  <button :type="type" @click="handleOnClick" :class="btnClass" :disabled="disabled">
    <div v-if="$slots.prefix" class="mr-2">
      <slot name="prefix" />
    </div>
    <slot />
    <div v-if="$slots.suffix" class="ml-2">
      <slot name="suffix" />
    </div>
  </button>
</template>
