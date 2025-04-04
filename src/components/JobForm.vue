<script setup lang="ts">
import { ref } from 'vue';
import FormField from './FormField.vue';
import JButton from './JButton.vue';

const processing = ref(false)

const onFormSubmit = (e: Event) => {
  e.preventDefault()
  processing.value = true
  const formData = new FormData(e.target as HTMLFormElement)
  const data = Object.fromEntries(formData.entries())
  console.log('Form submitted:', data)
  setTimeout(() => {
    processing.value = false
    alert('Form submitted successfully!')
  }, 2000)
}

</script>
<template>
  <form :onsubmit="onFormSubmit">
    <FormField id="name" name="name" type="text" placeholder="Name" label="Name:" required />
    <FormField id="email" name="email" type="email" placeholder="Email" label="Email:" required />
    <FormField id="message" name="message" type="text" placeholder="Message" label="Message:" is-textarea required />
    <JButton type="submit" :disabled="processing">Apply
      <span v-if="processing"
        class="inline-block w-6 h-6 border-4 ml-2 border-neutral-600 border-t-white rounded-full animate-spin"></span>
    </JButton>
  </form>
</template>
<style lang="scss"></style>
