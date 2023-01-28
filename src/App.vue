
<template>
  <router-view />
</template>

<script lang="ts">
// @ is an alias to /src
import authUser from './APIactions/actions'

export default {
  methods: {
    goHome () {
      // this.$route.push({ name: 'home' })
    },
    goAbout () {
      // this.$route.push({ name: 'about' })
    },
    goProducts () {
      // this.$route.push({ name: 'product' })
    },
    async goLogin () {
      await authUser('john@mail.com', 'changeme')
    }
  }
}
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
