<template>
  <div class="container py-5">
    <div class="mx-auto max-w-2xl py-5">
      <div class="mx-auto bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
      <h4 class="text-2xl font-semibold">Teknikfokus raffle</h4>
      <p class="pb-3">If you are a student in one of the faculties make sure to follow us on our <a class="hover:text-white" href="https://www.instagram.com/teknikfokus/">Instagram</a> and sign up for our <a class="hover:text-white" href="https://www.instagram.com/p/CWu8ahore_k/">raffle</a> to win an Apple Watch series 7!</p>
      </div>
    </div>

    <div>
        <h3 class="text-center text-gray-800 text-3xl">Summer internship/Thesis project?</h3>
        <p class="text-center text-gray-600 text-xl">Sign up here for the opportunity to connect with companies.</p>
        <p class="text-center text-gray-400 text-xl">Applications will close on the 30th of January.</p>
        <CognitoformsStudents />
    </div>
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