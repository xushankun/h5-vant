<template>
	<div id="app">
		<!--    前进加载后退缓存-->
    <vue-page-stack v-if="startRenderCont">
      <router-view :key="$route.fullPath"></router-view>
    </vue-page-stack>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'app',
  data(){
    return {
      transitionName: 'forward',
      startRenderCont: false
    }
  },
  computed: {
    ...mapGetters(['Authorization'])
  },
  mounted() {
    // -------------------页面渲染前的接口请求操作start-------------------
    if (this.token) {
      if (!this.startRenderCont) {
        this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          loadingType: 'spinner',
          message: '正在加载'
        })
        // 接口请求:

      }
    } else {
      this.startRenderCont = true
    }
    // -------------------页面渲染前的接口请求操作end-------------------
  },
  watch: {
    $route: function (to) {
      if (to.params['stack-key-dir'] === 'forward') {
        // 前进
        this.transitionName = 'forward'
        window.scroll(0, 0)
      } else {
        // 后退
        this.transitionName = 'back'
      }
    }
  }
}
</script>

<style lang="less">
@import './assets/css/base.less';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
  position: relative;
}
</style>
