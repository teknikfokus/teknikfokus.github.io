<template>
  <div id="home" class="container py-5">
        <div class="companies">
          <h4 class="text-center text-2xl">Attending companies will be presented on the first of February!</h4>
        </div>
        <!-- <div class="companies">
            <h4 class="text-center text-2xl">Attending Companies</h4>
            <CompanyCarousel />
            <div class="text-center"><router-link class="font-bold px-3 py-2 rounded text-white bg-blue-primary hover:bg-blue-primary-lightest hover:no-underline" to="/companies">Full List of Companies</router-link></div>
        </div> -->
        <div class="mx-auto">
            <div class="bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
                <h4 class="text-2xl">Summer internship/Thesis project?</h4>
                <div class="text-gray-200">
                    <p class="mt-2">Don't miss the opportunity to connect with companies.</p>

                    <router-link class="mt-4 block" to="/how-to-teknikfokus">Apply here</router-link>
                </div>

                <img src="../assets/logo/svg/logo-white-no-text.svg" class="w-56 opacity-10 xl:opacity-50 absolute transform rotate-12 -right-8 -bottom-6" />
            </div>
        </div>
        <div class="mx-auto">
            <div class="text-center p-6 md:p-10 py-14 relative overflow-hidden">
                <h4 class="text-2xl">Win an Apple Watch  Series 7</h4>
                <div class="text-gray-800">
                    <p class="mt-2">To see how you can participate in our contest, visit our Instagram <a class="underline" href="https://www.instagram.com/p/CWu8ahore_k/" target="_blank">here</a></p>

                    <a href="https://www.instagram.com/p/CWu8ahore_k/" target="_blank">
                        <img class="w-80 mx-auto mt-4 inline-block" src="../assets/images/apple-watch.png" />
                    </a>
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
                  <div class="mb-3">Where</div>
                  <div>The fair will take place online. Visit this website on the 16th &amp; 17th of February to attend!</div>
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
