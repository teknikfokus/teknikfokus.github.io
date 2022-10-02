<template>
  <div id="about">
    <div class="container mt-5 mb-5">
      <h1 class="header font-medium text-center mb-4 font-weight-bold">The project group</h1>
      <div class="people-holder">
        <Person v-for="person of projectManagers" :info="person" :key="person.name" />
      </div>
      <div class="people-holder">
        <Person v-for="person of pg" :info="person" :key="person.name" />
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
      projectManagers: [
        {
          name: "Leo Guldåker",
          position: "Project Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/leo-guld%C3%A5ker-b058b2226/",
          mail: "leo@teknikfokus.se"
        },
        {
          name: "Yazan Al-Aswad",
          position: "Project Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "yazan@teknikfokus.se"
        }
      ],
      pg: [
        {
          name: "Alex Bringsarve",
          position: "Recruitment Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/alex-bringsarve-0a68bb251/",
          mail: "alex.bringsarve@teknikfokus.se"
        },
        {
          name: "Alex Chamoun",
          position: "Business Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/alex-chamoun-276b13208",
          mail: "alex.chamoun@teknikfokus.se"
        },
        {
          name: "Arvid Carp",
          position: "Logistics Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "arvid@teknikfokus.se"
        },
        {
          name: "David Bergh",
          position: "IT Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/david-bergh-5b1213187/",
          mail: "david@teknikfokus.se"
        },
        {
          name: "Edmond Mentori",
          position: "Event Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "edmond@teknikfokus.se"
        },
        {
          name: "Eira Blaho Mildton",
          position: "Business Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/eira-blaho-mildton-33894119a/",
          mail: "eira@teknikfokus.se"
        },
        {
          name: "Erik Gustavsson",
          position: "Financial Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/erik-gustavsson-1b4503215/",
          mail: "erik@teknikfokus.se"
        },
        {
          name: "Felix Vigren",
          position: "Event Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/felix-vigren-a34202227",
          mail: "felix@teknikfokus.se"
        },
        {
          name: "Måns Bard Nilsson",
          position: "Marketing Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "https://www.linkedin.com/in/m%C3%A5ns-bard-nilsson-12a890232",
          mail: "mans@teknikfokus.se"
        },
        {
          name: "Pontus Sjöstedt",
          position: "IT Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "pontus@teknikfokus.se"
        },
        {
          name: "Theo Callmar",
          position: "Business Manager",
          imageUrl: "@/placeholder-person.png",
          linkedIn: "",
          mail: "theo@teknikfokus.se"
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
  .header {
    font-weight: bold;
    color: #000;
    font-size: 40px;
  }
</style>