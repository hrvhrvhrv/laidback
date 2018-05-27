<template>


  <div class="login-bar-component">

    <form class="loginForm " @submit.prevent="">


        <div class="form-group row" :class="{invalid: $v.email.$error}">

            <input type="text" v-model="email" class="form-control" id="input-register-first-name"
                   placeholder="Enter your email" @blur="$v.email.$touch()"
            >
        </div>
        <div class="form-group row" :class="{invalid: $v.password.$error}">


            <input type="text" v-model="password" class="form-control" id="input-register-last-name"
                   placeholder="Enter your password" @blur="$v.password.$touch()"
            >

        </div>




<div v-if="error"><p v-for="msg in errors">{{msg}}</p></div>

    </form>

    <div class="tab-layout-small">
      <div class=" ">
        <button class="btn-base " @click="submitForm" @keyup.enter="submitForm">
          Login
        </button>
        <button class="btn-base " @click="submitForm" @keyup.enter="clear">
         Cancel
        </button>

      </div>

    </div>

  </div>


</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: '',
        password: '',
        errors:[]
      }
    },
    computed: {},
    validations: {
      email: {
        required,
        email
      },
      password: {
        required
      }
      },
    methods: {
      submitForm() {
        const formData = {
          email: this.email,
          password: this.password,
        };
        console.log(formData);
        this.$store.dispatch('login', {email: formData.email, password: formData.password}).then(([role, usedID]) => {

          if (role === 'Applicant') {
            console.log('Ive changed to applicant');
            this.$router.push('/NotRegistered')
          } else if (role === 'Admin') {
            this.$router.push('/instructorHomepage')
          } else if (role === 'Registered') {
            this.$router.push('/pupil/' + usedID)
          }


        });

      },
      clear() {
        this.email = '';
        this.password = ''
      }
    }

  }
</script>

<style scoped>
  .login-bar-component {
    display: flex;
    flex-direction: row;

  }

  .loginForm {
    width: 60%;
  }
  .form-group{
    margin: 0;
  }

  .tab-layout-small {
    width: 40%;
  }
</style>
