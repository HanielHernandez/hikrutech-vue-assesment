import { ref } from 'vue'
import { defineStore } from 'pinia'
import { find, getJobs, type JobsResponse } from '@/api/api'
import type { Job } from '@/types/jobs'

export const useJobstore = defineStore('jobs', () => {
  const data = ref<JobsResponse | null>(null)
  const page = ref(1)
  const endReached = ref(false)
  const category = ref<string | null>(null)
  const search = ref<string | null>(null)
  const selectedJob = ref<Job | null>(null)
  const loading = ref(false)

  async function get() {
    try {
      loading.value = true
      const response = await getJobs({
        page: page.value,
        filters: {
          ...(category.value ? { category: category.value } : {}),
          ...(search.value ? { search: search.value } : {}),
        },
      })
      endReached.value = response.totalPages <= response.page
      setData(response)
      loading.value = false
    } catch (error) {
      console.error('Error fetching jobs:', error)
      return null
    }
  }

  function setCategory(cat: string | null) {
    category.value = cat === 'All' ? null : cat
  }

  function setSearch(searchVal: string) {
    search.value = searchVal
  }

  function setPage(p: number) {
    page.value = p
  }

  function setData(payload: JobsResponse | null) {
    data.value = payload
  }

  function findJob(id: number) {
    const job = find(id)
    selectedJob.value = job || null
  }

  return {
    data,
    get,
    setCategory,
    setSearch,
    findJob,
    setPage,
    category,
    selectedJob,
    search,
    loading,
    page,
    setData,
    endReached,
  }
})
