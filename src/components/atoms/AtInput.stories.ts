import type { Meta, StoryObj } from '@storybook/vue3'

import AtInput from './AtInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/AtInput',
  component: AtInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    isTextarea: { control: 'boolean', default: false },
    modelValue: { control: 'text', name: 'Value', default: '' },
  },
  render: (args, { updateArgs }) => ({
    components: { AtInput },
    setup() {
      const onInput = (value: string) => updateArgs({ modelValue: value })
      return { args, onInput }
    },
    template: `
      <div>
        <AtInput
          v-model="args.modelValue"
        />
        <p class="text-sm mt-2 text-gray-500">Live value: {{ args.modelValue }}</p>
      </div>
    `,
  }),
} satisfies Meta<typeof AtInput>

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

export const TextArea: Story = {
  args: {
    isTextarea: true,
  },
}
