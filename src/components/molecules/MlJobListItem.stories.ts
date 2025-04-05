import type { Meta, StoryObj } from '@storybook/vue3'

import MlJobListItem from '@/components/molecules/MlJobListItem.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Molecules/MlJobListItem',
  component: MlJobListItem,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    job: {
      id: 1,
      title: 'My Job',
      description: '',
      location: 'Job Location',
      company: 'company name',
      category: 'category',
    },
  },
  argTypes: {
    job: {
      control: 'object',
      name: 'Job',
    },
  },
  render: (args) => ({
    components: { MlJobListItem },
    setup: () => ({ args }),
    template: `<MlJobListItem v-bind="args" />`,
  }),
} satisfies Meta<typeof MlJobListItem>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Text: Story = {
  args: {},
}
