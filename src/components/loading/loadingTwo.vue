<template>
  <div class="loading-wrap">
    <!--自定义 loading-->
    <div class="k-loading" style="color: #1989fa">
      <i :class="`item-${item}`" v-for="item in 12" :key="item"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "loadingTwo"
}
</script>
<style lang="less" scoped>
.k-loading {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  width: 30px;
  max-width: 100%;
  height: 30px;
  max-height: 100%;
  animation: k-rotate .8s linear infinite;
  animation-timing-function: steps(12);   // 把动画分成12份
  i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::before {
      display: block;
      width: 2px;
      height: 25%;
      margin: 0 auto;
      background-color: currentColor;
      border-radius: 40%;
      content: ' ';
    }
  }
  // 定义less循环函数
  .kLoop(@i) when (@i > 0) {
    .kLoop((@i - 1));    // 递归调用自身
    .item-@{i} {
      transform: rotate(30deg * @i);  // 一圈为【间隔30deg】  从30deg到360deg
      opacity: 1-0.0625*(@i - 1);   // 透明度【间隔0.0625】  从1开始，第二个开始依次减去0.0625
    }
  }
  // 调用循环函数
  .kLoop(12);
  // 关键帧
  @keyframes k-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
