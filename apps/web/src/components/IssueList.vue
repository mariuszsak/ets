<template>
  <ul id="array-rendering">
    <li v-for="item in val" :key="item.id">
     Issue: {{item.issue}}, status: {{ item.status }}, registered at: {{item.registeredAt}} comments: {{item.comments}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'IssueList',
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
