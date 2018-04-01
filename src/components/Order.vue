<template>
<div>
  <h1>Order</h1>
  <div class="mt-3 mb-4">
    <ul class="list-group">
      <div class="list-group">
        <div v-for="flavor in orderList" :key="flavor.id" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-end">
            <div class="mr-auto p-2">{{ flavor.brand.shortname }} - {{ flavor.name }}</div>
            <input type="button" v-on:click="restock(flavor._id)" class="btn btn-primary float-right" value="restock" role="button" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
    }
  },
  computed: {
    orderList () {
      return this.$store.state.flavor.orderList
    },
    brandList () {
      return this.$store.state.brand.brandList
    }
  },
  methods: {
    restock (flavId) {
      this.$store.dispatch('flavor/unsetOrder', flavId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
