<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <header class="container mx-auto">
    <TheNavbar />
  </header>
  <main class="container mx-auto p-4 pt-20">
    <RouterView />
  </main>
</template>

<style scoped></style>
