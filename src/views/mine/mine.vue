<template>
    <div class="mine">
        <div>当前状态：{{isLogin ? '已登录' : '未登录'}}</div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal"
                        class="lr-btn"
                        @click="signOutF">退出</van-button>
        </div>
        <div class="mt10 mb10">问答列表</div>
        <div class="mb10" v-for="(item,index) in qaData.list" :key="index">
            <div>1.{{item.title}}</div>
            <div>  {{item.content}}</div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "mine",
        data(){
            return {
                qaData:[]
            }
        },
        mounted(){
            this.qaList()
        },
        methods:{
            ...mapActions(["signOut"]),
            signOutF(){
                this.signOut().then(()=>{
                    this.$toast('已退出')
                    this.$router.push("/login");
                })
            },
            qaList() {
                let obj = {
                    pageIndex:1,
                    pageSize:10,
                    questionType:1,
                    categoryId:1,
                    status:0
                }
                this.api.qaList(obj).then(res=>{
                    console.log(obj)
                    if (res.code === 0) {
                        this.qaData = res.data
                        console.log(res.data)
                    }
                })
            }
        },
        computed: {
            ...mapGetters(["isLogin"])
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