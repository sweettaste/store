<template>
  <div class="bottom-bar">
    <div class="item-bar bar-left">
      <div >
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="item-bar bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailButtonBar',
  methods:{
    addToCart(){
      //  发送事件
      this.$emit('addCart')
    }
  }
}
</script>
<style scoped>
.bottom-bar{
  width: 100%;
  height: 49px;
  background: #fff;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  /* flex: 1; */
  /* justify-content: space-around; */
}
.item-bar{
  display: flex;
  flex: 1;
  /* background: #ffe817; */
  justify-content: space-around;
}
.item-bar .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 3px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.item-bar .service{
  background-position: 0 -54px;
}
.item-bar .shop{
  background-position: 0 -98px;
}
.bar-right{
  flex: 1;
  font-size: 15px;
  line-height: 48px;
}
.bar-right .cart{
  background-color: #ffe817;
  width: 100%;
}
.text{
  font-size: 13px;
}
.bar-right .buy{
  width: 100%;
  color: #fff;
  background: deeppink;
}
</style>