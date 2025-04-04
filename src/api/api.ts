import type { Job } from '@/types/jobs'
import jobs from './jobs.json'

export type FilterFunction = (item: Job) => boolean

export type JobsResponse = {
  items: Job[]
  page: number
  totalPages: number
  totalItems: number
}

export type JobFilters = {
  category?: string
  search?: string
}

export type JobFilterOptions = {
  page?: number
  limit?: number
  filters?: JobFilters
}

const filtersByProperty: { [key: string]: (value: string) => FilterFunction } = {
  category: (category: string) => (item: Job) => item.category === category,
  search: (search: string) => (item: Job) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
}

const applyFiters = (item: Job, filters: JobFilters): boolean => {
  return Object.entries(filters).every(([key, value]) => {
    const filterFunction = filtersByProperty[key]
    if (filterFunction) {
      return filterFunction(value)(item)
    }
    return true
  })
}

export const getJobs = ({ page = 1, limit = 10, filters }: JobFilterOptions): JobsResponse => {
  const filteredJOBS = filters ? jobs.filter((item) => applyFiters(item, filters)) : jobs

  return {
    items: filteredJOBS.slice((page - 1) * limit, page * limit),
    page,
    totalPages: Math.ceil(filteredJOBS.length / limit),
    totalItems: filteredJOBS.length,
  }
}

export const find = (id: number): Job | undefined => {
  return jobs.find((job) => job.id === id)
}
