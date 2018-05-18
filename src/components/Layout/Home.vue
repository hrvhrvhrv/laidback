<template>

  <div>

    <div class="page-wrapper col-md-8 offset-md-2">
      <div class="blog-headline">
        <h1>Laidback driving school</h1>
<hr>
        <div>

          <div class="col justify-center">
            <p>Welcome to laidback driving school learn to drive in glasgow with us </p>
            <router-link
              tag="button"
              class="btn-base button2"
              to="/register"
            >
              Register
            </router-link>
            <router-link
              tag="button"
              class="btn-base button2"
              to="/login"
            >
              Login
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      // funds() {
      //     return this.$store.getters.funds;
      // }
    }
  }
</script>

<style>

  .img-splash {
    width: 350px;
    height: 350px;
  }

  .splash {
    background: aliceblue;
    padding: 30px;
    border-radius: 25px;
  }

  .logoIMg {
    height: 90px;
  }

  .pageSecLight {
    background: aliceblue;
    height: 80vh;
  }

  .pageSecDark {
    background: black;
    color: aliceblue;
    height: 20vh;
  }
</style>
