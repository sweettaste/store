<template>
  <div class="goods" v-if="Object.keys(goods).length">
    <goods-list-item v-for="item in  goods" :goods-item="item"></goods-list-item>
    <!-- <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item> -->
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
    components:{
      GoodsListItem
    }
}
</script>
<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>