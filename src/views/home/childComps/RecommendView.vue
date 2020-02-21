<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend{
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  display: flex;
  text-align: center;
  justify-content: space-around;
 
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 6px;
  

}
.recommend-title{
  text-align: center;
  font-size: 12px;
}
</style>