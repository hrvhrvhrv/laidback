<template>

  <header class="main_header">

      <!--<a class="main_header_txt width70" href="index.html">Save the Rhino</a>--
      <!-- <h1 class="main_header_txt width70">Save the Rhino</h1> -->

      <nav class="navbar fixed-top navbar-expand ">
        <div class="flex-row main_header_txt width70">
        <!--Router link used to tell Vue JS to route to new page-->

        <!-- brand logo link page top[ left-->
        <router-link class="navbar-brand pull-left"
                     to="/instructorHomepage"
                     v-if="!isNavBarOpen && whatRole === 'Admin'"
        ><img class="logoIMg" src="../../../assets/L-Plate.png" alt="logo">
          aidBack
        </router-link>
        <router-link
          class="navbar-brand pull-left"
          to="/"
          v-if="!isNavBarOpen && whatRole !== 'Admin'"
        ><img class="logoIMg" src="../../../assets/L-Plate.png" alt="logo">
          aidBack
        </router-link>


        <!--<div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}">-->
          <ul class=" ">
            <!-- contact link button-->
            <li class="nav-item">
              <router-link
                class="nav-link"
                tag="a"
                to="/about-us"
              >
                About
              </router-link>
            </li>
            <!-- contact link button-->
            <li class="nav-item">
              <router-link
                class="nav-link"
                tag="a"
                to="/contact"
              >
                Contact
              </router-link>
            </li>
            <!-- prices link button-->
            <li class="nav-item">
              <router-link
                class="nav-link"
                tag="a"
                to="/price"
              >
                Prices
              </router-link>
            </li>
            <!-- Link to blog-->
            <li class="nav-item">
              <router-link
                class="nav-link"
                tag="a"
                to="/blog"
              >
                Blog
              </router-link>
            </li>

          </ul>
        <!--</div>-->
        </div>
        <div class="btn_nextSection width30 column" @click="isDropDownOpen = !isDropDownOpen">
          <!-- toggle button for  responsive menu bar-->


          <!--<img src="images/Silhouette.png" alt="Save the Rhino Logo">-->
          <p>Login</p>
        </div>
      </nav>

    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" @click="isNavBarOpen = !isNavBarOpen">
      Button
    </button>



    <nav class="top-navBar" v-if="isDropDownOpen">
      <transition name="fade" mode="out-in">
        <loginComponent v-if="!auth"></loginComponent>
      </transition>
      <button class="btn-base btn-submit" @click="onLogout" v-if="auth">Logout</button>
      <!--<ul class="top-navBar__ul">-->
        <!--<li class="top-navBar__li" ng-class="{active : activeMenu === 'white'}">-->
          <!--<a class="top-navBar__a" href="rhinoPage.html#/name"-->
             <!--ng-click="whatRhino(0); whatImage(1); activeMenu = 'white' ">White Rhino</a>-->
        <!--</li>-->
        <!--<li class="top-navBar__li" ng-class="{active : activeMenu === 'black'}">-->
          <!--<a class="top-navBar__a" href="rhinoPage.html#/name"-->
             <!--ng-click="whatRhino(1); whatImage(1) ; activeMenu = 'black' ">Black Rhino</a>-->
        <!--</li>-->
        <!--<li class="top-navBar__li" ng-class="{active : activeMenu === 'one'}">-->
          <!--<a class="top-navBar__a" href="rhinoPage.html#/name"-->
             <!--ng-click="whatRhino(2); whatImage(1); activeMenu = 'one' ">One Horned </a>-->
        <!--</li>-->
        <!--<li class="top-navBar__li" ng-class="{active : activeMenu === 'sam'}">-->
          <!--<a class="top-navBar__a" href="rhinoPage.html#/name"-->
             <!--ng-click="whatRhino(3); whatImage(1); activeMenu = 'sam' ">Sumantran Rhino</a>-->
        <!--</li>-->
        <!--<li class="top-navBar__li" ng-class="{active : activeMenu === 'jav'}">-->
          <!--<a class="top-navBar__a" href="rhinoPage.html#/name"-->
             <!--ng-click="whatRhino(4); whatImage(1); activeMenu = 'jav' ">Javan Rhino</a>-->
        <!--</li>-->
      <!--</ul>-->


      <router-link
      v-if="whatRole === 'Admin'"
      class="btn-base btn-cancel"
      tag="button"
      to="/instructorHomepage"
      >
      Admin Page
      </router-link>
      <router-link
      v-if="whatRole === 'Registered'"
      class="btn-base btn-cancel"
      tag="button"
      :to="'/pupil/'+ storeUserID"
      >
      My Profile
      </router-link>
    </nav>


  </header>

</template>

<script>

  import loginComponent from '../../accounts/Login.vue';

  export default {
    components: {
      loginComponent
    },

    data() {
      return {
        isNavBarOpen: false,
        isDropDownOpen: false

      }
    },
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      },
      whatRole() {
        return this.$store.getters.userRole
      }

    },

    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .logoIMg {
    height: 40px;
  }

  .navbar {
    /*box-shadow: 0 5px 15px grey;*/
  }

  .top-navBar {
    margin-top: 10vh;
    width: 100%;
    height: 30vh;
  }
  .width70{
    overflow: hidden;
  }

  .navbar{
    padding: 0;
  }
</style>
