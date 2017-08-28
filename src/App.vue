<template>
  <div id="app">
    <div class="container-fluid">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  },
  mounted: function () {
  }
}
</script>

<style>

</style>
