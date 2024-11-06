<script setup lang="ts">
import NavHead from './components/NavHead.vue';

</script>

<template>
  <div class="relative grid grid-cols-12 grid-flow-row gap-1 h-dvh">
    <NavHead class="fixed inset-y-0 left-0 bg-cyan-950 w-1/6  md col-span-2 p-2"/>
    <main class="bg-slate-400 col-start-3 col-end-13">Main principal da pagina</main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
