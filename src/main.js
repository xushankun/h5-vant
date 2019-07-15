import Vue from 'vue'
import App from './App.vue'
import  'amfe-flexible';
import Vant from 'vant';
// 这里因为使用cdn样式，所以不需要再次引入
// import 'vant/lib/index.css';
import router from './router'
import './assets/iconfont/iconfont.css'
import store from './store/store'
import API from './lib/API'
import { config } from './lib/config'
Vue.use(Vant);
Vue.prototype.api = API;

// --------------------------路由拦截start-----------------------
router.beforeEach((to, from, next) => {
    // 路由同步页面title
    if(to.meta.title) {
        document.title = to.meta.title
    }
    if(to.matched.length === 0) {
        console.log('404')
        next({path:'/404'})
        return
    }
    if (to.meta.noLogin) {
        // 不需要登录清除token
        config.headers.token = ''
        next();
    } else {
        //需要登录而未登录跳转login,   需要登录而已登录设置token
        if (!store.state.user.isLogin) {
            next({path: '/login'});
        }  else {
            let loginData = store.state.user.loginData
            if(loginData){
                config.headers.token = loginData.token;
            }else {
                config.headers.token = ''
            }
            next()
        }
    }
    next();
})
// --------------------------路由拦截 end------------------------



Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
