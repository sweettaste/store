<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
     <detail-button-bar @addCart="addCart"></detail-button-bar>
     <scroll class="scroll" 
             :probe-type="3" 
             ref="scroll"
             @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" ></detail-goods-info>
      <detail-param-info :goods-params="goodsParams" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
   <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
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
import GoodsList from 'components/content/goods/GoodsList'
import DetailButtonBar from './childComps/DetailButtonBar'
import BackTop from 'components/content/backtop/BackTop'
import { debounce } from 'common/util'
import { itemListenerMixin } from 'common/mixin'
import { mapActions } from 'vuex'
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'
export default {
  name:'Detail',
  mixins:[itemListenerMixin],
  data(){
    return {
      iid:null,
      topImages:null,
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false
    }
  },
  created(){
      // itemScroll();
    //保存传过来的id
   this.iid =  this.$route.params.iid
   //根据id请求数据详情
   getDetail(this.iid).then(res => {
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
   });
   //获取推荐信息数据
       getRecommend().then(res => {
          this.recommends = res.data.data.list
       });
       //获取组件距离顶部的距离
       this.getThemeTopY = debounce(() => {
         //每次执行先赋空值
         this.themeTopYs = [];
         this.themeTopYs.push(0);
         this.themeTopYs.push(this.$refs.params.$el.offsetTop);
         this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
         this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopYs);
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
    DetailCommentInfo,
    GoodsList,
    DetailButtonBar,
    BackTop

  },
  methods:{
    ...mapActions({
        addToCart:'addCart'
    }),
    //监听图片加载完成刷新
    imageLoad(){
      console.log('imageload');
      this.refresh();
      //获取组件局顶部高度
      this.getThemeTopY()
    },
    //点击title
    titleClick(index){
      console.log('titleClick');
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
    },
    //页面滚动位置
    contentScroll( position ){
      // console.log(position)
      let positionY = -position.y;
      if(positionY < 1000){
        this.isShowBackTop = false;
      }else{
        this.isShowBackTop = true;
      }
      let length = this.themeTopYs.length;
      // console.log(length)
      for(let i = 0; i < length ; i++ ){
      //  console.log(positionY,this.themeTopYs[i],this.themeTopYs[i+1])
        if((i<length -1 && positionY >= this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) || (i === length-1 && positionY>=this.themeTopYs[i])){
            //标题跟着滚动位置变换
          this.currentIndex = i;
       //   console.log(i);
          // //获取nav组件,更改下标
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //加入到购物车
    addCart(){
      //获取购物车需要的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //将商品添加到购物车li
      //this.$store.commit('addCart',product)
      //提交到actions 并且返回一个promise对象
      this.addToCart(product).then(res => {
        //显示提示框
        this.$toast.show(res , 2000 )
      })
    }
  },
  mounted(){
    // let refresh = debounce(this.$refs.scroll.refresh,100);
    // this.itemImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('loadImg',this.itemImgListener)
  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  }
  // deactivated(){
  //   console.log('deactivated')
  // }
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
 height: calc(100% - 44px - 49px); 
 overflow: hidden; 
    /* position: absolute;
    top: 44px; */
    /* bottom: 49px; */
    /* left: 0;
    right: 0;  */
}
</style>