<template>
  <div class="container">
    <div
      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
<div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">{{Pupil.contact.firstName}} {{Pupil.contact.lastName}}</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class=" col-md-9 col-lg-9 ">
              <table class="table table-user-information">
                <tbody>
                <tr>
                  <td>First Name:</td>
                  <td>{{Pupil.contact.firstName}}</td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>{{Pupil.contact.lastName}}</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>{{Pupil.password}}</td>
                </tr>


                <tr>
                  <td>Phone Number</td>
                  <td>{{Pupil.contact.phoneNumber}}</td>
                </tr>
                <tr>
                  <td>Home Address</td>
                  <td>{{Pupil.registration.location}}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="#">{{Pupil.email}}</a></td>
                </tr>
                <tr>
                  <td>Previous Lessons</td>
                  <td>{{Pupil.registration.previousLessons}}</td>

                </tr>
                <tr>
                  <td>Provisional licence</td>
                  <td>{{Pupil.registration.provisional}}</td>

                </tr>
                <tr>
                  <td>Theory Test</td>
                  <td>{{Pupil.registration.theoryTest}}</td>

                </tr>

                <tr>
                  <td>User Role</td>
                  <td>{{Pupil.role}}</td>

                </tr>
                <tr>
                  <td>_id</td>
                  <td>{{Pupil._id}}</td>

                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <router-link
            tag="button"
            class="btn btn-primary"
            :to="'/pupil/edit/' + $route.params.id"
          >
            Edit
          </router-link>
          <button class="btn btn-primary" @click="deletePost" >Delete</button>
        </div>

      </div>
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
      deletePost() {
        const url = '/pupil/' + this.pupilID;
        axios.delete(url)
          .then(
            this.$router.push('/')
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
  .user-row {
    margin-bottom: 14px;
  }

  .user-row:last-child {
    margin-bottom: 0;
  }

  .dropdown-user {
    margin: 13px 0;
    padding: 5px;
    height: 100%;
  }

  .dropdown-user:hover {
    cursor: pointer;
  }

  .table-user-information > tbody > tr {
    border-top: 1px solid rgb(221, 221, 221);
  }

  .table-user-information > tbody > tr:first-child {
    border-top: 0;
  }

  .table-user-information > tbody > tr > td {
    border-top: 0;
  }

  .toppad {
    margin-top: 20px;
  }

</style>
