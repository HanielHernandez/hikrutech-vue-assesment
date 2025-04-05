<script setup lang="ts">
import { computed } from 'vue'
import { useJobstore } from '@/stores/jobsStore'
import type { Flow } from '@/types/flow'
import BaseButton from '@/components/commons/BaseButton.vue'

const emit = defineEmits<{
  (e: 'onPaginationClick', flow: Flow): void
}>()

const jobsStore = useJobstore()
const endReached = computed(() => jobsStore.endReached)
const page = computed(() => jobsStore.page)
const totalPages = computed(() => jobsStore.data?.totalPages ?? 0)

const onButtonClick = (flow: Flow) => {
  emit('onPaginationClick', flow)
}
</script>
<template>
  <div class="flex flex-row justify-between w-full max-w-3xl mx-auto py-4">
    <div>
      <BaseButton
        id="first_page"
        @click="onButtonClick('start')"
        class="mr-4"
        title="First Page"
        :disabled="page === 1"
      >
        <span class="material-icons"> first_page </span>
      </BaseButton>
      <BaseButton
        id="prev_page"
        @click="onButtonClick('prev')"
        title="Previous"
        :disabled="page === 1"
      >
        <span class="material-icons"> chevron_left </span>
      </BaseButton>
    </div>
    {{ page + '/' + totalPages }}
    <div>
      <BaseButton
        id="next_page"
        @click="onButtonClick('next')"
        title="Next"
        class="mr-4"
        :disabled="endReached"
      >
        <span class="material-icons"> chevron_right </span>
      </BaseButton>
      <BaseButton
        id="last_page"
        @click="onButtonClick('last')"
        title="Last Page"
        :disabled="endReached"
      >
        <span class="material-icons"> last_page </span>
      </BaseButton>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
