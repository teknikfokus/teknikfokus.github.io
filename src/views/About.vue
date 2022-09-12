<template>
  <div id="about">
    <div class="container mt-5 mb-5">
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
          name: "Leo Guldåker",
          position: "Project Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "leo@teknikfokus.se",
          mail: ""
        },
        {
          name: "Yazan Al-Aswad",
          position: "Project Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "yazan@teknikfokus.se"
        },
        {
          name: "Alex Bringsarve",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Alex Chamoun",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Arvid Carp",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "David Bergh",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Edmond Mentori",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Eira Blaho Mildton",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Erik Gustavsson",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Felix Vigren",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Måns Bard Nilsson",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Pontus Sjöstedt",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
        },
        {
          name: "Theo Callmar",
          position: "",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: ""
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