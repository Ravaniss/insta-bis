import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://localhost:3000/',
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated (state) {
      state.isAuthenticated = localStorage.getItem('jwt') !== null
    }
  },
  actions: {

  },
})
