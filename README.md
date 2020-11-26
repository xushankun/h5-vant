# h5-vant

#### 项目介绍
基于vue-cli3.0、vant的H5前端开发

#### 功能【各种H5开发小技巧集合】
rem自适应【包括设置**单独class不用rem**，或单组件**固定fontsize**】
- 上传图片并裁剪
- PDF-demo
- 签字板
- input弹出数字键盘
- css-doodle使用
- 直接打开手机相机**拍照**


#### 软件架构
关于图片裁剪【vue-advanced-cropper】
https://norserium.github.io/vue-advanced-cropper/tutorials/recipes.html#getting-result


#### 安装依赖
```
cnpm install
```

#### 运行开发环境
```
npm run serve
```

#### 构建打包到dist文件夹
```
npm run build
```

#### 代码检查【保证统一代码分格与错误避免】
```
npm run lint
```

#### 参与贡献

#### .prettierrc
```
// https://juejin.cn/post/6844903917524877325
   // 代码换行长度
    "printWidth": 200,
    // 代码缩进空格数
    "tabWidth": 2,
    // 使用制表符缩进而不是空格缩进
    "useTabs": true,
    // 代码结尾是否加分号
    "semi": false,
    // 是否使用单引号
    "singleQuote": true,
    // 对象大括号内两边是否加空格 { a:0 }
    "bracketSpacing": true,
    // 单个参数的箭头函数不加括号 x => x
    "arrowParens": "avoid"
```
#### .eslintrc.json
```
"rules":{
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": "error",
    // 禁止出现重复的 case 标签
    "no-duplicate-case": "error",
    // 禁止出现空语句块,允许catch出现空语句
    "no-empty": ["error", {"allowEmptyCatch": true}],
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign":"error",
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": "error",
    // 禁止不必要的分号
    "no-extra-semi": "error",
    // 强制所有控制语句使用一致的括号风格
    "curly": "error"

}
```
