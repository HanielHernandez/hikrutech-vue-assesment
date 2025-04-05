<script setup lang="ts">
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
      <h6>
        <span class="text-neutral-800 font-bold text-lg"> {{ job.title }}</span> -
        <span class="text-neutral-600 font-bold text-sm"> {{ job.category }}</span>
      </h6>
      <div>
        <span class="text-neutral-600 font-medium"> {{ job.company }}</span> ,
        <span class="text-neutral-600 font-md"> {{ job.location }}</span>
      </div>
      <span
        class="material-icons text-neutral-400 absolute opacity-0 -translate-x-4 -translate-y-1/2 z-20 top-1/2 right-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
        >arrow_forward</span
      >
    </div>
  </router-link>
</template>
<style lang="scss" scoped></style>
