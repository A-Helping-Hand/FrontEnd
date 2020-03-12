<!-- Home App.vue -->

<template>
<div>
    <img
      alt="hand pic"
      src="@/assets/logo.jpg" width = 400 height = 300
    >


    <title >A Helping Hand</title>
    <h1 style="font-size:50px">A Helping Hand</h1>

  

</div>
</template>




<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
