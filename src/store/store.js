import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createPersistedPlugin from './plugins/createPersistedPlugin.js'
const persistedPlugin = createPersistedPlugin()
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        user
    },
    plugins:[persistedPlugin]
})
