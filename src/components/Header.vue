<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <!--Router link used to tell Vue JS to route to new page-->
      <!-- brand logo link page top[ left-->
      <router-link
        class="navbar-brand pull-left"
        to="/"
        v-if="!isNavBarOpen"
      ><img class="logoIMg" src="../assets/L-Plate.png" alt="logo">
        aidBack
      </router-link>

      <div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
<!--getting started link button-->
          <li class="nav-item">
            <router-link
              class="nav-link"
              tag="a"
              to="/getting-started"
            >
              Get Started
            </router-link>
          </li>

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

        <router-link
          class="btn btn-danger my-2 my-sm-0"
          tag="button"
          to="/pupil/all">
          Pupil All
        </router-link>

        <router-link

          class="btn btn-warning my-2 my-sm-0"
          tag="button"
          to="/login"
        >
          Login
        </router-link>
        <router-link

          class="btn btn-success my-2 my-sm-0"
          tag="button"
          to="/lesson"
        >
          Lesson
        </router-link>
        <router-link

          class="btn btn-info my-2 my-sm-0"
          tag="button"
          to="/register"
        >
          register
        </router-link>


      </div>
      <!-- brand logo for when responsive menu is active -->
      <a class="navbar-brand pull-left" href="#" v-if="isNavBarOpen"><img class="logoIMg" src="../assets/L-Plate.png" alt="logo">LaidBack</a>

      <!-- toggle button for  responsive menu bar-->
      <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation" @click="isNavBarOpen = !isNavBarOpen">
        <span class="navbar-toggler-icon"></span>
      </button>


    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isNavBarOpen: false,
        isDropDownOpen: false

      }
    }
  }

</script>

<style scoped>
.logoIMg{
  height: 40px;
}
.navbar{
  box-shadow: 0 5px 15px grey;
}
</style>
