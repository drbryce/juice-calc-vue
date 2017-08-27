import BrandPage from './components/BrandPage.vue'
import FlavorPage from './components/FlavorPage.vue'
import RecipePage from './components/RecipePage.vue'
import ConfigPage from './components/ConfigPage.vue'
import LoginPage from './components/LoginPage.vue'
import RecipeIndividual from './components/RecipeIndividual.vue'


export default [
  // Redirects to /route-one as the default route.
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    //component: BrandPage
  },
  {
    path: '/brand',
    name: 'brand',
    mode: 'history',
    component: BrandPage
  },
  {
    path: '/flavor',
    name: 'flavor',
    mode: 'history',
    component: FlavorPage
  },
  {
    path: '/recipe',
    name: 'recipe',
    mode: 'history',
    component: RecipePage
  },
  {
    path: '/config',
    name: 'config',
    mode: 'history',
    component: ConfigPage
  },
  {
    path: '/login',
    name: 'login',
    mode: 'history',
    component: LoginPage
  },
  {
    path: '/recipe/:recipeID',
    component: RecipeIndividual
  }
  
];
