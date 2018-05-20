<template>
  <div>


      <div class="blog-headline">
        <h1>Book a lesson</h1>
        <hr>


        <p v-if="lessonDate !== '' ">{{ lessonDate | moment("dddd, MMMM Do YYYY") }} - {{lessonSLot}} -
          {{pickUpLocation}}</p>
      </div>

      <div class="tab-layout-container">
        <div class="tab-layout-small">

          <p>Select the date of a lesson</p>
          <v-date-picker
            :disabled-dates='{ weekdays: [1] }'
            v-model='lessonDate'
            is-inline
            :min-date='new Date()'
          >

          </v-date-picker>

        </div>
        <div class="tab-layout-large">
          <form class=" " @submit.prevent="onSubmit">
            <div class="form-group"><!--<form  v-on:submit.prevent>-->
              <div class="col-sm-10 form-group row">
                <label class="col-form-label">Select the time of a lesson</label>
                <select v-model="lessonSLot" class="form-control form-control-lg">
                  <option>8am</option>
                  <option>11am</option>
                  <option>2pm</option>
                </select>

              </div>
            </div>
            <div class="form-group">

              <div class="col-sm-10 form-group row">



                  <label class="col-form-label">Select the pick up location of the lesson</label>
                  <input type="text" v-model="pickUpLocation" class="form-control" placeholder="Location">

              </div>
            </div>
            <div class="form-group row justify-space-around">
              <div class="flex-row">
                <div class="btn-base btn-submit" @click="submit">
                  Submit
                </div>

                <div class="btn-base btn-clear" @click="clear">
                  Clear form
                </div>
              </div>

            </div>


          </form>

        </div>

      </div>

    </div>


</template>

<script>
  import axios from 'axios';

  export default {
    props: [],
    data() {
      return {

        // - - - - - -
        lessonSLot: '',
        lessonSlotPresets: ['morning', 'late morning', 'afternoon'],
        lessonDate: new Date(),
        pickUpLocation: '',
        pupilID: this.$route.params.id,
        attributes: [
          {
            // lesson slot early 8 - 11
            highlight: {
              backgroundColor: 'green', // Red dot
              color: 'white'
            },
            dates: [
              new Date(2018, 0, 1),           // Jan 1st
              new Date(2018, 0, 10),          // Jan 10th
              new Date(2018, 0, 22),          // Jan 22nd
              new Date(2018, 1, 6),           // Feb 6th
              new Date(2018, 1, 16),          // Feb 16th
            ],
          },
          {
            // lesson slot mid morning 11 - 1
            bar: {
              backgroundColor: '#398fac', // Turquoise dot
            },
            dates: [
              new Date(2018, 0, 4),           // Jan 4th
              new Date(2018, 0, 10),          // Jan 10th
              new Date(2018, 0, 15),          // Jan 15th
              new Date(2018, 1, 1),           // Feb 1st
              new Date(2018, 1, 12),          // Feb 12th
              {
                start: new Date(2018, 1, 20), // Feb 20th
                end: new Date(2018, 1, 25),   // - Feb 25th
              },
            ],
          },
          {
            dot: {
              // lesson slot mid morning 2 - 5
              backgroundColor: '#794dff',     // Purple dot
            },
            dates: [
              new Date(2018, 0, 12),          // Jan 12th
              new Date(2018, 0, 26),          // Jan 26th
              new Date(2018, 0, 15),          // Jan 15th
              new Date(2018, 1, 5),           // Feb 5th
              new Date(2018, 1, 6),           // Feb 6th
              new Date(2018, 1, 9),           // Feb 9th
              new Date(2018, 1, 20),          // Feb 20th
              new Date(2018, 1, 25),          // Feb 25th
            ],
          },
        ],
      };
    }

    ,
    methods: {
      returnDate() {
        console.log(this.lessonDate)
      }
      ,
      submit() {
        const formData = {
          lessonSLot: this.lessonSLot,
          lessonDate: this.lessonDate,
          pickUpLocation: this.pickUpLocation,
          pupilID: this.pupilID
        };
        const URL = '/pupil/lesson/add/' + this.pupilID;
        console.log(formData);
        axios.post(URL, formData)
          .then(res => {
            if (res.data.message) {
              alert(res.data.message)
              // this.snackbar = true;
              // this.text = res.data.message;
            }

            console.log(res);
            // this allows for redirecting to another page once code has been executed
            // this.$router.go();
          }).catch(error => console.log(error))
      }
      ,
      clear() {
        this.lessonSLot = "";
        this.lessonDate = new Date();
        this.pickUpLocation = "";
      }
    }
  }
</script>

<style scoped>

</style>
