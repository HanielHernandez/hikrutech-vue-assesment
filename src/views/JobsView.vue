<script setup lang="ts">
import type { JobsResponse } from '@/api/api';
import JobFilter from '@/components/JobFilter.vue';
import JobsList from '@/components/JobsList.vue';
import { useJobstore } from '@/stores/jobsStore';
import { computed, onMounted } from 'vue';


const jobsStore = useJobstore()
// computed

const jobs = computed<JobsResponse | null>(() => jobsStore.data)

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


const onCategoryFilterChange = ({ value, property }: { value: string, property: string }) => {
  jobsStore.resetPage()
  const action = property === 'category' ? jobsStore.setCategory : jobsStore.setSearch
  action(value)
  jobsStore.get()
}

</script>

<template>
  <main>
    <JobFilter @onfilter-change="onCategoryFilterChange" />
    <JobsList v-if="jobs" :jobs="jobs.items" @on-pagination-click="onPaginationChange" />
  </main>
</template>
