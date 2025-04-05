<script setup lang="ts">
import AtText from '@/components/atoms/AtText.vue'
import type { Job } from '@/types/jobs'

defineProps<{
  job: Job
}>()
</script>
<template>
  <div
    v-if="job"
    class="mb-4 p-4 border border-neutral-200 rounded-md flex flex-col hover:bg-neutral-100 shado-sm transition-colors ease-in-out duration-300 pointer"
  >
    <AtText variant="h1" class="leading-tight mb-1">{{ job.title }}</AtText>
    <AtText class="mb-4 leading-tight">{{ job.company }}, {{ job.location }}</AtText>
    <AtText class="pt-4 border-t border-neutral-300">{{ job.description }}</AtText>
  </div>
</template>
<style lang="scss" scoped></style>
