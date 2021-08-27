<template>
	<div id="app">
		<!--    前进加载后退缓存-->
<!--		<vue-page-stack>-->
<!--			<router-view ></router-view>-->
<!--		</vue-page-stack>-->


    <transition :name="transitionName">
      <vue-page-stack>
        <router-view class="router-view-c" />
      </vue-page-stack>
    </transition>

<!--		<router-view :key="key"></router-view>-->
	</div>
</template>

<script>
export default {
	name: 'app',
  data(){
	  return {
      transitionName: 'forward',
    }
  },
	computed: {
		// key() {
		// 	return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
		// },
	},
	mounted() {
    window.addEventListener('scroll', function() {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      console.log(scrollTop)
      if (clientHeight + scrollTop >= scrollHeight) {
        // 检测到滚动至页面底部，进行后续操作
        // ...
        console.log('检测滚动到了页面底部')
      }
    }, false);
	},
	created() {
		// bind event
		// this.$navigation.on('forward', (to, from) => {
		//   console.log('forward to', to, 'from ', from)
		// })
		// this.$navigation.on('back', (to, from) => {
		//   console.log('back to', to, 'from ', from)
		// })
		// this.$navigation.on('replace', (to, from) => {
		//   console.log('replace to', to, 'from ', from)
		// })
		// this.$navigation.on('refresh', (to, from) => {
		//   console.log('refresh to', to, 'from ', from)
		// })
		// this.$navigation.on('reset', () => {
		//   console.log('reset')
		// })
		// // and use [once, off] methods
		// this.$navigation.once('forward', () => {
		//   console.log('appear once')
		// })
		// const off = () => {
		//   console.log('will not appear')
		// }
		// this.$navigation.on('forward', off)
		// this.$navigation.off('forward', off)
	},
  watch: {
    '$route': function (to) {
      console.log(to.params)
      if (to.params['stack-key-dir'] === 'forward') {
        this.transitionName = 'forward';
      } else {
        this.transitionName = 'back';
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

.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
}
.forward-enter,
.back-leave-active {
  opacity: 0.5;
  transform: translateX(100%);
}
.forward-leave-active,
.back-enter {
  opacity: 0.5;
  transform: translateX(-100%);
}

</style>
