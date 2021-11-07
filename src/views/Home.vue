<template>
  <div id="home" class="container py-5">
    <div class="about-summary">
      <h4 class="text-2xl" >Teknikfokus</h4>
      <p>Teknikfokus is a career fair arranged by students in the E and D-guilds at Lunds Tekniska Högskola. The fair aims to connect students who study Computer Science and Engineering, Information and Communication Engineering, Electrical Engineering and Biomedical Engineering with companies in their fields of interest. In addition to the fair we provide opportunities for lunch lectures, evening events and student sessions.</p>
      <div class="d-block w-100 text-center mb-4 mt-4">
        <router-link class="btn link-button"  to="/events">Events</router-link>
      </div>
    </div>
    <div class="companies">
      <h4 class="text-2xl">Attending Companies</h4>
      <CompanyCarousel />
      <div class="text-center"><router-link class="btn link-button"  to="/companies">Full List of Companies</router-link></div>
    </div>
    <div class="info">
      <h4 class="text-2xl">Useful Info</h4>
      <div class="row mt-5 mb-5">
        <div class="col-6 col-md text-center">
          <i class="text-blue-primary far fa-calendar-alt fa-3x mb-2"></i>
          <div class="mb-3">When?</div>
          <div>16th & 17th of February, 2022!</div>
        </div>
        <div class="col-6 col-md text-center">
          <i class="text-blue-primary fas fa-map-marker-alt fa-3x mb-2"></i>
          <div class="mb-3">Where?</div>
          <div>The lobby in E-huset</div>
          <!-- <router-link to="/fair">The Fair</router-link> -->
        </div>
        <div class="col-6 col-md text-center">      
          <i class="text-blue-primary fas fa-question-circle fa-3x mb-3"></i><br>
          <router-link class="btn link-button"  to="/faq">FAQ</router-link>
        </div>
        <div class="col-6 col-md text-center">      
          <i class="text-blue-primary fas fa-users fa-3x mb-3"></i><br>
          <router-link class="btn link-button"  to="/about">The Team</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyCarousel from '@/components/CompanyCarousel.vue'

export default {
  name: 'Home',
  components: {
    CompanyCarousel
  }
}
</script>

<style scoped>
  #home > div {
    padding: 30px 0;
  }
</style>
