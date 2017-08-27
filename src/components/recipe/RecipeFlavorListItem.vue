<template>
  <li>
    {{flavor.flavor.brand.shortname}} - {{flavor.flavor.name}} : {{flavor.flavorpercent}}% - <button v-id="flavor.flavor._id" v-on:click="removeFlavor">remove</button>
  </li>
</template>

<script>
import Vue from 'vue'
import{ Bus } from '../../controllers/bus.js'

var vm = Vue.component('recipe-flavor-list-item', {
  props: ['flavor'],
  data: function() { 
    return {
    } 
  },
  methods: {
    removeFlavor () {
      Bus.$emit('recipe-flavor-list-delete',this.flavor.flavor._id)
    }
  },

  mounted: function() {
  }
})
export default vm;
</script>