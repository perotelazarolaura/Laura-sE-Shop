
<template>
  <div id="#app">
    <NavBar title="Welcome to Laura's Shop!" :isLogged="isLogged"/>
    <router-view />
  </div>
</template>

<script lang="ts">

import './assets/css/main.css'
import NavBar from '@/components/NavBar.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    NavBar
  },
  setup () {
    const store = useStore()
    const isLogged = computed(() => { return store.state.authData != null })
    // If the user isn't loged in he can only be in the login page.
    return {
      isLogged
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
