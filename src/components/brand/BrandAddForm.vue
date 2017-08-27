<template>
  <div>
    <p> short name: <input type="text" v-model="shortname" placeholder="ABC"> long name: <input type="text" v-model="longname" placeholder="Amazing Baking Company">
    <button v-on:click="addBrand()">add</button></p>
  </div>
</template>

<script>
import Vue from 'vue'
import Globals from '../../globals.js'
import{ Bus } from '../../controllers/bus.js'
var vm = Vue.component('brand-add-form', {
  props: [],
  data: function() { 
    return {
    shortname: '',
    longname: '',
    compName: 'brand-list-helper'
    } 
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  },
  methods: {
    addBrand () {
      if (this.shortname && this.longname) {
        this.$http.post(this.$store.state.apiUrl + '/brand/add', {
          'sname': this.shortname,
          'lname': this.longname
        },
          {
            headers: {
              token: this.token
            }
          })
          .then(response => {
            // success
            this.newItem = ''
            this.getItems()
          },
          response => {
            // fail
            this.newItem = 'fail: ' + response.status + ' ' + response.body
          })
      }
    },

  }
})

export default vm
</script>