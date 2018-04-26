import Vue from "vue"
import VueRouter from "vue-router";
import VueResourse from 'vue-resource';

import App from "./App.vue";
import { routes } from "./routes";
// import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResourse);

// Vue.http.options.root = 'https://vuejs-stock-trader-c7441.firebaseio.com/';

Vue.http.options.root = 'http://localhost:3005/v1/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});



const router = new VueRouter({
  mode: 'history',
  routes
  // ,
  // linkActiveClass: "active",
});

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
});
