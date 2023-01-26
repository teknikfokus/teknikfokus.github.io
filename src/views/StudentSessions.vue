<template>
  <div id="Student-session" class="py-6 content-center"></div>
  <div class="flex flex-col mx-auto text-lg">
    <h1 class="mt-12 text-5xl text-center font-bold">About</h1>
    <h2 class="pt-5 text-center">
      A Student Session is a personal meeting with the company of your choice, and a chance for companies to get to know you. Prior to the fair students may upload CV:s and select which companies they would like to discuss future opportunities with. Companies may then ask for a personal meeting with students they find particularly interesting. The meetings will take place in group rooms at the first and second floors of E-huset during the days of the fair. Further information regarding the time of your meeting will be sent via email once all companies have selected their students to meet.
    </h2>
    <br>
    <h2 class="text-center font-bold">
      Application will close the 31/1!
    </h2>
    <a class="my-16 mx-auto text-white text-xl font-bold bg-blue-primary p-8 rounded-xl shadow-lg hover:bg-blue-primary-lightest" href="https://teknikfokus.karriardag.se/" target="_blank">
      <p class="no-underline">🫱‍🫲 Apply 🫱‍🫲</p>
    </a>

    <div class="filler xl:px-24">
      <router-view/>
    </div>
  </div>
</template>

<script>
import scroll_to_hash from '../router/scroll_to_hash'

export default {
    name: 'ForCompanies',
    mounted() {
      scroll_to_hash();
    }
  }
</script>

<style>
  .filler {
    min-height: calc(100vh - 929px);
  }
</style>
