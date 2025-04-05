import type { Meta, StoryObj } from '@storybook/vue3'

import AtText from './AtText.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/AtText',
  component: AtText,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'subtitle', 'body', 'caption'],

      default: 'body',
    },
  },
  render: (args) => ({
    components: { AtText },
    setup() {
      return { args }
    },
    template: `
        <AtText v-bind="args">
      Lorem Impsum sa
        </ AtText>
    `,
  }),
} satisfies Meta<typeof AtText>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Body: Story = {
  args: {
    variant: 'body',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
  },
}

export const caption: Story = {
  args: {
    variant: 'caption',
  },
}
