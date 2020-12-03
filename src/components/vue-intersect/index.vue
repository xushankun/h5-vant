<template>
    <div class="intersect-wrap">
        <div class="fixed-tips">
            <div class="tips-item" v-for="(item,index) in showList"
                 :class="{'active':index === 0}"
                 :key="index">
                <span>序号：{{item.id}}</span>
                <span>时间：{{item.v.time}}</span>
            </div>
        </div>
        <div class="iw-list">
            <div v-for="(item,index) in 50" :key="index">
                <div data-type="task" :data-id="item" class="item-block">{{item}}-测试元素
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'intersect',
			data () {
				return {
                  showList: [],
				}
			},
       created() {
          this.initElementSensor()
       },
       methods:{
          initElementSensor() {
             let _that = this
             this.$nextTick(() => {
                const obserRef = new IntersectionObserver((entries) => {
                   entries.forEach(v => {
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
                })
                setTimeout(() => {
                   const items = document.querySelectorAll('.item-block') || []
                   items.forEach((item) => obserRef.observe(item))
                }, 0)
             })
          },
         // 根据某个字段进行排序
          compare(property){
			return function(a,b){
				var value1 = a[property];
				var value2 = b[property];
				return value1 - value2;
			}
		}
       },
      watch:{
			// 'showList':function(newVal){
			// 	console.log(newVal)
            // }
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
            .item-block {
                height: 80px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid red;
                padding: 10px 15px;
            }
        }
    }
</style>
