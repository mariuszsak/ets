<template>
  <div>
    <h1>Status page</h1>
    <FetchUserData/>
    <FetchIssueData/>
    <IssueList />
  </div>
</template>

<script>
import FetchUserData from '../components/FetchUserData'
import FetchIssueData from '../components/FetchIssueData'
import IssueList from '../components/IssueList'

export default {
  name: 'Status',
  components: { FetchUserData, FetchIssueData, IssueList }
}
</script>

<style scoped>

</style>
