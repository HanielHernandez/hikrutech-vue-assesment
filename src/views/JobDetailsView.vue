<script setup lang="ts">
import { useJobstore } from '@/stores/jobsStore';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const jobsStore = useJobstore()


const route = useRoute()

onMounted
  (() => {
    const id = route.params.id
    if (id) {
      const idNumber = Number(id)
      jobsStore.findJob(idNumber)
    }
  })

const job = computed(() => jobsStore.current)

</script>
<template>
  <div class="w-full max-w-3xl mx-auto p-4">
    <div v-if="job" class="bg-white ">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ job.title }}</h1>
      <p class="text-gray-600 mb-2"> <b> Company:</b> {{ job.company }}</p>
      <p class="text-gray-600 mb-2">Location: {{ job.location }}</p>
      <p class="text-gray-600 mb-2">Description: {{ job.description }}</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
