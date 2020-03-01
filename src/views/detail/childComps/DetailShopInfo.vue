<template>
  <div class="shop-info">
    <div class="shop-img">
      <img :src="shop.logo"/>
      <span>{{shop.name}}</span>
    </div>
  <div class="shop-middle">
    <div class="info-sells">
      <div class="all-sells font-weight">
        {{shop.sells | sellCountFilter}}
      </div>
      <div class="sells-text">
        总销量
      </div>
    </div>
    <div class="all-info">
      <div class="all-count font-weight">
        {{shop.goodsCount}}
      </div>
      <div class="sells-text">
        全部宝贝
      </div>
    </div>
      <ul class="score-ul">
        <li v-for="(item,index) in shop.score" :key="index">
          <ul class="ul-item">
            <li> <span>{{item.name}}</span></li>
            <li> <span class="score1" :class="{'score2':item.isBetter}">{{item.score}}</span></li>
            <li class="better1" :class="{'better2':item.isBetter}"><span class="better1" :class="{'better2':item.isBetter}">{{item.isBetter ? '高':'低'}}</span></li>
          </ul>
        </li>
      </ul>
  </div>
  <div class="shop">
   <div class="shop-text"> 进店逛逛</div>
  </div>
  </div>
</template>
<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCountFilter(value){
      // console.log(value);
      if(value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>
<style scoped>
.shop-info{
  padding: 25px 8px;
}
/* .shop-img {
background: pink;  
} */
.shop-img img{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.shop-img span{
  position: relative;
  bottom: 22px;
  margin-left: 10px;
  color: #333;
}
.shop-middle{
  margin-top: 12px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
   display: flex;
   color: #333;
}
.font-weight{
 /* font-weight: 200; */
 font-size: 18px;
}
.sells-text{
  margin-top: 8px;
  font-size: 14px;
}
li{
  list-style: none;

}
.all-info{
  border-right: 1px solid #ededed;
  padding-right: 15px;
}
.score-ul{
  font-size: 14px;
  text-align: left;
}
.score-ul span{
  margin-left: 10px;
}
.score1{
  color: #5ea732;
}
.score2{
  color: #f13e3a;
}
.better1 span{
  background: #5ea732;

  color: #fff;
  text-align: center;

}
.better2 span{
  background: #f13e3a;
}
.ul-item{
  display: flex;
  justify-content: space-between;
}
.ul-item li{
  margin-top: 6px;
}
.shop{
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
.shop-text{
  background: #f2f5f8;
  width: 150px;
  height: 30px;
  /* text-align: center; */
  line-height: 30px;
  border-radius: 10px;
  display: inline-block;
}
</style>