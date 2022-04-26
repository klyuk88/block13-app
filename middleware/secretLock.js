export default ({
  app,
  store,
  redirect,
}) => {
  if (!app.$cookies.get('ac_token')) {
    return redirect('/#login')
  }
}
