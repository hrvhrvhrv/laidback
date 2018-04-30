<template>
  <div class="container">
    <h1>Edit profile information for {{Pupil.contact.firstName}} {{Pupil.contact.lastName}}</h1>
    <p>This is to be used to register for lessons</p>
    <div>
      <form class="col-lg-6 " v-on:submit.prevent>
        <div class="form-group row">
          <label for="input-register-first-name" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-10">
            <input type="text" v-model="Pupil.contact.firstName" class="form-control" id="input-register-first-name"
                   placeholder="First name">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-last-name" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input type="text" v-model="Pupil.contact.lastName" class="form-control" id="input-register-last-name"
                   placeholder="Last name">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" v-model="Pupil.contact.email" class="form-control" id="input-register-email" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-phone-number" class="col-sm-2 col-form-label">Phone Number</label>
          <div class="col-sm-10">
            <input type="text" v-model="Pupil.contact.phoneNumber" class="form-control" id="input-register-phone-number"
                   placeholder="Phone number">
          </div>
        </div>
        <div class="form-group row">
          <label for="input--phone-number" class="col-sm-2 col-form-label">Location</label>
          <div class="col-sm-10">
            <input type="text" v-model="Pupil.registration.location" class="form-control" id="input--phone-number"
                   placeholder="Location">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-phone-number" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" v-model="Pupil.password" class="form-control" id="input-register-password"
                   placeholder="Password">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input v-model="Pupil.registration.provisional" class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label" for="gridCheck1">
                I have a provisional
              </label>
            </div>
            <div class="form-check">
              <input v-model="Pupil.registration.theoryTest" class="form-check-input" type="checkbox" id="gridCheck2">
              <label class="form-check-label" for="gridCheck2">
                I have passed my theory test
              </label>
            </div>
          </div>

        </div>
        <div class="form-group row">
          <label for="input-register-previous-lessons" class="col-sm-2 col-form-label">Previous lessons</label>
          <div class="col-sm-10">
            <input type="number" v-model="Pupil.registration.previousLessons" class="form-control" id="input-register-previous-lessons"
                   placeholder="number of previous lessons">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button class="btn  btn-success" @click="submit">Submit</button>
            <button class="btn  btn-danger" @click="cancel">Cancel</button>


          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        pupilID: this.$route.params.id,
        Pupil: [],
        errors: []

      }
    },
    methods: {
      submit() {
        const URL = '/pupil/' + this.pupilID;

        const formData = {
          firstName: this.Pupil.contact.firstName,
          lastName: this.Pupil.contact.lastName,
          email: this.Pupil.contact.email,
          phoneNumber: this.Pupil.contact.phoneNumber,
          // password: this.Pupil.password,
          // provisional: this.Pupil.registration.provisional,
          // theoryTest: this.Pupil.registration.theoryTest,
          // previousLessons: this.Pupil.registration.previousLessons
        };


        axios.put(URL , formData)
          .then(res => {
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/pupil/all')
          }).catch(error => console.log(error))
      },
      cancel() {
        this.$router.push('/pupil/' + this.pupilID)
      },
      deletePost() {
        const url = '/pupil/' + this.pupilID;
        axios.delete(url)
          .then(
            this.$router.push('/pupil/')
          )
          .catch(error => console.log(error))
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

</style>
