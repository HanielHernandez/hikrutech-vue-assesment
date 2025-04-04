<script setup lang="ts">
import type { Job } from '@/types/jobs'
import JobListItem from './JobListItem.vue'
import JobListItemSekelton from './JobListItemSekelton.vue'

defineProps<{
  jobs: Job[]
  loading?: boolean
}>()
</script>
<template>
  <div
    class="flex flex-col border-neutral-200 rounded-md w-full max-w-3xl overflow-x-hidden mx-auto h-[calc(100vh-18rem)] overflow-y-auto"
  >
    <transition mode="out-in" name="slide-left">
      <ul v-if="!loading">
        <li v-for="(job, i) in jobs" :key="job.id" :data-index="i">
          <JobListItem :job="job" />
        </li>
      </ul>
      <ul v-else>
        <li v-for="(e, i) in Array.from({ length: 8 })" :key="i">
          <JobListItemSekelton />
        </li>
      </ul>
    </transition>
  </div>
</template>
<style lang="css" scoped>
fade-enter-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
