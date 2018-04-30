<template>
    <div class="container">
      <h1>Login to your account</h1>
      <h4>This page is not working at present</h4>
      <form class="col-lg-6 " v-on:submit.prevent>
        <div class="form-group row">
          <label for="input-register-first-name" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" v-model="firstName"  class="form-control" id="input-register-first-name" placeholder="First name">
          </div>
        </div>
        <div class="form-group row">
          <label for="input-register-last-name" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="text" v-model="lastName" class="form-control" id="input-register-last-name" placeholder="Last name">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button class="btn  btn-success" @click="submit">Submit</button>
            <button class="btn  btn-danger" @click="clear">Clear</button>


          </div>
        </div>
      </form>
      <p>If you do not have an account click on the register link</p>
      <router-link

        class="btn btn-info  my-2 my-sm-0"
        tag="button"
        to="/register"
      >
        register
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
