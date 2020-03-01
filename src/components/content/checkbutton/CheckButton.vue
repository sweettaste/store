<template>
  <div class="check-button" :class="{active:isCheck}" >
    <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>
<script>
export default {
  name:'CheckButton',
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  },
  methods:{
   
  }
}
</script>
<style scoped>
.check-button{
  border:1px solid #aaa;
  border-radius: 50%;
  width: 17px;
  height: 17px;

}
.check-button img{
  width: 100%;
  height: 100%;
}
.active{
   /* border:2px solid #aaa; */
   background: deeppink;
}
</style>