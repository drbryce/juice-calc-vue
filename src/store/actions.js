export const setToken = (context, newToken) => {
    context.commit('setToken', newToken)
  }
  export const setBrandList = (context, items) => {
    context.commit('setBrandList', items)
  }
  export const  setBrands = (context) => {
    Vue.http.get(state.apiUrl + '/brand/listjson', {
      headers: {
        token: state.token
      }
    })
      .then(response => {
        context.commit('setBrands', response.body)
      },
      response => {
        // fail - go to login
        console.log('fail')
      })
  }

