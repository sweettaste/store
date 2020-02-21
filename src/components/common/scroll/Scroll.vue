<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      //监听滚动
      probeType:this.probeType,
      click:true,
      //允许监听上啦加载
      pullUpLoad:this.pullUpLoad
    });
    //监听滚动
    this.scroll.on('scroll',(position) => {
      // console.log(position)
      this.$emit('scroll',position)
    });
    //监听上拉加载更多
   if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        console.log('监听上拉加载更多')
      this.$emit('pullingUp')
    })
   }
  },
  methods:{
    scrollTo(x,y,time = 300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
     this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      console.log('刷新')
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      console.log(this.scroll);
      return this.scroll ? this.scroll.y : 0
    }
  }

}
</script>
<style scoped>

</style>