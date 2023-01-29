<template>
  <img class="logo" src="../assets/logo.png">
  <h1 id="SignTitle">Sign In</h1>
  <br/>
  <div class="register">
    <input type="text" v-model="email" placeholder="Please enter your E-mail"/>
    <input type="password" v-model="password" placeholder="Please enter a Password"/>
    <p><button class="Buttons" id="submitButton" @click="signIn">Sign In</button></p>
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
    onMounted(() => {
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

  // I call a function that tells the button what to do
  methods: {
    signIn () {
      if (!this.validate()) { return }
      apiCalls.authUser(this.email, this.password)
        .then((authData:AuthData) => {
          this.errorMessage = ''
          this.login(authData)
          this.$router.push({ name: 'products' })
        })
        .catch(() => {
          this.errorMessage = 'Invalid login'
          console.error('invalid login')
        })
    },
    validate () {
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
  // Stops the user from going back to the signin page

})
</script>
<style>

.logo{
  width: auto
}
.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: auto;
}
#SignTitle{
  color: #7c795d;
  font-family: 'Trocchi', serif;
  font-size: 45px;
  font-weight: normal;
  line-height: 48px;
  margin: 0;
}
.Buttons {
  width: 325px;
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}
.Buttons:hover,
.Buttons:focus {
  background-color: #07c;
}

.Buttons:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.Buttons:active {
  background-color: #0064bd;
  box-shadow: none;
}

.error-message {
  color:red
}
</style>
