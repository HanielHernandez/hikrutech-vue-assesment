import { it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JobListItem from '../JobListItem.vue'
import { suite } from 'vitest'

const mockJob = {
  title: 'Mock Job',
  company: 'mock company',
  id: 1,
  description: 'mock',
  location: 'mock location',
  category: 'mock category',
}

suite('JobListItem.vue Component', () => {
  it('should render jobs properly', () => {
    const wrapper = mount(JobListItem, {
      props: { job: mockJob },
    })

    expect(wrapper.text()).toContain('Mock Job')
    expect(wrapper.text()).toContain('mock company')
    expect(wrapper.text()).toContain('mock location')
    expect(wrapper.text()).toContain('mock category')
  })
})
