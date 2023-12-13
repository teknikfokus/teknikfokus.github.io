<template>
  <div id="about" class="scroll-smooth">
    <div id="About-teknikfokus" class="py-6">
      <h1 class="my-12 text-5xl text-center font-bold">Project Group 2024</h1>
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
          name: "Samuel Högfeldt",
          position: "Project Manager",
          imageUrl: "@/samuel.webp",
          linkedIn: "https://se.linkedin.com/in/samuel-högfeldt-958958225",
          mail: "samuel@teknikfokus.se"
        },
        {
          name: "Alen Mahmutovic",
          position: "Project Manager",
          imageUrl: "@/alen.webp",
         linkedIn: "https://www.linkedin.com/in/alen-mahmutovic-264807257/",
          mail: "alen@teknikfokus.se"
        }
      ],
      pg: [
        {
          name: "Cristiana Adelina Onufriciuc",
          position: "Recruitment Manager",
          imageUrl: "@/cristiana.webp",
        linkedIn: "https://www.linkedin.com/in/cristiana-adelina-onufriciuc-3465b520b/",
          mail: "cristiana@teknikfokus.se"
        },

        {
          name: "Yara Zaghmout",
          position: "Logistics Manager",
          imageUrl: "@/yara.webp",
          linkedIn: "https://www.linkedin.com/in/yara-zaghmout-37324029a/",
          mail: "yara@teknikfokus.se"
        },
        {
          name: "Jonathan Martin-Lööf",
          position: "Logistics Manager",
          imageUrl: "@/jonathan.webp",
          linkedIn: "https://www.linkedin.com/in/jonathan-martin-löf-98587a299/",
          mail: "jonathan@teknikfokus.se"
        },
        
        {
          name: "Danny Tang",
          position: "Event Manager",
          imageUrl: "@/danny.webp",
          linkedIn: "https://www.linkedin.com/in/danny-tang-b383a7228/?originalSubdomain=se",
          mail: "danny@teknikfokus.se"
        },
        {
          name: "Arvid Nygren",
          position: "Business Manager",
          imageUrl: "@/arvid.webp",
          linkedIn: "https://www.linkedin.com/in/arvid-nygren-b049591a2/",
          mail: "arvid@teknikfokus.se"
        },
        {
          name: "Felicia Huynh",
          position: "Business Manager",
          imageUrl: "@/felicia.webp",
          linkedIn: "https://www.linkedin.com/in/felicia-huynh-83339a206/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          mail: "felicia@teknikfokus.se"
        },
        {
          name: "Sara Reimers",
          position: "Business Manager",
          imageUrl: "@/sara.webp",
          linkedIn: "http://linkedin.com/in/sara-reimers-b9545a1a3",
          mail: "sara@teknikfokus.se"
        },
        {
          name: "Tristan Farkas",
          position: "Financial Manager",
          imageUrl: "@/tristan.webp",
          linkedIn: "https://www.linkedin.com/in/tristan-farkas-8921a71a3/",
          mail: "tristan@teknikfokus.se"
        },

        {
          name: "Olivia Bjursten",
          position: "Marketing Manager",
          imageUrl: "@/olivia.webp",
          linkedIn: "https://www.linkedin.com/in/olivia-bjursten/",
          mail: "olivia@teknikfokus.se"
        },
        {
          name: "Noor Mustafa",
          position: "IT Manager",
          imageUrl: "@/noor.webp",
          linkedIn: "https://www.linkedin.com/in/noor-e-mustafa-173122262/",
          mail: "noor@teknikfokus.se"
        },
        {
          name: "Daniel Adu-Gyan	",
          position: "IT Manager",
          imageUrl: "@/daniel.webp",
          linkedIn: "https://www.linkedin.com/in/daniel-adugyan/",
          mail: "daniel@teknikfokus.se"
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