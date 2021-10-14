<template>
<div class="loading-wrap">
  <div id="e"></div>
</div>
</template>

<script>
export default {
  name: "loadingThree",
  data(){
    return {
      flag:true,
      left:0,
      rafId: null
    }
  },
  mounted() {
    let ele = document.getElementById("e");
    ele.onmouseover = function (e) {
      console.log(e)
      window.cancelAnimationFrame(this.rafId)
    }
    // ele.onmouseleave = function () {
    //   this.rafId = window.requestAnimationFrame(this.init);
    // }
    this.init()
  },
  methods:{
    init(){
      //requestAnimationFrame效果
      this.render();
      this.rafId = window.requestAnimationFrame(this.init);
    },
    render(){
      let e = document.getElementById("e");
      if(this.flag === true){
        if(this.left>=200){
          this.flag = false
        }
        e.style.left = ` ${this.left++}px`
      }else{
        if(this.left<=0){
          this.flag = true
        }
        e.style.left = ` ${this.left--}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loading-wrap {
  position: relative;
  #e{
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    zoom: 1;
  }
}
</style>
