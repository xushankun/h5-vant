import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 关于meta
// title => 页面title
// noLogin:true 当前路由不需要登录
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/mine'},
        {
            path: '/login',
            name: 'login',
            meta:{title:'登录',noLogin:true},
            component: () => import(/* webpackChunkName: "login" */ './views/login/login.vue')
        },
        {
            path: '/404',
            name: '404',
            meta:{title:'访问路径无效',noLogin:true},
            component: () => import(/* webpackChunkName: "404" */ './components/404.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            meta:{title:'我的'},
            component: () => import(/* webpackChunkName: "mine" */ './views/mine/mine.vue')
        },
        {
            path: '/cropper',
            name: 'cropper',
            meta:{title:'上传图片并裁剪'},
            component: () => import(/* webpackChunkName: "cropper" */ './components/cropper.vue')
        },
        {
            path: '/pdf',
            name: 'pdf',
            meta:{title:'vue-pdf'},
            component: () => import(/* webpackChunkName: "pdf" */ './components/pdf.vue')
        },
        {
            path: '/sign',
            name: 'sign',
            meta:{title:'签字板'},
            component: () => import(/* webpackChunkName: "sign" */ './components/sign/sign.vue')
        },
        {
            path: '/canvas',
            name: 'canvas',
            meta:{title:'canvas'},
            component: () => import(/* webpackChunkName: "canvas" */ './components/sign/Canvas.vue')
        },
        {
            path: '/doodle',
            name: 'doodle',
            meta:{title:'css-doodle'},
            component: () => import(/* webpackChunkName: "cssDoodle" */ './components/css-doodle/cssDoodle.vue')
        }
    ]
})
