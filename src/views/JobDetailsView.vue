<script setup lang="ts">
import OrJobForm from '@/components/organism/OrJobForm.vue'
import MlJobDetails from '@/components/molecules/MlJobDetails.vue'
import AtText from '@/components/atoms/AtText.vue'

import { useJobstore } from '@/stores/jobsStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const jobsStore = useJobstore()
const route = useRoute()

onMounted(() => {
  const id = route.params.id
  if (id) {
    const idNumber = Number(id)
    jobsStore.findJob(idNumber)
  }
})

const job = computed(() => jobsStore.selectedJob)
</script>
<template>
  <div class="w-full max-w-3xl mx-auto">
    <router-link
      class="mb-4 flex text-neutral-600 items-center justify-center gap-2 text-center w-full hover:opacity-75 transition-colors ease-in-out duration-200"
      to="/jobs"
    >
      <span class="material-icons">arrow_back</span> Back to Jobs
    </router-link>
    <MlJobDetails v-if="job" :job="job" />
    <div class="mb-4 p-4 border border-neutral-200 rounded-md">
      <AtText variant="h2" class="mb-2 leading-tight">Apply for this job</AtText>
      <AtText variant="body" class="mb-4 leading-6">
        Fill out the form below to apply for this job. We will get back to you as soon as possible.
      </AtText>
      <OrJobForm />
    </div>
  </div>
</template>
<style lang="scss"></style>
