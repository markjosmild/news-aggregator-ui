<script setup>
import Navbar from './components/The/Navbar.vue';
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-blue-800 text-white">
    <div class="mx-96">
      <Navbar />
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
