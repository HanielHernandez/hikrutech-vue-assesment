import type { Meta, StoryObj } from '@storybook/vue3'

import MlFormField from './MlFormField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Molecules/MlFormField',
  component: MlFormField,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    isTextarea: { control: 'boolean', default: false },
    modelValue: { control: 'text', default: 'My text' },
  },
} satisfies Meta<typeof MlFormField>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Text: Story = {
  args: {
    isTextarea: false,
    label: 'My Form field',
    modelValue: 'My Text Field',
  },
}

export const TextArea: Story = {
  args: {
    isTextarea: true,
    label: 'My Form field',
    modelValue: 'My Text Field',
  },
}
