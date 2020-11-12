import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParallaxJs from 'vue-parallax-js'

Vue.use(VueParallaxJs)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
