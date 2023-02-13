<template>
  <div id="Student-session" class="scroll-smooth"></div>
  <div class="flex flex-col mx-auto text-lg py-6">
    <h1 class="mt-12 text-5xl text-center font-bold">About</h1>
    <p class="pt-4 text-center text-lg">
      A Student Session is a personal meeting with the company of your choice, and a chance for companies to get to know you. Prior to the fair students may upload CV:s and select which companies they would like to discuss future opportunities with. Companies may then ask for a personal meeting with students they find particularly interesting. The meetings will take place in group rooms at the first and second floors of E-huset during the days of the fair. Further information regarding the time of your meeting will be sent via email once all companies have selected their students to meet.
    </p>
    <br>
    <p class="text-center text-lg">
      Application for Student Sessions 2023 is closed as of the 31/1. The students who have been accepted by their company are now able to book a time with their chosen company at <a class="font-bold" target="_blank" href="https://teknikfokus.karriardag.se/">teknikfokus.karriardag.se</a>. This booking will close the <strong>13/2 at 18:59</strong>. Emails have also been sent out to all of the affected students. 
    </p>
    <br>
    <p class="text-center text-lg">
      For any questions or additional inquiries please contact <a class="font-bold" href="mailto:it@teknikfokus.se">it@teknikfokus.se</a>.
    </p>

    <h1 class="mt-12 text-5xl text-center font-bold">Schedule</h1>
    <div class="mx-auto mt-8 w-full bg-blue-200 rounded-2xl md:p-4 md:w-3/5">
      <table class="table-auto w-full">
        <thead class="bg-blue-300 text-center">
          <tr>
            <th class="md:px-2 py-1 rounded-l-lg">Company</th>
            <th class="md:px-2 py-1">Day</th>
            <th class="md:px-2 py-1 rounded-r-lg">Room</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-center">
          <tr>
            <td class="px-2 pt-2">Sandvine</td>
            <td class="px-2 pt-2">15th</td>
            <td class="px-2 pt-2">Knuth</td>
          </tr>
          <tr>
            <td class="px-2">Acconeer</td>
            <td class="px-2">15th</td>
            <td class="px-2">Rayleigh</td>
          </tr>
          <tr>
            <td class="px-2">Electrolux Professional AB</td>
            <td class="px-2">15th</td>
            <td class="px-2">Lamarr</td>
          </tr>
          <tr>
            <td class="px-2">Lime Technologies</td>
            <td class="px-2">15th</td>
            <td class="px-2">Lovelace</td>
          </tr>
          <tr>
            <td class="px-2">Neo4j</td>
            <td class="px-2">15th</td>
            <td class="px-2">Boole</td>
          </tr>
          <tr>
            <td class="px-2 pb-2">Arm</td>
            <td class="px-2 pb-2">15th</td>
            <td class="px-2 pb-2">Erlang</td>
          </tr>
          <tr>
            <td class="border-b-2 border-white"></td>
            <td class="border-b-2 border-white"></td>
            <td class="border-b-2 border-white"></td>
          </tr>
          <tr>
            <td class="px-2 pt-2">Sandvine</td>
            <td class="px-2 pt-2">16th</td>
            <td class="px-2 pt-2">Knuth</td>
          </tr>
          <tr>
            <td class="px-2">Robert Bosch Lund AB</td>
            <td class="px-2">16th</td>
            <td class="px-2">Lamarr</td>
          </tr>
          <tr>
            <td class="px-2 pb-2 md:pb-0">Triathlon Group</td>
            <td class="px-2 pb-2 md:pb-0">16th</td>
            <td class="px-2 pb-2 md:pb-0">Lovelace</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    

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
