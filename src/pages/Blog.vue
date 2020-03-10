<!-- Blog App.vue -->


<template>
  <div id="app">
    <title>Blog</title>
    <h1>Blog</h1>
    
   <div class = "firstpost"><img src="@/assets/hand1.jpg" width="600" height="400" alt="First Image">
   <div><p1 align = "left"> 
            <p>24/01/2020 </p> 
            <p align = "middle">Welcome to our Blog! We are A Helping Hand, 
            a Web Application for designers of Prosthetic Hands. </p>

            <p align = "middle">Our web application allows Designers to upload their 
            designs to our database, </p>
            <p align = "middle">and our application will rate them according to metrics we have decided are the most useful </p>
            <p align = "middle">In this image, you can see 3 of our Biomedical Engineers; Ryan Hosn, Anporo Zamoram, and Alex Alfemin.</p>
            <p align = "middle">They have successfully printed off our first Prosthetic Hand for testing. Tune in next week for more updates! </p>
            </p1></div>
   </div>

    

    <div class = "secondpost"><img src="@/assets/hand2.jpg" width="600" height="400" alt="Second Image">
    <div><p1 align = "left">
        <p>31/01/2020</p>
        <p align = "middle">In this week's update, we can see a prototype of one of the Prosthetic Hands we have been using for our development </p>
        <p align = "middle">As you can imagine, two of our Biomedical Science Students; Alex and Matthew, can be seen very joyously posing with </p>
        <p align = "middle">our first hand model. It has taken us a lot of time and effort to even get to this stage, so we are over the moon to see such positive results</p>


   
        </p1></div>
    </div>

    <div><img src="@/assets/luan&marek.jpg" width="600" height="400" alt="Third Image">
    <div><p1 align = "left">
        <p>07/02/2020</p>
   
        </p1></div>
    </div>
    

  <nav>
    <ul>

      <li>
        <a
          href="/"
        >
          Return
        </a>
       </li>
    </ul>
  </nav>
  </div>

</template>

<!--<template>
  <div id="app">
    <title>A Helping d</title>
    <h1>A Helping d</h1>
  </div>
</template> -->

<script>

export default {
  name: 'blog',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
