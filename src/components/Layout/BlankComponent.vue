<template><div class="container">

    <h2>This is a blank Component</h2>
  <p>The route has been made but an blank component has been passed into the route</p>
  <hr>
  <h1>To be developed</h1>
  <button class="btn btn-primary" @click="onLogout" >Delete</button>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      },
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  }


</script>

<style scoped>

</style>
