<template>


  <div class="page-wrapper col-md-8 offset-md-2">
    <div class="blog-headline">
      <h1 v-if="role === 'Applicant'" >Registration Request</h1>
      <h1 v-if="role === 'Registered'" >Registered Pupil</h1>
      <hr>
    </div>
    <div class="tab-layout-container">
      <div class="tab-layout-small">
        <div class='profile-pic'>
          <img src="../../assets/logo.png" alt="">
        </div>
        <div style="padding: 30px 0 0 30px" v-if="!showEdit">
          <h2>{{Pupil.firstName}} {{Pupil.lastName}}</h2>
          <p>{{Pupil.location}}</p>
          <p>{{Pupil.phoneNumber}}</p>
          <p>{{Pupil.email}}</p>
          <p>{{role}}</p>
          <p>Total Number of Lessons <br> {{numberOfLessons}}</p>
          <p>Remaining Block Booking <br> {{ blockBookings }} / 10</p>

        </div>

        <transition name="fade" mode="in-out">

        <editTheForm
          v-if="showEdit"
          v-bind:Pupil="Pupil"
        ></editTheForm>
        </transition>
      </div>
      <div class="tab-layout-large col ">
        <button
          @click="showNewLesson = !showNewLesson"
          class="btn-base button2"
        >
          <i class="fas fa-graduation-cap"></i>
          New Lesson
        </button>
        <transition name="fade" mode="out-in">
        <addNewLesson
          v-if="showNewLesson"
        ></addNewLesson></transition>
        <div v-if="role === 'Applicant'">
          <h1>Registration Request</h1>
          <hr>


          <div class="row justify-space-between">
            <h2>Provisional Licence</h2>
            <div v-if="provisional"><i class="fas fa-check fa-2x"></i></div>
            <div v-if="!provisional"><i class="fas fa-ban fa-2x"></i></div>
          </div>
          <div class="row justify-space-between">
            <h2>Theory Test</h2>
            <div v-if="!theoryTest"><i class="fas fa-ban fa-2x"></i></div>
            <div v-if="theoryTest"><i class="fas fa-check fa-2x"></i></div>
          </div>
          <div class="row justify-space-between">
            <h2>Previous Lessons</h2>
            <h1>{{previousLessons}}</h1>
          </div>
          <div class="col justify-space-between">
            <h2>Availability</h2>
            <div class="row">
              <h1 class="availabilityDays" v-for="days in availablilty">{{days}}</h1>
            </div>
            <hr>
          </div>

          <div class="flex-row">
            <div class="btn-base btn-submit"
                 @click="registerPupil">
              Accept as Pupil
            </div>

            <div class="btn-base btn-clear"
                 @click="deletePupil">
              Reject as pupil
            </div>
          </div>

        </div>
        <div v-if="role === 'Registered'">
          <h2>Next lesson</h2>
          <div v-for="lessonData in lessons" class="Lesson-list-item flex-row no-wrap">
            <div class="imageWrapper">
              <div class="profileImage">
                <h3>{{lessonData.lessonSLot}}</h3>
                <p>{{lessonData.lessonDate | moment(" Do MMMM YYYY")}}</p>
              </div>
            </div>
            <div class="text-container flex-column">
              <h5 class="pupil-text ">{{Pupil.firstName}}</h5>
              <p>{{Pupil.location}}</p>
            </div>
            <div class="flex-row button-container">
              <router-link
                tag="div"
                :to="'/lesson/edit/' + lessonData._id"
                class="btn-base button1"
              >
                <i class="fas fa-graduation-cap"></i>
                edit
              </router-link>

              <router-link
                tag="div"
                :to="'/lesson/' + lessonData._id"
                class="btn-base button2"
              >
                <i class="fas fa-graduation-cap"></i>
                View
              </router-link>
              <!--<div class="btn-base button1"><i class="far fa-edit"></i>Edit</div>-->
            </div>
          </div>
          <h2>Previous lesson</h2>

          <!--<router-link-->
            <!--tag="div"-->
            <!--:to="'/lesson/new/'+ Pupil._id"-->
            <!--class="btn-base button2"-->
          <!--&gt;-->
            <!--<i class="fas fa-graduation-cap"></i>-->
            <!--New Lesson-->
          <!--</router-link>-->
          <button
            @click="showEdit = !showEdit"
            class="btn-base button1"
          >
            <i class="fas fa-graduation-cap"></i>
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import editForm from './PupilProfileEdit.vue';
  import newLesson from '../lesson/NewLesson.vue';

  export default {
    components:{
      editTheForm: editForm,
      addNewLesson:newLesson
    },
    data() {
      return {
        showEdit:false,
        showNewLesson:false,
        pupilID: this.$route.params.id,
        Pupil: [],
        errors: []
      }
    },
    methods: {
      deletePupil() {
        const url = '/pupil/' + this.pupilID;
        axios.delete(url)
          .then(
            this.$router.push('/')
          )
          .catch(error => console.log(error))
      },
      registerPupil() {
        const url = '/pupil/registered/' + this.pupilID;
        axios.put(url)
          .then(
            this.$router.push('/pupil/all')
          )
          .catch(error => console.log(error))
      }

    },
    computed: {
      previousLessons() {
        return this.Pupil.registration.previousLessons
      },
      theoryTest() {
        return this.Pupil.registration.theoryTest
      },
      provisional() {
        return this.Pupil.registration.provisional
      },
      availablilty() {
        return this.Pupil.availability
      },
      role() {
        return this.Pupil.role
      },
      pupilName() {
        return this.Pupil.firstName + " " + this.Pupil.lastName
      },
      lessons() {
        return this.Pupil.lessons
      },
      location() {
        return this.Pupil.location
      },

      numberOfLessons(){
        return this.Pupil.lessons.length
      },
      blockBookings() {

        return 10 - this.numberOfLessons
      }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      const url = '/pupil/' + this.pupilID;
      axios.get(url)
        .then(res => {

          console.log("This is the res");
          console.log(res);
          this.Pupil = res.data
        })
        .catch(error => console.log(error))
    },
  }
</script>

<style scoped>
  .availabilityDays {
    padding: 15px 10px;
  }

  .profileImage, .pupil-text {
    padding-top: 15px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
