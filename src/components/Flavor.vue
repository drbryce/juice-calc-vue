<template>
<div>
  <h1>Flavor</h1>
  <div class="mt-3">
  <form action="" method="POST">
    <div class="form-group">
      <select v-model="selectedName" class="form-control">
        <option disabled value="">Please select one</option>
        <option v-for="brand in brandList" :key="brand.id" v-bind:value="brand._id">{{brand.shortname}} - {{brand.longname}}</option>
      </select>  
    </div>
    <div class="form-group">
      <input type="text" v-model="flavorName" name="flavorname" class="form-control" placeholder="Not Strawberry">
    </div>
      <input type="button" v-on:click="addFlavor()" class="btn btn-primary float-right" value="Add Flavor" role="button"></input>
  </form>
  </div>
  <ul class="list-group">
    <div class="list-group">
      <div v-for="flavor in flavorList" :key="flavor.id" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-end">
          <div class="mr-auto p-2">{{ flavor.brand }} - {{ flavor.name }}</div>
          <input type="button" v-on:click="removeItem(flavor._id)" class="btn btn-primary float-right" value="delete" role="button"></input>
        </div>
      </div>
    </div>
  </ul>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
