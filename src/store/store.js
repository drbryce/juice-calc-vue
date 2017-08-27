import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, setBrandList, setBrands } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: 'test token',
    brandList: [],
    apiUrl: 'http://localhost:3000'
  },
  mutations: {
    setToken (state, newToken) {
    state.token = newToken
    },
    setBrandList (state, items) {
      state.brandList = items
    },
    setBrands (state, brands) {
      state.brandList = brands
    }
   },
  actions: {
    setToken,
    setBrandList,
    setBrands
  }
})
