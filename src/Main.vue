<template>
  <div id="main" ref="main">
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark" :class="{'sticky': scrolled}">
      <div class="container position-relative">
        <a class="navbar-brand" href="/"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/fair">Fair</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/FAQ">FAQ</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            </ul>
        </div>
        <router-link class="logo" to="/"><img src="@/assets/images/logo_white_on_black.png" class="d-inline-block align-top" alt="" loading="lazy"></router-link>
      </div>
    </nav>
    <div class="image-wrapper-text" :style="{'height': (parallaxImageHeight-10)+'vh'}">
        <div class="container text-center" v-if="$route.name=='Home'">
            <h1>Digital work fair</h1>
            <h3>17th of February</h3>
            <router-link to="/fair" class="btn link-button">Visit The Fair</router-link>
        </div>
        <div class="container text-center" v-else>
            <h1>{{$route.name}}</h1>
        </div>
    </div>
    <parallax sectionClass="parallax-image" :sectionHeight="parallaxImageHeight" breakpoint="(min-width: 0px)" :speedFactor="0.2" direction="down">
        <img :src="parallaxBackground" />
    </parallax>
    <router-view/>
    <Footer id="footer" ref="footer"></Footer>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Footer from './components/Footer.vue'

export default {
  name: 'Main',
  components: {
      Parallax,
      Footer
  },
  data() {
      return {
          scrolled: false
      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
      this.$refs.main.style.paddingBottom = this.$refs.footer.$el.offsetHeight + "px";
  },
  methods: {
    handleScroll() { 
        let scroll = window.scrollY

        if (!this.scrolled && scroll >= 125) {
            this.scrolled = true;
        } else if (this.scrolled && scroll <= 75) {
            this.scrolled = false;
        }
    }
  },
  computed: {
    parallaxBackground() {
        let name ="massa2020blur.jpg"
        var images = require.context('@/assets/images/', false, /(\.png)|(\.jpg)|(\.jpeg)$/)
        return images('./' + name);
    },
    parallaxImageHeight() {
        if (this.$route.name == 'Home') {
            if (window.innerWidth >= 992) {
                return 100
            }
            return 80
        }
        return 30
    }
  }
}
</script>

<style>
#main {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  min-height: 100vh;
  position: relative;
}

a {
    color: var(--primary);
    text-decoration: none !important;
}

a:hover {
    color: var(--primary-dark);
}


.link-button {
    background: var(--primary);
    color: var(--background);
    font-weight: bold;
}

.link-button:hover {
    background: var(--primary-dark);
    color: var(--background);
}


.image-wrapper-text {
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    color: white;
}

.image-wrapper-text > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.image-wrapper-text h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 0;
}

.image-wrapper-text h3 {
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 600;
}

.image-wrapper-text a {
    margin-top: 20px;
    text-transform: uppercase;
}


.parallax-image{
    position: relative;
    /* height: 600px; */
    overflow: hidden;
    z-index: -1;
}

@media (min-width: 576px) { 
    .image-wrapper-text h1 {
        font-size: 3em;
    }
    .image-wrapper-text h3 {
        font-size: 2em;
    }
    .image-wrapper-text a {
        font-size: 1.5em;
    }
}

@media (min-width: 768px) { 
    .image-wrapper-text h1 {
        font-size: 3.5em;
    }
    .image-wrapper-text h3 {
        font-size: 2.5em;
    }
}

@media (min-width: 992px) { 
    .parallax-image {
        /* height: 100vh !important; */
    }

    .topbar .link{
        margin: 0 20px;
    }
    
    .image-wrapper-text h1 {
        font-size: 4em;
    }
    .image-wrapper-text h3 {
        font-size: 3em;
    }
}
</style>


<style scoped src="@/css/navbar.css"></style>
