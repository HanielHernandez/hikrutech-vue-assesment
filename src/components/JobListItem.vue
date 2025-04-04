<script setup lang="ts">
import type { Job } from '@/types/jobs';

defineProps<{
  job: Job
}>()

</script>
<template>
  <router-link :to="`/jobs/${job.id}`"
    class="block px-4 py-2 rounded-md border border-neutral-200 bg-neutral-100  mb-4 hover:bg-neutral-200 transition-color ease-in-out duration-300 cursor-pointer">
    <div class="flex flex-col">
      <h6>
        <span class="text-neutral-800 font-bold text-lg"> {{ job.title }}</span> -
        <span class="text-neutral-600 font-bold text-sm"> {{ job.category }}</span>
      </h6>
      <div>
        <span class="text-neutral-600 font-medium"> {{ job.company }}</span>,<span class="text-neutral-600 font-md"> {{
          job.location }}</span>
      </div>
    </div>
  </router-link>
</template>
<style lang="scss"></style>
