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
          name: "Emil Holm",
          position: "Project Manager",
          imageUrl: "@/Emil.jpg",
          linkedIn: "https://www.linkedin.com/in/emil-holm-101023155/",
          mail: "emil@teknikfokus.se"
        },
        {
          name: "Jonna Fahrman",
          position: "Project Manager",
          imageUrl: "@/Jonna.jpg",
          linkedIn: "https://www.linkedin.com/in/jonna-fahrman-3758a61b8",
          mail: "jonna@teknikfokus.se"
        },
        {
          name: "Mimmi Hansson",
          position: "Marketing Director",
          imageUrl: "@/Mimmi.jpg",
          linkedIn: "https://www.linkedin.com/in/mimmihansson",
          mail: "mimmi@teknikfokus.se"
        },
        {
          name: "Ludvig Svedberg",
          position: "IT Manager, Website",
          imageUrl: "@/Ludvig.jpg",
          linkedIn: "https://www.linkedin.com/in/ludvigsvedberg/",
          mail: "ludvig@teknikfokus.se"
        },
        {
          name: "Patrik Gyllvin",
          position: "IT Manager, Server",
          imageUrl: "",
          linkedIn: "https://linkedin.com/in/patrik-gyllvin-546aa0159",
          mail: "patrik@teknikfokus.se"
        },
        {
          name: "Jimmy Szentes",
          position: "Event Manager",
          imageUrl: "@/Jimmy.jpg",
          linkedIn: "https://www.linkedin.com/in/jimmy-szentes-342b291ba/",
          mail: "jimmy@teknikfokus.se"
        },
        {
          name: "Christoffer Fjällborg Rinaldo",
          position: "Business Manager",
          imageUrl: "@/Christoffer.jpg",
          linkedIn: "https://www.linkedin.com/in/christoffer-fjällborg-rinaldo-a910061bb",
          mail: "christoffer@teknikfokus.se"
        },
        {
          name: "Evelina Danielsson",
          position: "Business Manager",
          imageUrl: "",
          linkedIn: "",
          mail: "evelina@teknikfokus.se"
        },
        {
          name: "Nelly Ostréus",
          position: "Business Manager",
          imageUrl: "@/Nelly.jpg",
          linkedIn: "www.linkedin.com/in/nellyostréus",
          mail: "nelly@teknikfokus.se"
        },
        {
          name: "Katia Svennarp",
          position: "Recruitment Manager",
          imageUrl: "@/Katia.jpg",
          linkedIn: "https://www.linkedin.com/in/katia-svennarp-a737071b9/",
          mail: "katia@teknikfokus.se"
        },
        {
          name: "Alex Gustafsson",
          position: "Logistics Manager",
          imageUrl: "@/Alex.jpg",
          linkedIn: "",
          mail: "alex@teknikfokus.se"
        },
        {
          name: "Annie Börjesson",
          position: "Finance Manager",
          imageUrl: "@/Annie.jpg",
          linkedIn: "https://linkedin.com/in/annie-börjesson-2400401bb",
          mail: "annie@teknikfokus.se"
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