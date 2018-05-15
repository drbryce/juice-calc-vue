<template>
  <div>
    <ul class="list-group mt-3 mb-4">
      <div class="list-group">
        <div v-for="recipe in recipeList" :key="recipe._id" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-end">
            <div class="mr-auto p-2">{{ recipe.name }} 
              <span class="badge badge-warning" v-if="checkMissingFlavor(recipe.flavors)">MISSING FLAVORS</span></div>
            <input type="button" v-on:click="viewItem(recipe._id)" 
              class="btn btn-primary" value="view" role="button" />&nbsp;
            <input type="button" v-on:click="removeItem(recipe._id)" 
              class="btn btn-danger" value="delete" role="button" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recipe-editor',
  data () {
    return {
    }
  },
  computed: {
    recipeList () {
      return this.$store.state.recipe.recipeList
    },
    orderList () {
      return this.$store.state.flavor.orderList
    }
  },
  methods: {
    removeItem (item) {
      this.$store.dispatch('recipe/deleteRecipe', item)
    },
    viewItem (recipeId) {
      this.$router.push('/recipe/individual/' + recipeId)
    },
    checkMissingFlavor (recipeFlavors) {
      // loop through flavors in the recipe
      for (var x = 0; x < recipeFlavors.length; x++) {
        // checks orderList for matching flavor
        for (var i = 0; i < this.orderList.length; i++) {
          if (this.orderList[i]._id === recipeFlavors[x].flavor._id) {
            return true
          }
        }
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
