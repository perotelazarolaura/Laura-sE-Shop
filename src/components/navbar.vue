<template>
  <nav>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div v-if="isLogged" class="links">
      <button @click="goProducts()" class="btn btn-primary">
        Products
      </button>
      <button @click="goProfile()" class="btn btn-primary">
        Profile
      </button>
      <button v-if="!isLogged" @click="goSignIn()" class="btn btn-primary">
        SignIn
      </button>
      <button v-else @click="signOut()" class="btn btn-primary">
        SignOut
      </button>
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
