<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
     <scroll class="scroll" 
            :probe-type="3" 
            ref="scroll" >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :goods-params="goodsParams"/>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'
export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topImages:null,
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{},
      commentInfo:{}
    }
  },
  created(){
      // itemScroll();
    //保存传过来的id
   this.iid =  this.$route.params.iid
   //根据id请求数据详情
   getDetail(this.iid).then(res => {
     console.log(res)
     const data =  res.data.result;
     //获取详情轮播图
     this.topImages =data.itemInfo.topImages
     //存储商品信息
     this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
     //存储店铺信息
     this.shop = new Shop(data.shopInfo);
     //存储商品的详细数据
     this.detailInfo = data.detailInfo;
     //获取尺码参数
     this.goodsParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //获取用户评论信息,首先判断用户评论数是否为0
     if(data.rate.cRate !== 0){
       //获取第一条评论
       this.commentInfo = data.rate.list[0];
     }
   }).catch(err => {
     console.log(err)
   })
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>
<style scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background: #fff;

}
.detail-nav{
  /* position: relative;
  z-index: 10; */
  background: #fff;
}
.scroll{
 height: calc(100% - 44px); 
 overflow: hidden; 
    /* position: absolute;
    top: 44px; */
    /* bottom: 49px; */
    /* left: 0;
    right: 0;  */
}
</style>