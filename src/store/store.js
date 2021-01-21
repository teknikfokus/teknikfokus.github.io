import Vue from 'vue'
import Vuex from 'vuex'
import { jsonapiModule } from 'jsonapi-vuex'
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://dev.teknikfokus.se/v1/',
    headers: {
        'Content-Type': 'application/vnd.api+json'
    },
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    jv: jsonapiModule(api)
  },
})
