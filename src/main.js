import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import Vant from 'vant'
// 这里因为使用cdn样式，所以不需要再次引入
// import 'vant/lib/index.css';
import router from './router'
import './assets/iconfont/iconfont.css'
import store from './store'
import API from './lib/API'
import 'intersection-observer'
// 前进加载后退缓存
import VuePageStack from 'vue-page-stack';
Vue.use(VuePageStack, { router });

// 国际化
import { Locale } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
Locale.use('en-US', enUS)

Vue.use(Vant)
Vue.prototype.api = API

console.log(process.env.NODE_ENV)
import VConsole from 'vconsole'
new VConsole()

// ---------------------------全局组件--------------------------------
//在这引入全局组件【可通过js调用】
import './components/tipBlock/index'
// --------------------------路由拦截start-----------------------
router.beforeEach((to, from, next) => {
	// 路由同步页面title
	if (to.meta.title) {
		document.title = to.meta.title
	}
	if (to.matched.length === 0) {
		next({ path: '/404' })
		return
	}
	if (to.meta.noLogin) {
		// 不需要登录正常跳转
		next()
	} else if (!store.state.user.isLogin) {
		// 登录而未登录跳转login
		next({ path: '/login' })
	} else {
		next()
	}
})
// --------------------------路由拦截 end------------------------

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
