<template>
  <div class="intersect-wrap">
    <div class="fixed-tips">
      <div class="tips-item" v-for="(item,index) in showList"
           :class="{'active':index === 0}"
           :key="index">
        <span>序号：{{item.id}}</span>
        <!--                <span>时间：{{item.v.time}}</span>-->
      </div>
    </div>
    <div class="iw-list">
      <div v-for="(item,index) in list" :key="index">
        <div data-type="task" :data-id="item" class="item-block">{{item}}-测试元素
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
export default {
  name: 'intersect',
  data () {
    return {
      list:[],
      //需要展示的id的集合
      showList: [],
    }
  },
  created() {

  },
  mounted() {
    for(let i=0;i<100;i++){
      this.list.push(i)
    }
    this.initElementSensor()
  },
  methods:{
    initElementSensor() {
      let _that = this
      let _root = document.querySelector('.iw-list')
      this.$nextTick(() => {
        // IntersectionObserver 可以自动"观察"元素是否可见
        // var io = new IntersectionObserver(callback, option);
        const obserRef = new IntersectionObserver((entries) => {
          // entries：root视口内的所有子元素集合
          entries.forEach(v => {
            console.log(v)
            const { id } = v.target.dataset
            let isIncludes = _that.showList.filter(_item=> _item.id === id).length
            if(v.isIntersecting && !isIncludes){
              // 已显示不存在则push
              _that.showList.push({id,v:v})
            }
            if(!v.isIntersecting && isIncludes){
              // 移除未显示   已存在列表里的
              _that.showList = _that.showList.filter(_item=> _item.id !== id)
            }
            // 按照指定元素排序
            _that.showList = _that.showList.sort(this.compare('id'))
          })
        }, {
          root: _root,
          // rootMargin: "40px 0px"
        })
        setTimeout(() => {

        }, 0)
        const items = document.querySelectorAll('.item-block') || []
        // --------------实例的observe方法可以指定观察哪个 DOM 节点 start------------------------。
        // // 开始观察
        // io.observe(document.getElementById('example'));
        // // 停止观察
        // io.unobserve(element);
        // // 关闭观察器
        // io.disconnect();
        // --------------实例的observe方法可以指定观察哪个 DOM 节点 end------------------------。
        items.forEach((item) => obserRef.observe(item))
      })
    },
    // 根据某个字段进行排序
    compare(property){
      return function(a,b){
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.intersect-wrap {
  position: relative;
  .fixed-tips {
    width: 80%;
    background: burlywood;
    padding: 10px 15px;
    border-radius: 4px;
    position: fixed;
    top: 20px;
    left: 10%;
    z-index: 99;
    color: #fff;
    .tips-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active {
        color: red;
      }
    }
  }
  .iw-list {
    overflow-y: scroll;
    height: 100vh;
    border: 1px solid red;
    .item-block {
      height: 100px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 10px 15px;
    }
  }
}
</style>
