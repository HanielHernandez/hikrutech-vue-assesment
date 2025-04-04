<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const model = defineModel()

defineProps<{
  label: string
  isTextarea?: boolean
}>()
</script>
<template>
  <fieldset class="flex flex-col w-full max-w-3xl mx-auto mb-4 last:mb-0">
    <label class="font-bold mb-2">{{ label }}</label>
    <component
      :is="isTextarea ? 'textarea' : 'input'"
      v-bind="$attrs"
      :v-model="model"
      class="px-3 py-2 border-neutral-300 text-neutral-800 placeholder:text-neutral-600 border rounded hover:bg-neutral-100 transition-colors ease-in duration-100"
    />
  </fieldset>
</template>
<style lang="scss"></style>
