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
    token: '',
    apiUrl: 'https://juice.pod.party'
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
