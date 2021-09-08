<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/status">Status</router-link> |
    <router-link to="/mainform">MainForm</router-link> |
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
