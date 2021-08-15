<template>
  <h3>{{ val }}</h3>
</template>

<script>

export default {
  name: 'FetchData',
  data () {
    return {
      val: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/countall')
      .then(res => res.json())
      .then(data => {
        this.val = data
      })
  }
}
</script>

<style scoped>

</style>
