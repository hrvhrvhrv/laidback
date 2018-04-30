<template>
  <div class="row justify-content-around">


  <div class="list-group col-lg-6 col-lg-offset-2">
    <h1>Hello ViewAll Pupils Components </h1>




    <router-link
      v-for="pupil of Pupils"
      tag="a"
      :to="'/pupil/' + pupil._id"
      class="list-group-item list-group-item-action"
      :key="pupil.id"
    >

      {{pupil.contact.firstName}} {{pupil.contact.lastName}}</router-link>

  </div></div>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        Pupils: [],
        errors: []
      }
    },
    computed: {

    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get('/pupil/')
        .then(res => {
        // JSON responses are automatically parsed
          console.log(res);
          this.Pupils = res.data
      })
        .catch(error => console.log(error))
    },

  }
</script>

<style scoped>

  .glyphicon-lg
  {
    font-size:4em
  }
  .info-block
  {
    border-right:5px solid #E6E6E6;margin-bottom:25px
  }
  .info-block .square-box
  {
    width:100px;min-height:110px;margin-right:22px;text-align:center!important;background-color:#676767;padding:20px 0
  }
  .info-block.block-info
  {
    border-color:#20819e
  }
  .info-block.block-info .square-box
  {
    background-color:#20819e;color:#FFF
  }

</style>
