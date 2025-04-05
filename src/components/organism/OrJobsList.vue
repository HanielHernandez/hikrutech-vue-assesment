<script setup lang="ts">
import type { Job } from '@/types/jobs'
import MlJobListItem from '@/components/molecules/MlJobListItem.vue'
import AtSkeleton from '@/components/atoms/AtSkeleton.vue'
import { computed } from 'vue'

const props = defineProps<{
  jobs: Job[] | null
  loading?: boolean
}>()

const noJobsFound = computed(() => props.jobs !== null && props.jobs.length === 0)
</script>
<template>
  <div
    class="flex flex-col border-neutral-200 rounded-md w-full max-w-3xl overflow-x-hidden mx-auto md:h-[calc(100vh-18rem)] overflow-y-auto"
  >
    <transition mode="out-in" name="slide-left">
      <ul v-if="loading">
        <li v-for="(e, i) in Array.from({ length: 8 })" :key="i">
          <AtSkeleton />
        </li>
      </ul>
      <ul v-else>
        <li v-for="(job, i) in jobs" :key="job.id" :data-index="i">
          <MlJobListItem :job="job" />
        </li>
        <li class="text-center text-neutral-600 leading-6" v-if="noJobsFound">
          No jobs found. Please check your filters or try again later.
        </li>
      </ul>
    </transition>
  </div>
</template>
<style lang="css" scoped>
.fade-enter-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 200ms ease-in-out;
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
