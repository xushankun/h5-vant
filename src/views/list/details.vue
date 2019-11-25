<template>
    <div class="details-wrap">详情ID:{{$route.query.id}}</div>
</template>

<script>
    export default {
        created() {
            console.log('详情ID:',this.$route.query.id)
        }
    }
</script>

<style lang="less" scoped>
.details-wrap {
    padding: 15px;
}
</style>
