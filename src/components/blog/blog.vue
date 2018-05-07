<template>

  <transition mode="out-in" name="slide-fade">
    <router-view></router-view></transition>
</template>

<script>
    export default {
        name: "blog"
    }
</script>

<style scoped>
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
</style>
