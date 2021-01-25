<template>
  <div id="app">
    <Main />
  </div>
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
    --primary: #51b0d2;
    --primary-dark: #489ab8;
    
    --background: #fff;

    --footer-color: #445;
}

body {
    background-color: var(--background);
    font-family: Hind, sans-serif;
}

</style>
