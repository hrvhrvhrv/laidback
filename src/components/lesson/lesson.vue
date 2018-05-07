<template>
  <div class="container"><h1>Book a lesson with Laidback</h1>
    <p>This is to be used book lessons with the lesson</p>
    <h4>This page is not working at present</h4>
    <form class="col-lg-6 " v-on:submit.prevent>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Lesson Slot</label>
        <div class="col-sm-10">
          <input type="text" v-model="lessonSLot" class="form-control" id="" placeholder="First name">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Lesson Date</label>
        <div class="col-sm-10">
          <input type="date" v-model="lessonDate" class="form-control" >
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Location</label>
        <div class="col-sm-10">
          <input type="text" v-model="pickUpLocation" class="form-control" placeholder="Last name">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn  btn-success" @click="returnDate">Submit</button>
          <!--<button class="btn  btn-danger" @click="clear">Clear</button>-->
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        lessonSLot: 'to be lesson time data',
        lessonDate: '',
        pickUpLocation: 'to be map location input'
      }
    },
    methods: {
      returnDate() {
        console.log(this.lessonDate)
      }
    }
  }
</script>

<style scoped>

</style>
s
