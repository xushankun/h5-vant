<template>
    <div class="css-doodle-warp">
        <css-doodle grid="5">
            :doodle {
            @grid: 5 / 8em;
            --s: 0;
            grid-gap: 1px;
            }
            :doodle(:hover) {
            --s: 1;
            }
            --offset: calc(var(--s) * 100%);
            transform: translateY(var(--offset));
            will-change: transform;
            transition: .5s cubic-bezier(.175, .885, .32, 1.275);
            transition-delay: @rand(500ms);
            transform-origin: 50% 50%;
            background: #60569e;
        </css-doodle>
    </div>
</template>

<script>
    import 'css-doodle';
    export default {
        name: "cssDoodleDemo"
    }
</script>

<style lang="less" scoped>
.css-doodle-warp {
    width: 100vw;
    height: 100vh;
    .css-doodle {
        width: 100px;
        height: 100px;
    }
}
</style>
