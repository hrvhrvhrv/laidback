<template>



    <headerNonRegistered></headerNonRegistered>
    <!--<headerPupil v-if="auth"></headerPupil>-->
    <!--<headerInstructor ></headerInstructor>-->
    <!--<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">-->
      <!--&lt;!&ndash;Router link used to tell Vue JS to route to new page&ndash;&gt;-->

      <!--&lt;!&ndash; brand logo link page top[ left&ndash;&gt;-->
      <!--<router-link-->
        <!--class="navbar-brand pull-left"-->
        <!--to="/instructorHomepage"-->
        <!--v-if="!isNavBarOpen && whatRole === 'Admin'"-->
      <!--&gt;<img class="logoIMg" src="../../assets/L-Plate.png" alt="logo">-->
        <!--aidBack-->
      <!--</router-link>-->
      <!--<router-link-->
        <!--class="navbar-brand pull-left"-->
        <!--to="/"-->
        <!--v-if="!isNavBarOpen && whatRole !== 'Admin'"-->
      <!--&gt;<img class="logoIMg" src="../../assets/L-Plate.png" alt="logo">-->
        <!--aidBack-->
      <!--</router-link>-->


      <!--<div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}">-->
        <!--<ul class="navbar-nav mr-auto">-->
          <!--&lt;!&ndash; contact link button&ndash;&gt;-->
          <!--<li class="nav-item">-->
            <!--<router-link-->
              <!--class="nav-link"-->
              <!--tag="a"-->
              <!--to="/about-us"-->
            <!--&gt;-->
              <!--About-->
            <!--</router-link>-->
          <!--</li>-->
          <!--&lt;!&ndash; contact link button&ndash;&gt;-->
          <!--<li class="nav-item">-->
            <!--<router-link-->
              <!--class="nav-link"-->
              <!--tag="a"-->
              <!--to="/contact"-->
            <!--&gt;-->
              <!--Contact-->
            <!--</router-link>-->
          <!--</li>-->
          <!--&lt;!&ndash; prices link button&ndash;&gt;-->
          <!--<li class="nav-item">-->
            <!--<router-link-->
              <!--class="nav-link"-->
              <!--tag="a"-->
              <!--to="/price"-->
            <!--&gt;-->
              <!--Prices-->
            <!--</router-link>-->
          <!--</li>-->
          <!--&lt;!&ndash; Link to blog&ndash;&gt;-->
          <!--<li class="nav-item">-->
            <!--<router-link-->
              <!--class="nav-link"-->
              <!--tag="a"-->
              <!--to="/blog"-->
            <!--&gt;-->
              <!--Blog-->
            <!--</router-link>-->
          <!--</li>-->

        <!--</ul>-->


        <!--<div class="col-md-2 col-sm-12 row ">-->

          <!--<router-link-->
            <!--v-if="whatRole === 'Admin'"-->
            <!--class="btn-base btn-cancel"-->
            <!--tag="button"-->
            <!--to="/instructorHomepage"-->
          <!--&gt;-->
            <!--Admin Page-->
          <!--</router-link>-->
          <!--<router-link-->
            <!--v-if="whatRole === 'Registered'"-->
            <!--class="btn-base btn-cancel"-->
            <!--tag="button"-->
            <!--:to="'/pupil/'+ storeUserID"-->
          <!--&gt;-->
            <!--My Profile-->
          <!--</router-link>-->
          <!--<router-link-->
            <!--class="btn-base btn-cancel"-->
            <!--tag="button"-->
            <!--to="/login"-->
            <!--v-if="!auth"-->
          <!--&gt;-->
            <!--Login-->
          <!--</router-link>-->

          <!--<router-link-->
            <!--class="btn-base btn-submit"-->
            <!--tag="button"-->
            <!--to="/register"-->
            <!--v-if="!auth"-->
          <!--&gt;-->
            <!--register-->
          <!--</router-link>-->

          <!--<button class="btn-base btn-submit" @click="onLogout" v-if="auth">Logout</button>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; brand logo for when responsive menu is active &ndash;&gt;-->
      <!--<a class="navbar-brand pull-left" href="#" v-if="isNavBarOpen">LaidBack</a>-->

      <!--&lt;!&ndash; toggle button for  responsive menu bar&ndash;&gt;-->
      <!--<button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"-->
              <!--aria-label="Toggle navigation" @click="isNavBarOpen = !isNavBarOpen">-->
        <!--<span class="navbar-toggler-icon"></span>-->
      <!--</button>-->


    <!--</nav>-->


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
