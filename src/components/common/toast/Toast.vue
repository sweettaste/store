<template>
  <div class="toast" v-show="isShow">
    <div>{{meassge}}</div>
  </div>
</template>
<script>
export default {
  name:'Toast',
  props:{
    // meassge:{
    //   type:String,
    //   default:'0000'
    // },
    // show:{
    //   type:Boolean,
    //   default:false
    // }
  },
  data(){
    return{
      meassge:'',
      isShow:false
    }
  },
  methods:{
    show(meassge , duration ){
      this.isShow = true;
      this.meassge = meassge;
      setTimeout(() => {
        this.isShow = false;
        this.meassge = '';
      },duration)
    }
  }
}
</script>
<style scoped>
.toast{
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  background: rgba(0, 0, 0, .7)
}
</style>