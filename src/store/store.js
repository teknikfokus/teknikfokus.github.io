import Vuex from 'vuex'
import { jsonapiModule } from 'jsonapi-vuex'
import axios from 'axios'
export const endpoint = "https://api.teknikfokus.se"

const api = axios.create({
    baseURL: endpoint+"/v1",
    headers: {
        'Content-Type': 'application/vnd.api+json'
    },
})

export default new Vuex.Store({
  modules: {
    jv: jsonapiModule(api)
  },
})
