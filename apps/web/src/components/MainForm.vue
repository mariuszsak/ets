<template>
  <form>
    <label>Name:</label>
    <input type="text" required v-model="formVal.name">
    <label>Room:</label>
    <input type="text" required v-model="formVal.room">
    <label>Issue:</label>
    <textarea required v-model="formVal.issue"/>
    <button type="submit" @click="submitForm">Wyślij</button>
  </form>
</template>

<script>
export default {
  name: 'MainForm',
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

</style>
