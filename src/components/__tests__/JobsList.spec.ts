import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JobsList from '../JobsList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const mockJobs = [
  {
    title: 'Mock Job 1',
    company: 'mock',
    id: 1,
    description: 'mock',
    location: 'mock',
    category: 'mock',
  },
  {
    title: 'Mock Job 2',
    company: 'mock',
    id: 2,
    description: 'mock',
    location: 'mock',
    category: 'mock',
  },
  {
    title: 'Mock Job 3',
    company: 'mock',
    id: 3,
    description: 'mock',
    location: 'mock',
    category: 'mock',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/jobs/:id', component: JobsList },
    { path: '/', component: JobsList },
  ],
})

describe('JobsList.vue Component', () => {
  it('renders properly', () => {
    const wrapper = mount(JobsList, {
      props: { jobs: mockJobs },
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Mock Job 1')
    expect(wrapper.text()).toContain('Mock Job 2')
    expect(wrapper.text()).toContain('Mock Job 3')
  })
})
