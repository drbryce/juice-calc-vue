<template>
<div>
  <h1>Recipe</h1>
  <form class="border border-primary p-3 rounded">
    <div class="form-group">
      <label for="recipename">Recipe name:</label> 
      <input v-model="recipeName" id="recipename" class="form-control" placeholder="Recipe name">
    </div>
    <div class="form-group">
      <input type="button" class="btn btn-primary" v-on:click="addRecipe" value="Add Recipe"></input>
    </div>
    <div class="form-group">
      <label for="selectedflavor">Flavor:</label> 
      <select v-model="selectedFlavor" id="selectedflavor" class="form-control">
        <option v-for="flavor in flavorList" v-bind:value="flavor" :key="flavor._id">{{flavor.brand.shortname}} - {{flavor.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="flavorpercentage">Percentage:</label> 
      <input v-model.number="flavorPercentage" type="number" class="form-control" id="flavorpercentage">
    </div>
    <input type="button" v-on:click="addFlavor" class="btn btn-primary" value="Add Flavor"></input>
    <div v-if="recipeFlavorList">
      <div class="form-group mt-3 mb-4">
        <ul class="list-group">
          <div class="list-group">
            <div v-for="flavor in recipeFlavorList" :key="flavor._id" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-end">
                <div class="mr-auto p-2">{{flavor.flavor.brand.shortname}} - {{flavor.flavor.name}} : {{flavor.flavorpercent}}%</div>
                <input type="button" class="btn btn-warning float-right" v-on:click="removeFlavor(flavor.flavor._id)" value="remove"></input>
              </div>
            </div>
          </div>  
        </ul>
      </div>
    </div>  
    <div class="form-group">
      <label for="notes">Notes:</label>
      <textarea class="form-control" id="notes" v-model="notes" placeholder="notes"></textarea>
    </div>
    <p>Total flavor percentage: {{ totalFlavorPercent }}%</p>
  </form>
  <ul class="list-group mt-3 mb-4">
    <div class="list-group">
      <div v-for="recipe in recipeList" :key="recipe._id" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2">{{ recipe.name }}</div>
          <input type="button" v-on:click="viewItem(recipe._id)" 
            class="btn btn-primary" value="view" role="button"></input>&nbsp
          <input type="button" v-on:click="removeItem(recipe._id)" 
            class="btn btn-danger" value="delete" role="button"></input>
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
      if (this.recipeFlavorList && this.recipeName) {
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
      }
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
