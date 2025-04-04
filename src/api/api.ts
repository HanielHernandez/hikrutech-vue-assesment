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

/**
 *
 * @param item job item
 * @param filters filters object
 * @param filters.category - The category to filter by
 * @param filters.search - The search term to filter by
 * @description This function applies the filters to a job item.
 * It checks if the job item matches all the provided filters.
 * @returns   {boolean} - Returns true if the job item matches all filters, false otherwise.',
 */
const applyFiters = (item: Job, filters: JobFilters): boolean => {
  return Object.entries(filters).every(([key, value]) => {
    const filterFunction = filtersByProperty[key]
    if (filterFunction) {
      return filterFunction(value)(item)
    }
    return true
  })
}

/**
 *
 * @param jobFilterOptions
 * @param jobFilterOptions.page - The page number to retrieve (default is 1)
 * @param jobFilterOptions.limit - The number of items per page (default is 10)
 * @param jobFilterOptions.filters - An object containing filter options
 * @param jobFilterOptions.filters.category - The category to filter by
 * @param jobFilterOptions.filters.search - The search term to filter by
 * @returns jobsResponse - An object containing the filtered job items, pagination information, and total items
 * @returns { items: Job[], page: number, totalPages: number, totalItems: number }
 * @description This function retrieves a paginated list of job items based on the provided filter options.
 * It filters the jobs based on the specified category and search term, and returns the filtered items along with pagination information.
 * @example
 * const jobFilterOptions = {
 *   page: 1,
 *   limit: 10,
 *   filters: {
 *     category: 'Engineering',
 *     search: 'developer'
 *   }
 * }
 * const jobsResponse = getJobs(jobFilterOptions);
 * console.log(jobsResponse.items); // Array of filtered job items
 * console.log(jobsResponse.page); // Current page number
 * console.log(jobsResponse.totalPages); // Total number of pages
 */
export const getJobs = async ({
  page = 1,
  limit = 10,
  filters,
}: JobFilterOptions): Promise<JobsResponse> => {
  const filteredJOBS = filters ? jobs.filter((item) => applyFiters(item, filters)) : jobs

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        items: filteredJOBS.slice((page - 1) * limit, page * limit),
        page,
        totalPages: Math.ceil(filteredJOBS.length / limit),
        totalItems: filteredJOBS.length,
      })
    }, 1000)
  })
}

/**
 *
 * @param id - The ID of the job to find
 * @description This function retrieves a job item by its ID from the list of jobs.
 * It searches for the job item in the `jobs` array and returns it if found.
 * If the job item is not found, it returns `undefined`.
 * @returns {Job | undefined} - The job item with the specified ID, or undefined if not found
 * @example
 * const jobId = 123;
 * const job = find(jobId);
 * if (job) {
 *   console.log(job); // The job item with the specified ID
 * } else {
 *   console.log('Job not found');
 * }
 */

export const find = (id: number): Job | undefined => {
  return jobs.find((job) => job.id === id)
}
