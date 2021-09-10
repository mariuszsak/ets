<template>
  <div>
    <Navbar />
    <h1>Status page</h1>
    <FetchUserData/>
    <FetchTickets/>
    <IssueList />
  </div>
</template>

<script>
import FetchUserData from '../components/FetchUserData'
import IssueList from '../components/IssueList'
import Navbar from '../components/Navbar'
import FetchTickets from '../components/FetchTickets'

export default {
  name: 'Status',
  components: { FetchTickets, Navbar, FetchUserData, IssueList }
}
</script>

<style scoped>

</style>
