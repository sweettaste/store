<template>
  <div class="item" @click="itemClick">
    <slot name="image" v-if="!isactive"></slot>
    <slot name="active-image" v-else></slot>
  <div :style="active">
      <slot name="text"></slot>
  </div>
  </div>
</template>
<script>
export default {
  name:'TabbarItem',
  props:{
    path:String
  },
  data(){
    return {
      // isactive:true
    }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    active(){
      return this.isactive ? {color:'deeppink'}:{}
    }
  },
  methods:{
    itemClick(event){
      // console.log(this.path)
      // console.log(this.$route)
      this.$router.push(this.path)
    }
  }
}
</script>
<style>
  .item{
    flex: 1;
    text-align: center;
  }
  .item img{
    width: 25px;
    height: 25px;
  }
  /* .active{
    color:deeppink;
  } */
</style>