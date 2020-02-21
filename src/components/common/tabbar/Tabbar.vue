<template>
    <div class="bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name:'Tabbar'
}
</script>
<style>
  .bar{
    padding-top: 3px;
    padding-bottom: 3px;
    border-top: 0.5px gray solid;
    display: flex;
    background: #ededed;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>