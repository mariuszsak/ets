<template>
  <form>
    <label>Name:</label>
    <input type="text" required v-model="formVal.name">
    <label>Room:</label>
    <input type="text" required v-model="formVal.room">
    <label>Issue:</label>
    <textarea required v-model="formVal.issue"/>
    <button type="submit">send</button>
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
  }
}
</script>

<style scoped>

</style>
