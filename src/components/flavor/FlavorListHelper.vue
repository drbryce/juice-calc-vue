<template>
  <div>
    <div v-if="flavor">
      <li>{{flavor.brand.shortname}} - {{flavor.name}} <button v-on:click.prevent="deleteFlavor(flavor._id)">delete</button></li>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Globals from '../../globals.js'
import { Bus } from '../../controllers/bus.js'
export default Vue.component('flavor-list', {
  props: ['flavor'],
  data: function() { 
    return {
      Globals,
      compName: 'flavor-list-helper'
    } 
  },
  methods: {
    deleteFlavor: function(flavorID) {
      Bus.$emit('flavor-delete','flavor-list',flavorID)
    }
  }
})
</script>