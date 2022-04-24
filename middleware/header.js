export default ({
  app,
  store,
  query,
  route
}) => {
  
  if (app.$cookies.get('token')) {
    //записываем токен из куки в состояние при перезагрузке
    store.commit('login/setToken', app.$cookies.get('token'))
    store.commit('lessons/setLessonsToken', app.$cookies.get('token'))
    store.commit('login/setBalance', app.$cookies.get('balance'))

  } 

}
