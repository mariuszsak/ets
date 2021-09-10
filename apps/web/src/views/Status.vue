<template>
  <div>
    <Navbar />
    <h1>Status page</h1>
    <FetchTickets/>
    <IssueList />
  </div>
</template>

<script>
import IssueList from '../components/IssueList'
import Navbar from '../components/Navbar'
import FetchTickets from '../components/FetchTickets'

export default {
  name: 'Status',
  components: { FetchTickets, Navbar, IssueList }
}
</script>

<style scoped>

</style>
