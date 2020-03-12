<!-- Analyze App.vue -->

<template>
  <div id="app">
    <title>A Helping Hand</title>
    <h1>A Helping Hand</h1>

    <video width="960" height="540" controls>
      <source src="@/assets/circle_eval_demo.mp4" type="video/mp4">
    </video>

    <div class="file-upload-form" v-if="!imageData">
      Upload your photo:
      <input type="file" @change="previewImage" accept="image/*">
    </div>

    <div class="img-preview" v-if="imageData">
      <img class="preview" :src="imageData">
      <div>
        <button v-on:click="upload">Upload</button>
        <button v-on:cancel="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        imageData: "",
        uploaded: false
      }
    },
    methods: {
      previewImage: function(event) {
        var input = event.target;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = e => {
            this.imageData = e.target.result;
          }
          reader.readAsDataURL(input.files[0])
        }
      }
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

.file-upload-form, .image-preview {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 20px;
}

img.preview {
  width: 400px;
  background-color: white;
  border: 1px solid #DDD;
  padding: 5px;
}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
