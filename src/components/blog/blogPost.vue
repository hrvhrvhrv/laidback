<template>
  <div>

    <div class="page-wrapper col-md-8 offset-md-2">
      <div class="blog-headline">
        <h1>{{SingleBlogPost.title}}

        </h1>
        <hr>

      </div>
      <div class="tab-layout-container">

        <div class="tab-layout-large">

          <p>{{SingleBlogPost.text}}</p>
        </div>
        <div class="tab-layout-small">
          <p>Published {{SingleBlogPost.created | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
          <h2>Blog Controls</h2>
          <div class="row">
            <!--<router-link-->
            <!--style="height: 75px;"-->
            <!--class="btn-base button1"-->
            <!--tag="button"-->
            <!--to="/blog/new">-->
            <!--<p>add post</p>-->
            <!--</router-link>-->


            <router-link
              tag="div"
              style="height: 75px;"
              class="btn-base button1"
              :to="'/blog/post/edit/' + $route.params.id"
            >
              Edit
            </router-link>
            <div class="btn-base button1" @click="deletePost">Delete</div>
          </div>

        </div>

      </div>

    </div>

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
      apiURL() {
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
  .blogPost-wrap {
    text-align: left;
    min-height: 40vh;
    padding: 15px;
  }
</style>
