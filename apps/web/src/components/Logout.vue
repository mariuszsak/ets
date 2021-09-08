<template>
  <router-link to="/" @click="Logout">Logout</router-link>
</template>

<script>
import firebase from 'firebase/compat'

export default {
  name: 'Logout',
  setup () {
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log('User logged out'))
        .catch(err => console.warn(err.message))
    }

    return {
      Logout
    }
  }
}
</script>

<style scoped>

</style>
