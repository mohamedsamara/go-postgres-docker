<script setup lang="ts">
import { onMounted } from 'vue'

import { usePing } from '@/stores'
import { Heading } from '@/components/Shared'
const pingStore = usePing()

console.log(pingStore.ping)

onMounted(() => {
  pingStore.fetchPing()
})
</script>
<template>
  <main class="flex items-center justify-center flex-1">
    <section class="relative overflow-hidden">
      <div class="flex flex-col justify-center max-w-screen-xl px-4 py-24 mx-auto lg:py-0 sm:px-8">
        <Heading as="h2" class="leading-tight capitalize"> {{ pingStore.ping }} </Heading>
      </div>
    </section>
  </main>
</template>
