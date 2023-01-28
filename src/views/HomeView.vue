<template>
  <div>
    <h1>Welcome to my Vue.js App</h1>
    <p>This is the home page.</p>
    <router-link to="/about">Learn more</router-link>
  </div>
</template>

<script lanf="ts">
export default {
  mounted () {
    console.log('Home page loaded')
  }
}
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>
