<template>
    <img class="logo" src="../assets/logo.png">
    <h1 id="SignTitle">Sign Up</h1>
    <p></p>
    <div class="register">
        <input type="text" v-model="name" placeholder="Please enter your name">
        <input type="text" v-model="email" placeholder="Please enter your E-mail">
        <input type="password" v-model="password" placeholder="Please enter a Password">
        <p><button class="Buttons" id="submitButton" v-on:click="singUp">Sign Up</button></p>
        <h1 id="SignTitle">Or</h1>
        <p><button class="Buttons" id="loginButton" v-on:click="singUp">Login</button></p>
    </div>
</template>

<script lang="ts">
import HooverButton from './buttons.vue'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  // I call a function that tells the button what to do
  methods: {
    singUp () {
      console.warn('SIGNING UP')
    }
  }
}
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
</style>
