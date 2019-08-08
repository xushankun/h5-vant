import Vue from 'vue'
import App from './App.vue'
import  'amfe-flexible';
import Vant from 'vant';
// 这里因为使用cdn样式，所以不需要再次引入
// import 'vant/lib/index.css';
import router from './router'
import './assets/iconfont/iconfont.css'
import store from './store'
import API from './lib/API'
import Qs from 'qs'
Vue.use(Vant);
Vue.prototype.api = API;

import VConsole from 'vconsole'
let vConsole = new VConsole()
// --------------------------路由拦截start-----------------------
router.beforeEach((to, from, next) => {
    // 重定向获取到微信code
    console.log('-----------------------------------------OK')
    console.log(window.location.search)
    let _search = window.location.search.replace('?', '')
    _search = Qs.parse(_search);
    console.log(_search)
    if(_search) {
        console.log(_search.code)
    }
    // 路由同步页面title
    if(to.meta.title) {
        document.title = to.meta.title
    }
    if(to.matched.length === 0) {
        next({path:'/404'})
        return
    }
    if (to.meta.noLogin) {
        // 不需要登录正常跳转
        next();
    } else if(!store.state.user.isLogin){
        // 登录而未登录跳转login
        next({path: '/login'});
    } else {
        next();
    }
})
// --------------------------路由拦截 end------------------------



Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
