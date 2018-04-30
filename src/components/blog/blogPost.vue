<template>
  <div>
<h1>{{BlogPosts.title}}</h1>
    <p>This is a blog Post text content {{postID}}</p>
    <p>{{BlogPosts.text}}</p>
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
  import axios from 'axios';

  export default {
    data() {
      return {
        postID: this.$route.params.id,
        BlogPosts: [],
        errors: []

      }
    },
    methods: {
      deletePost() {
        const url = '/blog/' + this.postID;
        axios.delete(url )
          .then(
            this.$router.push('/')
          )
          .catch(error => console.log(error))
      }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      const url = '/blog/' + this.postID;
      axios.get(url )
        .then(res => {

          console.log("This is the res");
          console.log(res);
          this.BlogPosts = res.data
        })
        .catch(error => console.log(error))
    },
  }
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
