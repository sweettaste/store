<template>
  <div class="tab-control">
    <ul>
      <li v-for="(item,index) in titles" :id="index" @click="itemClick(index)"><span :class="{active:index === activeindex}">{{item}}</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'TabControl',
  props:{
    titles:{
        type:Array,
        reqire:true,
        default(){
          return []
        }
    }
  },
  data(){
    return{
      activeindex:0
    }
  },
  methods:{
    itemClick(index){
      console.log("---")
      this.activeindex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
  .tab-control ul{
    display: flex;
    width: 100%;
    background: #fff;
  }
.tab-control ul li {
    list-style: none;
    text-align: center;
    flex: 1;
    justify-content: space-around;
    color: black;
    font-size: 20px;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
 .active{
   border-bottom: 2px solid deeppink;
   color: deeppink;
 }
 .tab-control ul li span{
   padding: 5px;
 }
</style>