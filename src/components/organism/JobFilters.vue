<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useJobstore } from '@/stores/jobsStore'
import { JOB_CATEGORIES } from '@/const/categories'
import MlSearchBar from '@/components/molecules/MlSearchBar.vue'

const emit = defineEmits<{
  (e: 'onfilterChange', value: { value: string; property: string }): void
}>()

const jobsStore = useJobstore()
const category = ref<string>(jobsStore.category || 'All')
const search = ref<string>(jobsStore.search || '')
const categories = computed(() => JOB_CATEGORIES)

watch(category, (newVal) => onFilterChange('category', newVal))
watch(search, (newVal) => onFilterChange('search', newVal))

const onFilterChange = (property: 'category' | 'search', value: string) => {
  emit('onfilterChange', { property, value: value || '' })
}
</script>
<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 i mb-4 md:px-0 max-w-3xl mx-auto">
    <MlSearchBar v-model="search" :isTextarea="false" class="w-full md:w-1/2" />
    <div class="gap-2 flex flex-row items-center w-full justify-center md:justify-end">
      <label for="category" class="font-medium text-neutral-800">Category:</label>
      <select
        v-model="category"
        name="category"
        id="category"
        class="px-3 py-2 border text-neutral-600 rounded md border-neutral-300"
      >
        <option value="All">All</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
