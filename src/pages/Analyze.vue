<!-- Analyze App.vue -->

<template>
    <div>
        <h1>A Helping Hand</h1>

        <img
        alt="hand pic2"
        src="@/assets/logo.jpg" width = 300 height = 200
     >

        <video width="960" height="540" controls>
        <source src="@/assets/circle_eval_demo.mp4" type="video/mp4">
        </video>
        
        <label class="uploadButton">
            Upload Image File
            <input id="image-file" type="file" @change="uploadImage"/>
        </label>
    </div>
     <!--div class="file-upload-form" v-if="!imageData">
      Upload your photo:
      <input type="file" @change="previewImage" accept="image/*">
    </div>

    <div class="img-preview" v-if="imageData">
      <img class="preview" :src="imageData">
      <div>
        <button v-on:click="upload">Upload</button>
        <button v-on:cancel="cancel">Cancel</button>
      </div>
    </div-->
</template>


<script>
export default {
  data() {
    return {
      imageData: "",
      uploaded: false,
      image: {}
    };
  },
  methods: {
    previewImage: function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    uploadImage(ev) {
      const file = ev.target.files[0];
      const formData = new FormData();
      formData.append("myFile", file);
      console.log(formData.get("myFile"));

      fetch("/api/uploadImage", {
        method: "POST",
        body: formData
      }).then(res =>
        res.blob().then(blobResponse => {
          this.image = blobResponse;
        })
      );
    }
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

.file-upload-form,
.image-preview {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 20px;
}

img.preview {
  width: 400px;
  background-color: white;
  border: 1px solid #ddd;
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
