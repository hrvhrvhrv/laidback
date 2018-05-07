<template>
  <div>
<h1>{{SingleBlogPost.title}}</h1>
    <p>This is a blog Post text content {{postID}}</p>
    <p>{{SingleBlogPost.text}}</p>
<router-link
tag="button"
class="btn btn-primary"
:to="'/blog/post/edit/' + $route.params.id"
>
  Edit
</router-link>
    <button class="btn btn-primary" @click="deletePost" >Delete</button>



  </div>


</template>

<script>
  // import axios from 'axios';
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        postID: this.$route.params.id,
        errors: []
      }
    },
    computed: {
      SingleBlogPost() {
        return this.$store.getters.singleBlogPost;
      },
      apiURL () {
        return '/blog/' + this.postID;
      }

    },
    methods: {
      ...mapActions({
        FetchBlogPost: 'loadSingleBlogPost',
        removeSingleBlogPost: 'deleteBlogPost'
      }),

      deletePost() {
        this.removeSingleBlogPost(this.apiURL).then(
          this.$router.push('/')
        )
      }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      this.FetchBlogPost(this.apiURL)
    },
  }
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
