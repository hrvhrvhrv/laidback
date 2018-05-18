<template>


  <div class="page-wrapper col-md-8 offset-md-2">
    <div class="blog-headline">
      <h1>Monday 10th June</h1>
      <hr>
    </div>
    <div class="tab-layout-container">
      <div class="tab-layout-large">
        <h2>Todays lessons</h2>
        <ul>
          <!-- List item showing each lesson data per page-->
          <div v-for="item in 3" class="Lesson-list-item flex-row no-wrap">
            <div class="imageWrapper">
              <div class="profileImage">
                <h1>12:45</h1>
              </div>
            </div>
            <div class="text-container flex-column">
              <h5 class="pupil-text ">Pupil Name</h5>
              <h3>12 Dorchester Avenue</h3>
            </div>
            <div class="flex-row button-container">
              <div class="btn-base button1"><i class="far fa-edit"></i>Edit</div>
              <div class="btn-base button2"><i class="fas fa-graduation-cap"></i>View</div>
            </div>
          </div>
        </ul>
        <h2>Lessons</h2>
        <div class="flex-row justify-space-around">
          <router-link
            class="btn-base button3"
            tag="div"
            to="/allLessons">
            <i class="fas fa-graduation-cap fa-3x"></i>
            <h3>View all</h3>
          </router-link>
          <router-link
            class="btn-base button3"
            tag="div"
            to="/allLessons">
            <i class="fas fa-graduation-cap fa-3x"></i>
            <h3>View week</h3>
          </router-link>
          <router-link
            class="btn-base button3"
            tag="div"
            to="/allLessons">
            <i class="fas fa-graduation-cap fa-3x"></i>
            <h3>View month</h3>
          </router-link>
        </div>
      </div>

      <!--right hand side of the page showing buttons for creation and view all-->
      <div class="tab-layout-small">
        <h2>Pupils</h2>
        <div class="flex-row justify-space-around">
          <router-link
            class="btn-base button3"
            tag="div"
            to="/pupil/applicants">
            <i class="fas fa-user fa-3x"></i>
            <h3>
              New Pupils</h3>
          </router-link>
          <router-link
            class="btn-base button3"
            tag="div"
            to="/pupil/all">
            <i class="fas fa-user fa-3x"></i>
            <h3>View Pupils</h3>
          </router-link>


        </div>

        <h2>Blog</h2>
        <div class="flex-row justify-space-around">
          <router-link
            class="btn-base button3"
            tag="div"
            to="/blog/new">
            <i class="far fa-newspaper fa-3x"></i>
            <h3>New Blog</h3>
          </router-link>

          <router-link
            class="btn-base button3"
            tag="div"
            to="/blog">
            <i class="far fa-newspaper fa-3x"></i>
            <h3>View Blog</h3>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // On load we need to load all lessons with todays date and tomorrow date
  // make it a computed property within the store


</script>

<style scoped>


</style>
