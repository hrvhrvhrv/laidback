import Vue from "vue"
import Vuetify from"vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import store  from './store/store.js'

import 'vuetify/dist/vuetify.min.css'

import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

Vue.use(Vuetify);

// Vue.http.options.root = 'https://vuejs-stock-trader-c7441.firebaseio.com/';
// Vue.http.options.root = 'http://localhost:3005/v1/';

axios.defaults.baseURL = 'http://localhost:3005/v1';


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});



const router = new VueRouter({
  mode: 'history',
  routes
  ,
  linkActiveClass: "active"
});


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.adminOnly)) {
//     //  need to be ale to check the state or could check local storafge
//     const enter = localStorage.getItem('token');
//     if ( enter) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next();
//   }
//
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.adminOnly)) {
    //  need to be ale to check the state or could check local storafge
    const enter = localStorage.getItem('token');
    if ( enter) {
      next()
    } else {
      next('/login')
    }
  } else if (to.matched.some(record => record.meta.loggedInOnly)) {
//  need to be ale to check the state or could check local storafge
    const enter = localStorage.getItem('token');
    if ( enter) {
      next()
    } else {
      next('/login')
    }
  } else {
    next();
  }

});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
