<!-- About App.vue -->


<template>
  <div id="app">
    <title>A Helping Hand</title>
    <h1>A Helping Hand</h1>
    
      <img
        alt="hand pic2"
        src="@/assets/logo.jpg" width = 300 height = 200
     >
    <p style="font-size:30px">Hello and Welcome. We are A Helping Hand.</p>
    <p style="font-size:20px"> We are developing a platform for design engineers, clinicians, and humanitarians </p>
    <p style="font-size:20px"> who are designing and 3D printing prosthetic hands for amputees in the developing world </p>
    <p style="font-size:20px">Our user, the design engineer, will be able to view hand designs, </p>
    <p style="font-size:20px">view feedback on designs they've printed, and compare hands against a benchmark we have provided </p>
    <br>
    <p style="font-size:30px">MEET THE TEAM: </p>


    <div class="row">
      <div class="column">
        <div class="card">
          <img src="@/assets/luan.jpg" alt="Luan" style="width:20%">
          <div class="container">
          <h2>Luan Williams</h2>
          <p class="title">CEO &amp; Founder</p>
          <p>Leader, Master, Head Huncho, whatever you want to call me</p>
          <p>willialu@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/paolo.jpg" alt="Paolo" style="width:20%">
          <div class="container">
          <h2>Paolo Moloney</h2>
          <p class="title">Mr. Visionary</p>
          <p>He is the man that can see all. Perfect 2020 Vision.</p>
          <p>molonepa@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/Anporo.jpg" alt="Anporo" style="width:30%">
          <div class="container">
          <h2>Amparo Zamora Mogollo</h2>
          <p class="title">Madam Video</p>
          <p>Amparo is an expert of videos, and makes for a perfect voice over</p>
          <p>zamorama@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/Alex.jpg" alt="Alex" style="width:15%">
          <div class="container">
          <h2>Alex Fleming</h2>
          <p class="title">Biomedical Leader</p>
          <p>Alex is in charge of the Biomedical Engineers. She is both a leader and a follower</p>
          <p>alflemin@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/Matthew.jpg" alt="Matthew" style="width:11%">
          <div class="container">
          <h2>Matthew Cullen</h2>
          <p class="title">Scrum Master</p>
          <p>Loves getting knee-deep in a Good Scrum.</p>
          <p>mcullen8@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/ryan.jpg" alt="ryan" style="width:20%">
          <div class="container">
          <h2>Ryan Hosn</h2>
          <p class="title">The Artist</p>
          <p>He is the modern day Picasso, Michaelangelo, Da Vinci, and Pat Kenny all in one</p>
          <p>hosnr@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/chihun.jpg" alt="chihun" style="width:20%">
          <div class="container">
          <h2>Chihun Lee</h2>
          <p class="title">The Back End</p>
          <p>A master of all back-ends</p>
          <p>clee1@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

  <div class="column">
      <div class="card">
        <img src="@/assets/luan&marek.jpg" alt="marek" style="width:15%">
          <div class="container">
          <h2>Marek Betka</h2>
          <p class="title">Server Guy</p>
          <p>Makes sure everything exists, and makes sense.</p>
          <p>marek@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="@/assets/Mary.jpg" alt="Mary" style="width:20%">
          <div class="container">
          <h2>Mary McDonald</h2>
          <p class="title">Ms. Front-End</p>
          <p>The boss of the front, doesn't like quitters.</p>
          <p>mcdonam7@tcd.ie</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>


   


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
  name: 'about',
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
.column {
    float: left;
    width: 50%;
    margin-bottom: 100px;
    padding: 0 0px;
  }

  /* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }

  /* Add some shadows to create a card effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
}
</style>
