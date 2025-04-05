<script setup lang="ts">
import AtInput from '@/components/atoms/AtInput.vue'
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
  <fieldset class="flex flex-col w-full max-w-3xl mb-4 last:mb-0">
    <label class="font-bold text-neutral-800 mb-2">{{ label }}</label>
    <AtInput v-bind="$attrs" :v-model="model" :isTextarea="isTextarea" />
  </fieldset>
</template>
<style lang="scss" scoped></style>
