<script setup lang="ts">
import type { Job } from '@/types/jobs';
import JobListItem from './JobListItem.vue';
import JButton from './JButton.vue';

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
      <JButton @click="onButtonClick('prev')" title="Previous">
        <span class="material-icons">
          chevron_left
        </span>
      </JButton>
      <JButton @click="onButtonClick('next')" title="Next">
        <span class="material-icons">
          chevron_right
        </span>
      </JButton>
    </div>
  </div>
</template>
<style lang="scss"></style>
