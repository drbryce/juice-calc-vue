<template>
  <div>
    <p> brand: 
    <select v-model="selectedName">
      <option disabled value="">Please select one</option>
      <option v-for="brand in brands" v-bind:value="brand._id">{{brand.shortname}} - {{brand.longname}}</option>  
    </select> 
     name: <input type="text" v-model="flavorName" placeholder="Vanilla Custard">
    <button v-on:click.prevent="saveFlavor">add</button></p>
  </div>
</template>

<script>
import Vue from 'vue'
import Globals from '../../globals.js'
import{ Bus } from '../../controllers/bus.js'
var vm = Vue.component('flavor-add-form', {
  props: ['brands'],
  data: function() { 
    return {
    selectedName: '',
    flavorName: '',
    compName: 'flavor-add-form'
    } 
  },
  methods: {
    saveFlavor: function() {
      var message = {
        flavorname: this.flavorName,
        brand: this.selectedName
      }
      Bus.$emit('flavor-add','flavor-list',message)
      this.flavorName = ''
      this.selectedName = ''
    }
  }
})
export default vm;
</script>