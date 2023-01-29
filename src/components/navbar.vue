<template>
  <nav>
    <h1 class="title">{{ title }}</h1>
    <div class="navbar">
      <button @click="goProducts()">
        Products
      </button>
      <button v-if="!isLogged" @click="goSignIn()">
        SignIn
      </button>
      <template v-else>
        <button @click="goProfile()">
          Profile
        </button>
        <button @click="signOut()">
          SignOut
        </button>
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NavBar',
  emits: ['buttonClicked'],
  props: {
    isLogged: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const store = useStore()
    return {
      logout: () => { store.commit('logout') }
    }
  },
  methods: {
    goProducts () {
      this.$router.push({ name: 'products' })
    },
    goSignIn () {
      this.$router.push({ name: 'signin' })
    },
    signOut () {
      this.logout()
      this.$router.push({ name: 'signin' })
    },
    goProfile () {
      this.$router.push({ name: 'profile' })
    }
  }
})
</script>
<style scoped>
.title {
  text-align: left;
}
.navbar {
  display: flex;
  height: 50px;
  background-color: #aaccff;
}
.navbar > button {
  color: #fff;
  background-color: #0095ff;
  border-width: 0px;
  height: 100%;
  margin: 0px;
  padding-left: 30px;
  padding-right: 30px;
}
.navbar > button:hover {
  background-color: #07c;
}
.navbar > button:active {
  background-color: #0064bd;
}
.navbar > button:last-child {
  margin-left: auto;
}
</style>
