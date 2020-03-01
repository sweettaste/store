<template>
  <div id="cart">
   <cart-nav-bar></cart-nav-bar>
     <scroll class="scroll" :probe-type="3" ref="scroll" >
      <cart-list ></cart-list>
     </scroll>
     <cart-bottom-bar class="cart-bottom"></cart-bottom-bar>
  </div>
</template>
<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'Cart',
  components:{
    CartNavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  data(){
    return {
      length:this.$store.getters.cartLength
    }
  },
  activated(){
   
      this.$refs.scroll.refresh()
    
  },
  mounted(){
     this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
#cart{
  height: 100vh;
  position: relative;
}
.scroll{
   /* height: 100%; */
    position: absolute;
    top: 44px; 
    bottom: 93px;
     left: 0;
    right: 0;  
  overflow: hidden;

}
.cart-bottom{
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>