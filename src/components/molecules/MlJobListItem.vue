<script setup lang="ts">
import AtText from '@/components/atoms/AtText.vue'
import type { Job } from '@/types/jobs'

defineProps<{
  job: Job
}>()
</script>
<template>
  <router-link
    :to="`/jobs/${job.id}`"
    class="block px-4 py-2 relative group rounded-md border border-neutral-200 bg-neutral-100 mb-4 hover:bg-neutral-200 transition-color ease-in-out duration-300 cursor-pointer"
  >
    <div class="flex flex-col">
      <AtText variant="h3">
        {{ job.title }}
        <AtText variant="caption"> {{ job.category }}</AtText>
      </AtText>
      <div>
        <AtText tag="div">
          <b>{{ job.company }}</b> , {{ job.location }}
        </AtText>
      </div>
      <span
        class="material-icons text-neutral-400 absolute opacity-0 -translate-x-4 -translate-y-1/2 z-20 top-1/2 right-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
        >arrow_forward</span
      >
    </div>
  </router-link>
</template>
<style lang="scss" scoped></style>
