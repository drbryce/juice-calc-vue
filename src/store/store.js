import Vue from 'vue'
import Vuex from 'vuex'
import { brand } from './modules/brand'
import { flavor } from './modules/flavor'
import { recipe } from './modules/recipe'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    brand,
    flavor,
    recipe
  },
  state: {
    token: 'test token',
    apiUrl: 'http://localhost:3000'
  },
  mutations: {
    setToken (state, newToken) {
      state.token = newToken
    }
  },
  actions: {
    setToken (context, newToken) {
      context.commit('setToken', newToken)
    }
  }
})
