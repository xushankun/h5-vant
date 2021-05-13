<template>
<div class="te-wrap" ref="teWrap">
  <div class="text-hover" ref="teHover" v-if="isEllipsis" :style="hoverClass">{{teText}}</div>
  <div class="text-cont" ref="teCont" :style="textClass">
    {{teText}}
     <i class="text-width" ref="teWidth"></i>
  </div>
</div>
</template>

<script>
export default {
  name: "textEllipsis",
  props:{
    teText:{
      type: String,
      default: ''
    },
    textClass:{
      type: Object,
      default: null
    },
    hoverClass:{
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isEllipsis: false
    }
  },
  mounted() {
    this.handleShow()
    let _that = this
    window.onresize = function(){
      _that.handleShow()
    }
  },
  methods:{
    handleShow(){
      // 组件最外层wrap宽度
      let boxWrapW = this.$refs.teWrap
      // 文本内容
      let box = this.$refs.teCont
      // 文本内容宽度【内容所占长度】
      let boxW = this.$refs.teWidth
      let _w = boxW.offsetWidth + 1
      if(_w >= boxWrapW.offsetWidth) {
        _w = boxWrapW.offsetWidth
      }
      box.style.width = _w + 'px'
      if (box.scrollWidth > box.offsetWidth) {
        this.isEllipsis = true
      } else {
        this.isEllipsis = false
      }
      this.$emit('isEllipsis',this.isEllipsis)
    }
  }
}
</script>

<style scoped>
.te-wrap {
  display: inline-block;
  width: inherit;
  position: relative;
}
.text-cont {
  display: inline-block;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  position: relative;
}
.text-width {
  display: inline-block;
  width: 100%;
  height: 0;
  position: absolute;
  left: 0;
  right: 0;
}
.text-hover {
  width: inherit;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 4px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,.3);
  box-sizing: border-box;
}
.te-wrap:hover .text-hover {
  display: block;
  transform: translateY(-100%)
}
</style>
