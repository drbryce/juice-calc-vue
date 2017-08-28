import { dbController } from '../../controllers/dbController'

export const flavor = {
  namespaced: true,
  state: {
    flavorList: []
  },
  mutations: {
    updateFlavorList (state, flavors) {
      state.flavorList = flavors
    }
  },
  actions: {
    updateFlavorList (context) {
      context.commit('updateFlavorList', dbController.getFlavorList())
    },
    addFlavor (context, message) {
      dbController.addFlavor(message)
    },
    deleteFlavor (context, flavorId) {
      dbController.deleteFlavor(flavorId)
    }
  },
  getters: {}
}
