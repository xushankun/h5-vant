<template>
    <div class="mine">
        <div>当前状态：{{isLogin ? '已登录' : '未登录'}}</div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal"
                        class="lr-btn"
                        @click="signOutF">退出</van-button>
        </div>
        <div class="mt10 mb10">内容</div>
        <div>
            <img :src="loginData.avatar_url">
            <div>用户名：{{loginData.loginname}}</div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "mine",
        data(){
            return {
                userData:{}
            }
        },
        mounted(){

        },
        methods:{
            ...mapActions(["signOut"]),
            signOutF(){
                this.signOut().then(()=>{
                    this.$toast('已退出')
                    this.$router.push("/login");
                })
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
    .signOut-block {
        .lr-btn {
            width: 100%;
            margin-top: 30px;
        }
    }
}
</style>
