import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JobListItem from '../JobListItem.vue'

const mockJob = {
  title: 'Mock Job',
  company: 'mock',
  id: 1,
  description: 'mock',
  location: 'mock',
  category: 'mock',
}

describe('JobsListItem', () => {
  it('renders properly', () => {
    const wrapper = mount(JobListItem, { props: { job: mockJob } })
    expect(wrapper.text()).toContain('Mock Job')
  })
})
