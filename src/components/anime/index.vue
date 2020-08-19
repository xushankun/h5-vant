<template>
    <article>
        <div class="blue item1"></div>
        <div class="green item2"></div>
        <div class="blue item3"></div>
        <div class="green item4"></div>
        <div class="blue item5"></div>
        <div class="green item6"></div>
        <div class="blue item7"></div>
        <div class="green item8"></div>
        <div class="text-demo item9">测试</div>
    </article>

</template>

<script>
    import anime  from  'animejs'

    export default {
        name: "anime",
        mounted() {
            var myAnimation = anime({
                targets: ['.item1', '.item2','.item3','.item4','.item5','.item6','.item7','.item8','.item9','.text-demo'],
                translateX: 270,
                delay: anime.stagger(100), // 每个元素的延迟增加100毫秒。
                loop: true,
            });
        }
    }
</script>

<style lang="less" scoped>
    article {
        & > div {
            width: 50px;
            height: 50px;
        }
    }
.blue {
    background: blue;
}
.green {
    background: green;
}
</style>
