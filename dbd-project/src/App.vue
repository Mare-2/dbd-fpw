<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Advs from './components/Advs.vue';
</script>

<template>
  <Header />
  <NavBar />
  <aside class="col-3">
    <h2>Barra di sinistra</h2>
    
  </aside>
  <RouterView />
  <aside class="col-3">
    <h2>Barra di destra</h2>
    <Advs />
  </aside>
  <Footer />
</template>

<style>

</style>
