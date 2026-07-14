<script setup>
import Navbar from './components/Navbar.vue';
import router from './router';
</script>

<template>
 <Navbar/>
 <router-view></router-view>
</template>

<style>
/* Apply theme background to the full page */
html, body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
}
</style>
