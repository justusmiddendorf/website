<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from './components/layout/MainLayout.vue';
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
