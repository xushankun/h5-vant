<template>
	<div id="app">
		<!--    前进加载后退缓存-->
		<vue-page-stack>
			<router-view ></router-view>
		</vue-page-stack>

<!--		<router-view :key="key"></router-view>-->
	</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		// key() {
		// 	return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
		// },
	},
	mounted() {
		let a = 1
		if (a) {
			return a + 1
		}
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
	height: 100vh;
	box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>
