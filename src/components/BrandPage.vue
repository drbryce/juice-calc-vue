<template>
  <div id="brand-page">
    <p>brand page</p>
    <brand-add-form></brand-add-form>
    <brand-list></brand-list>
  </div>
</template>

<script>
import BrandList from './brand/BrandList.vue'
import BrandAddForm from './brand/BrandAddForm.vue'


import Vue from 'vue';

var vm  = Vue.component('brand-page', {
  components: {
    'brand-list': BrandList,
    'brand-add-form': BrandAddForm

  },
  computed: {
    token () {
      return this.$store.state.token
    }
  },
  data: function() { 
    return {}
  },
  methods: {
    onSubmit () {
      if (this.newItem) {
        this.$http.post(this.$store.state.apiUrl, {
          'newitem': this.newItem
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
    }
  },
  mounted () {
    //this.$store.dispatch('setBrands')
  }
})

export default vm
</script>
