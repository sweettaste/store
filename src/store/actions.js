export default {
    addCart(context,payload){
      //new 一个promise让外界首页知道这里的操作
     return  new Promise((reslove , reject ) =>{
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if( oldProduct ){
          context.commit('addCounter',oldProduct)
          reslove('商品+1')
        }
        else{
          payload.count = 1;
          context.commit('addToCart' , payload)
          reslove('成功添加购物车')
        }
      })
    }
}