import { it, expect, vi, suite } from 'vitest'

import { mount } from '@vue/test-utils'
import MlPagination from '@/components/molecules/MlPagination.vue'

const mockStore = {
  data: {
    totalPages: 5,
  },
  page: 1,
  endreached: false,
}

vi.mock('@/stores/jobsStore', () => {
  return {
    useJobstore: () => {
      return {
        ...mockStore,
        getJobs: vi.fn(),
        setPage: vi.fn(),
        setEndReached: vi.fn(),
      }
    },
  }
})

suite('MlPagination.vue Component', () => {
  it('should render pages Properly', () => {
    const wrapper = mount(MlPagination, {})
    expect(wrapper.text()).toContain('1/5')
  })

  it('should render First page button as disabled', () => {
    const wrapper = mount(MlPagination, {})
    const startButton = wrapper.find('#first_page')
    expect(startButton.exists()).toBe(true)
    expect(startButton.attributes('disabled')).toBeDefined()
  })

  it('should render Next page button as disabled', () => {
    const wrapper = mount(MlPagination, {})
    const startButton = wrapper.find('#prev_page')
    expect(startButton.exists()).toBe(true)
    expect(startButton.attributes('disabled')).toBeDefined()
  })

  it('should trigger page change on next page click', () => {
    const wrapper = mount(MlPagination, {})
    const startButton = wrapper.find('#next_page')
    expect(startButton.exists()).toBe(true)
    startButton.trigger('click')

    expect(wrapper.emitted('onPaginationClick')).toHaveLength(1)
  })
})
