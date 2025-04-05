<script setup lang="ts">
defineProps<{
  isTextarea?: boolean
}>()

const model = defineModel()
</script>
<template>
  <input
    v-model="model"
    type="text"
    class="px-3 py-2 w-full border-neutral-300 text-neutral-800 placeholder:text-neutral-600 border rounded hover:bg-neutral-100 transition-colors ease-in duration-100"
  />
</template>
<style lang="scss" scoped></style>
