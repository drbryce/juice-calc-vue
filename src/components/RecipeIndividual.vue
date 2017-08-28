<template>
<div>
  <h1>Recipe - {{ recipe.name }}</h1>
  <ul class="list-group">
    <div class="list-group">
      <div v-for="flavor in recipe.flavors" :key="flavor._id" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2">{{ flavor.flavor.brand.shortname }} - {{ flavor.flavor.name }} - {{ flavor.percentage }}%</div>
          <input type="button" v-on:click="removeItem(brand._id)" class="btn btn-primary float-right" value="delete" role="button"></input>
        </div>
      </div>
    </div>
  </ul>
  <p v-if="recipe.notes">Notes: {{ recipe.notes }}</p>
</div>
</template>

<script>
export default {
  name: 'recipeIndividual',
  props: ['recipeId'],
  data () {
    return {
      shortName: '',
      longName: ''
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
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
