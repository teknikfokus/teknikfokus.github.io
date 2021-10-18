<template>
  <div id="for-companies">
    <div class="container pt-5">
      <div class="row text-center mb-3">
        <i class="d-block mx-auto fas fa-tools fa-3x"></i>
      </div>
      <div class="row text-center">
        <p class="d-block mx-auto">This site is being set up</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ForCompanies',
  components: {
  }
}
</script>


<style scoped>
p {
  margin-bottom: 40px;
}

h3 {
  color: var(--primary);
}

h5, h4 {
  color: var(--primary-dark)
}

.videos {
  margin-bottom: 40px;
  max-width: 750px;
  margin: auto;
}

.video {
  display: block;
  background: #222;
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0;

  margin-bottom: 50px;
}

.video iframe {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}
</style>