<template>
  <div>
    <Navbar />
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
import Navbar from '../components/Navbar'

export default {
  name: 'Status',
  components: { Navbar, FetchUserData, FetchIssueData, IssueList }
}
</script>

<style scoped>

</style>
