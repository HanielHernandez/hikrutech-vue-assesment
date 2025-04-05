<script setup lang="ts">
import type { TextVariant, TextVariantProps } from '@/types/text'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: TextVariant
    class?: string
    tag?: string
  }>(),
  {
    variant: 'body',
  },
)

// Define styles and tags for each variant
const variantStyles: Record<TextVariant, TextVariantProps> = {
  h1: { tag: 'h1', size: 'text-3xl', weight: 'font-bold', color: 'text-neutral-800' },
  h2: { tag: 'h2', size: 'text-2xl', weight: 'font-bold', color: 'text-neutral-800' },
  h3: { tag: 'h3', size: 'text-lg', weight: 'font-bold', color: 'text-neutral-900' },
  subtitle: { tag: 'h2', size: 'text-xl', weight: 'font-semibold', color: 'text-neutral-700' },
  body: { tag: 'p', size: 'text-base', weight: 'font-normal', color: 'text-neutral-600' },
  caption: { tag: 'span', size: 'text-sm', weight: 'font-bold', color: 'text-neutral-600' },
}

// Compute the tag and styles based on the variant
const tag = computed(() => props.tag || variantStyles[props.variant].tag)
const classes = computed(() => {
  const { size, weight, color } = variantStyles[props.variant]
  return `${size} ${weight} ${color} ${props.class}`
})
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped></style>
