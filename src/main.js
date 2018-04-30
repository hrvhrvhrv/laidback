import Vue from "vue"
import Vuetify from"vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import { store } from './store/store'

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

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
