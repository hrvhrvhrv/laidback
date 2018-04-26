<template>
    <div class="col-md-10 col-md-offset-1 text-center splash">
        <h1 class="">Stock Trader App</h1>
        <p>Buy and sell stocks and make your fortune!</p>
        <p>Click on end day to begin a New Day!</p>
        <hr>
        <!--<p>Your Funds: {{ funds }}</p>-->
        <router-link
                tag="p"
                to="/blog-post"
        >
            <a class="btn btn-danger btn-lg" href="#" role="button">Lets get started</a>
        </router-link>
    </div>
</template>

<script>
    export default {
        computed: {
            // funds() {
            //     return this.$store.getters.funds;
            // }
        }
    }
</script>

<style>
    .splash {
        background: aliceblue;
        padding: 30px;
        border-radius: 25px;
    }
</style>
