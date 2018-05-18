<template>


  <div class="page-wrapper col-md-8 offset-md-2">
    <div class="blog-headline">
      <h1>Register as a pupil</h1>
      <hr>
    </div>
    <div class="tab-layout-container">
      <div class="tab-layout-large">


        <p>Complete the registration form and click submit and we will get back to you as soon as possible</p>

        <form class=" " v-on:submit.prevent>

          <!--firstName input container -->
          <div class="form-group" :class="{invalid: $v.firstName.$error}">
            <label for="input-register-first-name" class=" col-form-label">First Name</label>
            <input type="text"
                   id="input-register-first-name"
                   placeholder="Please enter your first name"
                   class="form-control"
                   v-model="firstName"
                   @blur="$v.firstName.$touch()"
            >
          </div>
          <!--lastName input container -->
          <div class="form-group" :class="{invalid: $v.lastName.$error}">
            <label for="input-register-last-name" class=" col-form-label">Last Name</label>
            <input type="text"
                   id="input-register-last-name"
                   placeholder="Please enter your last name"
                   class="form-control"
                   v-model="lastName"
                   @blur="$v.lastName.$touch()"
            >


          </div>
          <!--Email input container  -->
          <div class="form-group" :class="{invalid: $v.email.$error}">
            <label for="input-register-email" class=" col-form-label">Email</label>
            <input type="text"
                   id="input-register-email"
                   placeholder="Please enter your email"
                   class="form-control"
                   v-model="email"
                   @blur="$v.email.$touch()"
            >
            <p v-if="!$v.email.email">Please provide a valid email address.</p>
          </div>
          <!--phoneNumber input container  -->

          <div class="form-group" :class="{invalid: $v.phoneNumber.$error}">
            <label for="input-register-phone-number" class=" col-form-label">Phone Number</label>

            <input type="tel"
                   id="input-register-phone-number"
                   placeholder="Please enter your phone number"
                   class="form-control"
                   v-model="phoneNumber"
                   @blur="$v.phoneNumber.$touch()"
            >


            <p v-if="!$v.phoneNumber.numeric">Please provide a valid phone number</p>

          </div>
          <!--password input container  -->

          <div class="form-group" :class="{invalid: $v.password.$error}">
            <label for="input-register-password" class="col-form-label">Password</label>

            <input type="password"
                   id="input-register-password"
                   placeholder="Password"
                   class="form-control"
                   v-model="password"
                   @blur="$v.password.$touch()"
            >
            <p v-if="!$v.password.minLen">Password must be min of 6 characters long</p>

          </div>

          <!--password confirm input container  -->

          <div class="form-group" :class="{invalid: $v.passwordRepeat.$error}">
            <label for="input-register-password-confirm" class="col-form-label">Confirm Password</label>

            <input
              type="password"
              v-model="passwordRepeat" class="form-control" id="input-register-password-confirm"
              placeholder="Confirm assword"
              @blur="$v.passwordRepeat.$touch()"

            >

          </div>
          <div class="form-group ">
            <div class="">Checkbox</div>
            <div class="col-sm-10">
              <div class="form-check">
                <input v-model="provisional" class="form-check-input" type="checkbox" id="gridCheck1">
                <label class="form-check-label" for="gridCheck1">
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
          <div class="form-group">
            <label for="input-register-previous-lessons" class="col-form-label">How many previous lessons have you
              had?</label>

            <input type="number"
                   id="input-register-previous-lessons"
                   class="form-control"
                   v-model="previousLessons"
                   placeholder="number of previous lessons">

          </div>
          <div id='form-group'>
            <label for="input-register-previous-lessons" class="col-form-label">What days are you available for
              lessons?</label>
            <div>
              <input type="checkbox" id="Mon" value="Mon" v-model="availability">
              <label for="Mon">Mon</label>
              <input type="checkbox" id="Tue" value="Tue" v-model="availability">
              <label for="Tue">Tue</label>
              <input type="checkbox" id="Wed" value="Wed" v-model="availability">
              <label for="Wed">Wed</label>
              <input type="checkbox" id="Thur" value="Thur" v-model="availability">
              <label for="Thur">Thur</label>
              <input type="checkbox" id="Fri" value="Fri" v-model="availability">
              <label for="Fri">Fri</label>
              <input type="checkbox" id="Sat" value="Sat" v-model="availability">
              <label for="Sat">Sat</label>
            </div>
            <br>

          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Main pick up location</label>
            <div class="col-sm-10">
              <input type="text" v-model="location" class="form-control"
                     placeholder="number of previous lessons">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button class="btn  btn-success" @click.prevent="submit">Submit</button>

              <button class="btn  btn-danger" @click="clear">Clear</button>


            </div>
            <div v-if="errorMessages" class="invalid">
              <h4 v-for="(value, key) in errors">{{ value.message }}</h4>

            </div>
          </div>
        </form>


      </div>
      <div class="tab-layout-small">
        <h1>Contact Details</h1>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <h4>{{ email}}</h4>
        <h4>{{ phoneNumber }}</h4>
        <h1>Experience</h1>
        <h4>{{ provisional }}</h4>
        <h4>{{ theoryTest }}</h4>
        <h4>{{ previousLessons }}</h4>
        <h1>Lesson Info</h1>
        <h4>{{ availability }}</h4>

        <h4>{{ location }}</h4>


      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import {required, email, numeric, minLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    data: () => {
      return {
        errors: {},
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordRepeat: '',
        provisional: false,
        theoryTest: false,
        previousLessons: 0,
        location: '',
        availability: []
      }
    },
    computed: {
      errorMessages() {
        return true
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(6)
      },
      passwordRepeat: {
//        sameAs: sameAs('password')
        sameAs: sameAs(vm => {
          return vm.password
        })
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      phoneNumber: {
        required,
        numeric
      }
    },
    methods: {
      submit() {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          provisional: this.provisional,
          theoryTest: this.theoryTest,
          previousLessons: this.previousLessons,
          availability: this.availability,
          location: this.location
        };
        console.log(formData);
        axios.post('/account/register', formData)
          .then(res => {
            if (res.data.message) {
              // alert(res.data.message)
              //
              // this.snackbar = true;
              // this.text = res.data.message;
              this.errors = res.data.message;
            }
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/')
          }).catch(error => console.log(
          console.log(error.response.data.error),
          this.errors = error.response.data.error.errors
        ))
      },
      clear() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.password = "";
        this.provisional = false;
        this.availability = [];
      }
    }

  }


</script>

<style>

</style>


