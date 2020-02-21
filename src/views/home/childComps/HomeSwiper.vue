<template>
    <swiper :options="swiperOption" ref="mySwiper"  v-if="banners.length > 1" class="swiper"> 
    <swiper-slide v-for="(item,index) in banners" :index="index" class="swiper-slide">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad"/>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>

    </swiper>
</template>
<script>
//引入vue轮播组件
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name:'HomeSwiper',
  components:{
     swiper,
     swiperSlide
  },
  data(){
    return {
      swiperOption:{
        loop:true,
        pagination:{
          el:'.swiper-pagination',
          type:'bullets',
          clickable:true,
          dynamicBullets:false
        },
        speed:800,
        autoplay:{
          delay:2000,
          stopOnLastSlide:false,
          //用户交互
          disableOnInteraction:false
        },
        effect:'slide',
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev'
        }
      },
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      },
      reqire:true
    }
  },
  methods:{
    //监听图片加载
      imgLoad(){
        if(! this.isLoad ){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }

    },
    computed:{
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
    //  console.log( this.$refs.mySwiper)
      // console.log(this.swiper)
    //  循环吧
     //  this.swiper.slideTo(3,1000,false)
    }
  
}
</script>
<style scoped>
  .swiper{
    width: 100%;
    margin-top: 44px;
  }
.swiper-slide img{
  width: 100%
}
</style>