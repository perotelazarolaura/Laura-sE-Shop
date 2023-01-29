<template>
  <img src="../assets/logo.png">
  <h2 class="title">Sign In</h2>
  <br/>
  <div class="register">
    <input type="text" v-model="email" placeholder="Please enter your E-mail"/>
    <input type="password" v-model="password" placeholder="Please enter a Password"/>
    <p><button class="btn" id="submitButton" @click="signIn">Sign In</button></p>
  </div>
  <p class="error-message" v-if="errorMessage">
    {{ errorMessage }}
  </p>
</template>

<script lang="ts">
import apiCalls from '@/api/calls'
import { AuthData } from '@/models/AuthData'
import { defineComponent, computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SignInView',
  setup () {
    const store = useStore()
    const router = useRouter()
    const isLogged = computed(() => { return store.state.authData != null })
    onMounted(() => { // Stops the user from going back to the signin page
      if (isLogged.value) {
        router.push({ name: 'products' })
      }
    })
    return {
      login: (authData: AuthData) => { store.commit('login', authData) },
      isLogged,
      email: ref(''),
      password: ref(''),
      errorMessage: ref('')
    }
  },
  methods: {
    signIn () {
      if (!this.validate()) { return } // If the input validation retunrs an error we do not call the API.
      apiCalls.authUser(this.email, this.password)
        .then((authData:AuthData) => {
          this.errorMessage = ''
          this.login(authData)
          this.$router.push({ name: 'products' })
        })
        .catch(() => { // Creates an error message when a wrong login is used
          this.errorMessage = 'Invalid login'
          console.error('invalid login')
        })
    },
    validate () {
      // We check the email's format is correct using a regular expression and we also check the fields are not empty
      const validEmail = this.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      if (!this.email || !validEmail) {
        this.errorMessage = 'Invalid email'
        return false
      } else if (!this.password) {
        this.errorMessage = 'Password is mandatory'
        return false
      }
      return true
    }
  }
})
</script>
<style scoped>

.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: auto;
}
.error-message {
  color:red
}
</style>
