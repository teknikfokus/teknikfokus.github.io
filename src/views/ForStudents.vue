<template>
  <div id="how-to">
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
  name: 'HowTo',
  components: {
  }
}
</script>

<style scoped>
#how-to {
  font-size: 1.05em;
}
.paragraph {
  margin-top: 1em;
  margin-bottom: 4em;
}

p {
  margin-bottom: 40px;
}

h3 {
  color: var(--primary);
}

h5, h4{
  color: var(--primary-dark)
}

.quote {
  color: var(--primary-dark);
  font-size: 1.2em;
}

.quote-text {
  font-style: italic;
  color: var(--primary);
  font-size: 1.4em;
}

.quote-block {
  color: var(--primary-darker);
}

.highlighted {
  font-weight: bold;
  color: darkred;
}

.headshot-wrapper {
  display: inline-block;
  float: left;
  width: 140px;
  height: 180px;
  margin: 20px;
  margin-left: 0;
  margin-top: 0;
}

.headshot {
  width: 140px;
  height: 168px;
  background: #888;
}

.headshot-wrapper .caption {
  width: 100%;
  text-align: center;
  font-size: 0.9em;
}
</style>