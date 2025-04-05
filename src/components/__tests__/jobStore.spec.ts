import { useJobstore } from '@/stores/jobsStore'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, expect, it, suite } from 'vitest'

suite('jobStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should get jobs list', async () => {
    const jobStore = useJobstore()
    await jobStore.get()
    expect(jobStore.data?.items.length).toBe(10)
  })

  it('should update page', () => {
    const jobStore = useJobstore()
    jobStore.setPage(2)
    expect(jobStore.page).toBe(2)
  })

  it('should update category', () => {
    const jobStore = useJobstore()
    jobStore.setCategory('Frontend')
    expect(jobStore.category).toBe('Frontend')
  })

  it('should update and search', () => {
    const jobStore = useJobstore()
    jobStore.setSearch('QA')
    expect(jobStore.search).toBe('QA')
  })
})
