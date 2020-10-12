<template>
  <div id="main">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
      <div class="container position-relative">
        <a class="navbar-brand" href="/"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/companies">Companies</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/events">Event</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/FAQ">FAQ</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            </ul>
        </div>
        <router-link class="logo expand" to="/"><img src="@/assets/images/logo_white_on_black.png" class="d-inline-block align-top" alt="" loading="lazy"></router-link>
      </div>
    </nav>
  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>


<style scoped src="@/css/navbar.css"></style>
<style scoped src="@/css/footer.css"></style>
