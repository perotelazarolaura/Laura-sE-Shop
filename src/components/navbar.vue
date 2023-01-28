<template>
    <nav>
      <a href="#" class="brand">My E-commerce Site</a>
      <ul>
        <li><a v-bind:href="'/'" v-on:click="goHome">Home</a></li>
        <li><a v-bind:href="'/about'" v-on:click="goAbout">About</a></li>
        <li><a v-bind:href="'/products'" v-on:click="goProducts">Products</a></li>
      </ul>
    </nav>
  </template>

<script lang="ts">
export default {
  methods: {
    goHome () {
      // code to handle the navigation to the home page
    },
    goAbout () {
      // code to handle the navigation to the about page
    },
    goProducts () {
      // code to handle the navigation to the products page
    }
  }
}
</script>
