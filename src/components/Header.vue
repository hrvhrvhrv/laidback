<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!--Router link used to tell Vue JS to route to new page-->
<!-- brand logo link page top[ left-->
      <router-link
        class="navbar-brand pull-left"
        to="/"
        v-if="!isNavBarOpen"
      >
      LaidBack
      </router-link>

      <div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link

            class="nav-item"
            tag="li"
            to="/getting-started"
          >
            <a class="nav-link" href="#">Getting Started</a>
          </router-link>

          <router-link

            class="nav-item"
            tag="li"
            to="/about-us"
          >
            <a class="nav-link" href="#">About Us</a>
          </router-link>
          <router-link

            class="nav-item"
            tag="li"
            to="/contact"
          >
            <a class="nav-link" href="#">Contact Us</a>
          </router-link>
          <router-link

            class="nav-item"
            tag="li"
            to="/price"
          >
            <a class="nav-link" href="#">Prices</a>
          </router-link>
          <router-link

            class="nav-item"
            tag="li"
            to="/announcements"
          >
            <a class="nav-link" href="#">Announcements </a>
          </router-link>

          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="#">Link</a>-->
          <!--</li>-->
          <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle"-->
               <!--href="#" id="navbarDropdown"-->
               <!--role="button"-->
               <!--data-toggle="dropdown"-->
               <!--aria-haspopup="true"-->
               <!--aria-expanded="false"-->
               <!--@click="isDropDownOpen = !isDropDownOpen"-->
            <!--&gt;-->
              <!--Dropdown-->
            <!--</a>-->
            <!--<div class="dropdown-menu" :class="{ show: isDropDownOpen}" :aria-labelledby="navbarDropdown">-->
              <!--<a class="dropdown-item" href="#">Action</a>-->
              <!--<a class="dropdown-item" href="#">Another action</a>-->
              <!--<div class="dropdown-divider"></div>-->
              <!--<a class="dropdown-item" href="#">Something else here</a>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<a class="nav-link disabled" href="#">Disabled</a>-->
          <!--</li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
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

</style>
