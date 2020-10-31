<template>
  <div id="home" class="container py-5">
    <div class="about-summary">
      <h4>Teknikfokus</h4>
      <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consequatur voluptatem quaerat ut unde nobis rerum reprehenderit pariatur cupiditate aliquam nihil facere laboriosam, optio, minima similique in nisi sint. Culpa?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consequatur voluptatem quaerat ut unde nobis rerum reprehenderit pariatur cupiditate aliquam nihil facere laboriosam, optio, minima similique in nisi sint. Culpa?</p>
      <p></p>
    </div>

    <!-- WAITING FOR BACKEND TO SERVE COMPANIES
    <div class="companies">
      <h4>Attending Companies</h4>
      <CompanyCarousel></CompanyCarousel>
      <div class="text-center"><router-link class="btn link-button"  to="/companies">Companies</router-link></div>
    </div>
    -->
    <!--
    <div class="info">
      <h4>Useful Info</h4>
      <div class="row mt-5 mb-5">
        <div class="col text-center">
          <i class="far fa-calendar-alt fa-3x mb-2"></i>
          <div class="mb-3">When?</div>
          <div>17th of February, 2021!</div>
        </div>
        <div class="col text-center">
          <i class="fas fa-map-marker-alt fa-3x mb-2"></i>
          <div class="mb-3">Where?</div>
          <div>Completely Digital</div>
          <a href="#">The Fair</a> Link to Graduateland when that is set up 
        </div>
      </div>
      <div class="text-center"><router-link class="btn link-button" to="/events">Events</router-link></div>
    </div>
    -->

    <div class="questions">
      <h4>Any questions?</h4>
      <div class="row mt-4">
        <div class="col d-none  d-md-block"></div>
        <div class="col-4 col-md-3 text-center">      
          <i class="fas fa-question-circle fa-3x mb-3"></i><br>
          <router-link class="btn link-button"  to="/faq">FAQ</router-link>
        </div>
        <div class="col-4 col-md-3 text-center">      
          <i class="far fa-envelope fa-3x mb-3"></i><br>
          <router-link class="btn link-button"  to="/about">Contact Us</router-link>
        </div>
        <div class="col-4 col-md-3 text-center">      
          <i class="fas fa-users fa-3x mb-3"></i><br>
          <router-link class="btn link-button"  to="/about">The Team</router-link>
        </div>
        <div class="col d-none d-md-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import CompanyCarousel from '@/components/CompanyCarousel.vue'

export default {
  name: 'Home',
  components: {
    // CompanyCarousel
  }
}
</script>

<style scoped>
  #home > div {
    padding: 30px 0;
  }
</style>
