<template>


  <div class="page-wrapper col-md-8 offset-md-2">
    <div class="blog-headline">
      <h1>All booked lessons</h1>
    </div>

    <div class="tab-layout-container">
      <div class="tab-layout-small">
        <p>Select the date of a lesson</p>
        <v-date-picker

          :attributes='attributes'
          is-inline

          :theme-styles='themeStyles'

        >
          <!---->

          <!--&gt;-->
        </v-date-picker>
      </div>
      <div class="tab-layout-large">
        <div v-for="lessonData in lessons" class="Lesson-list-item flex-row no-wrap">
          <div class="imageWrapper">
            <div class="profileImage">
              <h3>{{lessonData.lessonSLot}}</h3>
              <p>{{lessonData.lessonDate | moment(" Do MMMM YYYY")}}</p>
            </div>
          </div>
          <!--<div class="text-container flex-column">-->
          <!--<h5 class="pupil-text ">{{Pupil.firstName}}</h5>-->
          <!--<p>{{Pupil.location}}</p>-->
          <!--</div>-->
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
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      const hSpacing = '14px';

      return {
        Pupils: [],
        errors: [],
        lessons: [],
        // lessonDatesArray: this.lessons.lessonDate,
        themeStyles: {
          wrapper: {
            // background: 'linear-gradient(to bottom right, #ff5050, #ff66b3)',
            color: '#4a4a4a',
            border: '0',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 6px 20px 0 rgba(0, 0, 0, 0.13)',
            borderRadius: '5px',
          },
          header: {
            padding: `20px ${hSpacing}`,
          },
          headerHorizontalDivider: {
            borderTop: 'solid rgba(255, 255, 255, 0.2) 1px',
            width: '80%',
          },
          weekdays: {
            color: '#d0021b', // New color
            fontWeight: '600', // And bolder font weight
            padding: `20px ${hSpacing} 5px ${hSpacing}`,
          },
          weeks: {
            padding: `10px ${hSpacing} ${hSpacing} ${hSpacing}`,

          },
          dayContent: {
            fontSize: '0.9rem',
            height: '40px', width: '40px'
          }, dayCellNotInMonth: {
            opacity: 0,
          }

        },
        attributes: [
          {
            // lesson slot early 8 - 11
            highlight: {
              backgroundColor: 'green', // Red dot
              color: 'white'
            },
            dates: [
              new Date(2018, 5, 1),           // Jan 1st
              new Date(2018, 5, 10),          // Jan 10th
              new Date(2018, 5, 22),          // Jan 22nd
              new Date(2018, 5, 6),           // Feb 6th
              new Date(2018, 5, 16),          // Feb 16th
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
      }
    },
    computed: {
// lessonDateData() {
//   return this.lessons.lessonDate
// }
      // role() {
      //   return this.Pupil.role
      // }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get('/lesson/')
        .then(res => {
          // JSON responses are automatically parsed
          console.log(res);
          this.lessons = res.data
        })
        .catch(error => console.log(error))
    },

  }
</script>

<style scoped>

</style>
