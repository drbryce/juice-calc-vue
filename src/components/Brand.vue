<template>
<div>
  <h1>Brand</h1>
  <div class="mt-3">
  <form>
    <div class="form-group">
      <label for="shortname">Short name:</label>
      <input type="text" v-model="shortName" id="shortname" class="form-control" placeholder="ABC">
    </div>
    <div class="form-group">
      <label for="longname">Long name:</label>
      <input type="text" v-model="longName" id="longname" class="form-control" placeholder="Long Company Name">
    </div>
    <input type="button" class="btn btn-primary" v-on:click="addBrand" value="Add Brand">
  </form>
  </div>
  <div class="mt-3 mb-4">
    <ul class="list-group">
      <div class="list-group">
        <div v-for="brand in brandList" :key="brand.id" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-end">
            <div class="mr-auto p-2">{{ brand.shortname }} - {{ brand.longname }}</div>
            <input type="button" v-on:click="removeItem(brand._id)" class="btn btn-primary float-right" value="delete" role="button"></input>
          </div>
        </div>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      shortName: '',
      longName: ''
    }
  },
  computed: {
    brandList () {
      return this.$store.state.brand.brandList
    }
  },
  methods: {
    removeItem (item) {
      this.$store.dispatch('brand/deleteBrand', item)
    },
    addBrand () {
      if (this.shortName && this.longName) {
        var message = {
          sname: this.shortName,
          lname: this.longName
        }
        this.$store.dispatch('brand/addBrand', message)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
