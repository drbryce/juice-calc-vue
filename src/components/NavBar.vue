<template>
  <div id="nav-bar" class="my-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li> 
      <li class="nav-item">
        <router-link to="/recipe" class="nav-link">Recipe</router-link> 
      </li> 
      <li class="nav-item">
        <router-link to="/flavor" class="nav-link">Flavor</router-link> 
      </li> 
      <li class="nav-item">
        <router-link to="/brand" exact class="nav-link">Brand</router-link> 
      </li> 
      <li class="nav-item">
        <router-link to="/logout" class="nav-link">Logout</router-link>
      </li> 
    </ul>
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