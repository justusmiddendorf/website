<template>
  <div id="app">
    <MainLayout>
      <Home />
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from './components/layout/MainLayout.vue';
import Home from './views/Home.vue';
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
