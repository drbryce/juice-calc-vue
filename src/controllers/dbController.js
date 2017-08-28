import Vue from 'vue'
import { store } from '../store/store'

export const dbController = {
  getBrandList () {
    // GET request
    Vue.http.get(store.state.apiUrl + '/brand/listjson', { headers: { token: store.state.token } }).then(
      (data) => {
        store.commit('brand/updateBrandList', data.body)
      },
      (data, status, request) => {
        // handle error
      })
  },
  addBrand (message) {
    // GET request
    Vue.http.post(store.state.apiUrl + '/brand/add', message, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('brand/updateBrandList')
        },
        (data, status, request) => {
          // handle error
        })
  },
  deleteBrand (brandId) {
    // GET request
    Vue.http.delete(store.state.apiUrl + '/brand/delete/' + brandId, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('brand/updateBrandList')
        },
        (data, status, request) => {
          // handle error
        })
  },
  getFlavorList () {
    // GET request
    Vue.http.get(store.state.apiUrl + '/flavor/listjson', { headers: { token: store.state.token } }).then(
      (data) => {
        store.commit('flavor/updateFlavorList', data.body)
      },
      (data, status, request) => {
        // handle error
      })
  },
  addFlavor (message) {
    // GET request
    Vue.http.post(store.state.apiUrl + '/flavor/add', message, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('flavor/updateFlavorList')
        },
        (data, status, request) => {
          // handle error
        })
  },
  deleteFlavor (flavorId) {
    // GET request
    Vue.http.delete(store.state.apiUrl + '/flavor/delete/' + flavorId, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('flavor/updateFlavorList')
        },
        (data, status, request) => {
          // handle error
        })
  }
}
