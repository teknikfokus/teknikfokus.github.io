import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParallaxJs from 'vue-parallax-js'
import { jsonapiModule } from 'jsonapi-vuex'
import { store } from './store/store'
import api from './api/apiService.js'

Vue.use(VueParallaxJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  modules: {
    jv: jsonapiModule(api)
  },
  render: h => h(App)
}).$mount('#app')
