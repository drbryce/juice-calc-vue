<template>
  <div id="flavor-list">
    <p>flavor list</p>
    <flavor-add-form v-bind:brands="brands"></flavor-add-form>
    <ul v-for="flavor in flavors">
      <flavor-list-helper v-bind:flavor="flavor"></flavor-list-helper>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import FlavorListHelper from './FlavorListHelper.vue'
import FlavorAddForm from './FlavorAddForm.vue'
import { Bus } from '../../controllers/bus.js'
var vm = Vue.component('flavor-list', {
  components: {
    'flavor-list-helper': FlavorListHelper,
    'flavor-add-form': FlavorAddForm
  },
  data : function() {
    return {
          flavors : [],
          brands: [],
          compName: 'flavor-list'
          }
      },
  created: function() {
    Bus.$emit('brand-list-refresh', this.compName)
  },
  mounted: function() {
    this.getFlavorList()
    this.getBrandList()

    Bus.$on(this.compName + 'brand-list-updated', (data)=> { Vue.set(this, 'brands', data) })
    Bus.$on(this.compName + 'flavor-list-updated', (data)=> { Vue.set(this, 'flavors', data) })
  },
  methods: {
    getFlavorList() {
      Bus.$emit('flavor-list-refresh', this.compName)
    },
    
    getBrandList() {
      Bus.$emit('brand-list-refresh', this.compName)
    }
    
  }
});

export default vm;
</script>