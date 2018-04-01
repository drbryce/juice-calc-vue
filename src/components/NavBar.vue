<template>
  <div id="nav-bar" class="my-3">
    <ul v-if="!loggedIn" class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
    </ul>
    <ul v-else class="nav nav-tabs">
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
        <router-link to="/order" exact class="nav-link">Order</router-link> 
      </li> 
      <li class="nav-item">
        <a v-on:click="logOut" href="#" class="nav-link">Logout</a>
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
  },
  computed: {
    loggedIn () {
      if (this.$store.state.token !== '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    logOut () {
      this.$store.commit('setToken', '')
    }
  }
}
</script>