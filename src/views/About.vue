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
          imageUrl: "@/Leo.jpg",
          linkedIn: "https://www.linkedin.com/in/leo-guld%C3%A5ker-b058b2226/",
          mail: "leo@teknikfokus.se"
        },
        {
          name: "Yazan Al-Aswad",
          position: "Project Manager",
          imageUrl: "@/Yazan.jpg",
          linkedIn: "https://www.linkedin.com/in/yazan-a-a2b58115b/",
          mail: "yazan@teknikfokus.se"
        }
      ],
      pg: [
        {
          name: "Alex Bringsarve",
          position: "Recruitment Manager",
          imageUrl: "@/Alex-B.jpg",
          linkedIn: "https://www.linkedin.com/in/alex-bringsarve-0a68bb251/",
          mail: "alex.bringsarve@teknikfokus.se"
        },
        {
          name: "Alex Chamoun",
          position: "Business Manager",
          imageUrl: "@/Alex-C.jpg",
          linkedIn: "https://www.linkedin.com/in/alex-chamoun-276b13208",
          mail: "alex.chamoun@teknikfokus.se"
        },
        {
          name: "Arvid Karp",
          position: "Logistics Manager",
          imageUrl: "@/Arvid.jpg",
          linkedIn: "https://www.linkedin.com/in/arvid-karp-263648240/",
          mail: "arvid@teknikfokus.se"
        },
        {
          name: "David Bergh",
          position: "IT Manager",
          imageUrl: "@/David.jpg",
          linkedIn: "https://www.linkedin.com/in/david-bergh-5b1213187/",
          mail: "david@teknikfokus.se"
        },
        {
          name: "Edmond Mentori",
          position: "Event Manager",
          imageUrl: "@/Edmond.jpg",
          linkedIn: "https://www.linkedin.com/in/edmondmentori/",
          mail: "edmond@teknikfokus.se"
        },
        {
          name: "Eira Blaho Mildton",
          position: "Business Manager",
          imageUrl: "@/Eira.jpg",
          linkedIn: "https://www.linkedin.com/in/eira-blaho-mildton-33894119a/",
          mail: "eira@teknikfokus.se"
        },
        {
          name: "Erik Gustavsson",
          position: "Financial Manager",
          imageUrl: "@/Erik.jpg",
          linkedIn: "https://www.linkedin.com/in/erik-gustavsson-1b4503215/",
          mail: "erik@teknikfokus.se"
        },
        {
          name: "Felix Vigren",
          position: "Event Manager",
          imageUrl: "@/Felix.jpg",
          linkedIn: "https://www.linkedin.com/in/felix-vigren-a34202227",
          mail: "felix@teknikfokus.se"
        },
        {
          name: "Måns Bard Nilsson",
          position: "Marketing Manager",
          imageUrl: "@/Måns.jpg",
          linkedIn: "https://www.linkedin.com/in/m%C3%A5ns-bard-nilsson-12a890232",
          mail: "mans@teknikfokus.se"
        },
        {
          name: "Pontus Sjöstedt",
          position: "IT Manager",
          imageUrl: "@/Pontus.jpg",
          linkedIn: "https://www.linkedin.com/in/pontus-sj%C3%B6stedt-647b81232/",
          mail: "pontus@teknikfokus.se"
        },
        {
          name: "Theo Callmar",
          position: "Business Manager",
          imageUrl: "@/Theo.jpg",
          linkedIn: "https://www.linkedin.com/in/theo-callmar-3bbb71163/",
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