<template>
  <div id="app">
<!--    前进加载后退缓存-->
    <navigation>
      <router-view/>
    </navigation>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
  @import './assets/css/base.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }
</style>
