<script setup lang="ts"></script>
<template>
  <button
    class="px-3 py-2 border border-gray-200 cursor-pointer bg-neutral-100 hover:opacity-75 transition-colors ease-in-out duration-200 text-neutral-800 font-bold  rounded-md">
    <div class="flex flex-row items-center">
      <slot />
    </div>
  </button>
</template>
<style lang="scss"></style>
