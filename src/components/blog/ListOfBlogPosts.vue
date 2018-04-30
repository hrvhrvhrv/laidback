<template>
  <!--<ul>-->
  <!--<li v-for="(Post,id) in BlogPosts">-->

  <!--<h1>{{Post.title}} </h1>-->
  <!--<p>{{Post.text}}</p>-->
  <!--<p>v-for id = {{id}}</p>-->
  <!--<router-link-->
  <!--class="btn btn-success my-2 my-sm-0"-->
  <!--tag="button"-->
  <!--:to="'blog/post/' + Post._id"-->
  <!--&gt;-->
  <!--View Blog Post-->
  <!--</router-link>-->
  <!--</li>-->
  <!--<hr>-->
  <!--<router-link-->
  <!--class="btn btn-success my-2 my-sm-0"-->
  <!--tag="button"-->
  <!--to="blog/new"-->
  <!--&gt;-->
  <!--New Blog Post-->
  <!--</router-link>-->
  <!--</ul>-->

  <div class="row justify-content-around">


    <div class="list-group col-lg-6 col-lg-offset-2">
      <h1>Laidback blog</h1>


      <router-link
        v-for="(Post,id) in BlogPosts"
        tag="a"
        :to="'/blog/post/' + Post._id"
        class="list-group-item list-group-item-action"
        :key="Post.id"
      >

        <h4>{{Post.title}}</h4></router-link>

    </div>
  </div>


</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        BlogPosts: [],
        errors: []
      }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get('/blog/')
        .then(res => {
          console.log(res);
          this.BlogPosts = res.data
        })
        .catch(error => console.log(error))
    },
  }
</script>

<style scoped>

</style>
