<template>
  <div id="home" class="container py-5">
        <div class="mx-auto">
            <div class="bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
                <h4 class="text-2xl">Get your company on the list before it is full</h4>
                <div class="text-gray-200">
                    <p class="mt-2">We are currently in the process of assigning spots to companies and they are limited.</p> 
                    <p>Don't miss the chance to secure your spot for Teknikfokus 2022!</p>

                    <p class="mt-2">Contact us at <a href="mailto:relations@teknikfokus.se" class="underline">relations@teknikfokus.se</a></p>
                </div>

                <img src="../assets/logo/svg/logo-white-no-text.svg" class="w-56 opacity-10 xl:opacity-50 absolute transform rotate-12 -right-8 -bottom-6" />
            </div>
        </div>
        <div class="container md:flex md:flex-row-reverse items-center space-y-5 md:space-y-0">
            <div class="md:w-1/3 mx-auto flex space-x-4 text-center justify-center">
                <div class="w-1/2">
                    <i class="text-blue-primary far fa-calendar-alt fa-3x mb-2"></i>
                    <div class="mb-3">When?</div>
                    <div>16th &amp; 17th of February, 2022!</div>
                </div>
                <div class="w-1/2">
                  <i class="text-blue-primary fas fa-map-marker-alt fa-3x mb-2"></i>
                  <a class="hover:text-blue-primary-light" href="https://goo.gl/maps/kU2kfAceWzGVAfy97">
                    <div class="mb-3">Where?</div>
                    <div>The lobby in E-huset</div>
                    <div>Ole Römers väg 3,<br> 223 63 Lund</div>
                  </a>
                </div>
            </div>
            <div class="md:w-1/2 space-y-2">
                <h4 class="text-2xl">Teknikfokus</h4>
                <p>Teknikfokus is a career fair arranged by students in the E and D-guilds at Lunds Tekniska Högskola.</p>
                <p>The fair aims to connect students who study Computer Science and Engineering, Information and Communication Engineering, Electrical Engineering and Biomedical Engineering with companies in their fields of interest.</p>
                <p>In addition to the fair we provide opportunities for lunch lectures, evening events and student sessions.</p>
            </div>
        </div>
    <!--<div class="about-summary">
      <div class="d-block w-100 text-center mb-4 mt-4">
        <router-link class="btn link-button"  to="/events">Events</router-link>
      </div>
    </div>
    <div class="companies">
      <h4 class="text-2xl">Attending Companies</h4>
      <CompanyCarousel />
      <div class="text-center"><router-link class="btn link-button"  to="/companies">Full List of Companies</router-link></div>
    </div>-->
  </div>
</template>

<script>
//import CompanyCarousel from '@/components/CompanyCarousel.vue'

export default {
  name: 'Home',
  components: {
    //CompanyCarousel
  }
}
</script>

<style scoped>
  #home > div {
    padding: 30px 0;
  }
</style>
