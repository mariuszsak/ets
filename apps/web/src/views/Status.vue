<template>
  <div>
    <h1>Status page</h1>
    <FetchUserData/>
    <FetchIssueData/>
  </div>
</template>

<script>
import FetchUserData from '../components/FetchUserData'
import FetchIssueData from '../components/FetchIssueData'

export default {
  name: 'Status',
  components: { FetchUserData, FetchIssueData }
}
</script>

<style scoped>

</style>
