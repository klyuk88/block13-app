export default ({store, redirect}) => {
    if(!store.getters['login/getToken']) {
        return redirect('/#login')
    }
}