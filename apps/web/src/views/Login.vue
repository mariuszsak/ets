<template>
  <h1> Zaloguj się: </h1>
  <p><input type='text' placeholder='Email' v-model='email'/></p>
  <p><input type='password' placeholder='Hasło' v-model='password'/></p>
  <p>
    <button @click='Login'> Wyślij </button>
  </p>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase/compat'

export default {
  setup () {
    const email = ref('')
    const password = ref('')

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message))
    }

    return {
      Login,
      email,
      password
    }
  }
}
</script>

<style scoped>

</style>
