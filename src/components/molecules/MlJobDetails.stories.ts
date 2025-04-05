import type { Meta, StoryObj } from '@storybook/vue3'

import MlJobDetails from '@/components/molecules/MlJobDetails.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Molecules/MlJobDetails',
  component: MlJobDetails,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    job: {
      id: 1,
      title: 'My Job',
      description:
        'Proident quis aute duis commodo exercitation adipisicing veniam amet. Cupidatat irure reprehenderit elit eiusmod occaecat sint est. Nisi labore sunt laborum commodo voluptate pariatur esse do.',
      location: 'Job Location',
      company: 'Job company name',
      category: 'Job category',
    },
  },
  argTypes: {
    job: {
      control: 'object',
      name: 'Job',
    },
  },
  render: (args) => ({
    components: { MlJobDetails },
    setup: () => ({ args }),
    template: `<MlJobDetails v-bind="args" />`,
  }),
} satisfies Meta<typeof MlJobDetails>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
}
