<template>
  <div id="about">
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-capitalize font-weight-bold">The project group</h2>
      <div class="people-holder">
        <Person v-for="person of people" :info="person" :key="person.name"></Person>
      </div>
    </div>
  </div>
</template>

<script>
import Person from '../components/Person'

export default {
  name: 'About',
  components: {
    Person
  },
  data() {
    return {
      people: [
        {
          name: "Fredrik Hessner",
          position: "Project Manager",
          imageUrl: "@/Fredrik.jpg",
          linkedIn: "https://www.linkedin.com/in/fredrik-hessner-090ab0162/",
          mail: "fredrik@teknikfokus.se"
        },
        {
          name: "Tove Hector",
          position: "Project Manager",
          imageUrl: "@/Tove.jpg",
          linkedIn: "",
          mail: "tove@teknikfokus.se"
        },
        {
          name: "André Roxhage",
          position: "Marketing Director",
          imageUrl: "@/Andre.jpg",
          linkedIn: "https://www.linkedin.com/in/andr%C3%A9-r-815b1a137/",
          mail: "andre@teknikfokus.se"
        },
        {
          name: "Björn Tenje Persson",
          position: "IT Manager",
          imageUrl: "@/Bjorn.jpg",
          linkedIn: "https://www.linkedin.com/in/bj%C3%B6rn-tenje-persson-06537b119/",
          mail: "bjorn@teknikfokus.se"
        },
        {
          name: "Joel Jensen",
          position: "IT Manager",
          imageUrl: "@/Joel.jpg",
          linkedIn: "https://www.linkedin.com/in/joel-jensen/",
          mail: "joel@teknikfokus.se"
        },
        {
          name: "Maria Svensson",
          position: "Event Manager",
          imageUrl: "@/Maria.jpg",
          linkedIn: "",
          mail: "maria@teknikfokus.se"
        },
        {
          name: "Oskar Hallberg",
          position: "Business Manager",
          imageUrl: "@/Oskar.jpg",
          linkedIn: "https://www.linkedin.com/in/oskar-hallberg-498b701b1/",
          mail: "oskar@teknikfokus.se"
        },
        {
          name: "Ludvig Eskilsson",
          position: "Business Manager",
          imageUrl: "@/Ludvig.jpg",
          linkedIn: "https://www.linkedin.com/in/ludvig-eskilsson-9ba12a115/",
          mail: "ludvig@teknikfokus.se"
        },
        {
          name: "Tilda Berglind",
          position: "Business Manager",
          imageUrl: "@/Tilda.jpg",
          linkedIn: "https://www.linkedin.com/in/tilda-berglind-b47329174",
          mail: "tilda@teknikfokus.se"
        },
        {
          name: "Nova Svensson",
          position: "Logistics Manager",
          imageUrl: "@/Nova.jpg",
          linkedIn: "https://www.linkedin.com/in/nova-svensson-442a941a8/",
          mail: "nova@teknikfokus.se"
        },
        {
          name: "Artina Sijarina",
          position: "Finance Manager",
          imageUrl: "@/Artina.jpg",
          linkedIn: "https://www.linkedin.com/in/artina-sijarina-486443186/",
          mail: "artina@teknikfokus.se"
        },
        {
          name: "",
          position: "Recruitment Manager",
          imageUrl: "",
          linkedIn: "",
          mail: "@teknikfokus.se"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .people-holder {
    display: flex;
    flex-direction: row;
    justify-content: center;  
    flex-wrap: wrap;
    align-items: stretch;
    margin: 0 -20px;
  }
</style>