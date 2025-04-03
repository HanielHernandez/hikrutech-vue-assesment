<script setup lang="ts">
import type { Job } from '@/types/jobs';
import JobListItem from './JobListItem.vue';

defineProps<{
  jobs: Job[]
}>()
const emit = defineEmits<{
  (e: 'onPaginationClick', flow: "next" | "prev"): void
}>()

const onButtonClick = (flow: "next" | "prev") => {
  emit("onPaginationClick", flow)
}

</script>
<template>
  <div class="flex flex-col  border-neutral-200 rounded-md w-full max-w-3xl mx-auto">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <JobListItem :job="job" />
      </li>
    </ul>
    <div class="flex flex-row justify-between">
      <button @click="onButtonClick('prev')"
        class="px-3 py-2 border border-gray-200 cursor-pointer bg-neutral-100 hover:opacity-75 transition-colors ease-in-out duration-200 text-neutral-800 font-bold  rounded-md">
        &lt; Previous
      </button>
      <button @click="onButtonClick('next')"
        class="px-3 py-2 cursor-pointer border border-gray-200 bg-neutral-100 hover:opacity-75 transition-colors ease-in-out duration-200 text-neutral-800 font-bold  rounded-md">
        Next &gt;
      </button>
    </div>
  </div>
</template>
<style lang="scss"></style>
