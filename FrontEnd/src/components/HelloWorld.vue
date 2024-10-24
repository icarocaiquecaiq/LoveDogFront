<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
  <div class="p-3">
    <h1>{{ count }}</h1>
    <button v-on:click="count++" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">increase</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
