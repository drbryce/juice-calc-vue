<template>
<div>
  <h1>Recipe</h1>
  <p>Recipe name: <input v-model="recipeName" placeholder="Recipe name">
    <button v-on:click="addRecipe">add recipe</button>
  </p>
  <p>Flavor: 
    <select v-model="selectedFlavor">
      <option v-for="flavor in flavorList" v-bind:value="flavor" :key="flavor._id">{{flavor.brand.shortname}} - {{flavor.name}}</option>
    </select>
    <br />{{ flavor }}<br />
      Percentage: <input v-model.number="flavorPercentage" type="number">
      <button v-on:click.prevent="addFlavor">add flavor</button>
    </p>
    <ul>
      <li v-for="flavor in recipeFlavorList" :key="flavor._id">
        {{flavor.flavor.brand.shortname}} - {{flavor.flavor.name}} : {{flavor.flavorpercent}}% - <button v-on:click="removeFlavor(flavor.flavor._id)">remove</button>
      </li>
    </ul>
    <textarea v-model="notes" placeholder="notes"></textarea>
    <p>Total flavor percentage: {{ totalFlavorPercent }}</p>

  <ul class="list-group">
    <div class="list-group">
      <div v-for="recipe in recipeList" :key="recipe._id" class="list-group-item list-group-item-action flex-column align-items-start">
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
      notes: '',
      recipeName: '',
      recipeFlavorList: [],
      recipeObject: {},
      selectedFlavor: '',
      flavorPercentage: 0,
      flavor: ''
    }
  },
  computed: {
    flavorList () {
      return this.$store.state.flavor.flavorList
    },
    recipeList () {
      return this.$store.state.recipe.recipeList
    },
    totalFlavorPercent () {
      var tempNumber = 0
      this.recipeFlavorList.forEach((element) => {
        tempNumber += element.flavorpercent
      })
      return tempNumber
    }
  },
  methods: {
    removeItem (item) {
      this.$store.dispatch('recipe/deleteRecipe', item)
    },
    viewItem (recipeId) {
      this.$router.push('/recipe/individual/' + recipeId)
    },
    addRecipe () {
      var fixedFlavors = []
      this.recipeFlavorList.forEach((element) => {
        fixedFlavors.push({percentage: element.flavorpercent, flavor: element.flavor._id})
      })
      var message = {
        name: this.recipeName,
        flavors: fixedFlavors,
        notes: this.notes
      }
      this.$store.dispatch('recipe/addRecipe', message)
      this.recipeName = ''
      this.recipeFlavorList = []
      this.notes = ''
    },
    addFlavor () {
      this.recipeFlavorList.push({ flavor: this.selectedFlavor, flavorpercent: this.flavorPercentage })
    },
    removeFlavor (flavId) {
      this.recipeFlavorList.splice((this.recipeFlavorList.findIndex((data, index) => {
        return data.flavor._id === flavId
      })), 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
