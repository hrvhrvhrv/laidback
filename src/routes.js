import Home from './components/Layout/Home.vue';
import Blank from './components/Layout/BlankComponent.vue';
import VueRouter from 'vue-router'

import store from './store/store.js'

// blog component imports
import blog from "./components/blog/blog.vue";
import blogList from './components/blog/ListOfBlogPosts.vue'
import BlogPost from './components/blog/blogPost.vue';
import NewBlogPost from './components/blog/createBlog.vue';
import blogPostEdit from './components/blog/editBlog.vue';

// lesson components imports
import Lesson from './components/lesson/lesson.vue';
import NewLesson from './components/lesson/NewLesson.vue'
import AllLesson from './components/lesson/ViewAllLessons.vue';
import MontlyView from './components/lesson/MonthView.vue';

// pupil component imports
import Register from './components/accounts/Register.vue';
import AllPupils from './components/accounts/ViewAllPupils.vue';
import Applicant from './components/accounts/ApplicantPupils.vue';
import RegisteredProfile from './components/accounts/RegisteredProfile.vue';
import PupilProfile from './components/accounts/PupilProfile.vue';
import PupilProfileEdit from './components/accounts/PupilProfileEdit.vue';
import Login from './components/accounts/Login.vue';


// Instructor components
import InsturctorHomePage from './components/accounts/InstructorHomepage.vue';


// routes defined
export const routes = [
  {path: '/', component: Home},

  // Main site routes
  {path: '/getting-started', component: Blank},
  {path: '/price', component: Blank},
  {path: '/about-us', component: Blank},
  {path: '/contact', component: Blank},


  // Blog routes set with nested routing as children components / paths
  {
    path: '/blog', component: blog, children: [
      // the default for this route is to show the list of blog posts
      {path: '', component: blogList},
      // post/:id shows single specific blog post based on its id parameter passed in URL
      {path: 'post/:id', component: BlogPost},
      // /exit/id
      {path: 'post/edit/:id', component: blogPostEdit},
      {path: 'new', component: NewBlogPost}
    ]
  },


  //  Lesson routes
  {path: '/lesson/new/:id', component: NewLesson},
  {path: '/lesson/:id', component: Lesson},
  {path: '/allLessons', component: AllLesson, meta: {adminOnly: true, loggedInOnly: false}},
  // components to be developed with  for monthly, weekly and daily lessons
  {path: '/MonthlyLessons', component: MontlyView, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/WeeklyLessons', component: AllLesson, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/DailyLessons', component: Blank, meta: {adminOnly: true, loggedInOnly: false}},

  {path: '/lesson/new', component: Lesson},
  {path: '/lesson/edit', component: Lesson, meta: {adminOnly: true, loggedInOnly: false}},


  //  Accounts
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/instructorHomepage', component: InsturctorHomePage, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/pupilHomepage', component: Blank},


  // {path: '/pupil/all', component: AllPupils, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/pupil/all', component: AllPupils},
  {path: '/pupil/applicants', component: Applicant},
  {path: '/pupil/:id', component: PupilProfile},
  {path: '/pupil/reg/:id', component: RegisteredProfile},
  {path: '/pupil/edit/:id', component: PupilProfileEdit},
];

// export default new VueRouter({mode: 'history', routes})
