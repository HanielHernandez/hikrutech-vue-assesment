<script setup lang="ts">
import { RouterView } from 'vue-router'
import MlNavbar from './components/molecules/MlNavbar.vue'
</script>

<template>
  <header class="container mx-auto">
    <MlNavbar />
  </header>
  <main class="container mx-auto p-4 pt-20">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" :duration="{ enter: 300, leave: 300 }">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
