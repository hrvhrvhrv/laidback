import Home from './components/Layout/Home.vue';
import Blank from './components/Layout/BlankComponent.vue';


// blog component imports
import blog from "./components/blog/blog.vue";
import blogList from './components/blog/ListOfBlogPosts.vue'
import BlogPost from './components/blog/blogPost.vue';
import NewBlogPost from './components/blog/createBlog.vue';
import blogPostEdit from './components/blog/editBlog.vue';

// lesson components imports
import Lesson from './components/lesson/lesson.vue';

// pupil component imports
import Register from './components/accounts/Register.vue';
import AllPupils from './components/accounts/ViewAllPupils.vue';
import PupilProfile from './components/accounts/PupilProfile.vue';
import PupilProfileEdit from './components/accounts/PupilProfileEdit.vue';
import Login from './components/accounts/Login.vue';


// instructor component imports


export const routes = [
  {path: '/', component: Home},

  // Main site routes
  {path: '/getting-started', component: Blank},
  {path: '/price', component: Blank},
  {path: '/about-us', component: Blank},
  {path: '/contact', component: Blank},


  // Blog routes set with nested routing as children components / paths
  {path: '/blog', component: blog, children: [
      // the default for this route is to show the list of blog posts
      {path: '', component: blogList},
      // post/:id shows single specific blog post based on its id parameter passed in URL
      {path: 'post/:id', component: BlogPost},
      // /exit/id
      {path: 'post/edit/:id', component: blogPostEdit},
      {path: 'new', component: NewBlogPost}
    ]},


  //  Lesson routes
  {path: '/lesson', component: Lesson},
  {path: '/lesson/new', component: Lesson},
  // TODO lesson edit to have :id added to link to show what lesson needs to be edited
  {path: '/lesson/edit', component: Lesson},


  //  Accounts
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/instructor-homepage', component: Blank},
  {path: '/pupil-homepage', component: Blank},
  {path: '/pupil/all', component: AllPupils},
  {path: '/pupil/:id', component: PupilProfile},
  {path: '/pupil/edit/:id', component: PupilProfileEdit},
];
