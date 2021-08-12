const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',
    publicPath: process.env.VUE_APP_PUBLIC_URL,
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtorem({
                rootValue: 37.5,
                propList: ['*'],
                // 该项仅在使用 Circle 组件时需要
                // 原因参见 https://github.com/youzan/vant/issues/1948
                selectorBlackList: [
                    '.px-'      // 过滤掉.px-开头的class，不进行rem转换
                ]
              })
            ]
          }
        }
    },
    // // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)。
    // lintOnSave: true,
    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,
    // 配置 webpack-dev-server 行为。
    devServer: {
        host: '0.0.0.0',    // 本机ip
        port:'8086',
        https: false,
        hotOnly: false,
        // historyApiFallback: true,
        proxy: {                            // 跨域访问地址变为：http://IP地址：8089/api/  +  具体业务
            "/api": {
                target: process.env.VUE_APP_BASEURL,    // 接口baseUrl   【参考链接：https://blog.csdn.net/u012302552/article/details/81742907】
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        }
    },
    configureWebpack:{
        // cdn部署
        externals: {
            'vue': 'Vue',       // 模块名称：模块名      使用import 模块名 from '模块名称'
            'vant': 'vant'
        },
        resolve: {
            alias: {
                'assets': path.resolve(__dirname, './src/assets'),
                'components': path.resolve(__dirname, './src/components'),
                'views': path.resolve(__dirname, './src/views'),
            }
        }
    }
};
