import { dbController } from '../../controllers/dbController'

export const flavor = {
  namespaced: true,
  state: {
    flavorList: [],
    orderList: []
  },
  mutations: {
    updateFlavorList (state, flavors) {
      state.flavorList = flavors
    },
    updateOrderList (state, flavors) {
      state.orderList = flavors
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
    },
    setOrder (context, flavorId) {
      dbController.setOrderFlavor(flavorId)
    },
    unsetOrder (context, flavorId) {
      dbController.unsetOrderFlavor(flavorId)
    },
    updateOrderList (context) {
      context.commit('updateOrderList', dbController.getOrderList())
    }
  },
  getters: {}
}
