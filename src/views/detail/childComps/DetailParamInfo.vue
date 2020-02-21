<template>
   <div class="param-info" v-if="Object.keys(goodsParams).length">
    <table v-for="(table, index) in goodsParams.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey" class="info-tr">
        <td v-for="(td, indez) in tr" :key="indez" >{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in goodsParams.infos">
        <td class="info-param-key ">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailParamInfo',
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
.param-info{
  padding: 15px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table{
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr{
  height: 43px;
  line-height: 43px;
}
.param-info table tr td{
  border-bottom: 1px solid rgba(0,0,0,.1);
  /* text-align: center; */
}
.info-param-key{
  width: 95px;
  overflow: hidden;
  /* background: pink; */
}
.info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-value {
    color: #eb4868;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
   .info-img img {
    width: 100%;
  }
  .size-td{
    text-align: center;
  }
</style>