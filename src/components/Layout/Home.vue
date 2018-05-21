<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Welcome to Laidback Driving School</h1>
      <p>Home of Glasgows most laidback driving school</p>
    </div>
    <main class="flex-row" >

      <div class="pageSection_60">
        <!--<div>-->
          <!--&lt;!&ndash; <img src="images/white_03.jpg" alt="Save the Rhino Logo"> &ndash;&gt;-->
          <!--<img class="pageImg" ng-src="images/{{rhino[thisRhino].imgNam}}_{{thisImage}}.jpg" alt="Description" />-->
          <!--<a href="index.html"></a>-->
          <!--<h2 class="page_title">{{rhino[thisRhino].type}}</h3>-->
            <!--</a>-->
        <!--</div>-->
        <h1>This is the section 60</h1>
      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large"></h3>
        </header>
        <div class="images40_mainText_container">
          <h3 class="title">Fact</h3>
            <h3 class="output">facts</h3>
            <h3 class="title">Sounds</h3>
              <h3 class="output">sounds}</h3>
              <h3 class="title">Daily Activiy</h3>
                <h3 class="output"> activity</h3>
        </div>
        <footer class="fullWidth flex-row">
          <router-link
            tag="div"
            class="btn_nextSection width30 backBtn"
            to="/register"
          >
            <h2>back</h2>
          </router-link>
          <router-link
            tag="div"
            class="btn_nextSection width70"
            to="/register"
            >
            <h2>Register</h2>
            </router-link>
        </footer>
      </div>

    </main>
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
