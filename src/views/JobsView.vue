<script setup lang="ts">
import type { JobsResponse } from '@/api/api'
import JobFilter from '@/components/JobFilters.vue'
import JobsList from '@/components/JobsList.vue'
import JobsPagination from '@/components/JobsPagination.vue'
import { useJobstore } from '@/stores/jobsStore'
import { computed, onMounted, onBeforeUnmount } from 'vue'

const jobsStore = useJobstore()

// computed
const jobs = computed<JobsResponse | null>(() => jobsStore.data)
const loading = computed(() => jobsStore.loading)

// life cycle
onMounted(async () => {
  await jobsStore.get()
})

onBeforeUnmount(() => {
  jobsStore.setData(null)
})

const paginationMethods: Record<string, () => void> = {
  next: () => jobsStore.setPage(jobsStore.page + 1),
  prev: () => jobsStore.setPage(jobsStore.page - 1),
  start: () => jobsStore.setPage(1),
  last: () => jobsStore.setPage(jobsStore.data?.totalPages ?? 0),
}

// methods
const onPaginationChange = async (flow: string) => {
  paginationMethods[flow]()
  await jobsStore.get()
}

const onCategoryFilterChange = async ({ value, property }: { value: string; property: string }) => {
  jobsStore.setPage(1)
  const action = property === 'category' ? jobsStore.setCategory : jobsStore.setSearch
  action(value)
  await jobsStore.get()
}
</script>

<template>
  <main>
    <JobFilter @onfilter-change="onCategoryFilterChange" />
    <JobsList
      :loading="loading"
      :jobs="(jobs && jobs.items) || null"
      @on-pagination-click="onPaginationChange"
    />
    <JobsPagination v-if="jobs" @on-pagination-click="onPaginationChange" />
  </main>
</template>
