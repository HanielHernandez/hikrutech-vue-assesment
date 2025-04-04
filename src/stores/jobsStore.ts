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
  const current = ref<Job | null>(null)

  function get() {
    const response = getJobs({
      page: page.value,
      filters: {
        ...(category.value ? { category: category.value } : {}),
        ...(search.value ? { search: search.value } : {}),
      },
    })

    if (response.totalPages === response.page) {
      endReached.value = true
    }

    data.value = response
  }

  function setCategory(cat: string | null) {
    category.value = cat === 'All' ? null : cat
  }

  function setSearch(searchVal: string) {
    search.value = searchVal
  }

  function resetPage() {
    page.value = 1
  }

  function nextPage() {
    page.value++
    get()
  }

  function prevPage() {
    if (page.value <= 1) return
    page.value = page.value - 1
    get()
  }

  function findJob(id: number) {
    const job = find(id)
    current.value = job || null
  }

  return {
    data,
    get,
    nextPage,
    prevPage,
    resetPage,
    setCategory,
    setSearch,
    findJob,
    category,
    current,
    search,
    page,
    endReached,
  }
})
