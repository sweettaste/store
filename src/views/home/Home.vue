<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control   v-show="isTabFixed"
                    :titles="titles" 
                    class="tab-control" 
                    @tabClick="tabClick"
                    ref="TabControl1"
                  ></tab-control>
    <scroll class="scroll" 
            ref="scroll" 
            :probe-type="3"
            @scroll="contentScroll" 
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control :titles="titles" 
                    @tabClick="tabClick"
                    ref="TabControl2"
                    v-show="!isTabFixed"
                    ></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/Feature'
import TabControl from 'components/content/maintabbar/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
import { itemListenerMixin } from 'common/mixin'
import { debounce } from 'common/util.js'

export default {
  name:'Home',
  mixins:[itemListenerMixin],
  data(){
  return{
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop': {page:1,list:[]},
      'new': {page:1,list:[]},
      'sell': {page:1,list:[]},
    },
    currentType:'pop',
    isShowBackTop:false,
    tabOffsetTop : 0,
    isTabFixed:false,
    saveY:0
  }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
// 回到上次离开页面时的位置
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
  },
  //记录离开页面时滚动的位置
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY();
    //取消全局事件的监听
    this.$bus.$off('loadImg',this.itemImageListener)
   
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
   this.getHomeMultidata(),
   this.getHomeGoods('pop'),
   this.getHomeGoods('new'),
   this.getHomeGoods('sell')
  
  },
  mounted(){
    
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
     getHomeGoods(type){
       const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        // console.log( res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        //完成加载更多，不写完成默认只能上拉一次
        this.$refs.scroll.finishPullUp();
      })
     },
     //点击切换首页的推荐
     tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'; break;
          case 1:
            this.currentType = 'new'; break;
          case 2:
            this.currentType = 'sell';break;
        }
        this.$refs.TabControl1.activeindex = index;
        this.$refs.TabControl2.activeindex = index;
     },
     //回到顶部
     backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
     },
     //监听滚动区域
     contentScroll(position){
       //如果滚动区域到达1000就显示回到顶部图标
      this.isShowBackTop = (- position.y ) > 1000;
      //tabcontrol附在顶部
      
      this.isTabFixed = (- position.y) > this.tabOffsetTop + 44;
      // console.log(this.isTabFixed,position,this.tabOffsetTop)
      },
     loadMore(){
       this.getHomeGoods(this.currentType);
       //加载之后手动刷新 重新计算一下高度
        this.$refs.scroll.refresh()
     },
    //  监听图片加载
    swiperImageLoad(){
       this.tabOffsetTop =  this.$refs.TabControl2.$el.offsetTop
    }

  }
  
}
</script>
<style scoped>
  #home{
    
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color:var(--color-tint);
    color: aliceblue;
    position: relative;
    /* position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 20; */
  }
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 5;
  } */
  .scroll{
    height: calc(100% - 93px);
    overflow: hidden; 
    /* padding-top: 44px; */
    /* margin-top: 44px; */
    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  }
  .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>