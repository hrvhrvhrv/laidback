<template>




      <div class="tab-layout-large">
        <h2>Registered Pupils</h2>
        <div v-for="pupil of Pupils" class="Lesson-list-item flex-row">
          <div class="imageWrapper">
            <div class="profileImage">
              <!--<img src="http://www.gravatar.com/avatar/0816f8387182c2bf300d69cb6fc85aab?s=100&r=g&d=mm" alt="">-->
            </div>
          </div>
          <div class="text-container flex-column">
            <h5 class="pupil-text ">{{pupil.firstName}} {{pupil.lastName}}</h5>
          </div>
          <div class="flex-row button-container">
            <!--<router-link-->
              <!--tag="div"-->
              <!--:to="'/pupil/edit/' + pupil._id"-->
              <!--class="btn-base button1"-->
              <!--:key="pupil.id"-->
            <!--&gt;-->
              <!--<i class="far fa-edit"></i>-->
              <!--Edit-->
            <!--</router-link>-->
            <router-link
              tag="div"
              :to="'/pupil/' + pupil._id"
              class="btn-base button2 btn-view"
              :key="pupil.id"
            >
              <i class="fas fa-user"></i>
              View
            </router-link>
          </div>
        </div>
      </div>



</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        Pupils: [],
        errors: []
      }
    },
    computed: {

      role() {
        return this.Pupil.role
      }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get('/pupil/regList/Registered')
        .then(res => {
          // JSON responses are automatically parsed
          console.log(res);
          this.Pupils = res.data
        })
        .catch(error => console.log(error))
    },

  }
</script>

<style scoped>
.tab-layout-large{
  width: 100%;
}
</style>
