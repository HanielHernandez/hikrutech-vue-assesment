import type { Job } from '@/types/jobs'
import jobs from './jobs.json'

export const getJobs = (page: number = 1, limit: number = 10): Job[] => {
  return jobs.slice((page - 1) * limit, limit * page)
}
