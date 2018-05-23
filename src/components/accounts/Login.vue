<template>


  <div class="login-bar-component">

    <form class="loginForm " @submit.prevent="">

      <div class="flex column">
        <div class="form-group row">
          <label for="input-register-first-name" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" v-model="email" class="form-control" id="input-register-first-name"
                   placeholder="Enter your email">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-last-name" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="text" v-model="password" class="form-control" id="input-register-last-name"
                   placeholder="Enter your password">
          </div>
        </div>

      </div>




    </form>

    <div class="tab-layout-small">
      <div class=" ">
        <div class="btn-base btn-submit" @click="submitForm" @keyup.enter="submitForm">
          Login
        </div>

        <!--<div class="btn-base btn-clear" @click="clear">-->
          <!--Clear form-->
        <!--</div>-->
      </div>

      <router-link

        class="btn-base  btn-clear"
        tag="p"
        to="/register"
      >
        Register
      </router-link>

    </div>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {},
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
            this.$router.push('/notthisOne')
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

  .tab-layout-small {
    width: 40%;
  }
</style>
