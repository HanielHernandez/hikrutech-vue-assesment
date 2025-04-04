<script setup lang="ts">
import type { JobsResponse } from '@/api/api';
import JobFilter from '@/components/JobFilter.vue';
import JobsList from '@/components/JobsList.vue';
import JobsPagination from '@/components/JobsPagination.vue';
import { useJobstore } from '@/stores/jobsStore';
import { computed, onMounted } from 'vue';


const jobsStore = useJobstore()
// computed

const jobs = computed<JobsResponse | null>(() => jobsStore.data)

// life cycle
onMounted(() => {
  jobsStore.setPage(1)
  jobsStore.get()
})

const paginationMethods: Record<string, () => void> = {
  next: () => jobsStore.setPage(jobsStore.page + 1),
  prev: () => jobsStore.setPage(jobsStore.page - 1),
  start: () => jobsStore.setPage(1),
  last: () => jobsStore.setPage(jobsStore.data?.totalPages ?? 0),
}

// methods
const onPaginationChange = (flow: string) => {
  paginationMethods[flow]()
  jobsStore.get()
}


const onCategoryFilterChange = ({ value, property }: { value: string, property: string }) => {
  jobsStore.setPage(1)
  const action = property === 'category' ? jobsStore.setCategory : jobsStore.setSearch
  action(value)
  jobsStore.get()
}

</script>

<template>
  <main>
    <JobFilter @onfilter-change="onCategoryFilterChange" />
    <JobsList v-if="jobs" :jobs="jobs.items" @on-pagination-click="onPaginationChange" />
    <JobsPagination v-if="jobs" @on-pagination-click="onPaginationChange" />
  </main>
</template>
