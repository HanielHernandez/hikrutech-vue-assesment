<script setup lang="ts">
import AtInput from '@/components/atoms/AtInput.vue'
defineOptions({
  inheritAttrs: false,
})
const model = defineModel<string>()
</script>
<template>
  <div class="relative w-full">
    <AtInput placeholder="Search for jobs..." v-model="model" class="!px-12" />
    <span class="material-icons absolute py-2 px-3 top-0 left-0 text-neutral-600 z-20">search</span>
    <button
      @click="model = ''"
      class="material-icons absolute py-2 px-3 top-0 right-0 text-neutral-600 z-40 cursor-pointer transition-all ease-in-out duration-300"
      :class="model && model.length > 0 ? 'opacity-100' : 'opacity-0'"
    >
      close
    </button>
  </div>
</template>
<style lang="scss" scoped></style>
