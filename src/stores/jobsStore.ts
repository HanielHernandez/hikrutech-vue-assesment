import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getJobs } from '@/api/api'
import type { Job } from '@/types/jobs'

export const useJobstore = defineStore('jobs', () => {
  const items = ref<Job[]>([])
  const page = ref(1)
  const endReached = ref(false)
  const limit = 10

  function get() {
    const jobs = getJobs(page.value, limit)

    if (jobs.length === 0) {
      endReached.value = true
      return
    }

    items.value = jobs
  }

  function nextPage() {
    page.value++
    get()
  }

  function prevPage() {
    console.log(page.value)
    if (page.value <= 1) return
    page.value = page.value - 1
    get()
  }

  return { items, get, nextPage, prevPage, page, limit }
})
