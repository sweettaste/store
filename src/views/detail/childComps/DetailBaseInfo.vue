<template>
  <div class="base-info" v-if="Object.keys(goods).length">
   <div class="center">
    <div class="title">{{goods.title}}</div>
      <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
        <ul class="info-services">
           <!-- <li>{{goods.services.length}}</li>-->
          <li>{{goods.columns[0]}}</li>
          <li>{{goods.columns[1]}}</li> 
          <li>{{goods.services[goods.services.length-1].name}}</li>
        </ul>
        <ul class="info-post">
          <li v-for="(item,index) in goods.services.length-1" :key="index">
            <img :src="goods.services[index].icon"/>
            <span>{{goods.services[index].name}}</span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created(){
    // console.log(this.goods)
  },
  // beforeupdate(){
  //   console.log(goods)
  // }
}
</script>
<style scoped>
.base-info{
  width: 100%;
  margin-top: 15px;
  border-bottom: 5px solid #f2f5f8;
}
.center{
  margin: auto;
  width: 90%;
}
.title{
  text-indent: 5px;
  color: #222;
}
.price{
  margin-top: 10px;
}
.new-price{
  font-size: 24px;
  color: deeppink;
}
.old-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
  color: gray;
}
.discount{
  font-size: 11px;
  color: #fff;
  background: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  padding: 2px;
  top: -4px;
}
.info-services{
  list-style: none;
  display: flex;
  justify-content:space-between;
  color: gray;
  font-size: 12px;
  margin-top: 15px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 9px;
}
.info-post{
  height: 60px;
  line-height: 60px;
  list-style: none;
  display: flex;
  justify-content:space-between;
  color: #333;
  font-size: 13px;
  /* margin-top: 15px;
  padding-bottom: 17px; */
}
.info-post img{
  width: 14px;
  height: 14px;
  position: relative;
  top:2px;
  margin-right: 1px;
}
</style>