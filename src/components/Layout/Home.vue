<template>
  <!--<div class="container">-->
    <!--<div class="col-md-12  text-center splash">-->
        <!--<h1 class=""><img class="logoIMg" src="../assets/L-Plate.png" alt="logo">aidback</h1>-->
        <!--<h2>Driving School</h2>-->
        <!--<p>We're here to help you learn to drive</p>-->
        <!--<hr>-->
        <!--<router-link-->
                <!--tag="a"-->
                <!--to="/login">-->
            <!--<a class="btn btn-warning btn-lg" href="#" role="button">Login</a>-->
        <!--</router-link>-->
      <!--<router-link-->
                <!--tag="a"-->
                <!--to="/register">-->
            <!--<a class="btn btn-info btn-lg" href="#" role="button">Register</a>-->
        <!--</router-link>-->
    <!--</div>-->
  <!--</div>-->
  <div>
    <header class="pageSecLight">
      <div class="container h-100">
        <div class="row h-100">

          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../../assets/L-Plate.png" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!--<router-link-->
                    <!--tag="a"-->
                    <!--to="/login">-->
                    <!--<a class="btn btn-warning btn-lg" href="#" role="button">Login</a>-->
                    <!--</router-link>-->
                    <!--<router-link-->
                    <!--tag="a"-->
                    <!--to="/register">-->
                    <!--<a class="btn btn-info btn-lg" href="#" role="button">Register</a>-->
                    <!--</router-link>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">AIDBACK</h1>
              <h3 class="mb-5">Driving School</h3>

              <div class="row">
                <router-link
                  tag="a"
                  to="/login">
                  <a class="btn btn-warning btn-lg" href="#" role="button">Login</a>
                </router-link>
                <router-link
                  tag="a"
                  to="/register">
                  <a class="btn btn-info btn-lg" href="#" role="button">Register</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="download pageSecDark text-center" id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h2 class="section-heading">Discover what all the buzz is about!</h2>
            <p>Our app is available on any mobile device! Download now to get started!</p>
            <div class="badges">
              <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""></a>
              <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pageSecLight" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p class="text-muted">Check out what you can do with this app theme!</p>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="img/demo-screen-1.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-screen-smartphone text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p class="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p class="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p class="text-muted">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p class="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pageSecDark" id="contact">
      <div class="container">
        <h2>We
          <i class="fa fa-heart"></i>
          new friends!</h2>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item social-google-plus">
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy; Your Website 2018. All Rights Reserved.</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
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
    .splash {
        background: aliceblue;
        padding: 30px;
        border-radius: 25px;
    }

  .logoIMg{
    height: 90px;
  }

  .pageSecLight{
    background: aliceblue;
    height: 80vh;
  }
  .pageSecDark{
    background: black;
    color: aliceblue;
    height: 20vh;
  }
</style>
