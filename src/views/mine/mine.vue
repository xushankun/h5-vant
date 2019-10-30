<template>
    <div class="mine">
        <div>当前状态：{{isLogin ? '已登录' : '未登录'}}</div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal"
                        class="lr-btn"
                        @click="signOutF">退出</van-button>
        </div>
        <div class="mt10">
            <img :src="loginData.avatar_url">
            <div>用户名：{{loginData.loginname}}</div>
            <div>创建时间：{{loginData.create_at}}</div>
        </div>
<!--        图片裁剪-->
        <cropper classname="cropper"
                 ref="cropper"
                 :src="img"
                 :stencil-props="{aspectRatio: 10/10}"
                @change="change"
        ></cropper>
        <img class="croppered-img" :src="imageData" alt="">
    </div>

</template>

<script>
    import { Cropper } from 'vue-advanced-cropper'
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "mine",
        data(){
            return {
                userData:{},
                imageData:null,
                img: 'https://images.unsplash.com/photo-1557097688-37778354ae11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600'
            }
        },
        components: {
            Cropper
        },
        mounted(){
            this.$refs.cropper.setCoordinates((coordinates, imageSize) => ({
                width: imageSize.width,
                height: imageSize.width,
                left:0,
                top:0
            }))
        },
        methods:{
            ...mapActions(["signOut"]),
            signOutF(){
                this.signOut().then(()=>{
                    this.$toast('已退出')
                    this.$router.push("/login");
                })
            },
            change({coordinates, canvas}) {
                // console.log(canvas)
                this.imageData = canvas.toDataURL()
            }
        },
        computed: {
            ...mapGetters(["isLogin","loginData"])
        }
    }
</script>

<style lang="less" scoped>
.mine {
    padding: 30px;
    box-sizing: border-box;
    .signOut-block {
        .lr-btn {
            width: 100%;
            margin-top: 30px;
        }
    }
    .cropper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100vh;
        background: #ddd;
        box-sizing: border-box;
    }
    .croppered-img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        z-index: 1000;
    }
}
</style>
