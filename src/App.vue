<template>
  <div id="app">
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