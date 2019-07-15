<template>
    <div class="login-wrap">
<!--        <img class="logo" src="@/assets/images/login/login-logo.png" alt="">-->
        <div class="form-block">
            <div class="form-input">
                <van-field v-model="name"  clearable placeholder="用户名"/>
            </div>
            <van-button type="primary" round size="normal"
                        :disabled="isDisabled"
                        :loading="isDisabled"
                        loading-text="登录中..."
                        class="lr-btn login-btn" @click="login">登录</van-button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "login",
        data() {
            return {
                isEye: false,      // 是否显示密码
                isDisabled:false,    // 按钮是否可点击状态
                name:'shankun'
            }
        },
        mounted(){

        },
        methods: {
            ...mapActions(["signIn"]),
            // 登录
            login() {
                if(this.isDisabled) {
                    return
                }
                if (!this.name) {
                    this.$toast('name不能为空')
                    return
                }
                this.isDisabled = true
                this.api.getUserData({userName:this.name}).then(res=>{
                    this.$toast.success('登录成功');
                    this.signIn(res.data).then(()=>{
                        this.$router.push("/");
                    })
                    this.isDisabled = false
                })
            }
        }
    }
</script>
<style lang="less">
    /*修改vant组件失败时【改不了】，可写在下方clss里【当前组件.login-wrap】，因为这里没有scoped【全局样式】*/
    .login-wrap {
        .form-input .van-field__control {
            /*padding-right: 15px;*/
        }
    }
</style>
<!--scoped  意思：样式只在当前组件生效-->
<style lang="less" scoped>
    .login-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
            width: 179px;
            margin-top: 34px;
        }
        .form-block {
            width: 100%;
            margin-top: 50px;
            padding: 0 30px;
            .form-input {
                margin-top: 35px;
                border-bottom: 1px solid #eaeaea;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex: auto;
                .van-field {
                    padding: 0;
                    height: 32px;
                    line-height: 32px;
                    font-size: 12px;
                    color: #333;
                }
                .eye-icon {
                    width: 40px;
                    font-size: 15px;
                    color: #14a9fb;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    top: -1px;
                    &.active {
                        color: #999;
                    }
                }
            }
            .login-btn {
                width: 100%;
                margin-top: 85px;
            }
        }
    }
</style>
