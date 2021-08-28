<template>
  <h3>Liczba zgłoszonych problemów: {{ val }}</h3>
</template>

<script>

export default {
  name: 'FetchUserData',
  data () {
    return {
      val: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/issues')
      .then(res => res.json())
      .then(data => {
        this.val = data
      })
  }
}
</script>

<style scoped>

</style>
