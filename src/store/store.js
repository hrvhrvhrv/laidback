import Vue from 'vue';
import Vuex from 'vuex';
import Blog from '../store/modules/Blog';

import actions from './actions.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        // stocks,
        Blog

    }
});



//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//
// })