import Vue from 'vue'
import { Bus } from './bus.js'
import { store } from '../store/store'

var baseURL = store.state.apiUrl

function getBrandList(compName) {
  // GET request
  Vue.http.get(baseURL + '/brand/listjson').then(
    function (data) {
      Bus.$emit(compName + 'brand-list-updated',data.body)
    }, 
    function (data, status, request) {
      // handle error
      console.error.log(data)
      console.error.log(status)
      console.error.log(request)
    })
}

function deleteBrand(compName,brandID) {
    // DELETE request
    Vue.http.delete(baseURL +'/brand/delete/' + brandID, {emulateHTTP:true}) 
      .then(function (data) {
        Bus.$emit('brand-list-refresh',compName)  
       }, 
    function (data, status, request) {
      // handle error
      console.error.log(data)
      console.error.log(status)
      console.error.log(request)
    })
}

function saveBrand(compName, brand) {
  let options = { emulateJSON: true }

  Vue.http.post(baseURL + '/brand/add/', brand, options)
    .then(response => { 
      Bus.$emit('brand-list-refresh',compName)  
    }, 
    response => {
    });
}

function getFlavorList(compName) {
  // GET request
  Vue.http.get(baseURL + '/flavor/listjson').then(function (data) {
  Bus.$emit(compName + 'flavor-list-updated',data.body)
    }, function (data, status, request) {
    // handle error
    console.error.log(data)
    console.error.log(status)
    console.error.log(request)
    })  
}

function saveFlavor(compName, flavor) {
  let options = { emulateJSON: true }

  Vue.http.post(baseURL + '/flavor/add/', flavor, options)
    .then(response => { 
    Bus.$emit('flavor-list-refresh',compName)  
    }, 
    response => {
    });
}

function deleteFlavor(compName,flavorID) {
    // DELETE request
    Vue.http.delete(baseURL +'/flavor/delete/' + flavorID, {emulateHTTP:true}) 
      .then(function (data) {
        Bus.$emit('flavor-list-refresh',compName)  
       }, 
    function (data, status, request) {
      // handle error
      console.error.log(data)
      console.error.log(status)
      console.error.log(request)
    })
}

function getRecipeList(compName) {
  // GET request
  Vue.http.get(baseURL + '/recipe/listjson').then(function (data) {
    Bus.$emit(compName + 'recipe-list-refresh',data.body)
  }, function (data, status, request) {
  // handle error
  console.error.log(data)
  console.error.log(status)
  console.error.log(request)
    })  
}

function saveRecipe(compName, recipe) {
  let options = { emulateJSON: true }

  Vue.http.post(baseURL + '/recipe/add/', JSON.stringify(recipe), options)
    .then(response => { 
    Bus.$emit('recipe-list-refresh',compName)  
    }, 
    response => {
    });
}

function deleteRecipe(compName,recipeID) {
    // DELETE request
    Vue.http.delete(baseURL +'/recipe/delete/' + recipeID, {emulateHTTP:true}) 
      .then(function (data) {
        Bus.$emit('recipe-list-refresh',compName)  
       }, 
    function (data, status, request) {
      // handle error
      console.error.log(data)
      console.error.log(status)
      console.error.log(request)
    })
}

function getRecipe(compName, recipeID) {
  // GET request
  Vue.http.get(baseURL + '/recipe/list/' + recipeID).then(function (data) {
    Bus.$emit(compName + 'recipe-individual',data.body)
  }, function (data, status, request) {
  // handle error
  console.error.log(data)
  console.error.log(status)
  console.error.log(request)
    })  
}


Bus.$on('brand-list-refresh', (compName)=> {getBrandList(compName)})
Bus.$on('brand-delete', (compName, brandID)=> {deleteBrand(compName, brandID)})
Bus.$on('brand-add', (compName, brand)=> {saveBrand(compName, brand)})

Bus.$on('flavor-list-refresh', (compName)=> {getFlavorList(compName)})
Bus.$on('flavor-delete', (compName, flavorID)=> {deleteFlavor(compName, flavorID)})
Bus.$on('flavor-add', (compName, flavor)=> {saveFlavor(compName, flavor)})

Bus.$on('recipe-list-refresh', (compName)=> {getRecipeList(compName)})
Bus.$on('recipe-delete', (compName, recipeID)=> {deleteRecipe(compName, recipeID)})
Bus.$on('recipe-add', (compName, recipe)=> {saveRecipe(compName, recipe)})
Bus.$on('recipe-individual', (compName, recipeID)=> {getRecipe(compName, recipeID)})

