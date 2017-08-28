import { dbController } from '../../controllers/dbController'

export const recipe = {
  namespaced: true,
  state: {
    recipeList: []
  },
  mutations: {
    updateRecipeList (state, recipes) {
      state.recipeList = recipes
    }
  },
  actions: {
    updateRecipeList (context) {
      context.commit('updateRecipeList', dbController.getRecipeList())
    },
    addRecipe (context, message) {
      dbController.addRecipe(message)
    },
    deleteRecipe (context, recipeId) {
      dbController.deleteRecipe(recipeId)
    }
  },
  getters: {}
}
