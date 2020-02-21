<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg"/>
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" class="titles-item" 
            :class="{active:currentIndex === index}"
            @click="titleClick(index)"> {{item}} </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar' 
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','详情','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
        this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
  computed:{
   
  }
  }
</script>
<style scoped>


.titles{
  display: flex;
  font-size: 13px;
}
.titles-item{
  flex: 1;
}
.active{
  color: deeppink;
}
.left{
  margin-top: 5px;
}
</style>