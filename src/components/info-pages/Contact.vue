<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Find out About Laidback</h1>
      <p>Fill in the form below to apply to be a pupil with laidback driving school.</p>
      <p>We will review your application and respond to you in one day</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">


      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Contact</h3>
        </header>
        <div class="images40_mainText_container">

<div>
  <i class="fas fa-phone"></i>
  <h1>Call us</h1>
  <p>01224 588841</p>
</div>
        </div>
        <footer class="fullWidth flex-row">

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
    computed: {

    },


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


