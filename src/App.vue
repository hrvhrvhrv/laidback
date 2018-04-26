<template>
  <div>
    <app-header></app-header>
    <!--<list-menu></list-menu>-->
<!--<card-tile></card-tile>-->
<router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import ListMenu from './components/ListMenu.vue';
  import CardTile from './components/CardTile.vue'

  export default {
    components: {
      appHeader: Header,
      ListMenu,
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
  .card{
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

  h1, h2 {
    font-weight: normal;
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
</style>
