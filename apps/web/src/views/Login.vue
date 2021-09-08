<template>
  <h1> Login to Your Account </h1>
  <p> <input type='text' placeholder="Email" v-model='email'/> </p>
  <p> <input type='password' placeholder="Password" v-model='password'/> </p>
  <p> <button @click="signIn"> Submit </button> </p>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      val: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/issue/list')
      .then(res => res.json())
      .then(data => {
        this.val = data
      })
  }
}
</script>

<style scoped>

</style>
