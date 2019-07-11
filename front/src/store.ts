import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

import { LOGIN, LOGOUT, GETPOSTS } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://localhost:3000/',
    isAuthenticated: false,
    posts: [
      {
        id: 0,
        user_id: 0,
        display_name: 'Fred Flintstone',
        desc: 'Look at my car...',
        image: 'https://www.ebaymotorsblog.com/motors/blog/wp-content/uploads/2016/04/flintmobile-3-1200.jpg',
        timestamp: 1551052800000
      },
      {
        id: 1,
        user_id: 1,
        display_name: 'Scooby Doo',
        desc: 'Pizza!',
        image: 'https://vignette.wikia.nocookie.net/scoobydoo/images/7/72/Blockbuster_Pizza.png/revision/latest?cb=20150118170044',
        timestamp: 1551052800000
      },
      {
        id: 2,
        user_id: 2,
        display_name: 'Goku Son',
        desc: 'Kaaaameeeehaaameeeehaaaaaaaaa!!',
        image: 'https://i.imgur.com/sVwP9md.jpg',
        timestamp: 1551052800000
      }
    ]
  },
  mutations: {
    [LOGIN] (state, token) {
      state.isAuthenticated = true
      localStorage.setItem('jwt', token)
      router.push('/')
    },
    [LOGOUT] (state) {
      state.isAuthenticated = false
      localStorage.removeItem('jwt')
      router.push('/login')
    },
    [GETPOSTS] (state, posts) {
      if (posts.length > 0) {
        state.posts = posts
      }
    }
  },
  actions: {
    login (ctx, token) {
      this.commit('LOGIN', token)
    },
    logout () {
      this.commit('LOGOUT')
    }
  },
})
