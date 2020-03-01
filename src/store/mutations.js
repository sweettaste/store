export default  {
  addCounter(state , payload){
      payload.count ++;
  },
  addToCart(state , payload ){
    payload.checkd = false;
    state.cartList.push(payload)
  }
}