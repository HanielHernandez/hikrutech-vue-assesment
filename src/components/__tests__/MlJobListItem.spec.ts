import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { suite } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import MlJobListItem from '../molecules/MlJobListItem.vue'

const mockJob = {
  title: 'Mock Job',
  company: 'mock company',
  id: 1,
  description: 'mock',
  location: 'mock location',
  category: 'mock category',
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/jobs/:id', component: MlJobListItem },
    { path: '/', component: MlJobListItem },
  ],
})

suite('MlJobListItem.vue Component', () => {
  it('should render jobs properly', () => {
    const wrapper = mount(MlJobListItem, {
      props: { job: mockJob },
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Mock Job')
    expect(wrapper.text()).toContain('mock company')
    expect(wrapper.text()).toContain('mock location')
    expect(wrapper.text()).toContain('mock category')
  })
})
