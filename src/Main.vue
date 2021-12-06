<template>
  <div class="" id="main" ref="main">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark" :class="{'sticky': scrolled}">
      <div class="container position-relative">
        <a class="navbar-brand" href="/"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav mx-auto text-shadow-lg">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/how-to-teknikfokus">For Students</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/for-companies">For Companies</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/companies">Companies</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/FAQ">FAQ</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    <div class="py-20 hero-background bg-center bg-cover text-center text-xl md:text-2xl text-white text-shadow-lg uppercase">
        <div class="container" v-if="$route.name=='Home'">
            <div class="max-w-xs mx-auto">
                <img src="./assets/logo/svg/logo-white-text.svg" class="max-w-full p-8" alt="Teknikfokus" />
            </div>
            <h1 class="font-bold md:text-3xl">Career fair</h1>
            <h3 class="normal-case font-medium">16th &amp; 17th OF FEBRUARY</h3>
            <CountDown :firstDate="firstDate" :secondDate="secondDate" />
        </div>
        <div class="container" v-else>
            <h1 class="font-bold">{{$route.meta.title}}</h1>
        </div>
    </div>
    
    <div class="container xl:px-24">
        <router-view/>
    </div>
    <Footer id="footer" ref="footer"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import CountDown from './components/CountDown.vue'

export default {
  name: 'Main',
  components: {
        Footer,
        CountDown,
  },
  data() {
        return {
            scrolled: false,
            firstDate: {
                date: {
                    day: 16,
                    month: 2,
                    year: 2022,
                },
                time: {
                    start: {
                    hour: 9,
                    },
                    end: {
                    hour: 16,
                    }
                }
            },
            secondDate: {
                date: {
                    day: 17,
                    month: 2,
                    year: 2022,
                },
                time: {
                    start: {
                    hour: 9,
                    },
                    end: {
                    hour: 16,
                    }
                }
            }
        }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
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
  min-height: 100vh;
  position: relative;
}

.hero-background {
    background-image: url('./assets/images/massa2020blur.jpg');
}

</style>


<style scoped src="@/css/navbar.css"></style>
