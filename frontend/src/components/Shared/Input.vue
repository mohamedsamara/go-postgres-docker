<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'
import classNames from 'classnames'

import { InputVariant, type InputSizes, InputSize, type InputVariants } from '@/styles/theme'

const inputVariantState = ref<InputVariants>('basic')

export interface Props {
  type?: string
  size?: InputSizes
  placeholder?: string
  disabled?: boolean
  hasError?: boolean
  hasSuccess?: boolean
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  hasError: false,
  hasSuccess: false,
  value: ''
})

const emit = defineEmits(['change', 'blur'])

const handleOnChange = (event: Event) => {
  emit('change', event)
}
const handleOnBlur = (event: Event) => {
  emit('blur', event)
}

onUpdated(() => {
  inputVariantState.value = props.hasError ? 'error' : props.hasSuccess ? 'success' : 'basic'
})

const inputSize = InputSize[props.size]
const inputClass = computed(() => {
  return classNames(InputVariant[inputVariantState.value], inputSize)
})
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="inputClass"
    :disabled="disabled"
    :value="value"
    @input="handleOnChange"
    @blur="handleOnBlur"
    v-bind="$attrs"
  />
</template>
