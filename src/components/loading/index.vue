<template>
  <div class="all-loading-wrap">
    <loadingOne />
    <loadingTwo />
    <loadingThree />
  </div>
</template>

<script>
import loadingOne from "components/loading/loadingOne";
import loadingTwo from "components/loading/loadingTwo";
import loadingThree from "components/loading/loadingThree";
export default {
name: "allLoading",
  components:{
    loadingOne,
    loadingTwo,
    loadingThree
  }
}
</script>

<style lang="less" scoped>

</style>
