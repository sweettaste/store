<template>
  <div class="item">
    <div class="item-select">
      <check-button :is-check="product.checkd" @click.native="checkItem"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image"/>
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
       <div class="item-desc">{{product.desc}}</div>
       <div class="info-bottom">
         <div class="item-price left"> ￥{{product.price}} </div>
         <div class="item-count right">x{{product.count}}</div>
       </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name:'CartListItem',
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      // isCheck:false
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checkItem(){
      this.product.checkd = !this.product.checkd;
    }
  }
}
</script>
<style scoped>
.item{
  height: 20%;
  width: 100%;
  display: flex;
  padding:10px  4px ;
  border-bottom: 1px solid rgb(206, 205, 205);
  /* margin:8px  */
}
.item-select{
  /* width: 4%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 5px ; */
}
.item-img{
  margin-left: 4px;
  width: 23%;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
}
.item-img img{
   width: 100%;
   height: 100%;
}
.item-info{
  text-align: left;
  width: 70%;
  padding-left: 10px;
}
.item-title{
  font-size: 16px;
  color: #333;
  overflow: hidden;
  line-clamp: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc{
  margin-top: 10px;
   font-size: 13px;
  color: grey;
  overflow: hidden;
  line-clamp: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-bottom{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top:13px;
}
.item-price{
  color: deeppink;
}
</style>