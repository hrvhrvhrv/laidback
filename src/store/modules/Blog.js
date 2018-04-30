import axios from "axios/index";


const state = {
  blogPosts: []
};

const mutations = {
  'SET_BLOG_POSTS' (state, blogPosts) {
    state.blogPosts = blogPosts;
  },
  // 'RND_STOCKS' (state) {
  //   state.stocks.forEach(stock => {
  //     stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
  //   });
  // }
};

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  },
  loadBlogPosts: ({commit}) => {
    axios.get('/blog/')
      .then(res => {
        if (res) {
          const blogs = res.data;
          // console.log('this is from Actions JS');
          // console.log(blogs);
          commit('SET_BLOG_POSTS', blogs);
        }
      })
      .catch(error => console.log(error))

  }
};

const getters = {
  blogPosts: state => {
    return state.blogPosts;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
