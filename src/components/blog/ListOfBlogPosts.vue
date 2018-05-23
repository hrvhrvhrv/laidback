<template>


  <!--<div class="page-wrapper col-md-8 offset-md-2">-->

  <!--<div class="blog-headline">-->
  <!--<h1>Laidback Driving School Blog-->
  <!--<hr>-->
  <!--</h1>-->
  <!--<p>Keep up to date with the latest news and information from Laidback driving school </p>-->
  <!--</div>-->

  <!--<div class="tab-layout-container">-->


  <!--<div class="tab-layout-small">-->
  <!--<h2>add a new post</h2>-->
  <!--<router-link-->
  <!--style="height: 75px;"-->
  <!--class="btn-base button1"-->
  <!--tag="div"-->
  <!--to="/blog/new">-->
  <!--<p>add post</p>-->
  <!--</router-link>-->


  <!--</div>-->

  <!--</div>-->

  <!--</div>-->

  <div>

    <div class="splash_header">
      <h1 class="title">Find out About Laidback</h1>
      <p>Fill in the form below to apply to be a pupil with laidback driving school.</p>
      <p>We will review your application and respond to you in one day</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">

        <h1>{{displayBlog.title}}</h1>
        <p>{{displayBlog.text}}</p>

      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Blog</h3>
        </header>

        <div class="images40_mainText_container">
          <div v-if="newBlogPostDiv">
            <!--<h1>New blog Post DIv</h1>-->
            <newBlogPost></newBlogPost>
          </div>
          <ul v-if="!newBlogPostDiv">
            <!--<router-link-->
            <!--v-for="(Post, id) of BlogPosts" class="blog-base "-->
            <!--tag="li"-->
            <!--:to="'/blog/post/' + Post._id"-->

            <!--:key="Post._id"-->
            <!--&gt;-->
            <!--<h2>{{Post.title}}</h2>-->
            <!--&lt;!&ndash;<img class="blogImg" src="../../assets/logo.png" alt="">&ndash;&gt;-->
            <!--<p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray">-->
            <!--Published {{Post.created | moment("Do MMMM YYYY")}}</p>-->
            <!--</router-link>-->
            <li
              v-for="(Post, id) of BlogPosts" class="blog-base "
              @click="showThisBlogPost(id)">
              <h2>{{Post.title}}</h2>
              <p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray">
                Published {{Post.created | moment("Do MMMM YYYY")}}</p>
            </li>
          </ul>


        </div>
        <footer class="fullWidth flex-row" v-if="whatRole === 'Admin'">
          <div
            @click=""
            class="btn_nextSection width30 backBtn"

          >
            <h2></h2>
          </div>
          <div
            class="btn_nextSection width70" @click=" newBlogPostDiv = !newBlogPostDiv"

          >
            <h2>New Blog Post</h2>
          </div>
        </footer>
      </div>

    </main>
  </div>
</template>

<script>
  // mapActions imported form Vuex module
  import {mapActions} from 'vuex';
  import newBlogPost from '../blog/createBlog.vue'

  export default {
    components: {
      newBlogPost
    },
    data() {
      return {
        formSection: 0,
        displayBlog: [],
        newBlogPostDiv: false
      }
    },
    computed: {
      BlogPosts() {
        return this.$store.getters.blogPosts;
      },
      whatRole() {
        return this.$store.getters.userRole
      }
    },
    methods: {
      showThisBlogPost(num) {

        this.displayBlog = this.$store.getters.blogPosts[num];
        console.log(num);
        console.log(this.$store.getters.blogPosts);


      },

      //  ES2015 ... is a spreader function, it spreads all in the methods called within the mapActions function of Vuex
      ...mapActions({
        fetchBlogPosts: 'loadAllBlog',
        removeSingleBlogPost: 'deleteBlogPost'
      }),

      deletePost(URL) {
        this.removeSingleBlogPost(URL).then(
          this.$router.push('/blog')
        )
      },

    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      this.fetchBlogPosts();
    }
  }

</script>

<style scoped>
  .row {
    flex-direction: row;
  }

  .tab-layout-small {
    width: 30%;
  }

  .tab-layout-large {
    width: 70%;
    justify-content: start;
  }
</style>
