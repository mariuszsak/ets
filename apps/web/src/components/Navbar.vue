<template>
  <div id="nav">
    <router-link to="/">Formularz zgłoszeń</router-link> |
    <router-link to="/status">Status</router-link> |
    <Logout />
  </div>
</template>

<script>
import Logout from '@/components/Logout'
export default {
  name: 'Navbar',
  components: { Logout }
}
</script>

<style scoped>

</style>
