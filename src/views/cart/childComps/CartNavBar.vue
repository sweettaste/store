<template>
  <div class="cart-navbar">
    <nav-bar >
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
export default {
  name:'CartNavBar',
  components:{
    NavBar
  },
  computed:{
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  }
}
</script>
<style scoped>
.cart-navbar{
  background: var(--color-tint);
  color: #fff;
}
</style>