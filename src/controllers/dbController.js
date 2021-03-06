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
    // POST request
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
  getOrderList () {
    // GET request
    Vue.http.get(store.state.apiUrl + '/flavor/listOrderJSON', { headers: { token: store.state.token } }).then(
      (data) => {
        store.commit('flavor/updateOrderList', data.body)
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
  },
  setOrderFlavor (flavorId) {
    // GET request
    Vue.http.post(store.state.apiUrl + '/flavor/order/flag/' + flavorId, null, { headers: { token: store.state.token } })
      .then(
        (data) => {
          // success
          store.dispatch('flavor/updateOrderList')
        },
        (data, status, request) => {
          // handle error
        })
  },
  unsetOrderFlavor (flavorId) {
    // GET request
    Vue.http.post(store.state.apiUrl + '/flavor/order/unflag/' + flavorId, null, { headers: { token: store.state.token } })
      .then(
        (data) => {
          // success
          store.dispatch('flavor/updateOrderList')
        },
        (data, status, request) => {
          // handle error
        })
  },

  getRecipeList () {
    // GET request
    Vue.http.get(store.state.apiUrl + '/recipe/listjson', { headers: { token: store.state.token } }).then(
      (data) => {
        store.commit('recipe/updateRecipeList', data.body)
      },
      (data, status, request) => {
        // handle error
      })
  },
  addRecipe (message) {
    // GET request
    Vue.http.post(store.state.apiUrl + '/recipe/add', message, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('recipe/updateRecipeList')
        },
        (data, status, request) => {
          // handle error
        })
  },
  deleteRecipe (recipeId) {
    // GET request
    Vue.http.delete(store.state.apiUrl + '/recipe/delete/' + recipeId, { headers: { token: store.state.token } })
      .then(
        (data) => {
          store.dispatch('recipe/updateRecipeList')
        },
        (data, status, request) => {
          // handle error
        })
  }
}
