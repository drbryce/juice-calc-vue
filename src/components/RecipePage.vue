<template>
  <div id="recipe-page">
    <p>recipe page</p>
    <recipe-add-form></recipe-add-form>
    <recipe-list></recipe-list>
  </div>
</template>

<script>
import RecipeList from './recipe/RecipeList.vue'
import RecipeAddForm from './recipe/RecipeAddForm.vue'

import Vue from 'vue';

var vm  = Vue.component('recipe-page', {
  components: {
    'recipe-list': RecipeList,
    'recipe-add-form': RecipeAddForm
  },
  data: function() { 
    return {}
  }
});

export default vm;
</script>
