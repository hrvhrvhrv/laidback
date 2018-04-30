<template>
  <div>
  <h1>This is an edit blog post component</h1>
    <form class="col-lg-6 " v-on:submit.prevent>
      <div class="form-group row">
        <label for="input-blog-title" class="col-sm-2 col-form-label">Blog Title</label>
        <div class="col-sm-10">
          <input type="text" v-model="BlogPosts.title"  class="form-control" id="input-blog-title" placeholder="Title">
        </div>
      </div>
      <div class="form-group row">
        <label for="input-blog-text" class="col-sm-2 col-form-label">Blog Text</label>
        <div class="col-sm-10">
          <textarea v-model="BlogPosts.text"  class="form-control" id="input-blog-text" rows="3" placeholder="Enter blog post here "></textarea>

        </div>
      </div>


      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn btn--round btn-primary" @click="submit" >Save Changes</button>
          <button class="btn btn--round btn-primary" @click="cancel" >Cancel</button>

        </div>
      </div>
    </form>


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
    submit() {
      const URL = '/blog/' + this.postID;


      axios.put(URL , this.BlogPosts)
        .then(res => {
          console.log(res);
          // this allows for redirecting to another page once code has been executed
          this.$router.push('/blog')
        }).catch(error => console.log(error))
    },
    cancel() {
      this.$router.push('/blog/post/' + this.postID)
    }
  },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      const url = '/blog/' + this.postID;
      axios.get(url)
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

</style>
