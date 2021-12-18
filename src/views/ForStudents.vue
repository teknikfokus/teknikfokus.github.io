<template>
  <div class="container py-5">
    <div class="row text-center mb-3">
        <i class="text-blue-primary d-block mx-auto fas fa-tools fa-3x mx-auto"></i>
      </div>
      <div class="row text-center pb-1"> 
        <p class="d-block mx-auto">This site is being set up.</p>
      </div>
    </div>
    <!-- <div class="mx-auto px-1 xl:px-0 grid grid-cols-1 xl:grid-cols-2 xl:max-w-5xl xl:gap-10 py-5 space-y-10 xl:space-y-0">
      <div class="mx-auto max-w-xl bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
        <h4 class="text-2xl">Student volunteer</h4>
        <div class ="text-gray-200">
          <p class="pb-3">Do you want to get in contact with companies whilst still being able to enjoy fun activities, meet lovely people from the two guilds and have free breakfast and lunch during the two fairdays. Then the position of student volunteer is just the thing for you! </p>
          <p class="pb-3">You will be able to meet the representatives of each company and also get to know other volunteers and coordinators from both the E- and the D-guild. After the fair is over there will also be an event as a thank you to all of the volunteers and coordinators that have helped making Teknikfokus happen</p>
          <p class="pb-3">Registrations are open until the 15/12 just follow the link below, information about the different types of posts can be found in the application as well.</p>
          
          <p><a class="hover:text-white" href="https://forms.gle/uHLUFTqWVD4WhQLL6">Apply to be a student volunteer here!</a></p>
        </div>
      </div>
      
      <div class="mx-auto max-w-xl bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
        <h4 class="text-2xl">Coordinator</h4>
        <div class="text-gray-200">
        <p class="pb-3">Du you think the position of student volunteer sounds like fun but you also feel like you are ready for a bit more responsibility, then the position of coordinator is for you!</p>
        <p class="pb-3">You will still be able to enjoy all the same perks as if you were a student volunteer whilst at the same time getting the opportunity to develop traits that will be highly valued later on when it’s time for you to start applying for jobs.</p>
        <p class="pb-3">Registrations are open until the 15/12 just follow the link below, information about the different types of coordinators can be found in the application as well. </p>
        <p><a class="hover:text-white" href="https://forms.gle/972okUNiaDMqNmk37">Apply to be a coordinator here!</a></p>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-center text-gray-800 text-3xl">Summer internship/Thesis project?</h3>
    <p class="text-center text-gray-600 text-xl">Sign up here for the opportunity to connect with companies.</p>
    <CognitoformsStudents />
  </div>
</template>

<script>
import CognitoformsStudents from '../components/CognitoformsStudents'
export default {
  name: 'HowTo',
  components: {
      CognitoformsStudents
  }
}
</script>