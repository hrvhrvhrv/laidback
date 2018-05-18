<template>

  <div class="page-wrapper col-md-8 offset-md-2">

    <div class="blog-headline">
      <h1>Create a new blog post
        <hr>
      </h1>
      <p>Fill in a title then enter your text and click save to publish the blog post</p>
    </div>



  <form class="col-lg-6 " v-on:submit.prevent>
    <div class="form-group row">
      <label for="input-blog-title" class="col-sm-2 col-form-label">Blog Title</label>
      <div class="col-sm-10">
        <input type="text" v-model="title" class="form-control" id="input-blog-title" placeholder="Title">
      </div>
    </div>
    <div class="form-group row">
      <label for="input-blog-text" class="col-sm-2 col-form-label">Blog Text</label>
      <div class="col-sm-10">
        <textarea v-model="text" class="form-control" id="input-blog-text" rows="3"
                  placeholder="Enter blog post here "></textarea>

      </div>
    </div>


    <div class="form-group row">
      <div class="col-sm-10">
        <button class="btn btn--round btn-success" @click="submit">Save blog post</button>
        <button class="btn btn--round btn-danger" @click="">cancel</button>

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
        title: '',
        text: ''

      }
    },
    methods: {
      submit() {
        const blogPost = {
          title: this.title,
          text: this.text,
        };
        console.log(blogPost);
        axios.post('/blog/add', blogPost)
          .then(res => {
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/blog')
          }).catch(error => console.log(error))
      },
      clear() {

      }
    }
  }
</script>

<style scoped>

</style>
