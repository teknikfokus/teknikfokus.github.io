<template>
  <div id="main" ref="main">
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

            <div class="bg-white p-3 space-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <router-link 
                class="block p-2 font-medium text-gray-900 hover:bg-blue-50 rounded-md"
                v-for="item in this.nav" 
                :key="item.name" 
                :to="item.href"
                @click="close()"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <!-- Shown on larger screens -->
    <div class="hidden md:block fixed w-full top-0 border-b-2 z-20 bg-blue-primary border-gray-400">
      <div class="flex justify-center">
        <router-link
          class="block w-48 text-center py-6 mx-2 font-medium text-lg text-gray-50 hover:text-blue-primary hover:bg-gray-50 hover:no-underline"
          @mouseleave="this.show_menu = null"
          v-for="item in this.nav"
          @mouseenter="this.show_menu = item"
          :key="item.name"
          :to="item.href"
          @click="scroll_to(item.href, this.current_anchor)"
        >
          {{ item.name }}

          <!-- Sub-header which appears on hover -->
          <div
            v-if="item.sub_items.length != 0 && show_menu != null && show_menu.name == item.name"
            class="absolute w-48 rounded-b-md mt-6 bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 text-center" role="none">
              <router-link 
                class="text-blue-primary align-center block px-4 py-2 text-sm"
                tabindex="-1"
                v-for="subheader in show_menu.sub_items" 
                :id="subheader.name"
                :key="subheader.name"
                :to="{ path: item.href, hash: subheader.href }"
                @click="this.current_anchor = subheader.href"
              >
                {{ subheader.name }}
              </router-link>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="py-32 hero-background bg-center bg-cover text-center text-xl md:text-2xl text-white text-shadow-lg uppercase">
      <div class="container" v-if="$route.name=='Home'">
        <div class="max-w-xs mx-auto">
          <img src="./assets/logo/svg/logo-white-text.svg" class="max-w-full p-8" alt="Teknikfokus" />
        </div>
        <h1 class="font-bold md:text-3xl">Career fair</h1>
        <h2 class="text-2xl italic font-normal mt-2">Where the present meets the future</h2>
        <h3 class="normal-case font-medium mt-2">BACK ON SITE</h3>
        <h3 class="normal-case font-medium">15th &amp; 16th OF FEBRUARY</h3>
        <CountDown :firstDate="firstDate" :secondDate="secondDate" />
      </div>
      
      <div class="container" v-else>
        <h1 class="font-bold">{{$route.meta.title}}</h1>
      </div>
    </div>
    
    <div class="content container xl:px-24">
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
    href: '/',
    sub_items: []
  },
  {
    name: 'Attending',
    href: '/attending',
    sub_items: [],
  },
  {
    name: 'For Students',
    href: '/forstudents',
    sub_items: [
      {
        name: 'About Teknikfokus',
        href: '#About-teknikfokus'
      },
      {
        name: 'Host Descriptions',
        href: '#Descriptions'
      },
      {
        name: 'Apply for Host',
        href: '#How-to-apply'
      },
      {
        name: 'FAQ',
        href: '#Students-FAQ'
      },
    ],
  },
  {
    name: 'Student Sessions',
    href: '/sessions',
    sub_items: [
      {
        name: 'About',
        href: '#About-sessions'
      }
    ],
  },
  {
    name: 'For Companies',
    href: '/forcompanies',
    sub_items: [
      {
        name: 'About Teknikfokus',
        href: '#About-teknikfokus'
      },
      {
        name: 'Our offers',
        href: '#Our-offers'
      },
      {
        name: 'Application',
        href: '#How-to-apply'
      },
      {
        name: 'FAQ',
        href: '#Companies-FAQ'
      },
    ],
  },
  {
    name: 'About Us',
    href: '/about',
    sub_items: []
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
      show_menu: null,
      firstDate: {
        date: {
          day: 15,
          month: 2,
          year: 2023,
        },
        time: {
          start: {
            hour: 9,
          },
          end: {
            hour: 17,
          }
        }
      },
      secondDate: {
        date: {
          day: 16,
          month: 2,
          year: 2023,
        },
        time: {
          start: {
            hour: 8,
          },
          end: {
            hour: 17,
          }
        }
      },
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
    },
    scroll_to(page, hash) {
      if(hash == null) {
        window.scrollTo(0, 0);
        return;
      }

      let path = this.$route.path;
      let id = hash.substring(1);
      let element = document.getElementById(id);

      if(path == page && element) {
        element.scrollIntoView();
      }
      this.show_menu = null;
      this.current_anchor = null;
    }
  },
  computed: {
    parallaxBackground() {
      let name ="massa2020blurcut.png"
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
    background-image: url('./assets/images/massa2020blurcut.png');
    background-position: bottom;
  }
</style>


<style scoped src="@/css/navbar.css">
  .navbarDiv {
    min-height: 150px;
  }
</style>
