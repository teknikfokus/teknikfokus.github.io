<template>
  <html id="app">
    <Main />
  </html>
</template>

<script>
import Main from './Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  watch: {
    '$route' (to) {
      document.title = ((to.meta.title && to.meta.title != '') ? `${to.meta.title} | ` : '') + ('Teknikfokus')
    }
  }
}
</script>

<style>
:root {
    /* --primary: #51b0d2; */
    --primary: #14273E;
    --primary-dark: #489ab8;
    --primary-darker: #3d839d;
    
    --background: #fff;

    --footer-color: #445;
}
html {
  scroll-behavior: smooth;
}

body {
    background-color: var(--background);
    font-family: Hind, sans-serif;
}

</style>
