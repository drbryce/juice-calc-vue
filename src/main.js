import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Routes from './routes.js'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

global.router = new VueRouter({
  routes: Routes
})

const vm = new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)})
  .$mount('#app')

