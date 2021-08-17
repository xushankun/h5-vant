<template>
    <div class="details-wrap">
<!--      <van-address-list-->
<!--          v-model="chosenAddressId"-->
<!--          :list="list"-->
<!--          disabled-text="The following address is out of range"-->
<!--          default-tag-text="Default"-->
<!--          @add="onAdd"-->
<!--          @edit="onEdit"-->
<!--      />-->

        <h1>详情ID:{{$route.query.id}}</h1>
        <div class="item-block"><img src="https://picsum.photos/id/10/480/360"></div>
<!--        <div class="item-block"><img src="https://picsum.photos/id/11/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/12/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/13/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/14/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/15/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/16/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/17/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/18/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/19/480/360"></div>-->
<!--        <div class="item-block"><img src="https://picsum.photos/id/20/480/360"></div>-->
        <!--底部按钮-->
        <div class="form-bottom safe-area-inset-bottom">
          <div class="fb-cont">底部按钮</div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          chosenAddressId:1,
          list:[
            {
              id: '1',
              name: 'John Snow',
              tel: '13000000000',
              address: 'Somewhere',
              isDefault: true,
            },
            {
              id: '2',
              name: 'Ned Stark',
              tel: '1310000000',
              address: 'Somewhere',
            },
          ]
        }
      },
        created() {
            console.log('详情ID:',this.$route.query.id)
        },
      methods:{
        onAdd(){
          this.$toast('Add')
        },
        onEdit(item, index){
          this.$toast('Edit:' + index)
        },
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
        //position: sticky;
        //top: 0;
        width: 100%;
        img {
            width: 100%;
        }
    }
  .form-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
    .fb-cont {
      width: 100%;
      height: 44px;
      background: #14a9fb;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
