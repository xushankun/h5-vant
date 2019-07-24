import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createPersistedPlugin from './plugins/createPersistedPlugin.js'      // 持久化存储store到
const persistedPlugin = createPersistedPlugin()
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',          //非生产模式下开启严格模式【监测不合规的状态变更】
    modules:{
        user
    },
    plugins:[persistedPlugin]
})
