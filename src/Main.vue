<template>
  <div class="" id="main" ref="main">
    
    <Popover class="relative md:hidden">
    
        <div class="w-full bg-blue-primary flex justify-end items-center">
            <PopoverButton class="outline-none focus:ring-0 focus:outline-none py-2 px-2">
                <MenuIcon class="w-8 h-8 text-white" />
            </PopoverButton>
        </div>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel class="absolute top-0 left-0 z-10 w-full" v-slot="{ close }">
            <div class="w-full relative px-2 mt-3">
                <PopoverButton class="absolute right-4 top-2">
                    <XIcon class="w-5 h-5 text-blue-primary-light" />
                </PopoverButton>

                <div
                    class="bg-white p-3 space-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <router-link 
                            class="block p-2 font-medium text-gray-900 hover:bg-blue-50 rounded-md"
                            v-for="item in this.nav" 
                            :key="item.name" 
                            :to="item.href"
                            @click="close()"
                            >{{ item.name }}</router-link>
                </div>
            </div>

            </PopoverPanel>
        </transition>
    </Popover>

    <div class="hidden md:block">
        <div class="fixed w-full top-0 py-3 transition-colors z-20" :class="[this.scrolled ? 'bg-blue-primary' : 'bg-transparent']">
        
            <div class="flex justify-center space-x-2">
                <router-link 
                    class="block p-2 font-medium text-gray-50 hover:text-white"
                    v-for="item in this.nav" 
                    :key="item.name" 
                    :to="item.href"
                    @click="close()"
                    >{{ item.name }}</router-link>
            </div>
        </div>
    </div>

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
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const nav = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'For Students',
        href: '/how-to-teknikfokus'
    },
    {
        name: 'Companies',
        href: '/companies'
    },
    {
        name: 'FAQ',
        href: '/FAQ'
    },
    {
        name: 'About Us',
        href: '/about'
    },
];

export default {
  name: 'Main',
  components: {
        Footer,
        CountDown,
        Popover, 
        PopoverButton, 
        PopoverPanel,
        MenuIcon,
        XIcon,
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
  setup() {
      return {
          nav
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
  },
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
