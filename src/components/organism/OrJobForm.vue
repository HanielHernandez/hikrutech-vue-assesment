<script setup lang="ts">
import { ref } from 'vue'
import FormField from '@/components/molecules/MlFormField.vue'
import AtButton from '@/components/atoms/AtButton.vue'

const processing = ref(false)

const onFormSubmit = (e: Event) => {
  e.preventDefault()
  processing.value = true
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())

  setTimeout(() => {
    processing.value = false
    console.log('Form submitted:', data)
    alert('Form submitted successfully!')
    form.reset()
  }, 2000)
}
</script>
<template>
  <form @submit.prevent="onFormSubmit">
    <FormField id="name" name="name" type="text" placeholder="Name" label="Name:" required />
    <FormField id="email" name="email" type="email" placeholder="Email" label="Email:" required />
    <FormField
      id="message"
      name="message"
      type="text"
      placeholder="Message"
      label="Message:"
      is-textarea
      required
    />
    <AtButton type="submit" :disabled="processing">
      Apply
      <span
        v-show="processing"
        class="inline-block w-6 h-6 border-4 ml-2 border-neutral-600 border-t-white rounded-full animate-spin"
      ></span>
    </AtButton>
  </form>
</template>
<style lang="scss" scoped></style>
