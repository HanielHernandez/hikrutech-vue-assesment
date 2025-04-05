import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import OrJobsList from '@/components/organism/OrJobsList.vue'
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
    { path: '/jobs/:id', component: OrJobsList },
    { path: '/', component: OrJobsList },
  ],
})

describe('OrJobsList.vue Component', () => {
  it('renders properly', () => {
    const wrapper = mount(OrJobsList, {
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
