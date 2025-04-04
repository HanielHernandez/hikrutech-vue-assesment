<script setup lang="ts">
import JobForm from '@/components/JobForm.vue'
import { useJobstore } from '@/stores/jobsStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const jobsStore = useJobstore()
const route = useRoute()

onMounted(() => {
  const id = route.params.id
  if (id) {
    const idNumber = Number(id)
    jobsStore.findJob(idNumber)
  }
})

const job = computed(() => jobsStore.selectedJob)
</script>
<template>
  <div class="w-full max-w-3xl mx-auto">
    <router-link
      class="mb-4 flex text-neutral-600 items-center justify-center gap-2 text-center w-full hover:opacity-75 transition-colors ease-in-out duration-200"
      to="/jobs"
    >
      <span class="material-icons">arrow_back</span> Back to Jobs
    </router-link>
    <div
      v-if="job"
      class="mb-4 p-4 border border-neutral-200 rounded-md hover:bg-neutral-100 shado-sm transition-colors ease-in-out duration-300 pointer"
    >
      <h1 class="text-3xl font-bold text-neutral-800 mb-3 leading-tight">{{ job.title }}</h1>
      <p class="text-neutral-600 font-medium mb-4 leading-1.5">
        {{ job.company }}, {{ job.location }}
      </p>
      <p class="text-neutral-600 mb-2 pt-4 border-t border-neutral-300">{{ job.description }}</p>
    </div>
    <div class="mb-4 p-4 border border-neutral-200 rounded-md">
      <h4 class="text-2xl font-bold text-neutral-800 mb-4 leading-tight">Apply for this job</h4>
      <p class="text-neutral-600 mb-4 leading-1.5">
        Fill out the form below to apply for this job. We will get back to you as soon as possible.
      </p>
      <JobForm />
    </div>
  </div>
</template>
<style lang="scss"></style>
