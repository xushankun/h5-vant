<template>
<div class="loading-wrap">
  <div class="item-tag" v-for="(item,index) in 12" :class="`item-${item}`" :key="index"></div>
</div>
</template>

<script>
export default {
  name: "loadingOne"
}
</script>

<style lang="less" scoped>
.loading-wrap {
  position: relative;
  width: 50px;
  height: 50px;
  outline: 1px solid red;
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .item-tag {
    width: 4px;
    height: 12px;
    background: #000;
    position: absolute;
    left: 40%;
    top: 40%;
    //animation: loading 1.2s infinite;
  }
  // 定义less循环函数
  .loop(@i) when (@i > 0) {
    .loop((@i - 1));    // 递归调用自身
    .item-@{i} {
      transform: rotate(30deg * @i) translate(0,15px);  // @i从1开始到12，度数从30deg开始依次递增360
      animation: loading 1.2s linear 0.1s*@i infinite;  // @i从1开始到12，延时从0.1开始依次递增1.2s
    }
  }
  // 调用循环函数
  .loop(12);
}
</style>
