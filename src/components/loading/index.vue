<template>
  <div class="all-loading-wrap">
    <loadingOne />
    <loadingTwo />
  </div>
</template>

<script>
import loadingOne from "components/loading/loadingOne";
import loadingTwo from "components/loading/loadingTwo";
export default {
name: "allLoading",
  components:{
    loadingOne,
    loadingTwo
  }
}
</script>

<style lang="less" scoped>

</style>
