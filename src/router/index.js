import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Recipe from '@/components/Recipe'
import Flavor from '@/components/Flavor'
import Brand from '@/components/Brand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/flavor',
      name: 'flavor',
      component: Flavor
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    }
  ]
})
