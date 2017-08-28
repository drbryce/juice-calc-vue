import { dbController } from '../../controllers/dbController'

export const brand = {
  namespaced: true,
  state: {
    brandList: []
  },
  mutations: {
    updateBrandList (state, brands) {
      state.brandList = brands
    }
  },
  actions: {
    updateBrandList (context) {
      context.commit('updateBrandList', dbController.getBrandList())
    },
    addBrand (context, message) {
      dbController.addBrand(message)
    },
    deleteBrand (context, brandId) {
      dbController.deleteBrand(brandId)
    }
  },
  getters: {}
}
