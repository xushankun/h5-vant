<template>
    <div class="details-wrap">
        <h1>详情ID:{{$route.query.id}}</h1>
        <div class="item-block"><img src="https://picsum.photos/id/10/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/11/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/12/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/13/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/14/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/15/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/16/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/17/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/18/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/19/480/360"></div>
        <div class="item-block"><img src="https://picsum.photos/id/20/480/360"></div>
    </div>
</template>

<script>
    export default {
      mounted() {
        console.log('详情ID:',this.$route.query.id)
      }
    }
</script>

<style lang="less" scoped>
.details-wrap {
  box-sizing: border-box;
  min-height: 100vh;
    padding: 15px;
    width: 100%;
    .item-block {
        position: sticky;
        top: 0;
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
