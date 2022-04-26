export default ({
  app,
  store,
  query,
  route
}) => {
  
  if (app.$cookies.get('ac_token')) {
    //записываем токен из куки в состояние при перезагрузке
    store.commit('login/setToken', app.$cookies.get('ac_token'))
    store.commit('lessons/setLessonsToken', app.$cookies.get('ac_token'))
    store.commit('login/setBalance', app.$cookies.get('balance'))
  } else if(app.$cookies.get('re_token')) {
    store.dispatch('login/restoreToken', app.$cookies.get('re_token'))
  } else {
    store.commit('login/setToken', null)
    store.commit('lessons/setLessonsToken', null)
    store.commit('login/setBalance', '')
  }

}
