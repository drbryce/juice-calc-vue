<template>
<div>
  <h1>Flavor</h1>
  <div class="mt-3">
  <form>
    <div class="form-group">
      <label for="brandname">Brand name:</label>
      <select v-model="selectedName" class="form-control" id="brandname">
        <option disabled value="">Please select one</option>
        <option v-for="brand in brandList" :key="brand.id" v-bind:value="brand._id">{{brand.shortname}} - {{brand.longname}}</option>
      </select>  
    </div>
    <div class="form-group">
      <label for="flavorname">Flavor name:</label>
      <input type="text" v-model="flavorName" id="flavorname" class="form-control" placeholder="Not Strawberry">
    </div>
    <input type="button" v-on:click="addFlavor()" class="btn btn-primary" value="Add Flavor" role="button" />
  </form>
  </div>
  <div class="mt-3 mb-4">
    <ul class="list-group">
      <div class="list-group">
        <div v-for="flavor in flavorList" :key="flavor.id" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-end">
            <div class="mr-auto p-2">{{ flavor.brand.shortname }} - {{ flavor.name }}</div>
            <input v-if="checkStock(flavor._id)" type="button" class="btn float-left" v-on:click="reorder(flavor._id)" value="reorder" role="button" />
            <input type="button" v-on:click="removeItem(flavor._id)" class="btn btn-primary float-right" value="delete" role="button" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'flavor',
  data () {
    return {
      selectedName: '',
      flavorName: ''
    }
  },
  computed: {
    flavorList () {
      return this.$store.state.flavor.flavorList
    },
    brandList () {
      return this.$store.state.brand.brandList
    },
    orderList () {
      return this.$store.state.flavor.orderList
    }
  },
  methods: {
    removeItem (item) {
      this.$store.dispatch('flavor/deleteFlavor', item)
    },
    addFlavor () {
      var message = {
        flavorname: this.flavorName,
        brand: this.selectedName
      }
      this.$store.dispatch('flavor/addFlavor', message)
    },
    reorder (flavId) {
      this.$store.dispatch('flavor/setOrder', flavId)
    },
    checkStock (flavId) {
      for (var i = 0; i < this.orderList.length; i++) {
        if (this.orderList[i]._id === flavId) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
