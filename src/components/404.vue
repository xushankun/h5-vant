<template>
    <div class="error-page">
        <div>这是一个404哦(*^▽^*)</div>
        <div class="mt10">
            <router-link class="link-sty" to="/" v-if="isLogin">返回首页</router-link>
            <router-link class="link-sty" to="/login" v-else>去登录</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "errorPage",
        computed: {
            ...mapGetters(["isLogin"])
        }
    }
</script>

<style lang="less" scoped>
.error-page {
    padding: 0 30px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>