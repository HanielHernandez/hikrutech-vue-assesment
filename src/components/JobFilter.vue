<script setup lang="ts">
import { JOB_CATEGORIES } from '@/const/categories'
import { computed, ref, watch } from 'vue'
import SearchBar from './SearchBar.vue'

const emit = defineEmits<{
  (e: 'onfilterChange', value: { value: string; property: string }): void
}>()

const cat = ref<string>('All')
const search = ref<string>('')
const categories = computed(() => JOB_CATEGORIES)

watch(cat, (newVal) => onFilterChange('category', newVal))
watch(search, (newVal) => onFilterChange('search', newVal))

const onFilterChange = (property: 'category' | 'search', value: string) => {
  emit('onfilterChange', { property, value: value || '' })
}
</script>
<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 i mb-4 md:px-0 max-w-3xl mx-auto">
    <SearchBar
      v-model="search"
      label="Search for jobs..."
      :isTextarea="false"
      class="w-full md:w-1/2"
    />
    <div class="gap-2 flex flex-row items-center w-full justify-center md:justify-end">
      <label for="category" class="font-medium text-neutral-800">Category:</label>
      <select
        v-model="cat"
        name="category"
        id="category"
        class="px-3 py-2 border text-neutral-600 rounded md border-neutral-300"
      >
        <option value="All">All</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>
  </div>
</template>
<style lang="scss"></style>
