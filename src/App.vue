<template>
  <div>
    <app-header></app-header>

    <transition mode="out-in" name="slide-fade">

      <router-view class="top-pad"> </router-view>
    </transition>
    <!--<list-menu></list-menu>-->
    <card-tile></card-tile>
  </div>
</template>

<script>
  import Header from './components/Layout/Header.vue';
  // import ListMenu from './components/Layout/ListMenu.vue';
  import CardTile from './components/CardTile.vue'

  export default {
    components: {
      appHeader: Header,
      CardTile
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  .card {
    border-radius: 25px;
    margin: 15px;
    overflow: hidden;
    height: 80vh;
  }

  .list-group {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-family: 'Do Hyeon', sans-serif;

  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(2%) ;
    opacity: 0;
  }


  html{
    font-family: 'Montserrat', sans-serif;
  }

  .top-pad{
    padding-top: 65px;
  }
</style>
