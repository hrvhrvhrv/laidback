import Home from './components/Home.vue';
import BlogPost from'./components/blog/blogPost.vue';




export const routes = [
    { path: '/', component: Home  },
    { path: '/blog-post', component: BlogPost  },
    { path: '/getting-started', component: BlogPost  },

];
