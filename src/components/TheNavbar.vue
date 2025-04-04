<script setup lang="ts"></script>
<template>
  <nav class="fixed  top-0 left-0 w-full  border-b border-neutral-200 px-4 bg-neutral-100 p-4 z-40">
    <div class="flex flex-row justify-between items-center container mx-auto">
      <router-link to="/">
        <h4 class="font-bold text-2xl text-neutral-800">Jobs List</h4>
      </router-link>
      <ul class="flex gap-4">
        <li>
          <router-link to="/" class="px-4 py-2 hover:text-neutral-800/75 text-neutral-800">
            Home
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss"></style>
