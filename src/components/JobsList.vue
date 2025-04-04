<script setup lang="ts">
import type { Job } from '@/types/jobs';
import JobListItem from './JobListItem.vue';

defineProps<{
  jobs: Job[]
}>()


</script>
<template>
  <div
    class="flex flex-col  border-neutral-200 rounded-md w-full max-w-3xl mx-auto h-[calc(100vh-18rem)] overflow-y-auto">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <JobListItem :job="job" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss"></style>
