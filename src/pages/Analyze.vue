<!-- Analyze App.vue -->

<template>    
    <label class="uploadButton">
        Upload Image File
        <input id="image-file" type="file" @change="uploadImage"/>
    </label>
    <div v-if="image">
        <img :src="image">
    </div>
</template>


<script>
export default {
  data() {
    return {
      image: {},
    };
  },
  methods: {
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
          console.log(data);
        })
      );
    }
  }
};
</script>
