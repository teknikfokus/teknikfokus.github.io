<template>
  <div id="about">
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-capitalize font-weight-bold">The project group</h2>
      <div class="people-holder">
        <div class="person" v-for="person of people" :key="person.name">
          <div class="img-wrapper" :style="{'background-image': `url(${((person.imageUrl == '') ? getImgUrl('@/placeholder-person.png') : getImgUrl(person.imageUrl))})`}"></div>
          <span class="name">{{person.name}}</span>
          <span class="position">{{person.position}}</span>
          <div class="icons">
            <a :href="person.linkedIn" v-if="person.linkedIn!=''"><i class="fab fa-linkedin-in"></i></a>
            <a :href="'mailto:'+person.mail"><i class="far fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
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
          position: "IT Manager, Back-end & Apps",
          imageUrl: "",
          linkedIn: "https://linkedin.com/in/patrik-gyllvin-546aa0159",
          mail: "patrik@teknikfokus.se"
        },
        {
          name: "Jimmie Szentes",
          position: "Event Coordinator",
          imageUrl: "@/Jimmie.jpg",
          linkedIn: "https://www.linkedin.com/in/jimmy-szentes-342b291ba/",
          mail: "jimmie@teknikfokus.se"
        },
        {
          name: "Christoffer Fjällborg Rinaldo",
          position: "Business Developer",
          imageUrl: "@/Christoffer.jpg",
          linkedIn: "https://www.linkedin.com/in/christoffer-fjällborg-rinaldo-a910061bb",
          mail: "christoffer@teknikfokus.se"
        },
        {
          name: "Evelina Danielsson",
          position: "Business Developer",
          imageUrl: "",
          linkedIn: "",
          mail: "evelina@teknikfokus.se"
        },
        {
          name: "Nelly Ostréus",
          position: "Business Developer",
          imageUrl: "@/Nelly.jpg",
          linkedIn: "www.linkedin.com/in/nellyostréus",
          mail: "nelly@teknikfokus.se"
        },
        {
          name: "Katia Svennarp",
          position: "Host Manager",
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
  },
  methods: {
    getImgUrl(url) {
      return (url.startsWith('@/') ? require('../assets/images/project_group/'+url.substring(2)) : url)
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

  .person {
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    width: 300px;
    margin: 20px;
    text-align: center;
    font-size: 18px;
  }
  
  .person .img-wrapper {
    display: block;
    margin: auto;
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
    border-radius: 50%;
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }

  .person .name {
    display: block;
    font-size: 1.2em;
    margin-bottom: 0;
  }

  .person .position {
    display: block;
    color: gray;
    margin-bottom: 10px;
  }

  .person .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }

  .person .icons a {
    margin: 0 10px;
  }

  @media (min-width: 576px) {
    .person {
      font-size: 14px;
      width: 140px
    }
    .person .img-wrapper {
      width: 135px;
      height: 135px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 768px) { 
    .person {
      font-size: 16px;
      width: 200px;
      
    }
    .person .img-wrapper {
      width: 180px;
      height: 180px;
    }
  }

  @media (min-width: 992px) { 
    .person {
      font-size: 16px;
      width: 250px;
      
    }
    .person .img-wrapper {
      width: 220px;
      height: 220px;
    }
  }
</style>