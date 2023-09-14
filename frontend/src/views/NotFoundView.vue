<script setup lang="ts">
import { Button, Heading } from '@/components/Shared'
</script>
<template>
  <main class="flex-1 flex justify-center items-center">
    <section>
      <div
        class="container flex flex-col items-center justify-center h-screen px-6 mx-auto md:px-24 xl:px-64"
      >
        <Heading
          as="h3"
          class="mb-4 text-xl font-bold text-left md:text-2xl text-tertiary-dark dark:text-tertiary-light"
        >
          Page not found
        </Heading>
        <p class="mb-8 text-center text-tertiary-dark dark:text-tertiary-light">
          Sorry
          <span role="img" aria-label="Pensive emoji"> 😔 </span> we couldn’t find what you were
          looking for.
        </p>

        <Button variant="secondary" class="max-w-full rounded-3xl" @click="$router.push('/')"
          >Go Home</Button
        >
      </div>
    </section>
  </main>
</template>
