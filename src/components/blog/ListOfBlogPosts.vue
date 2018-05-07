<template>
  <div class="row justify-content-around">
    <div class="list-group col-lg-6 col-lg-offset-2">
      <h1>Laidback blog</h1>
      <router-link
        v-for="(Post,id) of BlogPosts"
        tag="a"
        :to="'/blog/post/' + Post._id"
        class="list-group-item list-group-item-action"
        :key="Post.id"
      >
      <!--<button @click="deletePost(Post._id)">Delete</button>  -->
        <h4>{{Post.title}}</h4>

      </router-link>
    </div>
  </div>


</template>

<script>
  // mapActions imported form Vuex module
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
      }
    },
    computed: {
        BlogPosts() {
          return this.$store.getters.blogPosts;
        }
    },
    methods: {
      //  ES2015 ... is a spreader function, it spreads all in the methods called within the mapActions function of Vuex
      ...mapActions({
        fetchBlogPosts: 'loadAllBlog',
        removeSingleBlogPost: 'deleteBlogPost'
      }),

      deletePost(URL) {
        this.removeSingleBlogPost(URL).then(
          this.$router.push('/blog')
        )
      }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
      created() {
       this.fetchBlogPosts();
      }
  }

</script>

<style scoped>

</style>
