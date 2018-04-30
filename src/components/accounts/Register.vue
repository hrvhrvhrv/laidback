<template>
  <div class="container">
    <h1>Register to be a pupil with Laidback</h1>
    <p>This is to be used to register for lessons</p>
  <div>
    <form class="col-lg-6 " v-on:submit.prevent>
      <div class="form-group row">
        <label for="input-register-first-name" class="col-sm-2 col-form-label">First Name</label>
        <div class="col-sm-10">
          <input type="text" v-model="firstName"  class="form-control" id="input-register-first-name" placeholder="First name">
        </div>
      </div>
      <div class="form-group row">
        <label for="input-register-last-name" class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-10">
          <input type="text" v-model="lastName" class="form-control" id="input-register-last-name" placeholder="Last name">
        </div>
      </div>
      <div class="form-group row">
        <label for="input-register-email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" v-model="email"  class="form-control" id="input-register-email" placeholder="Email">
        </div>
      </div>
      <div class="form-group row">
        <label for="input-register-phone-number" class="col-sm-2 col-form-label">Phone Number</label>
        <div class="col-sm-10">
          <input type="text" v-model="phoneNumber" class="form-control" id="input-register-phone-number" placeholder="Phone number">
        </div>
      </div><div class="form-group row">
        <label for="input-register-phone-number" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" v-model="password" class="form-control" id="input-register-password" placeholder="Password">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2">Checkbox</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input v-model="provisional" class="form-check-input" type="checkbox" id="gridCheck1">
            <label  class="form-check-label" for="gridCheck1">
              I have a provisional
            </label>
          </div>
          <div class="form-check">
            <input v-model="theoryTest" class="form-check-input" type="checkbox" id="gridCheck2">
            <label class="form-check-label" for="gridCheck2">
              I have passed my theory test
            </label>
          </div>
        </div>

      </div>
      <div class="form-group row">
        <label for="input-register-previous-lessons" class="col-sm-2 col-form-label">Previous lessons</label>
        <div class="col-sm-10">
          <input type="number" v-model="previousLessons" class="form-control" id="input-register-previous-lessons" placeholder="number of previous lessons">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn  btn-success" @click="submit">Submit</button>
          <button class="btn  btn-danger" @click="clear">Clear</button>


        </div>
      </div>
    </form>
    <!-- - - - - - - - - - - - - - - - -->

    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => {
      return {
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        text: 'Hello, I\'m a snackbar',


        // - - - - - - - -
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        provisional: false,
        theoryTest: false,
        previousLessons: 0,
        location: '',
        availability: []
      }
    },
    methods: {
      submit () {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          provisional: this.provisional,
          theoryTest: this.theoryTest,
          previousLessons: this.previousLessons
        };
        console.log(formData);
        axios.post('/pupil/add', formData)
          .then(res => {
            if(res.data.message){
                // alert(res.data.message)
            this.snackbar = true;
            this.text = res.data.message;
            }

            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/')
          }).catch( error => console.log(error))
      },
      clear() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.password = "";
        this.provisional = false
      }
    }

  }
</script>

<style >

</style>
