<template>
<div>
  <h1>Recipe - {{ recipe.name }}</h1>
  <ul class="list-group mb-3">
    <div class="list-group">
      <div v-for="flavor in recipe.flavors" :key="flavor._id" 
        class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2 h4 col-6">
            {{ flavor.flavor.brand.shortname }} - {{ flavor.flavor.name }}
          </div>
          <div class="p-2 h5">  
            {{ flavor.percentage }}%
          </div>
          <div class="p-2 h5">
            Volume: {{ ((flavor.percentage / 100) * mixVolume).toFixed(1) }} ml
          </div>
          <div class="p-2 h5">
            Weight: {{ (((flavor.percentage / 100) * mixVolume) * flavorWeight).toFixed(1) }} mg
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2 h4 col-6">
            VG
          </div>
          <div class="p-2 h5 col-3">
            Volume: {{ vgVolume }} ml
          </div>
          <div class="p-2 h5 col-3">
            Weight: {{ ((vgRatio / 100) * mixVolume) * vgWeight }} mg
          </div>
        </div>
      </div>  
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2 h4 col-6">
            PG
          </div>
          <div class="p-2 h5 col-3">
            Volume: {{pgVolume}} ml
          </div>
          <div class="p-2 h5 col-3">
            Weight: {{pgCalcWeight}} mg
          </div>
        </div>
      </div>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2 h4 col-6">
            Nicotine
          </div>
          <div class="p-2 h5 col-3">
            Volume: {{nicSolutionVolume}} ml
          </div>
          <div class="p-2 h5 col-3">
            Weight: {{nicSolutionWeight}} mg
          </div>
        </div>
      </div>
    </div>
  </ul>
  <form>
    <div class="form-group row">
      <label for="mixvolume" class="col-5 col-form-label">Volume to mix (ml):</label>
      <div>
        <input type="text" class="form-control" id="mixvolume" v-model.number.lazy="mixVolume" />
      </div>
    </div>
    <div class="form-group row">
      <label for="vgratio" class="col-5 col-form-label">VG to PG ratio:</label>
      <div>
        <input type="text" class="form-control" id="vgratio" v-model.number.lazy="vgRatio" />
      </div>
    </div>
    <div class="form-group row">
      <label for="nicpercent" class="col-5 col-form-label">Nicotine (%):</label>
      <div>
        <input type="text" class="form-control" id="nicpercent" v-model.number.lazy="nicPercent" />
      </div>
    </div>
    <div class="form-group row">
      <label for="nicstrength" class="col-5 col-form-label">Nicotine solution strength (mg):</label>
      <div>
        <input type="text" class="form-control" id="nicstrength" v-model.number.lazy="nicStrength" />
      </div>
    </div>
    <div class="form-group row">
      <label for="nicvgpgratio" class="col-5 col-form-label">Nicotine solution vg to pg ratio (%):</label>
      <div>
        <input type="text" class="form-control" id="nicvgpgratio" v-model.number.lazy="nicVgPgRatio" />
      </div>
    </div>
    <div class="form-group row">
      <label for="pgweight" class="col-5 col-form-label">PG weight (mg):</label>
      <div>
        <input type="text" class="form-control" id="pgweight" v-model.number.lazy="pgWeight" />
      </div>
    </div>
    <div class="form-group row">
      <label for="vgweight" class="col-5 col-form-label">VG weight (mg):</label>
      <div>
        <input type="text" class="form-control" id="vgweight" v-model.number.lazy="vgWeight" />
      </div>
    </div>
    <div class="form-group row">
      <label for="purenicweight" class="col-5 col-form-label">Pure nicotine weight (mg):</label>
      <div>
       <input vtype="text" class="form-control" id="purenicweight" v-model.number.lazy="pureNicWeight" />
      </div>
    </div>
    <div class="form-group row">
      <label for="flavorweight" class="col-5 col-form-label">Flavor weight (mg):</label>
      <div>  
        <input type="text" class="form-control" id="flavorweight" v-model.number.lazy="flavorWeight" />
      </div>
    </div>
    <p v-if="recipe.notes">Notes: {{ recipe.notes }}</p>
  </form>
</div>
</template>

<script>
export default {
  name: 'recipeIndividual',
  props: ['recipeId'],
  data () {
    return {
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
  computed: {
    recipeList () {
      return this.$store.state.recipe.recipeList
    },
    recipe () {
      return this.recipeList.find(item => {
        console.log(item)
        return (item._id === this.recipeId)
      })
    },
    nicSolutionVolume: function () {
      return (this.nicPercent * this.mixVolume / this.nicStrength).toFixed(1)
    },
    nicSolutionWeight: function () {
      var nicPercent = this.nicStrength / 10
      var nicAmountML = this.nicSolutionVolume * (nicPercent / 100)
      var nicAmountMG = nicAmountML * this.pureNicWeight
      var vgAmountML = (this.nicSolutionVolume - nicAmountML) * (this.nicVgPgRatio / 100)
      var vgAmountMG = vgAmountML * this.vgWeight
      var pgAmountML = (this.nicSolutionVolume - nicAmountML) * ((100 - this.nicVgPgRatio) / 100)
      var pgAmountMG = pgAmountML * this.pgWeight
      var answer = nicAmountMG + vgAmountMG + pgAmountMG
      return answer.toFixed(1)
    },
    vgVolume: function () {
      return ((this.vgRatio / 100) * this.mixVolume).toFixed(1)
    },
    pgVolume: function () {
      var tempNumber = 0
      this.recipe.flavors.forEach((element) => {
        tempNumber += element.percentage
      })
      tempNumber += this.vgRatio
      return (((100 - tempNumber) / 100) * this.mixVolume).toFixed(1)
    },
    pgCalcWeight: function () {
      return (this.pgVolume * this.pgWeight).toFixed(1)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
