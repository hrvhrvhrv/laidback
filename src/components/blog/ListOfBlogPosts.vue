<template>


  <div class="page-wrapper col-md-8 offset-md-2">

    <div class="blog-headline">
      <h1>Laidback Driving School Blog
        <hr>
      </h1>
      <p>Keep up to date with the latest news and information from Laidback driving school </p>
    </div>

    <div class="tab-layout-container">
      <div class="tab-layout-large">
        <!--<h1>{{clickedBlogData.blogHeader}}</h1>-->
        <!--<p>{{clickedBlogData.blogBody}}</p>-->
        <!--<p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray">-->
          <!--{{clickedBlogData.blogDate | moment("Do MMMM YYYY")}}</p>-->


        <ul>
          <router-link
            v-for="(Post) of BlogPosts" class="blog-base "
            tag="li"
            :to="'/blog/post/' + Post._id"

            :key="Post._id"
          >

            <h2>{{Post.title}}</h2>
            <!--<img class="blogImg" src="../../assets/logo.png" alt="">-->
            <p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray">
              Published {{Post.created | moment("Do MMMM YYYY")}}</p>
          </router-link>

          <!--<li-->
          <!--v-for="(Post, id) of BlogPosts" class="blog-base "-->
          <!--tag="li"-->

          <!--@click="clickedBlog(Post.title, Post.text, Post.created)"-->

          <!--&gt;-->

          <!--<h2>{{Post.title}}</h2>-->
          <!--&lt;!&ndash;<img class="blogImg" src="../../assets/logo.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;<p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray; font-size: 50%">&ndash;&gt;-->
          <!--&lt;!&ndash;Published {{Post.created | moment("Do MMMM YYYY")}}</p>&ndash;&gt;-->
          <!--</li>-->


        </ul>
      </div>


      <div class="tab-layout-small">
<h2>add a new post</h2>
        <router-link
          style="height: 75px;"
        class="btn-base button1"
        tag="div"
        to="/blog/new">
        <p>add post</p>
        </router-link>




      </div>

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
