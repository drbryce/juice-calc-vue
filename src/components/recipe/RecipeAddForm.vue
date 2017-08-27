<template>
  <div>
    <p>recipe add form</p>
    <p>
      Recipe name: <input v-model="recipeName" placeholder="Recipe name">
      <button v-on:click="saveRecipe">add recipe</button>
    </p>
    <p>
      Flavor: 
      <select v-model="selectedFlavor">
        <option v-for="flavor in flavors" v-bind:value="flavor">{{flavor.brand.shortname}} - {{flavor.name}}</option>
      </select>
      Percentage: <input v-model.number="flavorPercentage" type="number">
      <button v-on:click.prevent="addFlavor">add flavor</button>
    </p>
    <ul v-for="flavor in recipeFlavorList">
      <recipe-flavor-list-item v-bind:flavor="flavor"></recipe-flavor-list-item>
    </ul>
    <textarea v-model="notes" placeholder="notes"></textarea>
    <p>Total flavor percentage: {{totalFlavorPercent}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import{ Bus } from '../../controllers/bus.js'
import RecipeFlavorHelper from './RecipeFlavorHelper.vue'
import RecipeFlavorListItem from './RecipeFlavorListItem.vue'

export default Vue.component('recipe-add-form', {
  components: {
    'recipe-flavor-list-item': RecipeFlavorListItem
  },  props: ['brands'],
  data: function() { 
    return {
    notes: '',  
    recipeName: '',
    recipeFlavorList: [],
    recipeObject: {},
    selectedFlavor: '',
    flavorPercentage: 0,
    flavors: [],
    compName: 'recipe-add-form'
    } 
  },
  methods: {
    saveRecipe: function() {
      var fixedFlavors = []
      this.recipeFlavorList.forEach(function(element){
        fixedFlavors.push({percentage: element.flavorpercent, flavor: element.flavor._id})
      })
      var message = {
        name: this.recipeName,
        flavors: fixedFlavors,
        notes: this.notes
      }
      this.recipeName = ''
      this.recipeFlavorList = []
      this.notes = ''
      Bus.$emit('recipe-add','recipe-list',message)
      
    },
      getFlavorList() {
        Bus.$emit('flavor-list-refresh', this.compName)  
    },
      addFlavor() {
        this.recipeFlavorList.push({flavor:this.selectedFlavor,flavorpercent:this.flavorPercentage})
      },
      removeFlavor(flavid){
        this.recipeFlavorList.splice((this.recipeFlavorList.findIndex(function(data, index) {
          return data.flavor._id === flavid
        })),1)
      }
  },
  computed: {
    totalFlavorPercent() {
      var tempNumber = 0;
      this.recipeFlavorList.forEach(function(element) {
        tempNumber += element.flavorpercent
      })
      return tempNumber
    }
  },
  mounted: function() {
    this.getFlavorList()
    Bus.$on(this.compName + 'flavor-list-updated', (data)=> { Vue.set(this, 'flavors', data) })

    Bus.$on('recipe-flavor-list-delete', (data)=> { this.removeFlavor(data) })
  }
})

</script>