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
          <span>{{commentInfo.created}}</span> 
          <span>{{commentInfo.style}}</span>
        </p>
        <img src=""/>
      </div>
    </div>
  </div>
</template>
<script>
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
  margin-bottom: 10px;
}
.comment-more {
  font-size: 14px;

}
.user-info {
  margin-bottom: 10px;
  margin-right: 10px;
  position: relative;
}
.user-info img{
  width: 70px;
  height: 70px;
}
.user-info span{
  margin-left: 10px;
  position: absolute;
  top: 40%;
  left: 30%;
}
.comment-content{
  
}
.content{

}
.time-size{
  
}
</style>