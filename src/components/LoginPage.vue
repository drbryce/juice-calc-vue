<template>
  <div class="container-fluid">
    <form action="" v-on:submit.prevent="onSubmit" method="POST">
      <div class = "form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" class="form-control form-control-lg" id="username" name="username">
      </div>
      <div class = "form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control form-control-lg" id="password" name="password">
      </div>
      <input class="btn btn-primary" type="submit" value="Login">
    </form>
    {{testData}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      testData: 'not tested'
    }
  },
  methods: {
    onSubmit () {
      if (this.username && this.password) {
        this.$http.post(this.$store.state.apiUrl + '/login', {
          'username': this.username,
          'password': this.password
        })
          .then(response => {
            this.testData = response.body.token
            this.$store.dispatch('setToken', response.body.token)
            this.$router.push('recipe')
          },
          response => {
            // fail
            this.testData = 'fail: ' + response.status + ' ' + response.body
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
