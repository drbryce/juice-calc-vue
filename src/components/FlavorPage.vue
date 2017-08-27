<template>
  <div id="flavor-page">
    <p>flavor page</p>
    <flavor-list></flavor-list>
  </div>
</template>

<script>
import FlavorList from './flavor/FlavorList.vue'

import Vue from 'vue';

var vm  = Vue.component('flavor-page', {
  components: {
    'flavor-list': FlavorList
  },
  data: function() { 
    return {}
  }
});

export default vm;
</script>
