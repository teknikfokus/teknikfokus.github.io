<template>
  <div id="Student-session" class="scroll-smooth"></div>
  <div class="flex flex-col  container mx-auto text-lg py-6">
    <h1 class="mt-12 text-5xl text-center font-bold">About</h1>
    <p class="pt-4 text-center  text-lg">
      A Student Session is a personal meeting with the company of your choice, and a chance for companies to get to know
      you. Prior to the fair students may upload CV:s and select which companies they would like to discuss future
      opportunities with. Companies may then ask for a personal meeting with students they find particularly interesting.
      The meetings will take place in group rooms at the first and second floors of E-huset during the days of the fair.
      Further information regarding the time of your meeting will be sent via email once all companies have selected their
      students to meet.
    </p>
    <br>
    <!-- <p class="text-center text-lg">
      Applications for student sessions are coming soon!
    </p> -->
    <h2 class="text-center font-bold">
      Click the button to access our Student Sessions portal! Remember, applications close on 6/2!
    </h2>
    <a class="my-16 mx-auto text-white text-xl font-bold bg-blue-primary p-8 rounded-xl shadow-lg hover:bg-blue-primary-lightest"
      href="https://teknikfokus.karriardag.se/" target="_blank">
      <p class="no-underline"> Apply </p>
    </a>

    <br>
    <p class="text-center text-lg">
      For any questions or additional inquiries please contact <a class="font-bold"
        href="mailto:it@teknikfokus.se">it@teknikfokus.se</a>.
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
            <td class="px-2 pt-2">Acconeer</td>
            <td class="px-2 pt-2">13th </td>
            <td class="px-2 pt-2">Rayleigh</td>
          </tr>




          <tr>
            <td class="px-2">Neo4j</td>
            <td class="px-2">13th & 14th</td>
            <td class="px-2">Boole</td>
          </tr>
          <tr>
            <td class="px-2">Arm</td>
            <td class="px-2">13th & 14th</td>
            <td class="px-2">Erlang</td>
          </tr>

        </tbody>
      </table>
    </div>



    <div class="filler xl:px-24">
      <router-view />
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
