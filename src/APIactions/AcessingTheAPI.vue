/* Accesing Axios doing an HTTP request and handeling th response. Here I am making a GET */
<template>
    <div>
      <h1>{{ data }}</h1>
    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'MyComponent',
  data () {
    return {
      data: null
    }
  },
  created () {
    axios.get('https://fakeapi.platzi.com/')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
