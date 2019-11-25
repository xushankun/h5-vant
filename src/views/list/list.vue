<template>
    <div>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
            <van-cell
                    v-for="item in list"
                    :key="item"
                    :title="item">
                <div @click="$router.push({
                    path:'/details',
                    query:{
                        id:item
                    }
                })">详情</div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "list",
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        created(){
            console.log('cteated')
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 60) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>

<style scoped>

</style>
