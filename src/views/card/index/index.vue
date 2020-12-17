<template>
	<div style="width: 100%;height: 100%;padding:10px;">
		<button @click="btnGoZhihu" type="primary">模仿知乎</button>
		<button @click="btnGoTantan" type="primary" style="margin-top: 10px;">模仿探探</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			btnGoZhihu(){
				this.$router.push({
					path:"/demozhihu"
				})
			},
			btnGoTantan(){
        this.$router.push({
          path:"/demotantan"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
  div{
		box-sizing: border-box;
	}

</style>
