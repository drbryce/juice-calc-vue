<template>
  <div>
    <div v-if="brand">
      <li>{{brand.shortname}} - {{brand.longname}} <button v-on:click.prevent="removeItem(brand._id)">delete</button></li>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Globals from '../../globals.js'
import { Bus } from '../../controllers/bus.js'
var vm = Vue.component('brand-list-helper', {
  props: ['brand'],
  data: function() { 
    return {
      Globals,
      compName: 'brand-list-helper'
     } 
  },
  methods: {
    removeItem (itemID) {
      if (itemID) {
        this.$http.delete(this.$store.state.apiUrl + '/brand/delete/' + itemID, {
          headers: {
            token: this.token
          }
        })
          .then(response => {
            // success
            this.getItems()
          },
          response => {
            // fail
            this.newItem = 'fail: ' + response.status + ' ' + response.body
          })
      }
    }
  }
})

export default vm
</script>