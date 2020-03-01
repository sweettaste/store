<template>
  <div class="bottom-bar">
  <div class="all-select">
      <check-button :is-check="isSelectAll" @click.native="allCheck"></check-button>
      <span>全选</span>
  </div>
  <div> 合计: <span>￥{{totalPrice}}</span> </div>
  <div class="right" @click="payFor">去计算：{{checkLength}}</div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed:{
    //总价
    totalPrice(){
      return  this.$store.getters.cartList.filter(item => {
        return item.checkd
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    //计算
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checkd).length
    },
    //判断是否全选
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checkd)
    }
  },
  methods:{
    //全选按钮
    allCheck(){
      if( this.isSelectAll ){
        this.$store.state.cartList.forEach(item => item.checkd = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checkd = true)
      }
    },
    payFor(){
      if(!this.checkLength){
          this.$toast.show('请选择商品',2000)
      }
    }
  }
}
</script>
<style scoped>
.bottom-bar{
  padding-left: 4px;
  height: 40px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
    justify-content: space-between;
 
}
.all-select{
  display: flex;
  align-items: center;
  /* height: 40px; */


}
.right{
  color: #fff;
  width: 100px;
  height: 100%;
  text-align: center;
  background: rgb(207, 110, 30);
  line-height: 30px;
}
</style>