<template>
  <div id="brand-list">
    <p>brand list</p>
    <div v-if="brands">
      <ul v-for="brand in brands" :key="brand.id">
        <brand-list-helper v-bind:brand="brand"></brand-list-helper>
      </ul>
    </div>
    <div v-else>
      <p>No brands</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BrandListHelper from './BrandListHelper.vue'
import { Bus } from '../../controllers/bus.js'
var vm = Vue.component('brand-list', {
  components: {
    'brand-list-helper': BrandListHelper
  },
  data: function() {
    return {
          compName: 'brand-list'
          }
      },
  computed: {
    brands () {
      return this.$store.state.brandList
    }
  }
});

export default vm
</script>