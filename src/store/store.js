import Vue from 'vue'
import Vuex from 'vuex'

export const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
}

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    events: {
      events: [
      ],
      eventStatus: Status.IDLE
    }
  },
  mutations: { },
  actions: {
  }
})
