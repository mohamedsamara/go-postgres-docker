<script setup lang="ts">
import classNames from 'classnames'

import { type HeadingTypes, HeadingType } from '@/styles/theme'

interface Props {
  as: HeadingTypes
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h2'
})

const heading = HeadingType[props.as]
const headingClass = classNames(heading)
</script>

<template>
  <component :is="as" :class="headingClass">
    <slot />
  </component>
</template>
