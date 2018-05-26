<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Find out About Laidback</h1>
      <p>Fill in the form below to apply to be a pupil with laidback driving school.</p>
      <p>We will review your application and respond to you in one day</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">
        <img src="../../assets/stoater-411258-unsplash.jpg" alt="">

      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Prices</h3>
        </header>
        <div class="images40_mainText_container">
          <p>Our prices are as listed below </p>

          <p>£25 per lesson</p>
          <p>10 lessons for £220</p>


        </div>
        <footer class="fullWidth flex-row">
          <!--<div-->
          <!--@click="lastForm"-->
          <!--class="btn_nextSection width30 backBtn"-->

          <!--&gt;-->
          <!--<h2>Back</h2>-->
          <!--</div>-->
          <router-link
            tag="div"
            class="btn_nextSection width70"
            to="/register"
          >
            <h2>Book Lessons</h2>
          </router-link>


        </footer>
      </div>

    </main>
  </div>

</template>

<script>
  import axios from 'axios';
  import {required, email, numeric, minLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    data: () => {
      return {
        formSection: 0
      }
    },
    computed: {},


    methods: {
      nextForm() {

        return this.formSection++
      },
      lastForm() {

        return this.formSection--
      },
    }

  }


</script>

<style>
  .formSection {
    padding: 30px 10%;
  }
</style>


