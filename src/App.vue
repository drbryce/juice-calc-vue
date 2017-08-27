<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { Bus } from './controllers/bus'
import './controllers/dbController'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  },
  data () {
    return {
    }
  },
  mounted: function () {
  }
}
</script>

<style>
</style>
