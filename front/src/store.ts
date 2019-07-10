import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

import { LOGIN, LOGOUT } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://localhost:3000/',
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated (state) {
      state.isAuthenticated = localStorage.getItem('jwt') !== null
    },
    [LOGIN] (state, token) {
      localStorage.setItem('jwt', token)
      router.push('/')
    },
    [LOGOUT] (state) {
      localStorage.removeItem('jwt')
      router.push('/login')
    }
  },
  actions: {
    login () {
      this.commit('LOGIN')
    },
    logout () {
      this.commit('LOGOUT')
    }
  },
})
