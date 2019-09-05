<template>
  <div id="app">
    <header></header>
    <main>
      <side-bar />
      <nuxt />
    </main>
  </div>
</template>

<script>
import SideBar from '@/components/layout/sidebar/SideBar.vue'
export default {
  components: {
    SideBar
  }
}
</script>

<style src="@/assets/styles/main.css"></style>
