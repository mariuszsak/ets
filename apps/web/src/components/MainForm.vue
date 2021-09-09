<template>
  <Navbar />
  <h1>Zgłoszenie problemu informatycznego:</h1>
  <form>
    <label>Nazwisko osoby zgłaszającej:</label>
    <input type="text" required v-model="formVal.name">
    <label>Sala/pokój/gabinet nr:</label>
    <input type="text" required v-model="formVal.room">
    <label>Opis problemu:</label>
    <textarea required v-model="formVal.issue"/>
    <button type="submit" @click="submitForm">Wyślij</button>
  </form>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'MainForm',
  components: { Navbar },
  data () {
    return {
      formVal: {
        name: '',
        room: '',
        issue: ''
      }
    }
  },
  methods: {
    submitForm: function () {
      fetch.post('http://localhost:3000/issue/addissue', {
        params: {
          name: this.formVal.name,
          room: this.formVal.room,
          issue: this.formVal.issue
        }
      })
        .then(response => {
          this.responseData = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
