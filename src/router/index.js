import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Recipe from '@/components/Recipe'
import RecipeIndividual from '@/components/RecipeIndividual'
import Flavor from '@/components/Flavor'
import Brand from '@/components/Brand'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
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
      path: '/recipe/individual/:recipeId',
      name: 'recipeIndividual',
      component: RecipeIndividual,
      props: true
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
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ],
  linkActiveClass: 'active'
})
