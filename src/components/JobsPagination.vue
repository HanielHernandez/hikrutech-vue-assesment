<script setup lang="ts">
import JButton from './JButton.vue';

const emit = defineEmits<{
  (e: 'onPaginationClick', flow: "next" | "prev"): void
}>()

const onButtonClick = (flow: "next" | "prev") => {
  emit("onPaginationClick", flow)
}

</script>
<template>
  <div class="flex flex-row justify-between w-full max-w-3xl mx-auto py-4">
    <JButton @click="onButtonClick('prev')" title="Previous">
      <span class="material-icons">
        chevron_left
      </span>
    </JButton>
    <JButton @click="onButtonClick('next')" title="Next">
      <span class="material-icons">
        chevron_right
      </span>
    </JButton>
  </div>
</template>
<style lang="scss"></style>
