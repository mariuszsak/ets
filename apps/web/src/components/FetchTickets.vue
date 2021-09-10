<template>
  <h3>Liczba zgłoszonych problemów: {{ val }}</h3>
</template>

<script>

export default {
  name: 'FetchTickets',
  data () {
    return {
      val: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/tickets')
      .then(res => res.json())
      .then(data => {
        this.val = data.length
      })
  }
}
</script>

<style scoped>

</style>
