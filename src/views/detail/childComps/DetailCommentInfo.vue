<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length">
    <div class="info-center">
      <div class="comment-user">
       <p class="comment"> 用户评价</p>
        <div class="comment-more">
           <a @click.prevent=""><span>更多</span></a> 
        </div>
      </div>
      <div class="user-info">
        <img :src="commentInfo.user.avatar"/>
        <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-content">
        <p class="content">{{commentInfo.content}}</p>
        <p class="time-size">
          <span>{{commentInfo.created | time}}</span> 
          <span>{{commentInfo.style}}</span>
        </p>
        <img src=""/>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/util.js'
export default {
  name:'DetailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    },
    mounted(){
      console.log(this.commentInfo);
    }
  },
  filters:{
    time(oldValue){
      //将时间戳转成data
      const date = new Date(oldValue * 1000);
      // let year = date.getFullYear();
      // let month = date.getMonth()+1;
      // let day = date.getDate();
      // let hour = date.getHours();
      // let minute = date.getMinutes();
      // let second = date.getSeconds();
      // console.log(year+'-'+month+'-'+day)
      // //将date进行格式化
      // console.log(FormData(date))
      formatDate(date,'yyyy-MM-dd hh:mm');

    }
  }
}
</script>
<style scoped>
.comment-info{
  width: 100%;
  padding-top: 12px;
}
.info-center{
  margin: 0 auto;
  width: 94%;
}
.comment-user{
  font-size: 19px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 7px;
  border-bottom: 3px solid #ededed;
}
.comment-more {
  font-size: 14px;

}
.user-info {
  margin-bottom: 10px;
  margin-right: 10px;
  position: relative;
  
}
.user-name{
  position: relative;
  top: 40%;
  left: 5;
}
.user-info img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-info span{
  margin-left: 10px;
  position: absolute;
  top: 35%;
  left: 5;
}
.comment-content{
  font-size: 13px;
  
}
.content{
  margin-bottom: 10px;
    color: #333;
}
.time-size span{
  color: grey;
  margin-right: 10px;
}

</style>