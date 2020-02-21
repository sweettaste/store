<template>
  <div class="main-tabbar">
     <tabbar >
      <tabbar-item path="/home">
        <img slot="image" src="~assets/img/tabbar/home.svg"/>
        <img slot="active-image" src="~assets/img/tabbar/home_active.svg"/>
        <div slot="text">首页</div>
      </tabbar-item>
      <tabbar-item path="/cate">
        <img slot="image" src="~assets/img/tabbar/category.svg"/>
         <img slot="active-image" src="~assets/img/tabbar/category_active.svg"/>>
        <div slot="text">关于</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="image" src="~assets/img/tabbar/profile.svg"/>
         <img slot="active-image" src="~assets/img/tabbar/profile_active.svg"/>>
        <div slot="text">我的</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="image" src="~assets/img/tabbar/shopcart.svg"/>
         <img slot="active-image" src="~assets/img/tabbar/shopcart_active.svg"/>>
        <div slot="text">购物车</div>
      </tabbar-item>
    </tabbar>
  </div>

</template>
<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue';
import TabbarItem from 'components/common/tabbar/TabbarItem.vue';
export default {
  name:'MainTabBar',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
  .main-tabbar{
    z-index: 20;
  }
</style>