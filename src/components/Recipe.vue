<template>
<div>
  <h1>Recipe</h1>
  <recipe-editor />
  <recipe-list />
</div>
</template>

<script>
import RecipeEditor from '@/components/RecipeEditor'
import RecipeList from '@/components/RecipeList'

export default {
  name: 'recipe',
  components: {
    'recipe-editor': RecipeEditor,
    'recipe-list': RecipeList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
