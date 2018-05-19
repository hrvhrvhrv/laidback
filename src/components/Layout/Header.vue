<template>
  <header>


    <!--<headerNonRegistered v-if="!auth"></headerNonRegistered>-->
    <!--<headerPupil v-if="auth"></headerPupil>-->
    <!--<headerInstructor ></headerInstructor>-->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <!--Router link used to tell Vue JS to route to new page-->

      <!-- brand logo link page top[ left-->
      <router-link
        class="navbar-brand pull-left"
        to="/instructorHomepage"
        v-if="!isNavBarOpen && whatRole === 'Admin'"
      ><img class="logoIMg" src="../../assets/L-Plate.png" alt="logo">
        aidBack
      </router-link>
      <router-link
        class="navbar-brand pull-left"
        to="/"
        v-if="!isNavBarOpen && whatRole !== 'Admin'"
      ><img class="logoIMg" src="../../assets/L-Plate.png" alt="logo">
        aidBack
      </router-link>


      <div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}">
        <ul class="navbar-nav mr-auto">
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


        <div class="col-md-2 col-sm-12 row ">

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
          <router-link
            class="btn-base btn-cancel"
            tag="button"
            to="/login"
            v-if="!auth"
          >
            Login
          </router-link>

          <router-link
            class="btn-base btn-submit"
            tag="button"
            to="/register"
            v-if="!auth"
          >
            register
          </router-link>

          <button class="btn-base btn-submit" @click="onLogout" v-if="auth">Logout</button>
        </div>
      </div>
      <!-- brand logo for when responsive menu is active -->
      <a class="navbar-brand pull-left" href="#" v-if="isNavBarOpen">LaidBack</a>

      <!-- toggle button for  responsive menu bar-->
      <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation" @click="isNavBarOpen = !isNavBarOpen">
        <span class="navbar-toggler-icon"></span>
      </button>


    </nav>

  </header>
</template>

<script>
  import headerNonRegistered from './headers/Header-non-registered.vue';
  import headerPupil from './headers/Header-Pupil.vue';
  import headerInstructor from './headers/Header-Instructor.vue';

  export default {
    components: {
      headerNonRegistered,
      headerPupil,
      headerInstructor
    },
    data() {
      return {
        isNavBarOpen: false,
        isDropDownOpen: false,
        role: ''

      }
    },
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      },
      whatRole() {
        return this.$store.getters.userRole
      },
      storeUserID() {
        return this.$store.getters.userIdStore
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
    height: 75px;
  }

</style>
