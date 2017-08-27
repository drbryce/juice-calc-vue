<template>
  <div id="recipe-list">
    <p>recipe list</p>
      <ul v-for="recipe in recipes">
        <p><router-link v-bind:to="'/recipe/' + recipe._id">{{recipe.name}}</router-link> <button v-on:click.prevent="deleteRecipe(recipe._id)">delete</button></li></p>
      </ul>

  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import RecipeListHelper from './RecipeListHelper.vue'
import RecipeAddForm from './RecipeAddForm.vue'
import { Bus } from '../../controllers/bus.js'
var vm = Vue.component('recipe-list', {
  components: {
    'recipe-list-helper': RecipeListHelper,
    'recipe-add-form': RecipeAddForm
  },
  data : function() {
    return {
          recipes: [],
          compName: 'recipe-list'
          }
      },
  mounted: function() {
    this.getRecipeList()
    Bus.$on(this.compName + 'recipe-list-refresh', (data)=> { Vue.set(this, 'recipes', data) })
  },
  methods: {
    getRecipeList() {
      Bus.$emit('recipe-list-refresh', this.compName)
    },
    deleteRecipe(recipeid){
        Bus.$emit('recipe-delete','recipe-list',recipeid)  
    }
  }
});

export default vm;
</script>