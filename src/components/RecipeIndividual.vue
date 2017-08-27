<template>
  <div id="recipe-individual">
    <h1>recipe individual - {{recipe.name}}</h1>
    <div v-for="flavor in recipe.flavors">
      <p>{{flavor.flavor.brand.shortname}} - {{flavor.flavor.name}}: {{flavor.percentage}}% volume:{{(flavor.percentage/100) * mixVolume}} weight: {{((flavor.percentage/100) * mixVolume) * flavorWeight}}</p>
    </div>
    <p>VG volume: {{vgVolume}} VG weight: {{((vgRatio/100) * mixVolume) * vgWeight}}</p>
    <p>PG volume: {{pgVolume}} PG weight: {{pgCalcWeight}}</p>
    <p>nicotine volume: {{nicSolutionVolume}} nicotine weight: {{nicSolutionWeight}}</p>
    <p>volume to mix (ml): <input v-model.number.lazy="mixVolume"></input></p>
    <p>vg to pg ratio: <input v-model.number.lazy="vgRatio"></input></p>
    <p>nicotine (%): <input v-model.number.lazy="nicPercent"></input></p>
    <p>nicotine solution strength (mg): <input v-model.number.lazy="nicStrength"></input></p>
    <p>nicotine solution vg to pg ratio (%): <input v-model.number.lazy="nicVgPgRatio"></input></p>
    <p>PG weight (mg): <input v-model.number.lazy="pgWeight"></input></p>
    <p>VG weight (mg): <input v-model.number.lazy="vgWeight"></input></p>
    <p>pure nicotine weight (mg): <input v-model.number.lazy="pureNicWeight"></input></p>
    <p>flavor weight (mg): <input v-model.number.lazy="flavorWeight"></input></p>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import { Bus } from '../controllers/bus.js'

var vm = Vue.component('recipe-individual', {
  components: {
  },
  data : function() {
    return {
      recipe: [],
      compName: 'recipe-individual',
      mixVolume: 100,
      vgRatio: 70,
      nicPercent: 2,
      pgWeight: 1.038,
      vgWeight: 1.26,
      nicStrength: 100,
      nicVgPgRatio: 50,
      pureNicWeight: 1.01,
      flavorWeight: 1
      }
  },
  mounted: function() {
    this.getRecipe()
    Bus.$on(this.compName + 'recipe-individual', (data)=> { Vue.set(this, 'recipe', data) })
  },
  methods: {
    getRecipe() {
      Bus.$emit('recipe-individual', this.compName, this.$route.params.recipeID)
    }
  },
  computed: {
    nicSolutionVolume: function () {
      return (this.nicPercent * this.mixVolume / this.nicStrength)
    },
    
    nicSolutionWeight: function () {
      var nicPercent = this.nicStrength/10
      var nicAmountML = this.nicSolutionVolume * (nicPercent/100)
      var nicAmountMG = nicAmountML * this.pureNicWeight
      var vgAmountML = (this.nicSolutionVolume - nicAmountML) * (this.nicVgPgRatio / 100)
      var vgAmountMG = vgAmountML * this.vgWeight
      var pgAmountML = (this.nicSolutionVolume - nicAmountML) * ((100 - this.nicVgPgRatio) / 100)
      var pgAmountMG = pgAmountML * this.pgWeight
      var answer = nicAmountMG + vgAmountMG + pgAmountMG
      return answer.toFixed(2)
    },
    vgVolume: function () {
      return (this.vgRatio/100) * this.mixVolume
    },
    pgVolume: function () {
      var tempNumber = 0;
      this.recipe.flavors.forEach(function(element) {
        tempNumber += element.percentage 
      })
      tempNumber += this.vgRatio
      return ((100 - tempNumber)/100) * this.mixVolume
    },
    pgCalcWeight: function () {
      return (this.pgVolume * this.pgWeight)
    }
  }


  
})

export default vm
</script>