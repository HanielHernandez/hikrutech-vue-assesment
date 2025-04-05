import type { Meta, StoryObj } from '@storybook/vue3'

import OrJobsList from './OrJobsList.vue'

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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Organism/OrJobsList',
  component: OrJobsList,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    jobs: mockJobs,
  },
  argTypes: {
    jobs: { control: 'object', name: 'Jobs' },
  },
} satisfies Meta<typeof OrJobsList>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    jobs: mockJobs,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    jobs: null,
  },
}
