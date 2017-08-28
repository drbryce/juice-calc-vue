<template>
  <div id="nav-bar">
    <router-link to="/login">Login</router-link> | 
    <router-link to="/recipe">Recipe</router-link> | 
    <router-link to="/flavor">Flavor</router-link> | 
    <router-link to="/brand">Brand</router-link> | 
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
    }
  }
}
</script>