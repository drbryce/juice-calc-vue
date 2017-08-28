<template>
<div>
  <h1>Recipe</h1>
  <ul class="list-group">
    <div class="list-group">
      <div v-for="recipe in recipeList" :key="recipe.id" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2">{{ recipe.name }}</div>
          <input type="button" v-on:click="viewItem(recipe._id)" 
            class="btn btn-primary float-right" value="view" role="button"></input>
          <input type="button" v-on:click="removeItem(recipe._id)" 
            class="btn btn-danger float-right" value="delete" role="button"></input>
        </div>
      </div>
    </div>
  </ul>
</div>
</template>

<script>
export default {
  name: 'recipe',
  data () {
    return {
      selectedName: '',
      flavorName: ''
    }
  },
  computed: {
    flavorList () {
      return this.$store.state.flavor.flavorList
    },
    recipeList () {
      return this.$store.state.recipe.recipeList
    }
  },
  methods: {
    removeItem (item) {
      this.$store.dispatch('recipe/deleteRecipe', item)
    },
    addRecipe () {
      /*
      var message = {
        flavorname: this.flavorName,
        brand: this.selectedName
      }
      this.$store.dispatch('recipe/addRecipe', message)
      */
    },
    viewItem (recipeId) {
      this.$router.push('/recipe/individual/' + recipeId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
