<script setup lang="ts">
import JobsList from '@/components/JobsList.vue';
import { useJobstore } from '@/stores/jobsStore';
import type { Job } from '@/types/jobs';
import { computed, onMounted } from 'vue';


const jobsStore = useJobstore()
// computed

const jobItems = computed<Job[]>(() => jobsStore.items)

// life cycle
onMounted(() => {
  jobsStore.get()
})

// methods
const onPaginationChange = (flow: string) => {
  if (flow === 'next') {
    jobsStore.nextPage()
    return
  }

  jobsStore.prevPage()
}

</script>

<template>
  <main>
    <JobsList :jobs="jobItems" @on-pagination-click="onPaginationChange" />
  </main>
</template>
