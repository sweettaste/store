<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in list" 
                    :product="item"
                    :key="index"></cart-list-item>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name:'CartList',
  computed:{
    ...mapGetters({
      list:'cartList'
    })
  },
  components:{
    CartListItem
  }
}
</script>
<style scoped>
.cart-list{
  height: 100%;
}
/* .scroll{
  height:calc(100% - 44px -47px);
  overflow: hidden;
} */
</style>