<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const model = defineModel<string>()

defineProps<{
  label: string
  isTextarea?: boolean
}>()
</script>
<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search for jobs..."
      :aria-label="label"
      :aria-required="true"
      :aria-invalid="false"
      v-model="model"
      class="py-2 px-12 border cursor text-neutral-600 rounded md w-full border-neutral-300"
    />
    <span class="material-icons absolute py-2 px-3 top-0 left-0 text-neutral-600 z-40">search</span>
    <button
      @click="model = ''"
      class="material-icons absolute py-2 px-3 top-0 right-0 text-neutral-600 z-40 cursor-pointer transition-all ease-in-out duration-300"
      :class="model && model.length > 0 ? 'opacity-100' : 'opacity-0'"
    >
      close
    </button>
  </div>
</template>
<style lang="scss"></style>
