import Vue from 'vue'
import Vuex from 'vuex'
import { jsonapiModule } from 'jsonapi-vuex'
import axios from 'axios'

export const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
}

const api = axios.create({
    baseURL: 'http://localhost:1000',
    headers: {
        'Content-Type': 'application/vnd.api+json',
    },
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    jv: jsonapiModule(api)
  },
})
