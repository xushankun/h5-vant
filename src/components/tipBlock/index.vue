<template>
  <transition name="slide-fade">
    <div class="tb-wrap" v-if="isShow">
      <div class="tb-cont-wrap">
        <div class="tcw-bg" @click="hide"></div>
        <div class="tb-cont">
          <div>自定义全局组件</div>
          <div>【JS调用】</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'tipBlock',
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    show(){
      this.isShow = true
    },
    hide(){
      this.isShow = false
    },
  }
}
</script>

<style lang="less" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .15s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
.tb-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .tb-cont-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .tcw-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.75);
      z-index: 1;
    }
    .tb-cont {
      position: relative;
      width: 80%;
      height: 50%;
      background: #fff;
      border-radius: 4px;
      z-index: 10;
    }
  }
}
</style>
