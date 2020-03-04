<!-- Home App.vue -->

<template>
<div>
    <img
      alt="hand pic"
      src="@/assets/hand.png"
    >


    <title>A Helping Hand</title>
    <h1>A Helping Hand</h1>

  

  <nav>
    <ul>
      <li>Go to</li>

      <li>
        <router-link to="/about">
          About Us
        </router-link>
       </li>
       <li>
        <router-link to="/blog">
          Our Blog
        </router-link>
       </li>
    </ul>
  </nav>
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
