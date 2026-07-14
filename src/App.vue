<script setup>
import Navbar from './components/Navbar.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import TechBackground from './components/TechBackground.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Services from './views/Services.vue';
import Skills from './views/Skills.vue';
import Contact from './views/Contact.vue';
</script>

<template>
 <Navbar/>
 
 <!-- Global Tech Background -->
 <TechBackground />
 
 <div class="main-content">
   <section id="home"><Home/></section>
   <section id="about"><About/></section>
   <section id="portfolio"><Portfolio/></section>
   <section id="services"><Services/></section>
   <section id="skills"><Skills/></section>
   <section id="contact"><Contact/></section>
 </div>
 <ScrollToTop/>
</template>

<style>
/* Apply theme background to the full page */
html, body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>
