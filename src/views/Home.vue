<template>
  <div id="home" class="container py-5">
        <div class="mx-auto text-center p-6 md:p-10 py-14 relative overflow-hidden">
            <img src="../assets/logo/svg/logo-white-no-text.svg" class="w-56 opacity-10 xl:opacity-50 absolute transform rotate-12 -right-8 -bottom-6" />
        </div>
        <div class="container md:flex md:flex-row-reverse items-center space-y-5 md:space-y-0">
            <div class="md:w-1/3 mx-auto flex space-x-4 text-center justify-center">
                <div class="w-1/2">
                    <i class="text-blue-primary far fa-calendar-alt fa-3x mb-2"></i>
                    <div class="mb-3">When?</div>
                    <div>15th &amp; 16th of February, 2023!</div>
                </div>
                <div class="w-1/2">
                  <i class="text-blue-primary fas fa-map-marker-alt fa-3x mb-2"></i>
                  <div class="mb-3">Where?</div>
                  <a href="https://goo.gl/maps/SvAD9hk5H9JR7mnA9" target="_blank">
                  <p>E-huset LTH Ole Römers väg 3</p>
                  </a>
                </div>
            </div>
            <div class="md:w-1/2 space-y-2">
                <h4 class="text-2xl">Teknikfokus</h4>
                <p>Teknikfokus is a career fair arranged by students in the E and D-faculties at Lunds Tekniska Högskola.</p>
                <p>The fair aims to connect students who study Computer Science and Engineering, Information and Communication Engineering, Electrical Engineering and Biomedical Engineering with companies in their fields of interest.</p>
                <p>In addition to the fair we provide opportunities for lunch lectures, evening events and student sessions.</p>
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
