<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button
    :disabled="disabled"
    class="px-3 py-2 border border-gray-200 cursor-pointer bg-neutral-100 hover:opacity-80 transition-all ease-in-out duration-200 text-neutral-800 font-bold rounded-md"
    :class="
      disabled
        ? 'opacity-50 cursor-not-allowed disabled:hover:cursor-not-allowed disabled:hover:opacity-50'
        : ''
    "
  >
    <div class="flex flex-row items-center">
      <slot />
    </div>
  </button>
</template>
<style lang="scss" scoped></style>
