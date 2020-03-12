<!-- Gallery App.vue -->

<template>
  <div id="app">
    <title>Gallery</title>
    <h1>Gallery of our Prosthetic Hands</h1>
    <img
        alt="hand pic2"
        src="@/assets/logo.jpg" width = 300 height = 200
     >
    
   <div class = "firsthand"><img src="@/assets/phoenixv2.jpg" width="600" height="400" alt="Phoenix V2" usemap="#phoenixmap">
    <map name="phoenixmap">
        <area shape="rect" coords="0,20,600,1000" href="https://www.thingiverse.com/thing:1674320">

        <p>This is the Phoenix V2 Prosthetic Hand. Please click on the image to be brought to the STL Files</p>
        <p>Our testing has returned the following output: </p>
        <p> FREEDOM OF MOVEMENT: 88/100 </p>
        <p> GRIP STRENGTH: 100 Newtons</p>
        <p> CIRCLE TEST ACCURACY: 98% </p>
    </map>
    </div>

    <div class = "secondhand"><img src="@/assets/Cyborg Beast.jpg" width="600" height="400" alt="Cyborg Beast" usemap="#cyborgmap">
    <map name="cyborgmap">
        <area shape="rect" coords="0,20,600,1000" href="https://www.thingiverse.com/thing:261462">

        <p>This is the Cyborg Beast Prosthetic Hand. Please click on the image to be brought to the STL Files</p>
        <p>Our testing has returned the following output: </p>
        <p> FREEDOM OF MOVEMENT: 66/100 </p>
        <p> GRIP STRENGTH: 40 Newtons</p>
        <p> CIRCLE TEST ACCURACY: 82%% </p>
    </map>
    </div>

    <div class = "thirdhand"><img src="@/assets/Osprey.jpg" width="600" height="400" alt="Osprey" usemap="#ospreymap">
    <map name="ospreymap">
        <area shape="rect" coords="0,20,600,1000" href="https://www.thingiverse.com/thing:910465">

        <p>This is the Osprey Prosthetic Hand. Please click on the image to be brought to the STL Files</p>
        <p>Our testing has returned the following output: </p>
        <p> FREEDOM OF MOVEMENT: 99/100 </p>
        <p> GRIP STRENGTH: 250 Newtons</p>
        <p> CIRCLE TEST ACCURACY: 100% </p>
    </map>

    </div>

    <div class = "fourthhand"><img src="@/assets/raptor.jpg" width="600" height="400" alt="raptor" usemap="#raptormap">
    <map name="raptormap">
        <area shape="rect" coords="0,20,600,1000" href="https://www.thingiverse.com/thing:596966">

        <p>This is the Raptor Prosthetic Hand. Please click on the image to be brought to the STL Files</p>
        <p>Our testing has returned the following output: </p>
        <p> FREEDOM OF MOVEMENT: 100/100 </p>
        <p> GRIP STRENGTH: 100 Newtons</p>
        <p> CIRCLE TEST ACCURACY: 100% </p>
    </map>

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