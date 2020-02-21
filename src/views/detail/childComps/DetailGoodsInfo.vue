<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length">
    <ul class="info-ul">
      <li class="left"></li>
      <li class="">  {{detailInfo.detailImage[0].key}} </li>
      <li class="right"></li>
    </ul>
    <!-- <div class="info-key">
    
    </div> -->
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad"/>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      imagesLength:0,
      counter:0
    }
  },
  methods:{
    imgLoad(){
      if( ++ this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
.desc{
  /* padding: 15px 0; */
  font-size: 14px;
}
 .info-ul{
   width: 100%;
   list-style: none;
   font-size: 14px;
   color: #333;
   display: flex;
   justify-content: center;
   background: #f0efec;
   margin-bottom: 9px;
   padding-top: 5px;
   padding-bottom: 5px;
   
 }
 .right{
   width: 35px;
   height: 1px;
   background: gray;
   position: relative;
  left: 6px;;
   top: 10px;
 }
 .left{
   width: 35px;
   height: 1px;
   background: gray;
   position: relative;
   top: 10px;
   right: 6px;;
 }
 .goods-info{
   width: 100%;
   border-bottom: 4px solid #ededed;
   padding-bottom: 11px;
 }
 .info-list img{
   width: 100%;
 }
 </style>
