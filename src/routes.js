import Home from './components/Home.vue';
import BlogPost from './components/blog/blogPost.vue';


export const routes = [
  {path: '/', component: Home},

  // Main site routes
  {path: '/getting-started', component: BlogPost},
  {path: '/about-us', component: BlogPost},
  {path: '/contact', component: BlogPost},


  // Blog routes
  {path: '/blog-post', component: BlogPost},
  {path: '/getting-started', component: BlogPost},

  //  Lesson routes


];
