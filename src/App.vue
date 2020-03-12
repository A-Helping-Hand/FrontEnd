<template>
  <div id="app">
    
    <b-navbar fixed-top type="is-black" shadow>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
        </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="gallery">
                Hand Gallery
            </b-navbar-item>
            <b-navbar-item href="analyze">
                Analyze
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="about">
                  About Us
                </b-navbar-item>
                <b-navbar-item href="blog">
                  Blog
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <!--template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
<a class="button is-primary">
    <strong>Sign up</strong>
</a>
<a class="button is-light">
    Log in
</a>
                </div>
            </b-navbar-item>
        </template-->
    </b-navbar>
  
  <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
         publicPath: process.env.BASE_URL
    };
  },
  methods: {
    
  }
};
</script>

<style>


</style>