export default {
    openBuy(state) {
        state.buy = true
    },
    closeBuy(state) {
        state.buy = false
    },
    setBuyData(state, data) {
        state.buyData = data
    },
    openTopBalanceTg(state) {
        state.topBalanceTg = true
    },
    closeBalanceTg(state) {
        state.topBalanceTg = false
    }

}