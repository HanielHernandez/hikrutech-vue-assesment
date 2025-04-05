import type { Meta, StoryObj } from '@storybook/vue3'

import MlSearchBar from './MlSearchBar.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Molecules/MlSearchBar',
  component: MlSearchBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    modelValue: { control: 'text', name: 'Value', default: '' },
  },
  render: (args, { updateArgs }) => ({
    components: { MlSearchBar },
    setup() {
      const onInput = (value: string) => updateArgs({ modelValue: value })
      return { args, onInput }
    },
    template: `
      <div>
        <MlSearchBar
          v-model="args.modelValue"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof MlSearchBar>

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
