import Vue from 'vue'
import index from './index.vue'

// 这里可以用Vue.extend()创建子类，但是我没打算注册为组件，就直接`new Vue`
const tipBlock = new Vue(index)
tipBlock.$mount(document.createElement('div'))
document.body.appendChild(tipBlock.$el)

Vue.prototype.$tipBlock = tipBlock

// 导出该组件
export default tipBlock
