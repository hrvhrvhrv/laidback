<template>
  <div>
    <!--<div class="pageHeaderImage">-->
      <!--&lt;!&ndash;<img src="assets/Clydeside1.jpg" alt="">&ndash;&gt;-->
    <!--</div>-->
    <app-header></app-header>
    <!--<div class="page-wrapper col-md-8 offset-md-2">-->
    <transition mode="out-in" name="slide-fade">

      <router-view> </router-view>
    </transition>
    <!--</div>-->
  </div>
</template>

<script>
  import Header from './components/Layout/Header.vue';

  export default {
    components: {
      appHeader: Header

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style>



</style>
